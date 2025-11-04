import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const GoodImpactCalculator = () => {
  const [recycledKg, setRecycledKg] = useState('10');
  const [result, setResult] = useState<string | null>(null);

  const goodImpacts = [
    {
      name: 'Деревьев спасено',
      perKg: 0.017,
      emoji: '🌳',
      description: (count: number) => `Ты спас ${count.toFixed(1)} дерев${count >= 2 ? 'ьев' : 'о'}! Это настоящий лес!`
    },
    {
      name: 'Литров воды сэкономлено',
      perKg: 50,
      emoji: '💧',
      description: (count: number) => `Сэкономлено ${Math.round(count)} литров чистой воды! Это ${Math.round(count / 2)} бутылки по 2 литра!`
    },
    {
      name: 'кВт⋅ч энергии сэкономлено',
      perKg: 5,
      emoji: '⚡',
      description: (count: number) => `Сэкономлено ${Math.round(count)} кВт⋅ч энергии! Хватит на ${Math.round(count / 0.1)} часов работы компьютера!`
    },
    {
      name: 'Кг CO₂ не попало в атмосферу',
      perKg: 2.5,
      emoji: '🌍',
      description: (count: number) => `Предотвращено ${count.toFixed(1)} кг выбросов CO₂! Это как посадить ${Math.round(count / 21)} дерев!`
    },
    {
      name: 'Квадратных метров земли сохранено',
      perKg: 0.1,
      emoji: '🏞️',
      description: (count: number) => `Сохранено ${count.toFixed(1)} м² земли от свалок! Это ${(count / 100).toFixed(2)} соток!`
    },
    {
      name: 'Животных спасено от пластика',
      perKg: 0.05,
      emoji: '🐢',
      description: (count: number) => `Примерно ${count.toFixed(2)} животных не пострадали от твоего пластика! Черепахи говорят спасибо! 🙏`
    },
  ];

  const motivationalQuotes = [
    'Каждый килограмм переработки — это шаг к спасению планеты! 🌟',
    'Твои действия создают волну добра! 🌊',
    'Маленькие дела — огромное значение! 💪',
    'Ты настоящий эко-герой! 🦸',
    'Планета благодарит тебя за заботу! 💚',
    'Твой пример вдохновляет других! ✨',
  ];

  const achievementLevels = [
    { min: 0, max: 5, title: '🌱 Новичок', message: 'Отличное начало! Продолжай в том же духе!' },
    { min: 5, max: 20, title: '🌿 Активист', message: 'Ты уже делаешь большой вклад!' },
    { min: 20, max: 50, title: '🌳 Защитник природы', message: 'Невероятный результат! Ты меняешь мир!' },
    { min: 50, max: 100, title: '🏆 Эко-чемпион', message: 'Потрясающе! Ты настоящий герой планеты!' },
    { min: 100, max: Infinity, title: '👑 Легенда экологии', message: 'НЕВЕРОЯТНО! Ты спасаешь планету!' },
  ];

  const calculateGoodImpact = () => {
    const kg = parseFloat(recycledKg);
    if (isNaN(kg) || kg <= 0) {
      setResult('🤔 Введи положительное число, пожалуйста!');
      return;
    }

    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    const achievement = achievementLevels.find(level => kg >= level.min && kg < level.max) || achievementLevels[0];
    
    const impacts = goodImpacts.map(item => {
      const count = kg * item.perKg;
      return `<div class="flex items-start gap-3 py-3 px-4 bg-white rounded-lg border border-emerald-200 hover:shadow-md transition-shadow">
        <div class="text-3xl">${item.emoji}</div>
        <div class="flex-1">
          <div class="font-bold text-emerald-700">${item.name}</div>
          <div class="text-gray-700">${item.description(count)}</div>
        </div>
      </div>`;
    });

    const yearlyImpact = kg * 12;
    const lifetimeImpact = yearlyImpact * 50;

    const resultText = `
      <div class="space-y-6">
        <div class="text-center p-6 bg-gradient-to-br from-emerald-400 to-green-500 text-white rounded-xl shadow-lg">
          <div class="text-5xl mb-2">${achievement.title}</div>
          <div class="text-xl font-semibold">${achievement.message}</div>
        </div>

        <div class="text-2xl font-bold text-center text-emerald-700">
          ✨ За ${kg} кг переработки ты сделал:
        </div>
        
        <div class="space-y-3">
          ${impacts.join('')}
        </div>

        <div class="grid md:grid-cols-2 gap-4 mt-6">
          <div class="p-4 bg-blue-50 rounded-lg border-2 border-blue-300 text-center">
            <div class="text-3xl mb-2">📅</div>
            <div class="font-semibold text-blue-800">За год:</div>
            <div class="text-2xl font-bold text-blue-600">${yearlyImpact.toFixed(1)} кг</div>
            <div class="text-sm text-blue-700">Вклад в добро растёт!</div>
          </div>
          
          <div class="p-4 bg-purple-50 rounded-lg border-2 border-purple-300 text-center">
            <div class="text-3xl mb-2">🎯</div>
            <div class="font-semibold text-purple-800">За жизнь:</div>
            <div class="text-2xl font-bold text-purple-600">${lifetimeImpact.toFixed(0)} кг</div>
            <div class="text-sm text-purple-700">Твоё наследие планете!</div>
          </div>
        </div>

        <div class="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-300 text-center">
          <div class="text-2xl mb-2">💡</div>
          <div class="text-lg font-semibold text-gray-800">${randomQuote}</div>
        </div>

        <div class="text-center p-4 bg-green-50 rounded-lg border border-green-300">
          <div class="text-sm text-green-700">
            🌍 <strong>Важно!</strong> Каждый грамм переработки имеет значение. Продолжай делать добро!
          </div>
        </div>
      </div>
    `;
    
    setResult(resultText);
  };

  return (
    <Card className="p-8 max-w-3xl mx-auto bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-2 border-emerald-300 shadow-xl">
      <div className="space-y-6">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Icon name="Heart" className="text-red-500" size={40} />
            <h3 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Твой вклад в добро
            </h3>
            <Icon name="Heart" className="text-red-500" size={40} />
          </div>
          <p className="text-lg text-gray-700">
            Узнай, какую пользу ты принёс планете переработкой! 🌍
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="recycled" className="text-lg font-semibold">
              Сколько ты переработал за месяц? (кг)
            </Label>
            <Input
              id="recycled"
              type="number"
              value={recycledKg}
              onChange={(e) => setRecycledKg(e.target.value)}
              placeholder="Например: 10"
              className="text-lg border-2 border-emerald-300 focus:border-emerald-500"
            />
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-blue-50 p-3 rounded-lg border border-blue-200">
              <Icon name="Info" size={16} className="text-blue-600" />
              <span>💡 Средний активист перерабатывает ~10-15 кг в месяц</span>
            </div>
          </div>

          <Button 
            onClick={calculateGoodImpact} 
            className="w-full gap-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white" 
            size="lg"
          >
            <Icon name="Sparkles" size={20} />
            Рассчитать мой вклад!
            <Icon name="Sparkles" size={20} />
          </Button>

          {result && (
            <Card className="p-6 bg-white animate-fade-in shadow-lg border-2 border-emerald-200">
              <div dangerouslySetInnerHTML={{ __html: result }} />
            </Card>
          )}
        </div>

        <div className="pt-4 border-t-2 border-emerald-200 text-center space-y-2">
          <p className="text-lg font-semibold text-emerald-700">
            🌟 Каждое твоё действие делает мир лучше!
          </p>
          <p className="text-sm text-muted-foreground">
            Продолжай перерабатывать и вдохновляй других своим примером! 💪
          </p>
        </div>
      </div>
    </Card>
  );
};

export default GoodImpactCalculator;
