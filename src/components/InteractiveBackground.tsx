import React, { useRef, useEffect } from 'react';

const InteractiveBackground: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      bgRef.current.style.background = `radial-gradient(circle at ${50 + x * 20}% ${50 + y * 20}%, #6366f1 0%, #a21caf 60%, #0ea5e9 100%)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={bgRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'background 0.3s',
        background: 'radial-gradient(circle at 50% 50%, #6366f1 0%, #a21caf 60%, #0ea5e9 100%)',
      }}
      aria-hidden="true"
    />
  );
};

export default InteractiveBackground; 