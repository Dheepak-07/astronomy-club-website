import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Planet from "../components/Planet";
import moonTexture from "../data/moon.jpg";

function MoonAnimation() {
  const moonRef = useRef();
  const smoothedScroll = useRef(0);

  useFrame(({ clock }) => {
    if (moonRef.current) {
      // 1. Get current scroll progress (0.0 at top, 1.0 at bottom)
      const totalPageHeight = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const currentScroll = Math.max(0, Math.min(1, window.scrollY / totalPageHeight));

      // 2. Smooth the scroll value for fluid motion
      smoothedScroll.current = THREE.MathUtils.lerp(
        smoothedScroll.current,
        currentScroll,
        0.05
      );

      // --- CORRECTED MOVEMENT LOGIC ---
      
      // 3. Define ranges
      const horizontalStart = 5;    // Starting position (right side) - reduced to keep moon visible
      const horizontalEnd = -8;     // Ending position (left side)
      const verticalAmplitude = 3;  // Height of sine wave
      const depthAmplitude = 1;     // Subtle depth oscillation
      const waveFrequency = 2;      // Number of complete waves across the page

      // RIGHT TO LEFT movement (linear progression)
      // At scroll 0: x = +10 (right side)
      // At scroll 1: x = -10 (left side)
      const targetX = horizontalStart + (smoothedScroll.current * (horizontalEnd - horizontalStart));

      // SINUSOIDAL VERTICAL movement (creates wave pattern)
      // This creates smooth up-down motion as moon travels left
      const targetY = Math.sin(smoothedScroll.current * Math.PI * waveFrequency) * verticalAmplitude;
      
      // SUBTLE DEPTH OSCILLATION (zoom in/out effect)
      // Only time-based, no z-rotation
      const time = clock.getElapsedTime();
      const timeBasedZ = Math.sin(time * 0.2) * 0.5;
      const targetZ = timeBasedZ;

      // SCALE/ZOOM effect based on scroll
      // Moon gets slightly larger in the middle of the journey
      const scaleBase = 1;
      const scaleVariation = Math.sin(smoothedScroll.current * Math.PI) * 0.2; // Peaks at 50% scroll
      const targetScale = scaleBase + scaleVariation;

      // 4. Apply positions with additional smoothing
      moonRef.current.position.x = THREE.MathUtils.lerp(
        moonRef.current.position.x,
        targetX,
        0.1
      );
      
      moonRef.current.position.y = THREE.MathUtils.lerp(
        moonRef.current.position.y,
        targetY,
        0.1
      );
      
      moonRef.current.position.z = THREE.MathUtils.lerp(
        moonRef.current.position.z,
        targetZ,
        0.08
      );

      // Apply scale
      moonRef.current.scale.setScalar(
        THREE.MathUtils.lerp(moonRef.current.scale.x, targetScale, 0.08)
      );

      // 5. Continuous rotation (only X and Y axis, no Z)
      moonRef.current.rotation.y += 0.0015;
      moonRef.current.rotation.x += 0.0007;
    }
  });

  return <Planet innerRef={moonRef} textureUrl={moonTexture} size={3} />;
}

export default function PlanetScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 10]} intensity={1.2} />
      <color attach="background" args={["#000000"]} />
      <MoonAnimation />
    </Canvas>
  );
}