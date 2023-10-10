import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import ReactModal from "react-modal";

const Modal = ({ isOpen, onClose, title, body, buttonText }) => {
  const { theme } = useTheme();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: `${theme !== "light" ? "#0f172a" : "white"}`,
      color: `${theme === "light" ? "black" : "white"}`,
      border: "none",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      width: "90%",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: "1000",
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Custom Modal"
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl font-semibold mb-4">{title}</p>
        <div>{body}</div>
        <button
          onClick={onClose}
          className="bg-[#1a8917] my-2 flex text-center px-4 py-2 rounded-lg hover:bg-green-600"
        >
          {buttonText}
        </button>
      </div>
    </ReactModal>
  );
};

export default Modal;
