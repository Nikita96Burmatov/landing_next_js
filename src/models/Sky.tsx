import { useGLTF } from "@react-three/drei";
import React from "react";

export default function Sky() {
  const sky = useGLTF("/_next/static/3d/unreal_engine_4_sky.glb");
  return (
    <mesh position={[-10, -10, -10]} scale={[10, 10, 10]}>
      <primitive object={sky.scene} />
    </mesh>
  );
}
