"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Loader from "@/components/Loader";
import Island from "@/models/Island";
import Sky from "@/models/Sky";
import Dragon from "@/models/Dragon";
import IslandTree from "@/models/IslandTree";

export default function Home() {
  const [isRotation, setIsRotation] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const cameraRef = useRef();
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
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Dragon />
          <Sky isRotation={isRotation} />
          <IslandTree
            camera={{ position: [0, 0, 5], fov: 50 }}
            scale={[0.01, 0.01, 0.01]}
            position={[-6.5, -0.5, -3]}
            rotation={[0.1, 0.7, 0.1]}
          />
          <Island
            className={`w-full h-screen relative ${
              isRotation ? "cursor-grabbing" : "cursor-grab"
            }`}
            camera={{ position: [0, 0, 5], fov: 50 }}
            position={IslandPositions}
            scale={IslandScale}
            rotation={islandRotation}
            isRotation={isRotation}
            setIsRotation={setIsRotation}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
