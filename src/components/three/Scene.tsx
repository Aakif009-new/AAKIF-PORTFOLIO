"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 0.5,
        y: (e.clientY / window.innerHeight - 0.5) * 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += (mouse.y * 0.02 - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.z += (mouse.x * 0.02 - meshRef.current.rotation.z) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.8} position-y={0.5}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.8}
          distort={0.2}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 200 }) {
  const ref = useRef<THREE.Points>(null);

  useEffect(() => {
    if (!ref.current) return;
    const geometry = ref.current.geometry;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  }, [count]);

  return (
    <points ref={ref}>
      <bufferGeometry />
      <pointsMaterial
        size={0.02}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Rings() {
  return (
    <group>
      {[0, 1, 2].map((i) => (
        <Float key={i} speed={1 + i * 0.5} rotationIntensity={0.3} floatIntensity={1}>
          <mesh position={[0, -0.5 - i * 0.3, 0]} rotation-x={Math.PI / 3}>
            <torusGeometry args={[1.8 + i * 0.3, 0.02, 16, 100]} />
            <meshBasicMaterial
              color={`hsl(${240 + i * 30}, 70%, 60%)`}
              transparent
              opacity={0.15 + i * 0.05}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="!fixed inset-0 pointer-events-none"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#818cf8" />
      <FloatingShape />
      <Particles count={200} />
      <Rings />
      <Environment preset="night" />
    </Canvas>
  );
}
