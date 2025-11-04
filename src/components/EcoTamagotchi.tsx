import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface EcoTamagotchiProps {
  onLevelUp: (points: number) => void;
}

const EcoTamagotchi = ({ onLevelUp }: EcoTamagotchiProps) => {
  const [health, setHealth] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [level, setLevel] = useState(0);
  const [message, setMessage] = useState('Привет! Я твоя планета Земля! Помоги мне стать здоровой! 🌍');
  const [animation, setAnimation] = useState('');

  const planetStages = [
    { name: 'Умирающая', emoji: '☠️', color: 'text-gray-500', health: 0 },
    { name: 'Больная', emoji: '🤢', color: 'text-red-500', health: 25 },
    { name: 'Выздоравливающая', emoji: '😷', color: 'text-yellow-500', health: 50 },
    { name: 'Здоровая', emoji: '😊', color: 'text-green-500', health: 75 },
    { name: 'Процветающая', emoji: '🌈', color: 'text-emerald-500', health: 100 }
  ];

  const getCurrentStage = () => {
    if (health >= 90) return planetStages[4];
    if (health >= 70) return planetStages[3];
    if (health >= 40) return planetStages[2];
    if (health >= 15) return planetStages[1];
    return planetStages[0];
  };

  const funnyMessages = {
    feed: [
      'Ням-ням! Переработка — моя любимая еда! 🍽️',
      'Вкуснятина! Ещё батареек, пожалуйста! 🔋',
      'О да! Чувствую прилив сил! ⚡',
      'Теперь я могу спасти панду! 🐼',
      'Мои леса говорят спасибо! 🌳'
    ],
    happy: [
      'Ура! Я танцую от счастья! 💃',
      'Чувствую себя на миллион тонн CO2 легче! 🎈',
      'Мои океаны чище, чем совесть эко-активиста! 🌊',
      'Даже озоновая дыра аплодирует! 👏',
      'Я сияю ярче, чем солнечная батарея! ☀️'
    ],
    sad: [
      'Фу, кто-то опять сжёг пластик... Кхе-кхе! 😷',
      'Мои ледники плачут... И это не метафора! 🧊',
      'Полярные медведи пишут жалобу в ООН... 🐻‍❄️',
      'Кажется, кто-то выбросил батарейку в лес... 😢',
      'Мой углеродный след больше, чем у динозавров! 🦕'
    ]
  };

  const feedPlanet = () => {
    const newHealth = Math.min(100, health + 15);
    const newHappiness = Math.min(100, happiness + 10);
    setHealth(newHealth);
    setHappiness(newHappiness);
    setAnimation('animate-bounce');
    setMessage(funnyMessages.feed[Math.floor(Math.random() * funnyMessages.feed.length)]);
    setTimeout(() => setAnimation(''), 1000);
    
    if (newHealth >= 90 && level < 4) {
      setLevel(prev => prev + 1);
      onLevelUp(20);
    }
  };

  const makePlanetHappy = () => {
    const newHappiness = Math.min(100, happiness + 20);
    setHappiness(newHappiness);
    setAnimation('animate-spin');
    setMessage(funnyMessages.happy[Math.floor(Math.random() * funnyMessages.happy.length)]);
    setTimeout(() => setAnimation(''), 1000);
    onLevelUp(10);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHealth(prev => {
        const newHealth = Math.max(0, prev - 2);
        if (newHealth < 30 && prev >= 30) {
          setMessage(funnyMessages.sad[Math.floor(Math.random() * funnyMessages.sad.length)]);
        }
        return newHealth;
      });
      setHappiness(prev => Math.max(0, prev - 1));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentStage = getCurrentStage();

  return (
    <Card className="p-8 max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-green-50">
      <div className="text-center space-y-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Icon name="Heart" className="text-red-500" size={20} />
            <span className="font-semibold">Здоровье</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Smile" className="text-yellow-500" size={20} />
            <span className="font-semibold">Счастье</span>
          </div>
        </div>

        <div className="space-y-2">
          <Progress value={health} className="h-3" />
          <Progress value={happiness} className="h-3 bg-yellow-100" />
        </div>

        <div className={`text-9xl ${animation} ${currentStage.color}`}>
          {currentStage.emoji}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">{currentStage.name} Планета</h3>
          <p className="text-muted-foreground italic">"{message}"</p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button onClick={feedPlanet} size="lg" className="gap-2">
            <Icon name="Leaf" size={20} />
            Покормить переработкой
          </Button>
          <Button onClick={makePlanetHappy} size="lg" variant="outline" className="gap-2">
            <Icon name="Sparkles" size={20} />
            Посадить дерево
          </Button>
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Уровень эволюции: {level}/4</span>
            <span>🌟 Эко-эксперт: {level >= 3 ? 'Да!' : 'Почти...'}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EcoTamagotchi;
