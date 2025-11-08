import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Planet({ textureUrl, size = 2, innerRef }) {
  const texture = useLoader(TextureLoader, textureUrl);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <mesh ref={innerRef}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial map={texture} roughness={0.5} metalness={0.2} />
    </mesh>
  );
}
