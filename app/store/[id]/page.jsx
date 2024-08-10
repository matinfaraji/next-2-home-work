import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import storeItems from "../../../items.json";
import { notFound } from "next/navigation";
export default function page({ params }) {
  const itemId =  parseInt(params.id) 
  const filteredItems =  storeItems.filter((item) => item.id === itemId);
    if (filteredItems.length === 0) {
      notFound();
    }
  
  return (
    <>
      <Grid container spacing={3}>
        {filteredItems.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.imgUrl}
                alt={item.name}
                sx={{ width: "100%", objectFit: "cover" }}
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
                <Button size="small">-</Button>
                <Button size="small" color="error">
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
