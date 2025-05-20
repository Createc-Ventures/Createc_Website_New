import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Loader from '@/components/loader.tsx';

const HeroSection = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let renderer: THREE.WebGLRenderer;
    let shape: THREE.Mesh;
    let animationFrameId: number;

    const initThree = () => {
      if (!canvasRef.current) return;

      const width = canvasRef.current.clientWidth || 300;
      const height = canvasRef.current.clientHeight || 300;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 4;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x000000, 0);

      canvasRef.current.innerHTML = ''; // Clear previous renders
      canvasRef.current.appendChild(renderer.domElement);

      const createcBlue = new THREE.Color('#EC7C30');
      const createcPurple = new THREE.Color('#FCB508');

      const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
      const material = new THREE.MeshStandardMaterial({
        color: createcBlue,
        metalness: 0.7,
        roughness: 0.3,
        emissive: createcPurple,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.95,
      });

      shape = new THREE.Mesh(geometry, material);
      scene.add(shape);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
      directionalLight.position.set(5, 5, 5);

      scene.add(ambientLight);
      scene.add(directionalLight);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();

      // Clean-up
      return () => {
        cancelAnimationFrame(animationFrameId);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
      };
    };

    // Delay initialization slightly to ensure layout is stable
    const timeout = setTimeout(() => {
      const cleanup = initThree();
      return cleanup;
    }, 100);

    return () => clearTimeout(timeout);
  }, [canvasRef]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* LOADING SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      {!isLoading && (
        <section
          id="home"
          className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-black text-white"
        >
          <div className="absolute inset-0 tech-grid opacity-20" />

          {/* Floating Shapes */}
          <div className="tech-shape w-64 h-64 bg-createc-purple rounded-full top-20 -left-20 animate-float" />
          <div
            className="tech-shape w-96 h-96 bg-createc-blue rounded-full -bottom-40 -right-20 animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="tech-shape w-40 h-40 bg-createc-purple bg-opacity-70 rounded-lg bottom-40 left-1/4 animate-float"
            style={{ animationDelay: '1s' }}
          />
          <div className="tech-shape w-20 h-20 bg-createc-blue bg-opacity-50 rounded-lg top-40 right-1/4 animate-pulse-slow" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              {/* Left Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-createc-blue">
                  Where <span className="text-createc-purple">Creativity</span>{' '}
                  Meets <span className="text-createc-purple">Innovation</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300">
                  Empowering Brands through Creativity and Technology
                </p>
                <a
                  href="https://drive.google.com/drive/folders/1_aKINi8P4pzKtdMARce0CJGalimi-a8a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'gradient-bg text-white font-montserrat font-semibold',
                    'px-8 py-4 rounded-full inline-block hover-scale',
                    'shadow-lg transition-all duration-300'
                  )}
                >
                  Explore Our Work
                </a>
              </div>

              {/* Right Content with 3D Object */}
              <div className="md:w-1/2 flex justify-center items-center relative">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="relative z-10 p-4 rounded-2xl"
                >
                  <div
                    ref={canvasRef}
                    className="w-[300px] h-[300px] flex items-center justify-center relative"
                  />
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-createc-purple rounded-lg transform rotate-12 opacity-30" />
                  <div className="absolute -top-5 -left-5 w-16 h-16 bg-createc-blue rounded-full transform opacity-20" />
                </motion.div>

                {/* Glowing Circle on Right Side */}
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-createc-blue to-createc-purple opacity-20 blur-3xl animate-pulse-slow z-0" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroSection;
