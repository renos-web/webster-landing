import React, { useEffect, useRef } from 'react';

const FloatingAstronaut = () => {
  const astronautRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const position = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 1, y: 1 });
  const size = 80; // Size of the astronaut image
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const movementMultiplier = isMobile ? 2.5 : 1; // Increase movement range on mobile

  useEffect(() => {
    if (!astronautRef.current) return;

    // Set initial random position
    position.current = {
      x: Math.random() * (window.innerWidth - size),
      y: Math.random() * (window.innerHeight - size)
    };

    // Set initial velocity (random direction and speed)
    const speed = isMobile ? 1.0 : 0.7; // Slightly faster on mobile
    const angle = Math.random() * Math.PI * 2;
    velocity.current = {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed
    };

    const moveAstronaut = () => {
      if (!astronautRef.current) return;

      // Update position with multiplier for mobile
      position.current.x += velocity.current.x * movementMultiplier;
      position.current.y += velocity.current.y * movementMultiplier;

      // Bounce off walls
      if (position.current.x <= 0 || position.current.x >= window.innerWidth - size) {
        velocity.current.x *= -1;
        position.current.x = position.current.x <= 0 ? 0 : window.innerWidth - size;
      }

      if (position.current.y <= 0 || position.current.y >= window.innerHeight - size) {
        velocity.current.y *= -1;
        position.current.y = position.current.y <= 0 ? 0 : window.innerHeight - size;
      }

      // Apply position
      astronautRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;

      // Continue animation
      animationFrameId.current = requestAnimationFrame(moveAstronaut);
    };

    // Start animation
    animationFrameId.current = requestAnimationFrame(moveAstronaut);

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div 
      ref={astronautRef}
      className="fixed z-40 pointer-events-none transition-transform duration-1000 ease-in-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: 0,
        top: 0,
        willChange: 'transform',
      }}
    >
      <img
        src="/images/astronauta.png"
        alt="Floating astronaut"
        className="w-full h-full object-contain"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};

export default FloatingAstronaut;
