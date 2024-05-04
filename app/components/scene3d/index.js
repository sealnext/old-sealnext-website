'use client';
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'
import Background from './Background'

export default function Index(props) {

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Background />
            <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
                <Model />
                <directionalLight intensity={0} position={[0, 0, 0]} />
                <Environment preset="city" />
            </Canvas>
        </div >
    )
}