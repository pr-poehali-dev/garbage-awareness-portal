import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface BeforeAfterItem {
  location: string;
  emoji: string;
  beforeText: string;
  afterText: string;
  shockFact: string;
  color: string;
}

const BeforeAfterGallery = () => {
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({
    0: 50,
    1: 50,
    2: 50,
    3: 50,
    4: 50,
    5: 50
  });

  const locations: BeforeAfterItem[] = [
    {
      location: 'Птичья гавань',
      emoji: '🦆',
      beforeText: '155 видов птиц плавают в чистой воде, дети кормят уточек',
      afterText: 'Пластиковые пакеты плавают вместо птиц, утки улетели навсегда',
      shockFact: '1 пластиковый пакет убивает морскую птицу за 3 дня',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      location: 'Парк на Королёва',
      emoji: '🚀',
      beforeText: 'Космический парк, зелёные аллеи, семьи на пикниках',
      afterText: 'Горы мусора после выходных, бутылки и окурки вместо цветов',
      shockFact: 'Окурок разлагается 12 лет и отравляет 200л воды',
      color: 'from-purple-500 to-pink-500'
    },
    {
      location: 'Берег Иртыша',
      emoji: '🌊',
      beforeText: 'Чистый песок, рыбаки ловят рыбу, дети купаются',
      afterText: 'Пластиковые бутылки по всему берегу, рыба ушла, купаться опасно',
      shockFact: 'Пластик в реке становится микропластиком и попадает в рыбу',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      location: 'Зелёный остров',
      emoji: '🏝️',
      beforeText: 'Аттракционы работают, газоны зелёные, воздух свежий',
      afterText: 'Мусорные баки переполнены, на газонах лежат пакеты с едой',
      shockFact: 'Органический мусор выделяет метан — газ в 25 раз опаснее CO₂',
      color: 'from-green-500 to-lime-500'
    },
    {
      location: 'Лесопарк',
      emoji: '🌲',
      beforeText: 'Густой лес, грибы, белки прыгают по деревьям',
      afterText: 'Стихийные свалки между деревьями, костры выжигают траву',
      shockFact: '1 стеклянная бутылка может стать линзой и сжечь лес',
      color: 'from-amber-500 to-orange-500'
    },
    {
      location: 'Детская площадка',
      emoji: '🎠',
      beforeText: 'Дети играют в песочнице, родители на лавочках',
      afterText: 'Битое стекло в песке, шприцы в траве, дети не могут играть',
      shockFact: 'Битое стекло в песочнице может остаться там до 4000 лет',
      color: 'from-red-500 to-rose-500'
    }
  ];

  const trashCharacters = [
    {
      name: 'Пакетик Грустный',
      emoji: '🛍️',
      face: '(╥﹏╥)',
      quote: 'Меня использовали 5 минут... Теперь я буду плавать в реке 200 лет...',
      lifespan: '200 лет',
      color: 'bg-yellow-100 border-yellow-400'
    },
    {
      name: 'Банка Одинокая',
      emoji: '🥫',
      face: '(｡•́︿•̀｡)',
      quote: 'Меня не сдали на переработку... А я могла бы стать новой банкой...',
      lifespan: '500 лет',
      color: 'bg-gray-100 border-gray-400'
    },
    {
      name: 'Бутылёк Печальный',
      emoji: '🍼',
      face: '(ಥ﹏ಥ)',
      quote: 'Я превратился в микропластик и теперь плаваю в рыбе... Которую съедят люди...',
      lifespan: '450 лет',
      color: 'bg-blue-100 border-blue-400'
    },
    {
      name: 'Стаканчик Брошенный',
      emoji: '🥤',
      face: '(╯︵╰,)',
      quote: 'Я держал кофе 10 минут... Теперь я буду на свалке вечность...',
      lifespan: '50 лет',
      color: 'bg-red-100 border-red-400'
    },
    {
      name: 'Окурок Ядовитый',
      emoji: '🚬',
      face: '(×_×)',
      quote: 'Я отравил 200 литров воды... И буду разлагаться 12 лет...',
      lifespan: '12 лет',
      color: 'bg-orange-100 border-orange-400'
    },
    {
      name: 'Пакетик Чайный',
      emoji: '☕',
      face: '(╥_╥)',
      quote: 'Во мне был микропластик... Теперь я в океане... И в желудках рыб...',
      lifespan: '100 лет',
      color: 'bg-green-100 border-green-400'
    }
  ];

  const handleSliderChange = (index: number, value: number) => {
    setSliderPositions(prev => ({ ...prev, [index]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 text-transparent bg-clip-text">
            😱 Превращение: До и После
          </h2>
          <p className="text-2xl text-gray-300 mb-4">
            Один момент — и красота превращается в кошмар
          </p>
          <Badge className="text-xl px-6 py-3 bg-red-500 text-white animate-pulse">
            ⚠️ Реальность, которую мы создаём своими руками
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {locations.map((location, index) => (
            <Card key={index} className={`overflow-hidden border-4 border-gray-700 bg-gradient-to-br ${location.color} shadow-2xl hover:scale-105 transition-transform`}>
              <CardHeader className="bg-black/50 backdrop-blur">
                <CardTitle className="flex items-center justify-center gap-3 text-white text-2xl">
                  <span className="text-4xl">{location.emoji}</span>
                  {location.location}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative bg-white rounded-xl overflow-hidden mb-4 h-64">
                  <div className="absolute inset-0 flex">
                    <div 
                      className="h-full bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center text-center p-6 transition-all"
                      style={{ width: `${sliderPositions[index]}%` }}
                    >
                      <div className="text-green-800">
                        <div className="text-4xl mb-3">✨</div>
                        <p className="font-semibold text-sm leading-relaxed">{location.beforeText}</p>
                      </div>
                    </div>
                    <div 
                      className="h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-center p-6 transition-all"
                      style={{ width: `${100 - sliderPositions[index]}%` }}
                    >
                      <div className="text-white">
                        <div className="text-4xl mb-3">☠️</div>
                        <p className="font-semibold text-sm leading-relaxed">{location.afterText}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl" style={{ left: `${sliderPositions[index]}%`, transform: 'translateX(-50%)' }}>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-gray-800">
                      <Icon name="MoveHorizontal" size={24} className="text-gray-800" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPositions[index]}
                    onChange={(e) => handleSliderChange(index, Number(e.target.value))}
                    className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                  
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-green-300">✨ ДО</span>
                    <span className="text-red-300">ПОСЛЕ ☠️</span>
                  </div>

                  <div className="bg-black/60 backdrop-blur p-4 rounded-lg border-2 border-red-500">
                    <p className="text-center text-red-300 font-bold text-sm">
                      ⚠️ {location.shockFact}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
              😢 Ожившие отходы
            </h3>
            <p className="text-xl text-gray-300">
              Они не просили стать мусором... Но мы их такими сделали
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trashCharacters.map((character, index) => (
              <Card key={index} className={`${character.color} border-4 hover:scale-105 transition-transform shadow-xl`}>
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4 animate-bounce">{character.emoji}</div>
                  <div className="text-4xl mb-4">{character.face}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{character.name}</h4>
                  <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-4 min-h-[100px] flex items-center">
                    <p className="text-sm text-gray-700 italic leading-relaxed">
                      "{character.quote}"
                    </p>
                  </div>
                  <Badge className="bg-red-500 text-white text-lg px-4 py-2">
                    ⏳ Жизнь на свалке: {character.lifespan}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 p-12 rounded-3xl border-4 border-yellow-400 text-center shadow-2xl">
          <div className="text-8xl mb-6 animate-pulse">💔</div>
          <h3 className="text-5xl font-bold mb-6">Это НЕ должно случиться!</h3>
          <p className="text-2xl mb-8 leading-relaxed">
            Каждая банка, каждый пакет, каждый окурок — это выбор.<br />
            <span className="font-bold text-3xl">Выбирай правильно!</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="text-xl px-8 py-4 bg-white text-red-600 hover:bg-gray-100 cursor-pointer hover:scale-110 transition-transform shadow-xl">
              ♻️ Сортируй мусор
            </Badge>
            <Badge className="text-xl px-8 py-4 bg-white text-orange-600 hover:bg-gray-100 cursor-pointer hover:scale-110 transition-transform shadow-xl">
              🚮 Не мусори
            </Badge>
            <Badge className="text-xl px-8 py-4 bg-white text-yellow-600 hover:bg-gray-100 cursor-pointer hover:scale-110 transition-transform shadow-xl">
              🌍 Спаси планету
            </Badge>
          </div>
          <div className="mt-8 text-3xl font-bold bg-black/30 backdrop-blur p-6 rounded-2xl">
            Пока не поздно! Начни СЕГОДНЯ! 🔥
          </div>
        </div>
      </div>

      <style>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: white;
          border: 3px solid #1f2937;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
        }
        .slider-thumb::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: white;
          border: 3px solid #1f2937;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
};

export default BeforeAfterGallery;
