"use client";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export default function Feature() {
  return (
    <>
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            All the features you want
          </h2>
          <Typography className="mt-4 text-lg" color="blue-gray">
            Pellentesque viverra, leo id euismod laoreet, nunc risus molestie
            orci, vel faucibus quam justo id mauris.
          </Typography>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <Typography className="text-lg font-medium">
                Quisque at urna
              </Typography>
              <Typography className="mt-2" color="gray">
                Vivamus ultricies bibendum tortor, molestie imperdiet justo
                cursus eu. Donec quis arcu magna. Integer tempor egestas dolor.
              </Typography>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <Typography className="text-lg font-medium">
                Quisque eu dui lacinia
              </Typography>
              <Typography className="mt-2" color="gray">
                Quisque ultricies volutpat sapien nec varius. Sed sit amet justo
                vestibulum, efficitur risus quis, gravida libero.
              </Typography>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <Typography className="text-lg font-medium">
                Mauris dignissim
              </Typography>
              <Typography className="mt-2 " color="gray">
                Phasellus nec molestie arcu. Proin dictum, lorem mollis rutrum
                efficitur, lectus velit pharetra elit, et dictum purus nibh
                auctor velit.
              </Typography>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <Typography className="text-lg font-medium">
                Proin nulla eros
              </Typography>
              <Typography className="mt-2" color="gray">
                Sed ornare ultricies gravida. Morbi egestas dolor turpis, ornare
                laoreet est vehicula non.
              </Typography>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <Typography className="text-lg font-medium">
                Proin dictum
              </Typography>
              <Typography className="mt-2" color="gray">
                Lorem mollis rutrum efficitur, lectus velit pharetra elit, et
                dictum purus nibh auctor velit.
              </Typography>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <Typography className="text-lg font-medium">
                Quisque eu dui lacinia
              </Typography>
              <Typography className="mt-2" color="gray">
                Cras a mauris tincidunt, scelerisque justo sit amet, hendrerit
                est. Fusce venenatis diam fringilla metus convallis, at dapibus
                enim congue.
              </Typography>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <Typography className="text-lg font-medium">
                Cras vel bibendum tellus
              </Typography>
              <Typography className="mt-2" color="gray">
                Curabitur molestie neque ac massa pulvinar, nec sollicitudin
                nunc consequat. Donec mattis orci eros, vitae porttitor risus
                pretium eget.
              </Typography>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <Typography className="text-lg font-medium">
                Dignissim magna
              </Typography>
              <Typography className="mt-2" color="gray">
                Cras ac lectus erat. Curabitur condimentum luctus nisi, non
                lacinia ipsum.
              </Typography>
            </div>
          </div>
        </dl>
      </div>
    </>
  );
}
