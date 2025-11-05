import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Horoscope {
  type: string;
  emoji: string;
  title: string;
  prediction: string;
  advice: string;
  luckyTrash: string;
}

const horoscopes: Horoscope[] = [
  {
    type: 'plastic',
    emoji: '🍼',
    title: 'Пластиковая душа',
    prediction: 'Сегодня звёзды говорят, что ты выбросишь 3 бутылки! Две из них точно можно было переработать...',
    advice: 'Носи с собой многоразовую бутылку. Планета (и твой гороскоп) будут благодарны!',
    luckyTrash: 'Бумажный пакет принесёт удачу!'
  },
  {
    type: 'paper',
    emoji: '📄',
    title: 'Бумажное сердце',
    prediction: 'Впереди неделя, когда каждая листовка будет находить именно тебя. Не теряй бдительность!',
    advice: 'Откажись от чеков в магазинах — так ты сэкономишь 2 дерева за год!',
    luckyTrash: 'Старый блокнот — твой талисман недели!'
  },
  {
    type: 'glass',
    emoji: '🍾',
    title: 'Стеклянный характер',
    prediction: 'Твоя карма прозрачна как стекло! Сегодня ты встретишь человека, который научит тебя сортировать мусор.',
    advice: 'Стеклянная банка может служить вечно — храни в ней что-нибудь полезное!',
    luckyTrash: 'Любая стеклянная тара — твой амулет!'
  },
  {
    type: 'metal',
    emoji: '🥫',
    title: 'Железная воля',
    prediction: 'Алюминиевые банки будут преследовать тебя всю неделю. Они хотят быть переработанными!',
    advice: 'Одна переработанная банка экономит энергию для работы телевизора 3 часа!',
    luckyTrash: 'Металлическая крышка принесёт успех в делах!'
  },
  {
    type: 'organic',
    emoji: '🥬',
    title: 'Органическая натура',
    prediction: 'Компостная куча зовёт тебя! В ближайшее время ты откроешь в себе любовь к садоводству.',
    advice: 'Заведи компостер — твои растения будут счастливы, а мусорка пустая!',
    luckyTrash: 'Банановая кожура — твой счастливый билет!'
  },
  {
    type: 'battery',
    emoji: '🔋',
    title: 'Батарейка-энерджайзер',
    prediction: 'Энергия бьёт ключом! Но помни — одна батарейка загрязняет 400 литров воды!',
    advice: 'Переходи на аккумуляторы — сэкономишь деньги и спасёшь планету!',
    luckyTrash: 'Солнечная батарея — твой знак удачи!'
  }
];

const TrashHoroscope = () => {
  const [currentHoroscope, setCurrentHoroscope] = useState<Horoscope | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);

  const getRandomHoroscope = () => {
    setIsRevealing(true);
    setTimeout(() => {
      const random = horoscopes[Math.floor(Math.random() * horoscopes.length)];
      setCurrentHoroscope(random);
      setIsRevealing(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_50%_50%,transparent_0,transparent_20px,rgba(255,255,255,0.05)_20px,rgba(255,255,255,0.05)_40px)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-6xl mb-4 animate-bounce">🔮♻️✨</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white drop-shadow-2xl">
            МУСОРНЫЙ ГОРОСКОП
          </h2>
          <p className="text-lg md:text-xl text-white/95 font-bold max-w-3xl mx-auto">
            Узнай, что говорят звёзды о твоём экологическом будущем!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!currentHoroscope && !isRevealing && (
            <Card className="bg-white/95 backdrop-blur border-4 border-white p-12 text-center">
              <div className="text-8xl mb-6">🌟</div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Готов узнать своё предназначение?
              </h3>
              <p className="text-xl text-gray-700 mb-8">
                Нажми кнопку и магия сортировки откроет тебе тайны мусорной кармы!
              </p>
              <Button
                onClick={getRandomHoroscope}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-black py-6 px-12 hover:scale-110 transition-transform"
              >
                🔮 УЗНАТЬ СУДЬБУ
              </Button>
            </Card>
          )}

          {isRevealing && (
            <Card className="bg-white/95 backdrop-blur border-4 border-white p-12 text-center">
              <div className="text-8xl mb-6 animate-spin">🔮</div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                Звёзды решают твою судьбу...
              </h3>
              <div className="flex justify-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </Card>
          )}

          {currentHoroscope && !isRevealing && (
            <Card className="bg-white/95 backdrop-blur border-4 border-white p-8 animate-scale-in">
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">{currentHoroscope.emoji}</div>
                <h3 className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2">
                  {currentHoroscope.title}
                </h3>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
                  <h4 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                    🌟 Предсказание:
                  </h4>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    {currentHoroscope.prediction}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6">
                  <h4 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                    💡 Совет мудрецов:
                  </h4>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    {currentHoroscope.advice}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6">
                  <h4 className="text-xl font-black text-gray-900 mb-3 flex items-center gap-2">
                    🍀 Счастливый мусор:
                  </h4>
                  <p className="text-gray-800 text-lg font-bold">
                    {currentHoroscope.luckyTrash}
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button
                  onClick={getRandomHoroscope}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-black py-4 px-8 hover:scale-105 transition-transform"
                >
                  🔄 Узнать ещё раз
                </Button>
              </div>

              <p className="text-center text-gray-500 text-sm mt-6 italic">
                * Гороскоп составлен экспертами-сортировщиками с 20-летним стажем переработки 😄
              </p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrashHoroscope;
