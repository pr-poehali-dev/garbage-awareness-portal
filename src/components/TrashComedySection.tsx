import { Card } from '@/components/ui/card';
import { useState } from 'react';

const TrashComedySection = () => {
  const [selectedJoke, setSelectedJoke] = useState(0);

  const trashJokes = [
    {
      setup: 'Почему пластиковая бутылка не пошла на свидание?',
      punchline: 'Потому что она уже 500 лет не разлагается! 😱',
      emoji: '🥤'
    },
    {
      setup: 'Что сказал мусорный пакет океану?',
      punchline: 'Привет, я тут на 1000 лет остановился! 🌊',
      emoji: '🗑️'
    },
    {
      setup: 'Почему батарейка грустная?',
      punchline: 'Её выбросили в обычный мусор, а она токсичная! ☠️',
      emoji: '🔋'
    },
    {
      setup: 'Что говорит планета Земля психологу?',
      punchline: 'Я задыхаюсь от мусора, помогите! 🌍😭',
      emoji: '🌎'
    }
  ];

  const trashHeroes = [
    {
      name: 'СУПЕР-СОРТИРОВЩИК',
      power: 'Разделяет мусор со скоростью света!',
      phrase: '"Пластик налево, стекло направо!"',
      emoji: '🦸‍♂️',
      color: 'from-blue-500 to-cyan-500',
      stats: { speed: 95, eco: 100, power: 88 }
    },
    {
      name: 'КАПИТАН КОМПОСТ',
      power: 'Превращает органику в супер-удобрение!',
      phrase: '"Да здравствует гумус!"',
      emoji: '🌱',
      color: 'from-green-500 to-lime-500',
      stats: { speed: 70, eco: 100, power: 92 }
    },
    {
      name: 'ПОВЕЛИТЕЛЬ ПЕРЕРАБОТКИ',
      power: 'Дарит мусору вторую жизнь!',
      phrase: '"Из бутылки сделаем курточку!"',
      emoji: '♻️',
      color: 'from-purple-500 to-pink-500',
      stats: { speed: 85, eco: 98, power: 95 }
    },
    {
      name: 'ЭКО-ВОИН',
      power: 'Борется с пластиковыми пакетами!',
      phrase: '"Только многоразовое!"',
      emoji: '🛡️',
      color: 'from-orange-500 to-red-500',
      stats: { speed: 90, eco: 95, power: 100 }
    }
  ];

  const trashVillains = [
    {
      name: 'ПЛАСТИКОВЫЙ МОНСТР',
      crime: 'Живёт 500 лет, убивает океаны',
      weakness: 'Переработка',
      emoji: '👹',
      danger: 100
    },
    {
      name: 'БАТАРЕЙКА-УБИЙЦА',
      crime: 'Отравляет 20м² земли',
      weakness: 'Спецпункты приёма',
      emoji: '☠️',
      danger: 95
    },
    {
      name: 'СТИХИЙНАЯ СВАЛКА',
      crime: 'Растёт каждый день, воняет на километры',
      weakness: 'Раздельный сбор',
      emoji: '🗑️',
      danger: 90
    },
    {
      name: 'ПОЛИЭТИЛЕНОВЫЙ ПАКЕТ',
      crime: 'Душит черепах, птиц, рыб',
      weakness: 'Многоразовые сумки',
      emoji: '👺',
      danger: 85
    }
  ];

  const funFacts = [
    {
      fact: 'Если весь мусор Омска за год сложить в башню...',
      result: '...она будет выше Бурдж-Халифы в 12 раз! 🏢🚀',
      emoji: '🗼',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      fact: 'Пластиковая бутылка разлагается 500 лет...',
      result: '...это как 6 жизней черепахи! 🐢🐢🐢🐢🐢🐢',
      emoji: '🥤',
      color: 'from-blue-400 to-purple-500'
    },
    {
      fact: 'Одна батарейка в земле отравит...',
      result: '...20м² земли = 2 парковочных места! 🚗🚗',
      emoji: '🔋',
      color: 'from-red-400 to-pink-500'
    },
    {
      fact: 'Если переработать 1 тонну бумаги...',
      result: '...спасёшь 17 деревьев! 🌳×17',
      emoji: '📄',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {['🗑️', '♻️', '🌍', '💚', '🥤', '📦'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-8xl font-black mb-6 text-white drop-shadow-2xl animate-pulse">
            🤣 МУСОРНЫЙ ЮМОР 🎭
          </h2>
          <p className="text-4xl text-white/90 font-bold">
            Смеёмся и спасаем планету одновременно!
          </p>
        </div>

        {/* АНЕКДОТЫ */}
        <div className="mb-20">
          <h3 className="text-5xl font-black text-white text-center mb-8">
            😂 МУСОРНЫЕ ШУТКИ
          </h3>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-yellow-300 to-orange-400 border-8 border-white p-12 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-9xl opacity-20 animate-spin-slow">
                {trashJokes[selectedJoke].emoji}
              </div>
              <div className="relative z-10">
                <div className="text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
                  {trashJokes[selectedJoke].setup}
                </div>
                <div className="text-4xl font-black text-white mb-8 bg-gradient-to-r from-pink-600 to-purple-600 p-6 rounded-2xl">
                  {trashJokes[selectedJoke].punchline}
                </div>
                <div className="flex gap-3 justify-center flex-wrap">
                  {trashJokes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedJoke(index)}
                      className={`w-16 h-16 rounded-full font-black text-2xl transition-all ${
                        selectedJoke === index
                          ? 'bg-white text-purple-600 scale-125'
                          : 'bg-white/50 text-white hover:bg-white hover:text-purple-600'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* СУПЕРГЕРОИ */}
        <div className="mb-20">
          <h3 className="text-5xl font-black text-white text-center mb-8">
            🦸 ЭКО-СУПЕРГЕРОИ
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {trashHeroes.map((hero, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-gray-100 border-4 border-white p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:rotate-3 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${hero.color}`}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-8xl text-center mb-4 animate-bounce">{hero.emoji}</div>
                  <h4 className={`text-2xl font-black text-center mb-3 bg-gradient-to-r ${hero.color} bg-clip-text text-transparent`}>
                    {hero.name}
                  </h4>
                  <p className="text-gray-700 text-center mb-4 font-bold">{hero.power}</p>
                  <p className="text-gray-600 text-center italic mb-4 text-sm">
                    {hero.phrase}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold">⚡ Скорость</span>
                      <span className="text-xs font-black">{hero.stats.speed}%</span>
                    </div>
                    <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${hero.color}`} style={{ width: `${hero.stats.speed}%` }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold">🌍 Экология</span>
                      <span className="text-xs font-black">{hero.stats.eco}%</span>
                    </div>
                    <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${hero.color}`} style={{ width: `${hero.stats.eco}%` }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold">💪 Сила</span>
                      <span className="text-xs font-black">{hero.stats.power}%</span>
                    </div>
                    <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${hero.color}`} style={{ width: `${hero.stats.power}%` }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ЗЛОДЕИ */}
        <div className="mb-20">
          <h3 className="text-5xl font-black text-white text-center mb-8">
            👹 ЭКО-ЗЛОДЕИ
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {trashVillains.map((villain, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-700 border-4 border-red-500 p-6 hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 hover:rotate-2"
              >
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-pulse">{villain.emoji}</div>
                  <h4 className="text-2xl font-black text-red-500 mb-3">
                    {villain.name}
                  </h4>
                  <p className="text-white mb-4 font-bold">⚠️ {villain.crime}</p>
                  <div className="bg-red-500 text-white px-4 py-2 rounded-full font-black mb-4">
                    ОПАСНОСТЬ: {villain.danger}%
                  </div>
                  <div className="bg-green-500 text-white px-4 py-3 rounded-xl font-bold">
                    🛡️ Слабость: {villain.weakness}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ВЕСЕЛЫЕ ФАКТЫ */}
        <div className="mb-12">
          <h3 className="text-5xl font-black text-white text-center mb-8">
            🤯 ДИКИЕ ФАКТЫ
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {funFacts.map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-gray-100 border-4 border-white p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-7xl">{item.emoji}</div>
                  <div className="flex-1">
                    <p className="text-xl font-bold text-gray-800 mb-3">
                      {item.fact}
                    </p>
                    <p className={`text-3xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.result}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ПРИЗЫВ */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 border-8 border-white p-10 max-w-4xl transform hover:scale-105 transition-transform">
            <div className="text-8xl mb-6 animate-bounce">🎉🌍💚</div>
            <h3 className="text-6xl font-black mb-6 text-white drop-shadow-lg">
              СТАНЬ ЭКО-СУПЕРГЕРОЕМ!
            </h3>
            <p className="text-3xl text-white leading-relaxed mb-6">
              Сортируй мусор, спасай планету, шути про это! 
            </p>
            <div className="text-5xl font-black text-white">
              ♻️ = 😎 + 🌎
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrashComedySection;