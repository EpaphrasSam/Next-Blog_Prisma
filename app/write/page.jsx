"use client";
import "react-quill/dist/quill.snow.css";

import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaPlus, FaImage, FaExternalLinkAlt, FaVideo } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Loader from "../../components/Loader";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../utils/firebase";
import { createPost, getCategories } from "../../services";
import { generateSlug } from "../../lib/posts";
import useSWR from "swr";
import Modal from "../../components/Modal";
import { RotatingLines } from "react-loader-spinner";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    // eslint-disable-next-line react/display-name
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  },
  { ssr: false }
);

const Write = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    excerpt: "",
    selectedCategory: "",
    file: null,
    value: "",
    media: "",
  });

  const { status } = useSession();
  const router = useRouter();
  const quillRef = useRef(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: categories, isLoading } = useSWR("categories", getCategories);

  const isDisabled =
    formValues.value.length === 0 ||
    formValues.title.length === 0 ||
    formValues.media.length === 0 ||
    formValues.selectedCategory === "";

  useEffect(() => {
    const upload = () => {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      input.onchange = async () => {
        const file = input.files ? input.files[0] : null;

        if (file) {
          setIsUploadingImage(true);
          const name = new Date().getTime() + file.name;
          const storageRef = ref(storage, name);
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on(
            "state_changed",
            () => {},
            (error) => {
              console.error("Error uploading image: ", error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setFormValues({ ...formValues, media: downloadURL });
                setIsUploadingImage(false);
              });
            }
          );
        }
      };
    };

    formValues.file && upload();
  }, [formValues.file]);

  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files ? input.files[0] : null;

      if (file) {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          () => {},
          (error) => {
            console.error("Error uploading image: ", error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              const quillObj = quillRef?.current?.getEditor();
              const range = quillObj?.getSelection();

              quillObj.editor.insertEmbed(range.index, "image", downloadURL);
            });
          }
        );
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["link"],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["image", "video"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
        clipboard: {
          matchVisual: false,
        },
      },
    }),
    []
  );

  const handleSubmit = async () => {
    try {
      setIsCreatingPost(true);
      const post = {
        title: formValues.title,
        desc: formValues.value,
        img: formValues.media,
        slug: generateSlug(formValues.title),
        catSlug: formValues.selectedCategory,
        excerpt: formValues.excerpt,
      };

      try {
        const res = await createPost(post);
        if (res.message === "Success") {
          setFormValues({
            title: "",
            excerpt: "",
            selectedCategory: "",
            file: null,
            value: "",
            media: "",
          });
          setIsCreatingPost(false);
          setIsModalOpen(true);
        }
      } catch (error) {
        throw new Error(error);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="relative">
      {/* {status === "loading" && <Loader />} */}
      <div className="mb-4">
        <label className="block mb-2 text-gray-600 font-bold">Category:</label>

        <select
          value={formValues.selectedCategory}
          onChange={(e) =>
            setFormValues({ ...formValues, selectedCategory: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded capitalize"
        >
          <option value="" disabled>
            Select a category
          </option>
          {isLoading ? (
            <option>Loading...</option>
          ) : (
            categories.map((category) => (
              <option
                className="capitalize"
                key={category.id}
                value={category.title}
              >
                {category.title}
              </option>
            ))
          )}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-600 font-bold">Excerpt:</label>
        <textarea
          value={formValues.excerpt}
          onChange={(e) =>
            setFormValues({ ...formValues, excerpt: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
          placeholder="Enter an excerpt..."
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-600 font-bold">Title:</label>
        <input
          type="text"
          placeholder="Title"
          className="p-2 mb-4 w-full text-xl border border-gray-300 rounded"
          onChange={(e) =>
            setFormValues({ ...formValues, title: e.target.value })
          }
          value={formValues.title}
        />
      </div>
      <div className="flex flex-col gap-5 min-h-[300px] relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-full border border-solid border-gray-600 bg-transparent flex items-center justify-center cursor-pointer"
        >
          <FaPlus size={16} />
        </button>
        {open && (
          <div className="flex gap-5 absolute z-50 w-full left-12">
            <input
              disabled={formValues.media.length !== 0}
              type="file"
              accept="image/*"
              id="image"
              onChange={(e) =>
                setFormValues({ ...formValues, file: e.target.files[0] })
              }
              className="hidden"
            />
            <button
              className={`w-9 h-9 rounded-full border border-solid border-${
                formValues.media.length === 0 ? "[#1a8917]" : "black"
              } bg-transparent flex items-center justify-center cursor-pointer`}
            >
              <label htmlFor="image">
                <FaImage
                  size={16}
                  color={`${
                    formValues.media.length === 0
                  } ?  '#1a8917' : 'gray'`}
                  style={{ cursor: "pointer" }}
                />
              </label>
            </button>
          </div>
        )}

        {formValues.media.length === 0 && isUploadingImage ? (
          <div className="flex items-center justify-center">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={true}
            />
          </div>
        ) : (
          formValues.media.length > 0 && (
            <img
              src={formValues.media}
              alt="Uploaded Image"
              className="max-h-96 max-w-full mx-auto"
            />
          )
        )}

        <ReactQuill
          theme="snow"
          value={formValues.value}
          onChange={(value) => setFormValues({ ...formValues, value })}
          modules={modules}
          placeholder="Tell your story..."
          className="rounded-lg w-full"
          forwardedRef={quillRef}
        />
      </div>
      <div className="flex justify-end mt-4">
        {isCreatingPost ? (
          <div className="mr-10">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={true}
            />
          </div>
        ) : (
          <button
            disabled={isDisabled}
            className={`border-none py-2 px-5 flex items-center justify-center bg-[#1a8917] ${
              isDisabled
                ? "opacity-[0.5] cursor-not-allowed"
                : "hover:opacity-80"
            } text-white rounded-[20px] cursor-pointer`}
            onClick={handleSubmit}
          >
            Publish
          </button>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setOpen(false);
          router.push("/");
        }}
        title="Post Created Successfully!"
        body={<p>Your post has been created successfully.</p>}
        buttonText="OK"
      />
    </div>
  );
};

export default Write;
