import React from "react";
import "./post.css";
import Badge from "@material-ui/core/Badge";
import imageUrl from "../../assets/ajay.jpg";

import { Link } from "react-router-dom";
import { Favorite, Comment } from "@material-ui/icons";
export default function Post({ postData }) {
  const { title, description, user, likes, comments } = postData;
  return (
    <div className="post">
      <div className="avatar">
        <img src={user.avatar} alt="ajay" />
        <Link to="/user/ajay" className="post-username">
          {user.name}
        </Link>
      </div>
      <div className="details">
        <Link to="/postId" className="post-title">
          {title}
        </Link>
        <p className="description">{description}</p>
        <div className="social">
          <Badge badgeContent={likes} color="primary">
            <Favorite color="secondary" />
          </Badge>
          <Badge badgeContent={comments} color="primary">
            <Comment color="secondary" />
          </Badge>
          {/* <Share /> */}
        </div>{" "}
      </div>
    </div>
  );
}
