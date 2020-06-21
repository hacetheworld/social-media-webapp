import React from "react";
import "./posts.css";
import { PostsData } from "./posts-data";
import Post from "../post/post.component";
import BasicPagination from "../pagination/pagination.component";
export default function Posts() {
  return (
    <div className="posts">
      {PostsData.map((post, id) => (
        <Post key={id} postData={post} />
      ))}
      <BasicPagination />
    </div>
  );
}
