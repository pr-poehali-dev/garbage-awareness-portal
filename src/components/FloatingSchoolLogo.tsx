import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const FloatingSchoolLogo = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const logoCount = 8;

  useEffect(() => {
    const initialPositions: Position[] = Array.from({ length: logoCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
    setPositions(initialPositions);

    const animate = () => {
      setPositions((prev) =>
        prev.map((pos) => {
          let newX = pos.x + pos.vx;
          let newY = pos.y + pos.vy;
          let newVx = pos.vx;
          let newVy = pos.vy;

          if (newX <= 0 || newX >= window.innerWidth - 100) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(window.innerWidth - 100, newX));
          }
          if (newY <= 0 || newY >= window.innerHeight - 100) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(window.innerHeight - 100, newY));
          }

          return { x: newX, y: newY, vx: newVx, vy: newVy };
        })
      );
    };

    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {positions.map((pos, index) => (
        <img
          key={index}
          src="https://cdn.poehali.dev/files/00350ec2-74b5-4140-91e9-ef9fa5ac1dee.png"
          alt="Логотип школы 55"
          className="absolute transition-opacity duration-1000 hover:opacity-100"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: '80px',
            height: '80px',
            opacity: 0.15,
            transform: `rotate(${index * 45}deg)`,
            animation: `float-${index} ${3 + index * 0.5}s ease-in-out infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes float-0 { 0%, 100% { transform: rotate(0deg) translateY(0px); } 50% { transform: rotate(10deg) translateY(-20px); } }
        @keyframes float-1 { 0%, 100% { transform: rotate(45deg) translateY(0px); } 50% { transform: rotate(55deg) translateY(-15px); } }
        @keyframes float-2 { 0%, 100% { transform: rotate(90deg) translateY(0px); } 50% { transform: rotate(100deg) translateY(-25px); } }
        @keyframes float-3 { 0%, 100% { transform: rotate(135deg) translateY(0px); } 50% { transform: rotate(145deg) translateY(-18px); } }
        @keyframes float-4 { 0%, 100% { transform: rotate(180deg) translateY(0px); } 50% { transform: rotate(190deg) translateY(-22px); } }
        @keyframes float-5 { 0%, 100% { transform: rotate(225deg) translateY(0px); } 50% { transform: rotate(235deg) translateY(-16px); } }
        @keyframes float-6 { 0%, 100% { transform: rotate(270deg) translateY(0px); } 50% { transform: rotate(280deg) translateY(-20px); } }
        @keyframes float-7 { 0%, 100% { transform: rotate(315deg) translateY(0px); } 50% { transform: rotate(325deg) translateY(-24px); } }
      `}</style>
    </div>
  );
};

export default FloatingSchoolLogo;
