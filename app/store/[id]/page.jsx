import { Typography } from "@mui/material";
import React from "react";

export default function page({ params }) {
  return (
    <Typography variant="h1" className="mt-8 text-center">
      Product Details for ID: {params.id}
    </Typography>
  );
}
