"use client";

import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Avatar,
  Typography,
} from "@material-tailwind/react";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSpring, animated } from "react-spring";

import Image from "next/image";
import avatarPic from "@/images/avatar.jpg";
export default function AvatarButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [textToShow, setTextToShow] = useState("");
  const fullText =
    "Hi, I'm Diva Hester, welcome to my website, here you can see my work, and if you hover over my avatar you can follow the links";

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const delay = 50;

    const showTextWithDelay = () => {
      for (let i = 0; i <= fullText.length; i++) {
        setTimeout(() => {
          setTextToShow(fullText.substring(0, i));
        }, i * delay);
      }
    };

    const hideTextAfterDelay = () => {
      setTimeout(() => {
        setIsVisible(false);
      }, fullText.length * delay + 1000);
    };

    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.scrollY;
        const elementPosition = containerRef.current.offsetTop;

        if (scrollPosition > elementPosition - window.innerHeight / 2) {
          setIsVisible(true);
          showTextWithDelay();
          hideTextAfterDelay();
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full bg-opacity-30">
      <div className="z-10 fixed bottom-1/2 right-8 transform translate-y-1/2">
        <SpeedDial>
          <SpeedDialHandler>
            <Image
              src={avatarPic}
              alt="avatar"
              className="rounded-full"
              width={70}
              height={70}
            />
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction className="bg-opacity-70">
              <a href="https://discord.gg/PzJAEgeS" target="_blank">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                </svg>
              </a>
            </SpeedDialAction>
            <SpeedDialAction className="bg-opacity-70">
              <a href="https://twitter.com/DiVA_HESTER" target="_blank">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </SpeedDialAction>
            <SpeedDialAction className="bg-opacity-70">
              <a href="https://www.deviantart.com/divahester" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 320 512"
                >
                  <path d="M320 93.2l-98.2 179.1 7.4 9.5H320v127.7H159.1l-13.5 9.2-43.7 84c-.3 0-8.6 8.6-9.2 9.2H0v-93.2l93.2-179.4-7.4-9.2H0V102.5h156l13.5-9.2 43.7-84c.3 0 8.6-8.6 9.2-9.2H320v93.1z" />
                </svg>
              </a>
            </SpeedDialAction>
            <SpeedDialAction className="bg-opacity-70">
              <a href="https://www.reddit.com/user/DiVAHESTER" target="_blank">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z" />
                </svg>
              </a>
            </SpeedDialAction>
            <SpeedDialAction className="bg-opacity-70">
              <a href="https://ych.commishes.com/user/DivaHester">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <svg
                    x="0px"
                    y="0px"
                    viewBox="0 0 1730 2005"
                    enable-background="new 0 0 1730 2005"
                  >
                    <defs>
                      <filter
                        id="a"
                        filterUnits="userSpaceOnUse"
                        x="-43.71"
                        y="230.768"
                        width="1817.42"
                        height="1817.42"
                      >
                        <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                      </filter>
                    </defs>
                    <mask
                      maskUnits="userSpaceOnUse"
                      x="-43.71"
                      y="230.768"
                      width="1817.42"
                      height="1817.42"
                      id="b"
                    >
                      <circle
                        fill="#FFF"
                        cx="865"
                        cy="1139.478"
                        r="862.134"
                        filter="url(#a)"
                      />
                    </mask>
                    <g mask="url(#b)">
                      <circle
                        fill="#32271E"
                        cx="865"
                        cy="1139.478"
                        r="908.71"
                      />
                      <path
                        fill="#BFB4B3"
                        d="M275.8,1801.812l96.667-290.333c82,128.667,199.333,218,340.667,249.333 c180.12,39.932,319.097-21.119,414.667-58l-94.667,320H275.8V1801.812z"
                      />
                    </g>
                    <path
                      fill="#9e9e9e"
                      d="M835.8,1707.812c-256.667,0-437.688-193.642-430-431c8-247,153.382-375.661,209-427 c80.599-74.398,269-315,153-848c442,205,632,749,606,1075c-15.557,195.065-93,365-200,479S930.588,1707.812,835.8,1707.812z"
                    />
                  </svg>
                </svg>
              </a>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
        <div ref={containerRef} className="">
          {isVisible && (
            <animated.div style={animationProps} className="chat-bubble">
              <p className="bg-opacity-70">{textToShow}</p>
            </animated.div>
          )}
        </div>
      </div>
    </div>
  );
}
