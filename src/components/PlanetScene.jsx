// src/components/PlanetScene.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Planet from "./Planet";
import { planets } from "../data/planets";
import * as THREE from "three";
import { useRef } from "react";

function SolarSystem() {
  const group = useRef();
  const lights = useRef([]);
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(({ camera }) => {
    const scrollY = window.scrollY;
    const sectionHeight = window.innerHeight;
    const index = Math.floor(scrollY / sectionHeight);
    const progress = (scrollY % sectionHeight) / sectionHeight;

    // Clamp planet index
    const nextIndex = Math.min(index + 1, planets.length - 1);

    // interpolate between current and next planet positions
    const current = planets[index];
    const next = planets[nextIndex];
    const startZ = -index * 10;
    const endZ = -nextIndex * 10;
    const cameraZ = THREE.MathUtils.lerp(startZ, endZ, progress);

    camera.position.set(0, 0, 10 + cameraZ);
    camera.lookAt(0, 0, 0);

    // Fade lighting per planet
    lights.current.forEach((l, i) => {
      l.intensity = i === index ? THREE.MathUtils.lerp(l.intensity, 1.5, 0.1)
                                : THREE.MathUtils.lerp(l.intensity, 0, 0.1);
    });
  });

  return (
    <group ref={group}>
      {planets.map((p, i) => (
        <group key={i} position={[0, 0, -i * 10]}>
          <Planet
            textureUrl={p.texture}
            size={p.size}
            rotationSpeed={p.rotationSpeed}
          />
          <pointLight
            ref={el => (lights.current[i] = el)}
            intensity={i === 0 ? 1.5 : 0}
            distance={25}
            color={"white"}
          />
        </group>
      ))}
    </group>
  );
}

export default function PlanetScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 60 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <ambientLight intensity={0.2} />
      <Stars radius={150} depth={100} count={8000} factor={3} fade speed={1} />
      <SolarSystem />
    </Canvas>
  );
}
