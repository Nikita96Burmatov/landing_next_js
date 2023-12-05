import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export default function Sky({ isRotation }) {
  const sky = useGLTF("/_next/static/3d/unreal_engine_4_sky.glb");

  const skyRef = useRef();

  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.
  useFrame((_: any, delta: number) => {
    if (isRotation) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });
  return (
    <mesh ref={skyRef} position={[-10, -10, -10]} scale={[10, 10, 10]}>
      <primitive object={sky.scene} />
    </mesh>
  );
}
