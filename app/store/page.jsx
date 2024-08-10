import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import storeItems from '../../../next-2-home-work/items.json'

export default function page() {
  return (
    <>
    <Grid container spacing={3}>
      {storeItems.map((item) => (
        <Grid item xs={12} md={6} lg={4} key={item.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={item.imgUrl}
              alt={item.name}
              sx={{ width: '100%', objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${item.price.toFixed(2)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">+ Add To Cart</Button>
              
              <Button size="small" color="error"> - Remove</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </>
  );
}
