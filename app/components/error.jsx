
"use client";
import { Button, Container, Typography } from "@mui/material";

function Error({ error, reset }) {
  return (
    <Container>
      <Typography variant="h1">{error.message}</Typography>
      <Button variant="contained" onClick={() => reset()}>
        Reset
      </Button>
    </Container>
  );
}

export default Error;
