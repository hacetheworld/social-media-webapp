import React from "react";
import Post from "../post/post.component";
import Comments from "../comments/comments.component";
import CommentForm from "../comment-form/commentForm.component";
export default function SinglePost() {
  return (
    <div className="posts">
      <Post
        postData={{
          title: "Post one ",
          user: {
            name: "Ajay",
            avatar: "https://via.placeholder.com/150.png/",
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis ad numquam fuga aliquam expedita, alias debitis quidem",
          likes: 3,
          comments: 14,
        }}
      />
      <CommentForm />
      <Comments />
    </div>
  );
}
