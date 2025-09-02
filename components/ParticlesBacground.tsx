"use client";

import { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    const createParticles = () => {
      const container = document.querySelector('.particle-bg');
      if (!container) return;

      // Clear existing particles
      container.innerHTML = '';

      // Create particles based on screen size
      const particleCount = Math.floor(window.innerWidth / 20);
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Random color from your chart colors
        const colors = [
          'oklch(0.646 0.222 41.116 / 0.5)',
          'oklch(0.6 0.118 184.704 / 0.5)',
          'oklch(0.398 0.07 227.392 / 0.5)',
          'oklch(0.828 0.189 84.429 / 0.5)',
          'oklch(0.769 0.188 70.08 / 0.5)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
        
        container.appendChild(particle);
      }
    };

    createParticles();
    window.addEventListener('resize', createParticles);

    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);

  return <div className="particle-bg" />;
};

export default ParticleBackground;