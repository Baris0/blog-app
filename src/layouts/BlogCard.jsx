import React from "react";
import { Link } from "react-router-dom";
import { Card, Grid, GridColumn, GridRow } from "semantic-ui-react";

export default function BlogCard() {
  return (
    <div>
      <Grid>
        <GridRow columns={2}>
          <GridColumn width={3}>
            <Card.Group>
              <Link to="/blogText">
              <Card
                header="Blog konusu basligi"
                meta="Kategori"
                description="Blogla ilgili text"
              />
              </Link>
            </Card.Group>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
