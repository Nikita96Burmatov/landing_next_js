/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";
import itemData from "@/data/imageData";

import React from "react";

import Masonry from "@mui/lab/Masonry";
import { Box, Paper } from "@mui/material";
import { Typography } from "@material-tailwind/react";

const heights = [50, 40, 60, 70];

export default function Gallery() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginY: 5,
        }}
        className="mx-auto max-w-screen-lg"
      >
        <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }} spacing={12}>
          {itemData.map((item, index) => (
            <Paper
              key={index}
              sx={{ Height: heights[index] }}
              className="shadow-2xl"
            >
              <a href="#">
                <img
                  className="h-full w-auto object-cover"
                  src={item.img}
                  alt={item.title}
                />
              </a>
              <Typography className="text-white text-center my-3 font-serif">
                <a href="#">{item.title}</a>
              </Typography>
              <Typography className="text-cyan-500 text-center -my-3 font-serif ">
                <a
                  href="#"
                  className="focus:text-transparent hover:bg-gradient-to-br from-blue-700 via-yellow-700 to-green-700  bg-clip-text"
                >
                  Look
                </a>
              </Typography>
            </Paper>
          ))}
        </Masonry>
      </Box>
    </div>
  );
}
