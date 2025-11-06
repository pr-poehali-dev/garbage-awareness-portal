import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface WasteItem {
  id: string;
  name: string;
  emoji: string;
  unit: string;
  impacts: {
    co2: number;
    energy: number;
    water: number;
    trees: number;
    animals: number;
  };
}

const wasteItems: WasteItem[] = [
  {
    id: 'plastic_bottle',
    name: 'Пластиковая бутылка',
    emoji: '🍼',
    unit: 'штук',
    impacts: {
      co2: 0.082,
      energy: 0.45,
      water: 3,
      trees: 0,
      animals: 0.001
    }
  },
  {
    id: 'paper',
    name: 'Бумага A4',
    emoji: '📄',
    unit: 'листов',
    impacts: {
      co2: 0.005,
      energy: 0.05,
      water: 10,
      trees: 0.0001,
      animals: 0
    }
  },
  {
    id: 'aluminum_can',
    name: 'Алюминиевая банка',
    emoji: '🥫',
    unit: 'штук',
    impacts: {
      co2: 0.17,
      energy: 2.5,
      water: 15,
      trees: 0,
      animals: 0
    }
  },
  {
    id: 'plastic_bag',
    name: 'Пластиковый пакет',
    emoji: '🛍️',
    unit: 'штук',
    impacts: {
      co2: 0.04,
      energy: 0.2,
      water: 1,
      trees: 0,
      animals: 0.002
    }
  },
  {
    id: 'battery',
    name: 'Батарейка',
    emoji: '🔋',
    unit: 'штук',
    impacts: {
      co2: 0.3,
      energy: 1.5,
      water: 50,
      trees: 0,
      animals: 0.005
    }
  }
];

const ImpactCalculator = () => {
  const [selectedItem, setSelectedItem] = useState<WasteItem>(wasteItems[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [timeframe, setTimeframe] = useState<'day' | 'week' | 'month' | 'year'>('month');

  const timeframeMultipliers = {
    day: 1,
    week: 7,
    month: 30,
    year: 365
  };

  const timeframeLabels = {
    day: 'день',
    week: 'неделю',
    month: 'месяц',
    year: 'год'
  };

  const multiplier = timeframeMultipliers[timeframe];
  const totalQuantity = quantity * multiplier;

  const totalImpact = {
    co2: (selectedItem.impacts.co2 * totalQuantity).toFixed(2),
    energy: (selectedItem.impacts.energy * totalQuantity).toFixed(2),
    water: (selectedItem.impacts.water * totalQuantity).toFixed(0),
    trees: (selectedItem.impacts.trees * totalQuantity).toFixed(3),
    animals: (selectedItem.impacts.animals * totalQuantity).toFixed(3)
  };

  const omskPopulation = 1200000;
  const omskImpact = {
    co2: (parseFloat(totalImpact.co2) * omskPopulation / 1000).toFixed(0),
    energy: (parseFloat(totalImpact.energy) * omskPopulation / 1000).toFixed(0),
    water: (parseFloat(totalImpact.water) * omskPopulation / 1000000).toFixed(1),
    trees: (parseFloat(totalImpact.trees) * omskPopulation).toFixed(0),
    animals: (parseFloat(totalImpact.animals) * omskPopulation).toFixed(0)
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_50px,rgba(255,255,255,0.05)_50px,rgba(255,255,255,0.05)_100px)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <div className="text-5xl md:text-6xl mb-4">🧮🌍💡</div>
          <h2 className="text-2xl md:text-4xl font-black mb-3 text-gray-900 drop-shadow-2xl">
            КАЛЬКУЛЯТОР ЭКОСЛЕДА
          </h2>
          <p className="text-base md:text-xl text-gray-800 font-bold max-w-5xl mx-auto">
            Узнай свой вклад в спасение планеты!
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Card className="bg-white/95 backdrop-blur border-4 border-white p-10 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
                📊 НАСТРОЙ КАЛЬКУЛЯТОР
              </h3>
              <p className="text-sm md:text-base text-gray-700 font-bold">
                Выбери тип мусора, количество и период — узнай реальный эффект переработки!
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <div>
                <label className="block text-lg md:text-xl font-black text-gray-900 mb-3">
                  1️⃣ ТИП МУСОРА
                </label>
                <div className="space-y-3">
                  {wasteItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className={`w-full p-4 rounded-xl border-4 font-bold text-lg transition-all ${
                        selectedItem.id === item.id
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-green-700 scale-105'
                          : 'bg-white text-gray-900 border-gray-300 hover:border-green-400'
                      }`}
                    >
                      <span className="text-2xl mr-2">{item.emoji}</span>
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg md:text-xl font-black text-gray-900 mb-3">
                  2️⃣ КОЛИЧЕСТВО
                </label>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-300">
                  <div className="text-center mb-3">
                    <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">
                      {quantity}
                    </div>
                    <p className="text-sm md:text-base font-bold text-gray-700">
                      {selectedItem.unit} в {timeframeLabels[timeframe]}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-black text-lg py-3"
                    >
                      <Icon name="Minus" size={20} />
                    </Button>
                    <Button
                      onClick={() => setQuantity(quantity + 1)}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white font-black text-lg py-3"
                    >
                      <Icon name="Plus" size={20} />
                    </Button>
                  </div>
                  <div className="mt-4 flex gap-2">
                    {[5, 10, 50, 100].map((num) => (
                      <button
                        key={num}
                        onClick={() => setQuantity(num)}
                        className="flex-1 bg-white border-2 border-blue-400 rounded-lg py-1.5 text-sm font-bold text-gray-900 hover:bg-blue-100"
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-lg md:text-xl font-black text-gray-900 mb-3">
                  3️⃣ ПЕРИОД
                </label>
                <div className="space-y-3">
                  {(['day', 'week', 'month', 'year'] as const).map((period) => (
                    <button
                      key={period}
                      onClick={() => setTimeframe(period)}
                      className={`w-full p-4 rounded-xl border-4 font-bold text-lg transition-all ${
                        timeframe === period
                          ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white border-orange-700 scale-105'
                          : 'bg-white text-gray-900 border-gray-300 hover:border-orange-400'
                      }`}
                    >
                      {period === 'day' && '📅 В день'}
                      {period === 'week' && '🗓️ В неделю'}
                      {period === 'month' && '📆 В месяц'}
                      {period === 'year' && '🎊 В год'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 border-4 border-orange-700 p-6">
              <div className="text-center">
                <div className="text-5xl mb-3">🎯</div>
                <h4 className="text-3xl font-black text-white mb-2">ИТОГО</h4>
                <p className="text-xl text-white/95 font-bold">
                  Ты перерабатываешь <span className="text-5xl font-black">{totalQuantity}</span> {selectedItem.unit} за {timeframeLabels[timeframe]}
                </p>
              </div>
            </Card>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-green-500 to-emerald-600 border-4 border-white p-10">
              <div className="text-center mb-8">
                <div className="text-7xl mb-4">👤</div>
                <h3 className="text-5xl font-black text-white drop-shadow-lg">
                  ТВОЙ ВКЛАД
                </h3>
                <p className="text-2xl text-white/90 mt-2">за {timeframeLabels[timeframe]}</p>
              </div>

              <div className="space-y-4">
                <Card className="bg-white/95 p-6 border-4 border-green-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">☁️</div>
                      <div>
                        <h4 className="text-xl font-black text-gray-900">CO₂ НЕ ВЫБРОШЕН</h4>
                        <p className="text-sm text-gray-600 font-bold">Парниковый газ</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-black text-green-600">{totalImpact.co2}</p>
                      <p className="text-sm font-bold text-gray-700">кг</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/95 p-6 border-4 border-yellow-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">⚡</div>
                      <div>
                        <h4 className="text-xl font-black text-gray-900">ЭНЕРГИЯ СОХРАНЕНА</h4>
                        <p className="text-sm text-gray-600 font-bold">Электричество</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-black text-orange-600">{totalImpact.energy}</p>
                      <p className="text-sm font-bold text-gray-700">кВт⋅ч</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/95 p-6 border-4 border-blue-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">💧</div>
                      <div>
                        <h4 className="text-xl font-black text-gray-900">ВОДА СЭКОНОМЛЕНА</h4>
                        <p className="text-sm text-gray-600 font-bold">Чистая вода</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-black text-blue-600">{totalImpact.water}</p>
                      <p className="text-sm font-bold text-gray-700">литров</p>
                    </div>
                  </div>
                </Card>

                {parseFloat(totalImpact.trees) > 0 && (
                  <Card className="bg-white/95 p-6 border-4 border-green-400">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-5xl">🌳</div>
                        <div>
                          <h4 className="text-xl font-black text-gray-900">ДЕРЕВЬЯ СПАСЕНЫ</h4>
                          <p className="text-sm text-gray-600 font-bold">Не вырублены</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-4xl font-black text-green-700">{totalImpact.trees}</p>
                        <p className="text-sm font-bold text-gray-700">штук</p>
                      </div>
                    </div>
                  </Card>
                )}

                {parseFloat(totalImpact.animals) > 0 && (
                  <Card className="bg-white/95 p-6 border-4 border-purple-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-5xl">🐢</div>
                        <div>
                          <h4 className="text-xl font-black text-gray-900">ЖИВОТНЫЕ СПАСЕНЫ</h4>
                          <p className="text-sm text-gray-600 font-bold">От мусора</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-4xl font-black text-purple-600">{totalImpact.animals}</p>
                        <p className="text-sm font-bold text-gray-700">жизней</p>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-red-500 to-pink-600 border-4 border-white p-10">
              <div className="text-center mb-8">
                <div className="text-7xl mb-4">🏙️</div>
                <h3 className="text-5xl font-black text-white drop-shadow-lg">
                  ВЕСЬ ОМСК
                </h3>
                <p className="text-2xl text-white/90 mt-2">1.2 миллиона жителей!</p>
              </div>

              <div className="space-y-4">
                <Card className="bg-white/95 p-6 border-4 border-red-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">☁️</div>
                      <div>
                        <h4 className="text-xl font-black text-gray-900">CO₂ ОБЩИЙ</h4>
                        <p className="text-sm text-gray-600 font-bold">За {timeframeLabels[timeframe]}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-black text-red-600">{omskImpact.co2}</p>
                      <p className="text-sm font-bold text-gray-700">ТОНН</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/95 p-6 border-4 border-orange-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">⚡</div>
                      <div>
                        <h4 className="text-xl font-black text-gray-900">ЭНЕРГИЯ ОБЩАЯ</h4>
                        <p className="text-sm text-gray-600 font-bold">За {timeframeLabels[timeframe]}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-black text-orange-600">{omskImpact.energy}</p>
                      <p className="text-sm font-bold text-gray-700">МВт⋅ч</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/95 p-6 border-4 border-blue-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">💧</div>
                      <div>
                        <h4 className="text-xl font-black text-gray-900">ВОДА ОБЩАЯ</h4>
                        <p className="text-sm text-gray-600 font-bold">За {timeframeLabels[timeframe]}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-black text-blue-600">{omskImpact.water}</p>
                      <p className="text-sm font-bold text-gray-700">млн л</p>
                    </div>
                  </div>
                </Card>

                {parseInt(omskImpact.trees) > 0 && (
                  <Card className="bg-white/95 p-6 border-4 border-green-400">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-5xl">🌳</div>
                        <div>
                          <h4 className="text-xl font-black text-gray-900">ДЕРЕВЬЯ</h4>
                          <p className="text-sm text-gray-600 font-bold">За {timeframeLabels[timeframe]}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-4xl font-black text-green-700">{omskImpact.trees}</p>
                        <p className="text-sm font-bold text-gray-700">штук</p>
                      </div>
                    </div>
                  </Card>
                )}

                {parseInt(omskImpact.animals) > 0 && (
                  <Card className="bg-white/95 p-6 border-4 border-purple-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-5xl">🐢</div>
                        <div>
                          <h4 className="text-xl font-black text-gray-900">ЖИВОТНЫЕ</h4>
                          <p className="text-sm text-gray-600 font-bold">За {timeframeLabels[timeframe]}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-4xl font-black text-purple-600">{omskImpact.animals}</p>
                        <p className="text-sm font-bold text-gray-700">жизней</p>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 border-4 border-white p-10 mt-8">
            <div className="text-center">
              <div className="text-7xl mb-6">🌍✨🚀</div>
              <h3 className="text-5xl font-black text-white mb-6 drop-shadow-2xl">
                ВМЕСТЕ МЫ СИЛА!
              </h3>
              <p className="text-3xl text-white/95 font-bold mb-8 max-w-4xl mx-auto">
                Если каждый житель Омска начнёт перерабатывать хотя бы 1 предмет в день — 
                мы спасём планету быстрее, чем думаем!
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/95 rounded-2xl p-6 border-4 border-green-400">
                  <div className="text-6xl mb-3">💚</div>
                  <h4 className="text-2xl font-black text-gray-900 mb-2">НАЧНИ ПРЯМО СЕЙЧАС</h4>
                  <p className="text-lg text-gray-800 font-bold">Каждая бутылка имеет значение!</p>
                </div>
                <div className="bg-white/95 rounded-2xl p-6 border-4 border-blue-400">
                  <div className="text-6xl mb-3">👥</div>
                  <h4 className="text-2xl font-black text-gray-900 mb-2">РАССКАЖИ ДРУЗЬЯМ</h4>
                  <p className="text-lg text-gray-800 font-bold">Вместе мы изменим Омск!</p>
                </div>
                <div className="bg-white/95 rounded-2xl p-6 border-4 border-purple-400">
                  <div className="text-6xl mb-3">📈</div>
                  <h4 className="text-2xl font-black text-gray-900 mb-2">СЛЕДИ ЗА ПРОГРЕССОМ</h4>
                  <p className="text-lg text-gray-800 font-bold">Смотри, как растёт твой вклад!</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactCalculator;