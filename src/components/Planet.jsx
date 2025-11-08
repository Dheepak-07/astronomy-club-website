// src/components/Planet.jsx
import * as THREE from "three";
import { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Planet({ textureUrl, position, rotationSpeed = 0.002, size = 2 }) {
  const ref = useRef();
  const texture = useLoader(TextureLoader, textureUrl);

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  useFrame(() => {
    ref.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial map={texture} roughness={0.7} metalness={0.1} />
    </mesh>
  );
}
