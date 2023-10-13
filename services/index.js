import axios from "../utils/axios";
import { notFound } from "next/navigation";

export const getCategories = async () => {
  try {
    const response = await axios.get("api/categories", {
      headers: {
        "Cache-Control": "no-store",
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPosts = async (page, cat, popular, random) => {
  try {
    const response = await axios.get(
      `api/posts?page=${page || 1}&cat=${cat || ""}&popular=${
        popular || false
      }&random=${random || false}`
    );

    if (response.data.error) {
      notFound();
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUniquePost = async (slug) => {
  try {
    const response = await axios.get(`api/posts/${slug}`);

    if (response.data.error) {
      notFound();
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (desc, slug) => {
  try {
    const response = await axios.post("api/comments", { desc, slug });

    if (response.status !== 200) {
      throw new Error("Failed");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (data) => {
  try {
    const response = await axios.post("api/posts", data);

    if (response.status !== 200) {
      throw new Error("Failed");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};
