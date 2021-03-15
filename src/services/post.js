import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
});

export const getPostList = () => {
  return axiosInstance.get("/posts");
};

export const newPost = ({ title, body, userId }) => {
  return axiosInstance.post("/posts", { title, body, userId });
};
