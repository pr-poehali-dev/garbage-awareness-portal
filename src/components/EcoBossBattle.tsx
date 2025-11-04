import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Boss {
  id: string;
  name: string;
  emoji: string;
  health: number;
  maxHealth: number;
  level: number;
  attacks: string[];
  weakness: string;
  defeated: boolean;
}

interface EcoBossBattleProps {
  onVictory: (points: number) => void;
}

const EcoBossBattle = ({ onVictory }: EcoBossBattleProps) => {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [playerEnergy, setPlayerEnergy] = useState(100);
  const [currentBossIndex, setCurrentBossIndex] = useState(0);
  const [bosses, setBosses] = useState<Boss[]>([
    {
      id: '1',
      name: 'Пластиковый Монстр',
      emoji: '🛢️',
      health: 150,
      maxHealth: 150,
      level: 1,
      attacks: ['Душит планету пакетами!', 'Атака одноразовыми стаканами!', 'Пластиковый смерч!'],
      weakness: '♻️ Переработка',
      defeated: false
    },
    {
      id: '2',
      name: 'Токсичный Дракон',
      emoji: '☠️',
      health: 250,
      maxHealth: 250,
      level: 2,
      attacks: ['Выброс токсинов!', 'Ядовитое дыхание!', 'Химическая буря!'],
      weakness: '🌿 Эко-очистка',
      defeated: false
    },
    {
      id: '3',
      name: 'Мусорный Титан',
      emoji: '🗑️',
      health: 400,
      maxHealth: 400,
      level: 3,
      attacks: ['Лавина отходов!', 'Свалка обрушивается!', 'Гниющий удар!'],
      weakness: '🔥 Сжигание',
      defeated: false
    },
    {
      id: '4',
      name: 'МЕГАЗАГРЯЗНИТЕЛЬ',
      emoji: '👹',
      health: 666,
      maxHealth: 666,
      level: 99,
      attacks: ['АПОКАЛИПСИС!', 'Конец света!', 'Планета разрушается!', 'Критический урон!'],
      weakness: '💚 Сила природы',
      defeated: false
    }
  ]);

  const [battleLog, setBattleLog] = useState<string[]>(['⚔️ Битва началась! Спаси планету!']);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [showVictory, setShowVictory] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [attackAnimation, setAttackAnimation] = useState(false);
  const [damageAnimation, setDamageAnimation] = useState(false);

  const currentBoss = bosses[currentBossIndex];

  useEffect(() => {
    if (!isPlayerTurn && currentBoss && !currentBoss.defeated && playerHealth > 0) {
      const timer = setTimeout(() => {
        bossAttack();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, currentBoss]);

  const addLog = (message: string) => {
    setBattleLog(prev => [...prev.slice(-4), message]);
  };

  const playerAttack = (attackType: 'light' | 'heavy' | 'special') => {
    if (!isPlayerTurn || currentBoss.defeated) return;

    let damage = 0;
    let energyCost = 0;
    let message = '';

    switch (attackType) {
      case 'light':
        damage = Math.floor(Math.random() * 20) + 15;
        energyCost = 10;
        message = `⚡ Быстрая атака! Урон: ${damage}`;
        break;
      case 'heavy':
        damage = Math.floor(Math.random() * 40) + 30;
        energyCost = 25;
        message = `💥 Мощный удар! Урон: ${damage}`;
        break;
      case 'special':
        damage = Math.floor(Math.random() * 60) + 50;
        energyCost = 50;
        message = `✨ ${currentBoss.weakness} активирована! КРИТИЧЕСКИЙ УРОН: ${damage}!`;
        break;
    }

    if (playerEnergy < energyCost) {
      addLog('❌ Недостаточно энергии!');
      return;
    }

    setAttackAnimation(true);
    setTimeout(() => setAttackAnimation(false), 500);

    setPlayerEnergy(prev => Math.max(0, prev - energyCost));
    
    const newBosses = [...bosses];
    newBosses[currentBossIndex].health = Math.max(0, currentBoss.health - damage);
    setBosses(newBosses);

    addLog(message);

    if (newBosses[currentBossIndex].health <= 0) {
      newBosses[currentBossIndex].defeated = true;
      setBosses(newBosses);
      
      const reward = currentBoss.level * 50;
      addLog(`🎉 ${currentBoss.name} повержен! +${reward} очков!`);
      
      setTimeout(() => {
        if (currentBossIndex < bosses.length - 1) {
          setCurrentBossIndex(prev => prev + 1);
          setPlayerHealth(100);
          setPlayerEnergy(100);
          addLog(`⚔️ Появился новый босс: ${bosses[currentBossIndex + 1].name}!`);
        } else {
          setShowVictory(true);
          addLog('🏆 ВСЕ БОССЫ ПОВЕРЖЕНЫ! ТЫ СПАС ПЛАНЕТУ!');
        }
        onVictory(reward);
      }, 2000);
    } else {
      setIsPlayerTurn(false);
    }
  };

  const bossAttack = () => {
    if (currentBoss.defeated || playerHealth <= 0) return;

    const attack = currentBoss.attacks[Math.floor(Math.random() * currentBoss.attacks.length)];
    const damage = Math.floor(Math.random() * 25) + 10 + (currentBoss.level * 5);

    setDamageAnimation(true);
    setTimeout(() => setDamageAnimation(false), 500);

    setPlayerHealth(prev => {
      const newHealth = Math.max(0, prev - damage);
      if (newHealth <= 0) {
        setGameOver(true);
        addLog('💀 Ты проиграл! Планета погибла...');
      }
      return newHealth;
    });

    addLog(`👹 ${currentBoss.name}: ${attack} Урон: ${damage}`);
    setIsPlayerTurn(true);
  };

  const heal = () => {
    if (playerEnergy < 30) {
      addLog('❌ Недостаточно энергии для лечения!');
      return;
    }

    const healAmount = 30;
    setPlayerHealth(prev => Math.min(100, prev + healAmount));
    setPlayerEnergy(prev => prev - 30);
    addLog(`💚 Исцеление! Восстановлено ${healAmount} HP`);
    setIsPlayerTurn(false);
  };

  const restartBattle = () => {
    setPlayerHealth(100);
    setPlayerEnergy(100);
    setCurrentBossIndex(0);
    setBosses(bosses.map(b => ({ ...b, health: b.maxHealth, defeated: false })));
    setBattleLog(['⚔️ Битва началась! Спаси планету!']);
    setIsPlayerTurn(true);
    setShowVictory(false);
    setGameOver(false);
  };

  useEffect(() => {
    if (playerEnergy < 100 && isPlayerTurn) {
      const timer = setInterval(() => {
        setPlayerEnergy(prev => Math.min(100, prev + 2));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [playerEnergy, isPlayerTurn]);

  return (
    <Card className="max-w-6xl mx-auto bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-4 border-red-400 shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
          <Icon name="Swords" className="text-red-600" size={40} />
          ⚔️ ЭкоБитва Боссов
          <Icon name="Swords" className="text-red-600" size={40} />
        </CardTitle>
        <p className="text-lg text-muted-foreground mt-2">
          Сражайся с загрязнителями и спаси планету!
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {!gameOver && !showVictory && (
          <>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="text-center p-6 bg-green-100 rounded-xl border-2 border-green-400">
                  <div className="text-6xl mb-3 animate-pulse">🦸</div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">ТЫ (ЭкоГерой)</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>❤️ Здоровье</span>
                        <span className="font-bold">{playerHealth}/100</span>
                      </div>
                      <Progress value={playerHealth} className="h-3 bg-red-200" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>⚡ Энергия</span>
                        <span className="font-bold">{playerEnergy}/100</span>
                      </div>
                      <Progress value={playerEnergy} className="h-3 bg-blue-200" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className={`text-center p-6 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl border-4 border-red-500 ${damageAnimation ? 'animate-pulse scale-105' : ''} transition-all`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold bg-red-500 text-white px-3 py-1 rounded-full">
                      LVL {currentBoss.level}
                    </span>
                    <span className="text-xs text-gray-600">
                      Босс {currentBossIndex + 1}/{bosses.length}
                    </span>
                  </div>
                  <div className={`text-7xl mb-3 ${attackAnimation ? 'animate-bounce' : ''}`}>
                    {currentBoss.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-red-700 mb-2">{currentBoss.name}</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>💀 Здоровье босса</span>
                        <span className="font-bold">{currentBoss.health}/{currentBoss.maxHealth}</span>
                      </div>
                      <Progress value={(currentBoss.health / currentBoss.maxHealth) * 100} className="h-4 bg-gray-300" />
                    </div>
                    <div className="text-xs bg-yellow-100 border border-yellow-400 rounded p-2">
                      <span className="font-semibold">💡 Слабость:</span> {currentBoss.weakness}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-green-400 p-4 rounded-xl font-mono text-sm h-32 overflow-y-auto border-2 border-gray-700">
              {battleLog.map((log, idx) => (
                <div key={idx} className="mb-1">&gt; {log}</div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button
                onClick={() => playerAttack('light')}
                disabled={!isPlayerTurn || currentBoss.defeated}
                className="h-20 bg-blue-500 hover:bg-blue-600 text-white font-bold flex flex-col gap-1"
              >
                <Icon name="Zap" size={24} />
                <span>Быстрая атака</span>
                <span className="text-xs">-10 энергии</span>
              </Button>

              <Button
                onClick={() => playerAttack('heavy')}
                disabled={!isPlayerTurn || currentBoss.defeated}
                className="h-20 bg-orange-500 hover:bg-orange-600 text-white font-bold flex flex-col gap-1"
              >
                <Icon name="Flame" size={24} />
                <span>Мощный удар</span>
                <span className="text-xs">-25 энергии</span>
              </Button>

              <Button
                onClick={() => playerAttack('special')}
                disabled={!isPlayerTurn || currentBoss.defeated || playerEnergy < 50}
                className="h-20 bg-purple-500 hover:bg-purple-600 text-white font-bold flex flex-col gap-1"
              >
                <Icon name="Sparkles" size={24} />
                <span>СПЕЦАТАКА!</span>
                <span className="text-xs">-50 энергии</span>
              </Button>

              <Button
                onClick={heal}
                disabled={!isPlayerTurn || playerEnergy < 30}
                className="h-20 bg-green-500 hover:bg-green-600 text-white font-bold flex flex-col gap-1"
              >
                <Icon name="Heart" size={24} />
                <span>Исцеление</span>
                <span className="text-xs">-30 энергии</span>
              </Button>
            </div>

            <div className="flex gap-2 justify-center">
              {bosses.map((boss, idx) => (
                <div
                  key={boss.id}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                    boss.defeated
                      ? 'bg-green-200 border-green-500'
                      : idx === currentBossIndex
                      ? 'bg-red-200 border-red-500 animate-pulse'
                      : 'bg-gray-200 border-gray-400'
                  }`}
                >
                  {boss.defeated ? '✅' : boss.emoji}
                </div>
              ))}
            </div>
          </>
        )}

        {gameOver && (
          <div className="text-center py-12 space-y-6">
            <div className="text-8xl animate-bounce">💀</div>
            <h2 className="text-4xl font-bold text-red-600">ПОРАЖЕНИЕ!</h2>
            <p className="text-xl text-gray-700">Планета погибла от загрязнения...</p>
            <Button onClick={restartBattle} size="lg" className="bg-red-500 hover:bg-red-600 text-white text-xl px-8 py-6">
              <Icon name="RotateCcw" className="mr-2" size={24} />
              Попробовать снова
            </Button>
          </div>
        )}

        {showVictory && (
          <div className="text-center py-12 space-y-6">
            <div className="text-8xl animate-bounce">🏆</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              ПОБЕДА!
            </h2>
            <p className="text-xl text-gray-700">Ты спас планету от всех загрязнителей!</p>
            <div className="text-3xl font-bold text-green-600">+500 ЭКО-ОЧКОВ! 🎉</div>
            <Button onClick={restartBattle} size="lg" className="bg-green-500 hover:bg-green-600 text-white text-xl px-8 py-6">
              <Icon name="Swords" className="mr-2" size={24} />
              Сразиться снова
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EcoBossBattle;
