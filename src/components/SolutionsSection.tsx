import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const personalSolutions = [
    {
      icon: 'Recycle',
      title: 'Сортируй мусор дома',
      description: 'Раздели отходы на пластик, стекло, бумагу и органику. Это первый шаг к чистой планете!',
      impact: '-60% мусора на свалках',
      color: 'from-green-500 to-emerald-600',
      emoji: '♻️',
      steps: [
        '🗑️ Купи контейнеры разных цветов',
        '📋 Изучи маркировку пластика',
        '🚮 Найди ближайший пункт приёма',
        '📅 Сдавай отходы 1 раз в неделю'
      ]
    },
    {
      icon: 'ShoppingBag',
      title: 'Используй многоразовое',
      description: 'Замени одноразовые вещи на многоразовые: сумки, бутылки, контейнеры, приборы',
      impact: '-80% пластика в океане',
      color: 'from-blue-500 to-cyan-600',
      emoji: '🛍️',
      steps: [
        '👜 Тканевая сумка вместо пакета',
        '🥤 Своя бутылка вместо покупной воды',
        '☕ Термокружка для кофе',
        '🍱 Контейнеры для еды навынос'
      ]
    },
    {
      icon: 'Leaf',
      title: 'Покупай осознанно',
      description: 'Выбирай товары с минимальной упаковкой, местного производства и экологичные',
      impact: '-50% углеродного следа',
      color: 'from-purple-500 to-pink-600',
      emoji: '🌱',
      steps: [
        '🏪 Развесные продукты вместо упакованных',
        '🥕 Местные фермеры вместо импорта',
        '📦 Минимум упаковки',
        '✅ Эко-маркировки на товарах'
      ]
    },
    {
      icon: 'Droplets',
      title: 'Экономь ресурсы',
      description: 'Бережно используй воду, электричество и тепло — это снижает нагрузку на природу',
      impact: '-40% энергопотребления',
      color: 'from-orange-500 to-red-600',
      emoji: '💧',
      steps: [
        '💡 LED-лампочки вместо обычных',
        '🚿 Душ вместо ванны',
        '🔌 Выключай приборы из розеток',
        '🌡️ Утепли окна и двери'
      ]
    }
  ];

  const citySolutions = [
    {
      icon: 'Building2',
      title: 'Раздельный сбор мусора',
      description: 'Установка контейнеров для разных типов отходов во всех дворах города',
      status: 'В развитии',
      color: 'from-indigo-500 to-purple-600',
      emoji: '🏘️'
    },
    {
      icon: 'Factory',
      title: 'Мусороперерабатывающие заводы',
      description: 'Строительство современных заводов для переработки пластика, стекла и бумаги',
      status: 'Планируется',
      color: 'from-teal-500 to-cyan-600',
      emoji: '🏭'
    },
    {
      icon: 'Trees',
      title: 'Озеленение города',
      description: 'Посадка деревьев, создание парков и зелёных зон для очистки воздуха',
      status: 'Активно',
      color: 'from-green-500 to-lime-600',
      emoji: '🌳'
    },
    {
      icon: 'Bus',
      title: 'Экологичный транспорт',
      description: 'Электробусы, велодорожки и развитие общественного транспорта',
      status: 'В развитии',
      color: 'from-yellow-500 to-orange-600',
      emoji: '🚌'
    }
  ];

  const globalSolutions = [
    {
      title: 'Океан без пластика',
      description: 'К 2030 году убрать 90% пластика из мирового океана',
      progress: 23,
      color: 'from-blue-600 to-cyan-500',
      emoji: '🌊'
    },
    {
      title: 'Углеродная нейтральность',
      description: 'Достичь нулевых выбросов CO₂ к 2050 году',
      progress: 31,
      color: 'from-green-600 to-emerald-500',
      emoji: '🌍'
    },
    {
      title: 'Циркулярная экономика',
      description: 'Переход на модель полной переработки всех отходов',
      progress: 18,
      color: 'from-purple-600 to-pink-500',
      emoji: '♻️'
    },
    {
      title: 'Зелёная энергия',
      description: '100% энергии из возобновляемых источников',
      progress: 42,
      color: 'from-yellow-600 to-orange-500',
      emoji: '⚡'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-9xl animate-pulse">♻️</div>
        <div className="absolute bottom-20 right-20 text-9xl animate-bounce">🌍</div>
        <div className="absolute top-1/2 left-1/2 text-9xl animate-spin-slow">💚</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-7xl font-black mb-6 text-white drop-shadow-2xl">
            💡 РЕШЕНИЯ ПРОБЛЕМЫ МУСОРА
          </h2>
          <p className="text-3xl text-white/90 font-bold mb-8">
            Каждый может изменить мир! Начни прямо сейчас
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-8 py-4 rounded-2xl font-black text-xl transition-all border-4 ${
                activeTab === 'personal'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-white scale-110'
                  : 'bg-white/10 text-white/60 border-white/30 hover:bg-white/20'
              }`}
            >
              👤 ЧТО МОЖЕШЬ ТЫ
            </button>
            <button
              onClick={() => setActiveTab('city')}
              className={`px-8 py-4 rounded-2xl font-black text-xl transition-all border-4 ${
                activeTab === 'city'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-white scale-110'
                  : 'bg-white/10 text-white/60 border-white/30 hover:bg-white/20'
              }`}
            >
              🏙️ ЧТО ДЕЛАЕТ ГОРОД
            </button>
            <button
              onClick={() => setActiveTab('global')}
              className={`px-8 py-4 rounded-2xl font-black text-xl transition-all border-4 ${
                activeTab === 'global'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white border-white scale-110'
                  : 'bg-white/10 text-white/60 border-white/30 hover:bg-white/20'
              }`}
            >
              🌍 ГЛОБАЛЬНЫЕ ЦЕЛИ
            </button>
          </div>
        </div>

        {activeTab === 'personal' && (
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {personalSolutions.map((solution, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-gray-100 border-4 border-white/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 text-9xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {solution.emoji}
                </div>

                <div className="relative z-10">
                  <div className={`inline-block bg-gradient-to-r ${solution.color} p-4 rounded-2xl mb-4`}>
                    <Icon name={solution.icon as any} size={48} className="text-white" />
                  </div>

                  <h3 className={`text-3xl font-black mb-4 bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                    {solution.title}
                  </h3>

                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className={`bg-gradient-to-r ${solution.color} text-white px-6 py-3 rounded-xl inline-block mb-6 font-bold text-lg`}>
                    📊 Эффект: {solution.impact}
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-black text-xl text-gray-800 mb-3">Шаги к действию:</h4>
                    {solution.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/50 p-3 rounded-lg hover:bg-white/80 transition-all">
                        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-gray-700 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'city' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {citySolutions.map((solution, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-gray-100 border-4 border-white/50 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {solution.emoji}
                </div>

                <div className="relative z-10">
                  <div className={`inline-block bg-gradient-to-r ${solution.color} p-4 rounded-2xl mb-4`}>
                    <Icon name={solution.icon as any} size={40} className="text-white" />
                  </div>

                  <h3 className={`text-2xl font-black mb-3 bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                    {solution.title}
                  </h3>

                  <p className="text-gray-700 text-base mb-4 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${solution.color}`}>
                    {solution.status === 'Активно' && '✅ '}
                    {solution.status === 'В развитии' && '🔄 '}
                    {solution.status === 'Планируется' && '📅 '}
                    {solution.status}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'global' && (
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {globalSolutions.map((goal, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-gray-100 border-4 border-white/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-6xl">{goal.emoji}</div>
                  <div className="flex-1">
                    <h3 className={`text-3xl font-black mb-3 bg-gradient-to-r ${goal.color} bg-clip-text text-transparent`}>
                      {goal.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-700">Прогресс</span>
                    <span className={`font-black text-2xl bg-gradient-to-r ${goal.color} bg-clip-text text-transparent`}>
                      {goal.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${goal.color} transition-all duration-1000 flex items-center justify-end px-2`}
                      style={{ width: `${goal.progress}%` }}
                    >
                      <span className="text-white font-bold text-sm">🚀</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Card className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 border-4 border-white p-10 max-w-4xl">
            <div className="text-7xl mb-6">🌟✨🌍</div>
            <h3 className="text-5xl font-black mb-6 text-white drop-shadow-lg">
              НАЧНИ ПРЯМО СЕЙЧАС!
            </h3>
            <p className="text-2xl text-white leading-relaxed mb-8">
              Не жди понедельника, нового года или указа президента. <br/>
              <span className="font-black text-3xl">Каждое маленькое действие имеет значение!</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-2xl border-2 border-white/50">
                <div className="text-4xl mb-2">♻️</div>
                <div className="text-white font-bold">Сортируй мусор</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-2xl border-2 border-white/50">
                <div className="text-4xl mb-2">🌳</div>
                <div className="text-white font-bold">Сажай деревья</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-2xl border-2 border-white/50">
                <div className="text-4xl mb-2">💚</div>
                <div className="text-white font-bold">Делись знаниями</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-2xl border-2 border-white/50">
                <div className="text-4xl mb-2">🚮</div>
                <div className="text-white font-bold">Убирай за собой</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;