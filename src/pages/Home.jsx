import React, { Component } from "react";
import BlogCard from "../layouts/BlogCard";
import Categories from "../layouts/Categories";

export default class Home extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Categories />
        <BlogCard />
      </div>
    );
  }
}
