import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import PostService from "../services/postService";

export default function Trends() {
  const [trendPosts, setTrendPosts] = useState([]);

  useEffect(() => {
    let postService = new PostService();
    postService.getTrendPost().then((result) => setTrendPosts(result.data));
  });

  return (
    <div>
      {trendPosts.map((trendPost) => (
        <Card
          image={trendPost.titlePicUrl}
          header={trendPost.title}
          meta={trendPost.category.name}
          description={trendPost.content}
        />
      ))}
    </div>
  );
}
