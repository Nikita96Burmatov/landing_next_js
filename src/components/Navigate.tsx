"use client";

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { useRouter } from "next/navigation";
import itemData from "@/data/imageData";
import avatarPic from "@/images/avatar.jpg";
import Image from "next/image";

export default function Navigate() {
  const [openNav, setOpenNav] = React.useState(false);

  const router = useRouter();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-normal ransition-colors hover:text-cyan-500 focus:text-cyan-500 font-serif bg-gradient-to-br from-blue-500 to-green-500 text-transparent bg-clip-text"
      >
        <button onClick={() => router.push("/")} className="flex items-center">
          Home
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-normal ransition-colors hover:text-cyan-500 focus:text-cyan-500 font-serif bg-gradient-to-br from-blue-500 to-green-500 text-transparent bg-clip-text"
      >
        <Menu
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
          offset={{ mainAxis: 30 }}
          allowHover={true}
        >
          <MenuHandler>
            <button
              onClick={() => router.push("/portfolio")}
              className="flex items-center focus:outline-none"
            >
              Portfolio
            </button>
          </MenuHandler>
          <MenuList className="bg-opacity-70">
            {itemData.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  value={item.title}
                  className="flex items-center gap-2 hover:text-cyan-500 focus:text-cyan-500 font-serif bg-gradient-to-br from-blue-500 to-green-500 text-transparent bg-clip-text"
                  onClick={() => router.push(`/portfolio/${item.title}`)}
                >
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-normal ransition-colors hover:text-cyan-500 focus:text-cyan-500 font-serif bg-gradient-to-br from-blue-500 to-green-500 text-transparent bg-clip-text"
      >
        <button
          onClick={() => router.push("/about")}
          className="flex items-center"
        >
          About me
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center font-serif bg-gradient-to-br from-blue-500 to-green-500 text-transparent bg-clip-text"
        >
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-gray-900">
          <Typography
            as="a"
            onClick={() => router.push("/")}
            className="mr-4 cursor-pointer py-1.5 font-medium font-serif bg-gradient-to-br from-blue-500 to-green-500 text-transparent bg-clip-text"
          >
            DH
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/* <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
            </div> */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          {/* <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div> */}
        </MobileNav>
      </Navbar>
    </>
  );
}
