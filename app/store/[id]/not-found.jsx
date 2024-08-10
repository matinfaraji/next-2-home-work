import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import not from "../../../public/not-found.png";
function notFound() {
  return (
    <Container>
      <Stack alignItems="center">
        <Image src={not} width={500} height={500} />
        <Typography variant="h1">not found page for store </Typography>
      </Stack>
    </Container>
  );
}

export default notFound;
