import { useEffect, useState } from 'react';

const FloatingLogo = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [velocity, setVelocity] = useState({ x: 2, y: 1.5 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;
        let newVelX = velocity.x;
        let newVelY = velocity.y;

        if (newX <= 0 || newX >= window.innerWidth - 80) {
          newVelX = -velocity.x;
          newX = newX <= 0 ? 0 : window.innerWidth - 80;
        }

        if (newY <= 0 || newY >= window.innerHeight - 80) {
          newVelY = -velocity.y;
          newY = newY <= 0 ? 0 : window.innerHeight - 80;
        }

        setVelocity({ x: newVelX, y: newVelY });

        return { x: newX, y: newY };
      });
    }, 16);

    return () => clearInterval(interval);
  }, [velocity]);

  return (
    <div
      className="fixed z-[9999] pointer-events-none transition-transform duration-100"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="relative animate-spin-slow">
        <img
          src="https://cdn.poehali.dev/files/03d6f106-d607-4a02-9364-12f53123a5eb.jpeg"
          alt="Плавающий логотип"
          className="w-20 h-20 object-contain opacity-30 hover:opacity-60 transition-opacity drop-shadow-2xl"
          style={{ 
            filter: 'hue-rotate(100deg) saturate(2) brightness(1.2)',
            animation: 'float 3s ease-in-out infinite'
          }}
        />
        <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default FloatingLogo;
