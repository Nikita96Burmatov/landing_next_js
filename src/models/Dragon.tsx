import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function Dragon() {
  const dragonRef = useRef();
  const { scene, animations } = useGLTF("/_next/static/3d/dragon.glb");
  const { actions } = useAnimations(animations, dragonRef);

  useEffect(() => {
    actions["flying_skeletal.3"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Уменьшаем влияние синуса для плавного движения вверх-вниз
    dragonRef.current.position.x += Math.sin(clock.elapsedTime) * 0.02 + 0.02;
  
    const movementSpeed = 0.05;
    if (dragonRef.current.position.x > camera.position.x + 45) {
      dragonRef.current.rotation.y = Math.PI / 0.02;
    } else if (dragonRef.current.position.x < camera.position.x - 45) {
      dragonRef.current.rotation.y = 0;
    }
  
    // Уменьшаем величину изменения координат для замедления движения
    if (dragonRef.current.rotation.y === 0) {
      dragonRef.current.position.x += movementSpeed;
      dragonRef.current.position.z -= movementSpeed;

    } else {
      dragonRef.current.position.x -= movementSpeed;
      dragonRef.current.position.z += movementSpeed;

    }
  });

  return (
    <mesh position={[-5, 2, 0]} rotation={[-4, -5.3, 10]}>
      <primitive object={scene} ref={dragonRef} />
    </mesh>
  );
}
