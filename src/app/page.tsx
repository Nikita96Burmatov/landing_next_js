"use client";
import Feature from "@/components/feature";
import Image from "@/components/Image";
import Gallery from "@/components/Galerry";
import Swipers from "@/components/Swiper";
import AvatarButton from "@/components/AvatarButton";
import { Canvas } from '@react-three/fiber'
import { Suspense } from "react";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    // <>
    //   <Swipers />
    //   <Gallery />
    // </>
    <>
    <section className="w-full h-screen relative">
    <Canvas>
      <Suspense fallback={<Loader/>}>
        <mesh></mesh>
      </Suspense>
    </Canvas>
    </section>
    </>
  );
}
