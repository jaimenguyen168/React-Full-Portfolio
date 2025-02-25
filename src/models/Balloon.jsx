import React, { useRef } from 'react'
import {useAnimations, useGLTF} from '@react-three/drei'
import balloonScene from "../assets/3d/balloon.glb";
import {useFrame} from "@react-three/fiber";

export function Balloon(props) {
    const balloonRef = useRef();
    const { scene, animations } = useGLTF(balloonScene);

    useFrame(({ clock }) => {
        if (balloonRef.current) {
            // Calculate the vertical movement using a sine wave
            const elapsedTime = clock.getElapsedTime();
            balloonRef.current.position.y = Math.sin(elapsedTime) * 0.5;
            balloonRef.current.rotation.y = Math.sin(elapsedTime) * 0.5;
        }
    });

    return (
        <mesh
            ref={balloonRef}
            position={[3.5, 0, 0]}
            scale={[0.04, 0.04, 0.04]}
        >
            <primitive object={scene} />
        </mesh>
    );
}
