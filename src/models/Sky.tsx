import { useGLTF } from "@react-three/drei";
import React from "react";

export default function Sky() {
  const sky = useGLTF("/_next/static/3d/free_-_skybox_anime_sky.glb");
  console.log(sky);
  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
}
