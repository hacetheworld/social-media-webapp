import React from "react";
import "./HomePage.css";
import Posts from "../../components/posts/posts";
import SinglePost from "../../components/singlePost/singlePost.component";
import { Route, Switch } from "react-router-dom";
export default function HomePage() {
  return (
    <React.Fragment>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/:post" component={SinglePost} />
        </Switch>
      </div>
    </React.Fragment>
  );
}
