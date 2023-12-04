"use client";
import Feature from "@/components/feature";
import Image from "@/components/Image";
import Gallery from "@/components/Galerry";
import Swipers from "@/components/Swiper";
import AvatarButton from "@/components/AvatarButton";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Island from "@/models/Island";
import Sky from "@/models/Sky";
import Dragon from "@/models/Dragon";
import DragonTwo from "@/models/DragonTwo";

export default function Home() {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPositions = [0, -6.5, -19];
    let rotation = [0.1, 0.1, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [0.1, 0.1, 0.1];
    }

    return [screenScale, screenPositions, rotation];
  };

  const [IslandScale, IslandPositions, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
          <Dragon />
          <Sky />
          <Island
            className= "z-10"
            position={IslandPositions}
            scale={IslandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
