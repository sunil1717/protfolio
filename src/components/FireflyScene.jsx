// FireflyScene.jsx
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Firefly({ position }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.3;
    ref.current.material.emissiveIntensity = 0.4 + Math.sin(t * 4) * 0.2;
  });

  return (
    <Sphere ref={ref} args={[0.05, 8, 8]} position={position}>
      <meshStandardMaterial
        emissive={"#b6ff00"}
        emissiveIntensity={1}
        color={"#222"}
      />
    </Sphere>
  );
}

function FireflyGroup({ count = 100 }) {
  const positions = new Array(count)
    .fill()
    .map(() => [
      (Math.random() - 0.5) * 10,
      Math.random() * 5,
      (Math.random() - 0.5) * 10,
    ]);

  return positions.map((pos, i) => <Firefly key={i} position={pos} />);
}

export default function FireflyScene() {
  return (
      <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",  // allow clicks to pass through
      }}
    >
      <Canvas camera={{ position: [0, 1.5, 5], fov: 70 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 5, 0]} intensity={1} />
        <Suspense fallback={null}>
          <FireflyGroup count={80} />
          <Stars radius={50} depth={50} count={500} factor={4} fade />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
