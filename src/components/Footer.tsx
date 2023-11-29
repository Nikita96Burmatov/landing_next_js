/* eslint-disable @next/next/no-img-element */
"use client";

import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-white p-8 z-10">
      <Typography
        variant="small"
        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 font-serif bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 text-transparent bg-clip-text"
      >
        &copy; {currentYear} <a href="">Diva Hester</a>. All Rights Reserved.
      </Typography>
    </footer>
  );
}
