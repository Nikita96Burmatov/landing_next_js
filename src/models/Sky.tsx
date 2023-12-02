import { useGLTF } from "@react-three/drei";
import React from "react";

export default function Sky() {
  const sky = useGLTF("/_next/static/3d/unreal_engine_4_sky.glb");
  console.log(sky);
  return (
    <mesh position={[-10, 2, -10]}>
      <primitive object={sky.scene} />
    </mesh>
  );
}
