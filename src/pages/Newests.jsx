import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import PostService from "../services/postService";

export default function Newests() {
  const [newPosts, setNewPosts] = useState([]);

  useEffect(() => {
    let postService = new PostService();
    postService.getPost().then((result) => setNewPosts(result.data));
  });

  return (
    <div>
      {newPosts.map((newPost) => (
        <Card
          image={newPost.titlePicUrl}
          header={newPost.title}
          meta={newPost.category.name}
          description={newPost.content}
        />
      ))}
    </div>
  );
}
