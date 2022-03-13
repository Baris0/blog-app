import React from "react";
import BlogCard from "../layouts/BlogCard";
import Categories from "../layouts/Categories";

export default function Home() {
  return (
    <div>
      <Categories />
      <BlogCard />
    </div>
  );
}
