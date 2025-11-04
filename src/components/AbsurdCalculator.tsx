import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const AbsurdCalculator = () => {
  const [wasteKg, setWasteKg] = useState('50');
  const [result, setResult] = useState<string | null>(null);

  const absurdComparisons = [
    {
      name: 'iPhone 15 Pro',
      weight: 0.187,
      emoji: '📱',
      fun: (count: number) => `Это ${Math.round(count)} айфонов! Можно открыть магазин Apple! 🍎`
    },
    {
      name: 'Биг Маков',
      weight: 0.215,
      emoji: '🍔',
      fun: (count: number) => `Или ${Math.round(count)} Биг Маков! Твой мусор весит как ${Math.round(count / 365)} лет фастфуда! 😱`
    },
    {
      name: 'Золотых слитков',
      weight: 1,
      emoji: '🪙',
      fun: (count: number) => `${Math.round(count)} кг золота! Ты выбрасываешь состояние! (если бы мусор был золотом) 💰`
    },
    {
      name: 'Хомяков',
      weight: 0.15,
      emoji: '🐹',
      fun: (count: number) => `Это вес ${Math.round(count)} хомяков! Целая армия грызунов! 🐹🐹🐹`
    },
    {
      name: 'Пицц Маргарита',
      weight: 0.5,
      emoji: '🍕',
      fun: (count: number) => `${Math.round(count)} пицц! Можно накормить весь класс! 🎉`
    },
    {
      name: 'Котиков',
      weight: 4.5,
      emoji: '🐱',
      fun: (count: number) => `Примерно ${count.toFixed(1)} котика! Мяу! 😺`
    },
    {
      name: 'PlayStation 5',
      weight: 4.5,
      emoji: '🎮',
      fun: (count: number) => `${count.toFixed(1)} PlayStation 5! Хватит на всех друзей! 🕹️`
    },
    {
      name: 'Бутылок воды',
      weight: 0.5,
      emoji: '💧',
      fun: (count: number) => `${Math.round(count)} пластиковых бутылок! Океан плачет... 🌊😢`
    },
  ];

  const ecoFacts = [
    'Один пластиковый пакет разлагается 400-1000 лет! 🤯',
    'Переработка 1 тонны бумаги спасает 17 деревьев! 🌳',
    'Из 1 тонны пластика можно сделать 50 скамеек для парка! 🪑',
    'Стеклянная бутылка на свалке будет разлагаться 1 миллион лет! ⏰',
    'Переработка алюминия экономит 95% энергии! ⚡',
    'Каждую минуту в океан попадает 1 грузовик пластика! 🚛',
  ];

  const calculateAbsurdity = () => {
    const kg = parseFloat(wasteKg);
    if (isNaN(kg) || kg <= 0) {
      setResult('🤔 Введи нормальное число, пожалуйста!');
      return;
    }

    const randomFact = ecoFacts[Math.floor(Math.random() * ecoFacts.length)];
    
    const comparisons = absurdComparisons.map(item => {
      const count = kg / item.weight;
      return `${item.emoji} ${item.fun(count)}`;
    });

    const resultText = `
      <div class="space-y-4">
        <div class="text-xl font-bold text-primary">Твои ${kg} кг мусора в год это:</div>
        ${comparisons.map(c => `<div class="text-lg py-2">• ${c}</div>`).join('')}
        <div class="mt-6 p-4 bg-emerald-100 rounded-lg border-2 border-emerald-300">
          <div class="font-semibold text-emerald-800">💡 Эко-факт:</div>
          <div class="text-emerald-700">${randomFact}</div>
        </div>
        <div class="mt-4 text-sm text-muted-foreground italic">
          ${kg > 100 ? '😱 Это многовато! Попробуй сортировать отходы!' : ''}
          ${kg <= 100 && kg > 50 ? '🤔 Средний показатель. Можно лучше!' : ''}
          ${kg <= 50 ? '🌟 Отличный результат! Ты эко-герой!' : ''}
        </div>
      </div>
    `;
    
    setResult(resultText);
  };

  return (
    <Card className="p-8 max-w-3xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-bold">🤡 Калькулятор Абсурда</h3>
          <p className="text-muted-foreground">
            Узнай, во что можно превратить твой мусор! (если бы мы жили в параллельной вселенной)
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="waste">Сколько мусора ты выбрасываешь в год? (кг)</Label>
            <Input
              id="waste"
              type="number"
              value={wasteKg}
              onChange={(e) => setWasteKg(e.target.value)}
              placeholder="Например: 50"
              className="text-lg"
            />
            <p className="text-sm text-muted-foreground">
              💡 Средний человек выбрасывает ~400 кг мусора в год
            </p>
          </div>

          <Button onClick={calculateAbsurdity} className="w-full gap-2" size="lg">
            <Icon name="Calculator" size={20} />
            Рассчитать абсурд!
          </Button>

          {result && (
            <Card className="p-6 bg-white animate-fade-in">
              <div dangerouslySetInnerHTML={{ __html: result }} />
            </Card>
          )}
        </div>

        <div className="pt-4 border-t text-center">
          <p className="text-sm text-muted-foreground">
            🎭 Калькулятор создан для веселья и мотивации к переработке! <br />
            Настоящая польза от сортировки мусора — это чистая планета! 🌍
          </p>
        </div>
      </div>
    </Card>
  );
};

export default AbsurdCalculator;
