
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeDAnimationProps {
  className?: string;
  animationType?: 'fruits' | 'vegetables' | 'foodPackages';
  height?: number;
}

export const ThreeDAnimation: React.FC<ThreeDAnimationProps> = ({
  className = '',
  animationType = 'fruits',
  height = 400
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const objectsRef = useRef<THREE.Mesh[]>([]);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js scene
    const container = containerRef.current;
    const width = container.clientWidth;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 15;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add objects based on animation type
    const objects: THREE.Mesh[] = [];
    
    if (animationType === 'fruits') {
      // Add apple
      const appleGeometry = new THREE.SphereGeometry(1, 32, 32);
      const appleMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
      const apple = new THREE.Mesh(appleGeometry, appleMaterial);
      apple.position.set(-3, 2, 0);
      scene.add(apple);
      objects.push(apple);

      // Add orange
      const orangeGeometry = new THREE.SphereGeometry(0.8, 32, 32);
      const orangeMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 });
      const orange = new THREE.Mesh(orangeGeometry, orangeMaterial);
      orange.position.set(3, -2, 2);
      scene.add(orange);
      objects.push(orange);

      // Add banana
      const points = [];
      for (let i = 0; i < 10; i++) {
        const angle = (i / 9) * Math.PI;
        const x = 2 * Math.sin(angle);
        const y = -2 + i * 0.5;
        points.push(new THREE.Vector2(x, y));
      }
      const bananaGeometry = new THREE.LatheGeometry(points, 20, 0, Math.PI * 2);
      const bananaMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
      const banana = new THREE.Mesh(bananaGeometry, bananaMaterial);
      banana.rotation.x = Math.PI / 2;
      banana.scale.set(0.5, 0.5, 0.5);
      banana.position.set(0, 0, -2);
      scene.add(banana);
      objects.push(banana);
    } else if (animationType === 'vegetables') {
      // Add carrot
      const carrotGeometry = new THREE.ConeGeometry(0.7, 3, 32);
      const carrotMaterial = new THREE.MeshStandardMaterial({ color: 0xff6600 });
      const carrot = new THREE.Mesh(carrotGeometry, carrotMaterial);
      carrot.position.set(-3, 1, 0);
      carrot.rotation.x = Math.PI;
      scene.add(carrot);
      objects.push(carrot);

      // Add tomato
      const tomatoGeometry = new THREE.SphereGeometry(1, 32, 32);
      const tomatoMaterial = new THREE.MeshStandardMaterial({ color: 0xff3333 });
      const tomato = new THREE.Mesh(tomatoGeometry, tomatoMaterial);
      tomato.position.set(3, -1, 0);
      scene.add(tomato);
      objects.push(tomato);

      // Add broccoli-like shape
      const broccoliStemGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2, 32);
      const broccoliStemMaterial = new THREE.MeshStandardMaterial({ color: 0x6b8e23 });
      const broccoliStem = new THREE.Mesh(broccoliStemGeometry, broccoliStemMaterial);
      broccoliStem.position.set(0, -1, 2);
      scene.add(broccoliStem);
      objects.push(broccoliStem);

      const broccoliTopGeometry = new THREE.SphereGeometry(1, 32, 32);
      const broccoliTopMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
      const broccoliTop = new THREE.Mesh(broccoliTopGeometry, broccoliTopMaterial);
      broccoliTop.position.set(0, 0.5, 2);
      scene.add(broccoliTop);
      objects.push(broccoliTop);
    } else if (animationType === 'foodPackages') {
      // Add food box
      const boxGeometry = new THREE.BoxGeometry(2, 1.5, 2);
      const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xb25d25 });
      const box = new THREE.Mesh(boxGeometry, boxMaterial);
      box.position.set(-3, 0, 0);
      scene.add(box);
      objects.push(box);

      // Add food bag
      const bagGeometry = new THREE.CylinderGeometry(1, 1, 3, 32);
      const bagMaterial = new THREE.MeshStandardMaterial({ color: 0xf5f5dc });
      const bag = new THREE.Mesh(bagGeometry, bagMaterial);
      bag.position.set(3, 0, 0);
      scene.add(bag);
      objects.push(bag);

      // Add can
      const canGeometry = new THREE.CylinderGeometry(0.8, 0.8, 2, 32);
      const canMaterial = new THREE.MeshStandardMaterial({ color: 0xc0c0c0 });
      const can = new THREE.Mesh(canGeometry, canMaterial);
      can.position.set(0, -2, 1);
      scene.add(can);
      objects.push(can);
    }

    objectsRef.current = objects;

    // Animation loop
    const animate = () => {
      objects.forEach((obj, i) => {
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.01;
        obj.position.y += Math.sin(Date.now() * 0.001 + i) * 0.01;
      });

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [animationType, height]);

  return (
    <div ref={containerRef} className={`three-d-animation overflow-hidden ${className}`} style={{ height: `${height}px` }}></div>
  );
};

export default ThreeDAnimation;
