import { useState, useEffect } from "react";

import { getPostList } from "../../services/post";

const usePostList = () => {
  const [postList, setPost] = useState([]);
  useEffect(() => {
    getPostList()
      .then(({ data }) => {
        setPost([...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return [postList];
};

const PostList = () => {
  const [postList] = usePostList();
  console.log(postList);
  return <div />;
};

export default PostList;
