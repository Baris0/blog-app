import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Grid, GridColumn, GridRow } from "semantic-ui-react";
import PostService from "../services/postService"

export default function BlogCard() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let postService = new PostService();
    postService.getPost().then((result) => setPosts(result.data));

  }, [])

  return (
    <div>
      <Grid>
        <GridRow columns={2}>
          <GridColumn width={3}>
            {posts.map((post) => (
                <Card.Group key={post.id}>
                <Link to="/blogText">
                  <Card
                    image={post.titlePicUrl}
                    header={post.title}
                    meta={post.category.name}
                    description={post.content}
                  />
                </Link>
              </Card.Group>
            ))}
                    
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
