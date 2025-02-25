import React, { useEffect, useRef } from "react";

import beeScene from "../assets/3d/bee.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bee = ({ ...props }) => {
  const beeRef = useRef();
  const { scene, animations } = useGLTF(beeScene);
  const { actions } = useAnimations(animations, beeRef);

  useEffect(() => {
    actions["Bee|BeeAction"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to using a sine wave
    beeRef.current.position.y = Math.sin(clock.elapsedTime) * 1.2 + 1;

    // Check if the bee reaches a certain endpoint relative to the camera
    if (beeRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bee on the y-axis
      beeRef.current.rotation.y = -Math.PI/6;
    } else if (beeRef.current.position.x < camera.position.x - 5) {
      // Change direction to forward and reset the bee's rotation
      beeRef.current.rotation.y = Math.PI*3/4;
    }

    // Update the X and Z positions based on the direction
    if (beeRef.current.rotation.y !== Math.PI*3/4) {
      // Moving forward
      beeRef.current.position.x -= 0.01;
      beeRef.current.position.z += 0.01;
    } else {
      // Moving backward
      beeRef.current.position.x += 0.01;
      beeRef.current.position.z -= 0.01;
    }
  });

  return (
    <mesh ref={beeRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} rotation={[0, Math.PI*3/4, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bee;
