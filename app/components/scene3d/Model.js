import React, { useRef } from 'react';
import { MeshTransmissionMaterial, useGLTF, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

export default function Model() {
    const { nodes } = useGLTF('/torus.glb');
    const { viewport } = useThree();
    const torus = useRef();
    const moveRight = useRef(true);
    const moveUp = useRef(true);
    const targetRotationZ = useRef(0);

    useFrame((state, delta) => {
        if (torus.current) {
            // Update position
            const randomX = Math.random() * 0.001;
            const randomY = Math.random() * 0.0002;

            torus.current.position.x += (moveRight.current ? 0.005 : -0.005) + randomX;
            torus.current.position.y += (moveUp.current ? 0.0011 : -0.001) + randomY;

            // Check boundaries and update directions
            if (torus.current.position.x > 1.55) {
                moveRight.current = false;
                targetRotationZ.current = torus.current.rotation.z + Math.PI / 4;
            } else if (torus.current.position.x < -1.55) {
                moveRight.current = true;
                targetRotationZ.current = torus.current.rotation.z - Math.PI / 4;
            }

            if (torus.current.position.y > 0.75) {
                moveUp.current = false;
                targetRotationZ.current = torus.current.rotation.z + Math.PI / 4;
            } else if (torus.current.position.y < -0.75) {
                moveUp.current = true;
                targetRotationZ.current = torus.current.rotation.z - Math.PI / 4;
            }

            // Smoothly interpolate rotation towards target rotation
            torus.current.rotation.z += (targetRotationZ.current - torus.current.rotation.z) * delta;
        }
    });

    // Definim proprietățile materialului direct, fără useControls
    const materialProps = {
        thickness: 0.2,
        roughness: 0.1,
        transmission: 1.1,
        ior: 1,
        chromaticAberration: 0.3,
        backside: true,
    };

    return (
        <>
            <group scale={viewport.height / 1.35}>
                <Text fontStyle='' position={[0, 1.3, -3.6]} fontWeight={'bold'} fontSize={0.4} color="#ffffff" anchorX="center" anchorY="middle">
                    Leading your business
                </Text>
                <Text fontStyle='' position={[0, 0.95, -3.6]} fontWeight={'bold'} fontSize={0.4} color="white" anchorX="center" anchorY="middle">
                    into the future.
                </Text>
                <mesh position={[0, -0.31, -0.9]} ref={torus} geometry={nodes.Torus002.geometry}>
                    <MeshTransmissionMaterial {...materialProps} />
                </mesh>
                <Text fontStyle='' position={[0, 0.4, -4]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
                    Make your workday easier with software that
                </Text>
                <Text fontStyle='' position={[0, 0.2, -4]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
                    handles the tough stuff. Let's create it together
                </Text>
            </group>
        </>
    );
}
