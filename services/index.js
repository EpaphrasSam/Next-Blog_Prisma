import axios from "../utils/axios";

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

export const getPosts = async (page, cat) => {
  try {
    const response = await axios.get(`api/posts?page=${page}&cat=${cat || ""}`);

    if (response.status !== 200) {
      throw new Error("Failed");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUniquePost = async (slug) => {
  try {
    const response = await axios.get(`api/posts/${slug}`);

    if (response.status !== 200) {
      throw new Error("Failed");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getComments = async () => {};
