import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import './SuitViewer3D.css'

// Iron Man Suit Component
function IronManSuit({ config }) {
  const meshRef = useRef()
  const { colors, parts } = config

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <group ref={meshRef}>
      {/* Main Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 2, 0.8]} />
        <meshStandardMaterial 
          color={colors.primary} 
          metalness={0.9} 
          roughness={0.1}
          emissive={colors.primary}
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Helmet */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial 
          color={colors.secondary} 
          metalness={0.9} 
          roughness={0.1}
          emissive={colors.secondary}
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Arc Reactor */}
      <mesh position={[0, 0.3, 0.41]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} />
        <meshStandardMaterial 
          color="#00d4ff" 
          metalness={0.5} 
          roughness={0.2}
          emissive="#00d4ff"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.8, 0.5, 0]}>
        <boxGeometry args={[0.3, 1.5, 0.3]} />
        <meshStandardMaterial 
          color={colors.primary} 
          metalness={0.9} 
          roughness={0.1}
          emissive={colors.primary}
          emissiveIntensity={0.1}
        />
      </mesh>
      <mesh position={[0.8, 0.5, 0]}>
        <boxGeometry args={[0.3, 1.5, 0.3]} />
        <meshStandardMaterial 
          color={colors.primary} 
          metalness={0.9} 
          roughness={0.1}
          emissive={colors.primary}
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Repulsors */}
      <mesh position={[-0.8, -0.3, 0.2]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial 
          color="#ffd700" 
          metalness={0.3} 
          roughness={0.1}
          emissive="#ffd700"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh position={[0.8, -0.3, 0.2]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial 
          color="#ffd700" 
          metalness={0.3} 
          roughness={0.1}
          emissive="#ffd700"
          emissiveIntensity={0.8}
        />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.3, -1.8, 0]}>
        <boxGeometry args={[0.3, 1.2, 0.3]} />
        <meshStandardMaterial 
          color={colors.primary} 
          metalness={0.9} 
          roughness={0.1}
          emissive={colors.primary}
          emissiveIntensity={0.1}
        />
      </mesh>
      <mesh position={[0.3, -1.8, 0]}>
        <boxGeometry args={[0.3, 1.2, 0.3]} />
        <meshStandardMaterial 
          color={colors.primary} 
          metalness={0.9} 
          roughness={0.1}
          emissive={colors.primary}
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  )
}

// Spider-Man Suit Component
function SpiderManSuit({ config }) {
  const meshRef = useRef()
  const { colors, parts } = config

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <group ref={meshRef}>
      {/* Main Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 2, 0.6]} />
        <meshStandardMaterial 
          color={colors.primary} 
          metalness={0.2} 
          roughness={0.8}
        />
      </mesh>
      
      {/* Head/Mask */}
      <mesh position={[0, 1.4, 0]}>
        <sphereGeometry args={[0.45, 16, 16]} />
        <meshStandardMaterial 
          color={colors.primary} 
          metalness={0.2} 
          roughness={0.8}
        />
      </mesh>
      
      {/* Spider Logo */}
      <mesh position={[0, 0.2, 0.31]}>
        <planeGeometry args={[0.4, 0.4]} />
        <meshStandardMaterial 
          color="#000000" 
          metalness={0.1} 
          roughness={0.9}
        />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.15, 1.45, 0.35]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.1} 
          roughness={0.1}
          emissive="#ffffff"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0.15, 1.45, 0.35]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.1} 
          roughness={0.1}
          emissive="#ffffff"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.65, 0.5, 0]}>
        <boxGeometry args={[0.25, 1.4, 0.25]} />
        <meshStandardMaterial 
          color={colors.primary} 
          metalness={0.2} 
          roughness={0.8}
        />
      </mesh>
      <mesh position={[0.65, 0.5, 0]}>
        <boxGeometry args={[0.25, 1.4, 0.25]} />
        <meshStandardMaterial 
          color={colors.primary} 
          metalness={0.2} 
          roughness={0.8}
        />
      </mesh>
      
      {/* Web Shooters */}
      <mesh position={[-0.65, -0.1, 0.15]}>
        <boxGeometry args={[0.15, 0.1, 0.1]} />
        <meshStandardMaterial 
          color={colors.secondary} 
          metalness={0.6} 
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0.65, -0.1, 0.15]}>
        <boxGeometry args={[0.15, 0.1, 0.1]} />
        <meshStandardMaterial 
          color={colors.secondary} 
          metalness={0.6} 
          roughness={0.3}
        />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.25, -1.7, 0]}>
        <boxGeometry args={[0.25, 1.4, 0.25]} />
        <meshStandardMaterial 
          color={colors.primary} 
          metalness={0.2} 
          roughness={0.8}
        />
      </mesh>
      <mesh position={[0.25, -1.7, 0]}>
        <boxGeometry args={[0.25, 1.4, 0.25]} />
        <meshStandardMaterial 
          color={colors.primary} 
          metalness={0.2} 
          roughness={0.8}
        />
      </mesh>
    </group>
  )
}

// Holographic Effect Component
function HolographicEffect() {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5
      meshRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[3, 3, 3]}>
      <ringGeometry args={[2, 2.1, 32]} />
      <meshBasicMaterial 
        color="#00d4ff" 
        transparent 
        opacity={0.3}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

// Camera Animation Component
function CameraAnimation({ hero }) {
  const { camera } = useThree()
  
  useEffect(() => {
    const animateCamera = () => {
      const targetPosition = hero === 'ironman' ? [4, 2, 4] : [3, 1.5, 3]
      camera.position.lerp(new THREE.Vector3(...targetPosition), 0.05)
      camera.lookAt(0, 0, 0)
    }
    
    const interval = setInterval(animateCamera, 16)
    return () => clearInterval(interval)
  }, [hero, camera])

  return null
}

// Main SuitViewer3D Component
function SuitViewer3D({ hero, config }) {
  const [isScanning, setIsScanning] = useState(false)

  useEffect(() => {
    setIsScanning(true)
    const timer = setTimeout(() => setIsScanning(false), 2000)
    return () => clearTimeout(timer)
  }, [hero])

  return (
    <div className="suit-viewer-3d glass-panel">
      <div className="viewer-header">
        <h3 className="text-glow-blue">
          {hero === 'ironman' ? 'MARK L ARMOR SYSTEM' : 'WEB-SLINGER SUIT MK-IV'}
        </h3>
        <div className="scan-indicator">
          {isScanning ? (
            <span className="scanning-text pulse text-glow-gold">SCANNING...</span>
          ) : (
            <span className="text-glow-blue">READY</span>
          )}
        </div>
      </div>

      <Canvas className="canvas-3d">
        <PerspectiveCamera makeDefault position={[4, 2, 4]} />
        <CameraAnimation hero={hero} />
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00d4ff" />
        
        <Sparkles 
          count={50} 
          scale={10} 
          size={2} 
          speed={0.4}
          color="#00d4ff"
        />
        
        {hero === 'ironman' ? (
          <IronManSuit config={config} />
        ) : (
          <SpiderManSuit config={config} />
        )}
        
        <HolographicEffect />
        
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={10}
        />
        
        <Environment preset="night" />
      </Canvas>

      {isScanning && (
        <div className="scanning-overlay">
          <div className="scan-lines"></div>
          <div className="scan-grid"></div>
        </div>
      )}

      <div className="viewer-hud">
        <div className="hud-element">
          <span>POWER: 100%</span>
        </div>
        <div className="hud-element">
          <span>SYSTEMS: ONLINE</span>
        </div>
        <div className="hud-element">
          <span>DIAGNOSTICS: OK</span>
        </div>
      </div>
    </div>
  )
}

export default SuitViewer3D