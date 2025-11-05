import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TrashBall = ({ position, velocity, onScore, onMiss, isActive }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const velocityRef = useRef(velocity);
  const [hasScored, setHasScored] = useState(false);

  useFrame(() => {
    if (!meshRef.current || !isActive || hasScored) return;

    velocityRef.current.y -= 0.02;
    meshRef.current.position.x += velocityRef.current.x;
    meshRef.current.position.y += velocityRef.current.y;
    meshRef.current.position.z += velocityRef.current.z;

    meshRef.current.rotation.x += 0.1;
    meshRef.current.rotation.y += 0.1;

    const basketX = 0;
    const basketY = 2;
    const basketZ = -5;
    const basketRadius = 0.8;

    const distX = meshRef.current.position.x - basketX;
    const distZ = meshRef.current.position.z - basketZ;
    const distToBasket = Math.sqrt(distX * distX + distZ * distZ);

    if (
      distToBasket < basketRadius &&
      meshRef.current.position.y < basketY + 0.5 &&
      meshRef.current.position.y > basketY - 0.3 &&
      !hasScored
    ) {
      setHasScored(true);
      onScore();
    }

    if (meshRef.current.position.y < -5 && !hasScored) {
      onMiss();
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial
        color="#ff6b35"
        metalness={0.3}
        roughness={0.4}
        emissive="#ff6b35"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const Basket = () => {
  return (
    <group position={[0, 2, -5]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[0.8, 0.1, 16, 32]} />
          <meshStandardMaterial
            color="#ffd700"
            metalness={0.8}
            roughness={0.2}
            emissive="#ffd700"
            emissiveIntensity={0.3}
          />
        </mesh>
        
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.7, 0.8, 32, 1, true]} />
          <meshStandardMaterial
            color="#00ff88"
            metalness={0.5}
            roughness={0.3}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>

        <mesh position={[0, -2, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 2, 16]} />
          <meshStandardMaterial color="#888888" metalness={0.7} roughness={0.3} />
        </mesh>
      </Float>

      <pointLight position={[0, 1, 0]} intensity={2} color="#ffd700" />
    </group>
  );
};

const Background3D = () => {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <Float
          key={i}
          speed={1 + Math.random() * 2}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 20,
              Math.random() * 10 - 2,
              -8 - Math.random() * 5
            ]}
          >
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial
              color={['#ff6b35', '#4ecdc4', '#ffe66d', '#a8dadc', '#f1faee'][Math.floor(Math.random() * 5)]}
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const Score3D = ({ score }: { score: number }) => {
  return (
    <group position={[0, 5, -5]}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
        <mesh>
          <boxGeometry args={[2, 1, 0.3]} />
          <meshStandardMaterial
            color="#ff00ff"
            metalness={0.8}
            roughness={0.2}
            emissive="#ff00ff"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
    </group>
  );
};

const TrashBasketballGame = () => {
  const [score, setScore] = useState(0);
  const [power, setPower] = useState(50);
  const [angle, setAngle] = useState(45);
  const [balls, setBalls] = useState<any[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [bestScore, setBestScore] = useState(0);
  const [difficulty, setDifficulty] = useState<'easy' | 'normal' | 'hard'>('normal');
  const [shots, setShots] = useState(0);
  const ballIdCounter = useRef(0);

  useEffect(() => {
    const saved = localStorage.getItem('trashBasketballBest');
    if (saved) setBestScore(parseInt(saved));
  }, []);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
      localStorage.setItem('trashBasketballBest', score.toString());
    }
  }, [score, bestScore]);

  const shoot = () => {
    if (!gameStarted) setGameStarted(true);
    setShots(prev => prev + 1);

    const rad = (angle * Math.PI) / 180;
    const powerFactor = power / 50;

    const newBall = {
      id: ballIdCounter.current++,
      position: [0, 0, 0] as [number, number, number],
      velocity: {
        x: 0,
        y: powerFactor * 0.5 * Math.sin(rad),
        z: -powerFactor * 0.5 * Math.cos(rad)
      },
      isActive: true
    };

    setBalls(prev => [...prev, newBall]);

    setTimeout(() => {
      setBalls(prev => prev.filter(b => b.id !== newBall.id));
    }, 5000);
  };

  const handleScore = () => {
    const points = difficulty === 'easy' ? 1 : difficulty === 'normal' ? 2 : 3;
    setScore(prev => prev + points);
  };

  const handleMiss = () => {
    // Just remove the ball, no penalty
  };

  const resetGame = () => {
    setScore(0);
    setShots(0);
    setBalls([]);
    setGameStarted(false);
  };

  const difficultySettings = {
    easy: { name: '🟢 ЛЕГКО', color: 'from-green-500 to-emerald-600', points: 1, desc: 'Широкая корзина, +1 очко' },
    normal: { name: '🟡 НОРМАЛЬНО', color: 'from-yellow-500 to-orange-600', points: 2, desc: 'Обычная корзина, +2 очка' },
    hard: { name: '🔴 СЛОЖНО', color: 'from-red-500 to-rose-600', points: 3, desc: 'Узкая корзина, +3 очка' }
  };

  const trashTypes = [
    { emoji: '🍕', name: 'Пицца', color: 'from-orange-500 to-red-500' },
    { emoji: '🥤', name: 'Стакан', color: 'from-blue-500 to-cyan-500' },
    { emoji: '🗑️', name: 'Мусор', color: 'from-gray-500 to-slate-600' },
    { emoji: '📦', name: 'Коробка', color: 'from-yellow-500 to-amber-500' },
    { emoji: '🍔', name: 'Бургер', color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute animate-bounce top-10 left-10 text-9xl">🏀</div>
        <div className="absolute animate-pulse bottom-10 right-10 text-9xl">🗑️</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-7xl font-black mb-6 text-white drop-shadow-2xl">
            🏀 МУСОРНЫЙ БАСКЕТБОЛ 3D
          </h2>
          <p className="text-3xl text-white/90 font-bold mb-6">
            Попади отходами в корзину! Спаси планету!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {Object.entries(difficultySettings).map(([key, setting]) => (
              <button
                key={key}
                onClick={() => setDifficulty(key as any)}
                className={`px-6 py-3 rounded-xl font-black text-lg transition-all border-4 ${
                  difficulty === key
                    ? `bg-gradient-to-r ${setting.color} text-white border-white scale-110 shadow-2xl`
                    : 'bg-white/20 text-white border-white/30 hover:bg-white/30'
                }`}
              >
                {setting.name}
              </button>
            ))}
          </div>
          <p className="text-xl text-white/80">
            {difficultySettings[difficulty].desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 border-4 border-white/50 p-8 h-[600px] relative overflow-hidden">
            <Canvas
              camera={{ position: [0, 2, 5], fov: 50 }}
              gl={{ antialias: true, alpha: true }}
            >
              <color attach="background" args={['#1a0033']} />
              
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff00ff" />
              
              <Environment preset="sunset" />
              
              <Basket />
              <Background3D />
              {gameStarted && <Score3D score={score} />}
              
              {balls.map(ball => (
                <TrashBall
                  key={ball.id}
                  position={ball.position}
                  velocity={ball.velocity}
                  isActive={ball.isActive}
                  onScore={handleScore}
                  onMiss={handleMiss}
                />
              ))}
              
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>

            <div className="absolute bottom-4 left-4 right-4 flex justify-between gap-2 flex-wrap">
              <div className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full border-2 border-white/50">
                <span className="text-white font-bold text-xl">Очки: {score}</span>
              </div>
              <div className="bg-blue-400/90 backdrop-blur-lg px-4 py-2 rounded-full border-2 border-blue-500">
                <span className="text-white font-bold text-xl">Броски: {shots}</span>
              </div>
              <div className="bg-yellow-400/90 backdrop-blur-lg px-4 py-2 rounded-full border-2 border-yellow-500">
                <span className="text-purple-900 font-black text-xl">🏆 {bestScore}</span>
              </div>
            </div>
            
            <button
              onClick={shoot}
              className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-black text-2xl px-8 py-4 rounded-2xl border-4 border-white hover:scale-110 transition-transform shadow-2xl animate-pulse"
            >
              🚀 БРОСИТЬ!
            </button>
          </Card>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-pink-500 to-rose-600 border-4 border-white/50 p-8">
              <h3 className="text-4xl font-black text-white mb-6 flex items-center gap-3">
                <Icon name="Sliders" size={40} className="text-yellow-300" />
                УПРАВЛЕНИЕ
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="text-white font-bold text-xl mb-2 block">
                    💪 Сила броска: {power}%
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={power}
                    onChange={(e) => setPower(Number(e.target.value))}
                    className="w-full h-4 bg-white/30 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #ffd700 0%, #ffd700 ${power}%, rgba(255,255,255,0.3) ${power}%, rgba(255,255,255,0.3) 100%)`
                    }}
                  />
                </div>

                <div>
                  <label className="text-white font-bold text-xl mb-2 block">
                    🎯 Угол броска: {angle}°
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="80"
                    value={angle}
                    onChange={(e) => setAngle(Number(e.target.value))}
                    className="w-full h-4 bg-white/30 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #00ff88 0%, #00ff88 ${(angle - 20) / 60 * 100}%, rgba(255,255,255,0.3) ${(angle - 20) / 60 * 100}%, rgba(255,255,255,0.3) 100%)`
                    }}
                  />
                </div>

                <button
                  onClick={shoot}
                  className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-black text-3xl py-6 rounded-2xl border-4 border-white/50 hover:scale-105 transition-transform shadow-2xl hover:shadow-yellow-500/50"
                >
                  🚀 БРОСОК!
                </button>

                <button
                  onClick={resetGame}
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-xl py-4 rounded-xl border-2 border-white/30 hover:bg-gray-600 transition-all"
                >
                  🔄 Начать заново
                </button>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-white/50 p-6">
              <h3 className="text-3xl font-black text-white mb-4 flex items-center gap-2">
                <Icon name="Info" size={32} className="text-yellow-300" />
                КАК ИГРАТЬ?
              </h3>
              <ul className="space-y-3 text-white text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-3xl">🎯</span>
                  <span><strong>Цель:</strong> Попасть мусором в золотую корзину</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-3xl">💪</span>
                  <span><strong>Сила:</strong> Чем больше, тем дальше летит</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-3xl">📐</span>
                  <span><strong>Угол:</strong> 45° — идеальная траектория</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-3xl">🏆</span>
                  <span><strong>Рекорд:</strong> Побей свой лучший результат!</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-r from-green-500 to-emerald-600 border-4 border-white/50 p-6">
              <h3 className="text-2xl font-black text-white mb-4">🗑️ ВИДЫ МУСОРА</h3>
              <div className="flex flex-wrap gap-3">
                {trashTypes.map((trash, i) => (
                  <div
                    key={i}
                    className={`bg-gradient-to-r ${trash.color} px-4 py-3 rounded-xl border-2 border-white/50 flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer`}
                  >
                    <span className="text-3xl">{trash.emoji}</span>
                    <span className="text-white font-bold">{trash.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block bg-white/95 backdrop-blur-lg border-4 border-green-400 p-8 max-w-2xl">
            <div className="text-6xl mb-4">🌍♻️</div>
            <p className="text-2xl text-gray-800 font-bold leading-relaxed">
              В реальной жизни сортируй мусор правильно! <br/>
              <span className="text-green-600">Каждое попадание = спасённая планета!</span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrashBasketballGame;