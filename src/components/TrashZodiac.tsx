import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ZodiacSign {
  name: string;
  emoji: string;
  title: string;
  description: string;
  advice: string;
  stats: {
    decomposition: string;
    recyclable: string;
    danger: string;
  };
  color: string;
  personality: string[];
  totemAnimal: string;
}

const TrashZodiac = () => {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<ZodiacSign | null>(null);

  const zodiacSigns: ZodiacSign[] = [
    {
      name: 'Задумчивая Картонная Коробка',
      emoji: '📦',
      title: 'Надёжный Трансформер',
      description: 'Ты надежен, практичен и всегда готов к трансформации! Из тебя может получиться что угодно — от домика для кота до потрясающего скетчбука. Но помни: если ты намокнешь, твоя карьера под угрозой. Твоя сверхспособность — быть переработанным до 7 раз!',
      advice: 'Твое тотемное животное — кот. Твое призвание — быть приютом для этого кота. Не сопротивляйся.',
      stats: {
        decomposition: '2-3 месяца',
        recyclable: '7 раз подряд!',
        danger: 'Низкая (кроме намокания)'
      },
      color: 'from-amber-600 to-orange-700',
      personality: ['♻️ Практичный', '🔄 Гибкий', '🏠 Уютный', '😺 Котолюб'],
      totemAnimal: '🐱 Кот в коробке'
    },
    {
      name: 'Величественная Алюминиевая Банка',
      emoji: '🥫',
      title: 'Бессмертная Звезда',
      description: 'Ты сияешь, как звезда, и твой жизненный цикл почти бесконечен! Тебя можно перерабатывать бесконечно, не теряя качества. Ты — эталон круговой экономики! Твоя миссия — не валяться на газоне, а отправиться в новое путешествие.',
      advice: 'Хватит валяться на диване! Позволь себя смять и отправься на перерождение. Из тебя может получиться велосипед или новая банка для твоего же напитка.',
      stats: {
        decomposition: '200-500 лет',
        recyclable: '∞ бесконечно!',
        danger: 'Острые края'
      },
      color: 'from-gray-400 to-gray-600',
      personality: ['⭐ Сияющий', '♻️ Вечный', '🚴 Спортивный', '💪 Несгибаемый'],
      totemAnimal: '🦅 Алюминиевый орёл'
    },
    {
      name: 'Призрачный Полиэтиленовый Пакет',
      emoji: '👻',
      title: 'Летучий Призрак',
      description: 'Ты легок, воздушен и путешествуешь на ветру, как призрак. Ты можешь парить над землей, зацепиться за дерево или уйти в море, пугая черепах, которые примут тебя за медузу. Твой срок жизни — 400 лет. Используй эту силу с умом!',
      advice: 'Прекрати порхать как бабочка и завяжись узлом. Или еще лучше — завяжи отношения с многоразовой сумкой.',
      stats: {
        decomposition: '400-1000 лет',
        recyclable: 'Сложно, но можно',
        danger: 'Опасен для животных!'
      },
      color: 'from-blue-300 to-cyan-400',
      personality: ['🌬️ Воздушный', '🦋 Порхающий', '😱 Пугающий черепах', '💔 Одинокий'],
      totemAnimal: '🐢 Испуганная черепаха'
    },
    {
      name: 'Загадочный Окурок',
      emoji: '🚬',
      title: 'Токсичный Маленький Злодей',
      description: 'Снаружи ты кажешься маленьким и безобидным, но внутри таишь целый коктейль токсинов! Ты разлагаешься 10-12 лет, отравляя почву и воду. Но даже у тебя есть шанс на искупление! Не попади в организм чайки или рыбы.',
      advice: 'Твоя жизнь — это не романтический фильм "Загадочная история Бенджамина Баттона". Тебя не должны бросать под ноги с шиком.',
      stats: {
        decomposition: '10-12 лет',
        recyclable: 'Нет',
        danger: 'ОЧЕНЬ высокая! ☠️'
      },
      color: 'from-yellow-600 to-amber-800',
      personality: ['💀 Токсичный', '🤏 Маленький', '😈 Коварный', '🐟 Враг рыб'],
      totemAnimal: '🐟 Отравленная рыба'
    },
    {
      name: 'Радужная Пластиковая Бутылка',
      emoji: '🍾',
      title: 'Долгожитель-Путешественник',
      description: 'Ты яркая, прозрачная и невероятно живучая! Ты проживешь 450 лет, путешествуя по свалкам, океанам и, возможно, желудкам морских птиц. Но если ты попадешь в правильные руки — из тебя сделают флисовую куртку или новую бутылку!',
      advice: 'Перестань мечтать стать кораблем в бутылке и стань кораблем ИЗ бутылки! Переработка — твой билет в светлое будущее.',
      stats: {
        decomposition: '450 лет',
        recyclable: 'Да! (PET)',
        danger: 'Микропластик в океане'
      },
      color: 'from-blue-500 to-purple-600',
      personality: ['🌊 Океанический', '🦜 Опасен для птиц', '👕 Станет курткой', '✨ Прозрачный'],
      totemAnimal: '🦅 Альбатрос с пластиком'
    },
    {
      name: 'Мрачная Батарейка',
      emoji: '🔋',
      title: 'Энергетический Вампир',
      description: 'Ты мал, но ужасен! В тебе спрятан целый коктейль ядов: ртуть, свинец, кадмий. Ты можешь отравить 20 квадратных метров почвы и 400 литров воды. Но если тебя утилизировать правильно — ты станешь героем!',
      advice: 'Не будь драмой королевой на свалке. Найди специальный пункт приема и стань легендой переработки!',
      stats: {
        decomposition: '110 лет',
        recyclable: 'Специальная утилизация!',
        danger: 'КРИТИЧЕСКАЯ! ☢️'
      },
      color: 'from-green-700 to-teal-900',
      personality: ['⚡ Энергичный', '☠️ Ядовитый', '🦸 Может стать героем', '💥 Взрывной характер'],
      totemAnimal: '🦇 Летучая мышь'
    },
    {
      name: 'Элегантная Стеклянная Бутылка',
      emoji: '🍷',
      title: 'Вечный Аристократ',
      description: 'Ты изящна, прозрачна и практически бессмертна. Ты разлагаешься 4000 лет! Но твоя настоящая магия в том, что тебя можно перерабатывать бесконечно без потери качества. Ты — аристократ мира отходов!',
      advice: 'Перестань валяться на пляже как простолюдин. Ты создана для высоких целей — стать новой бутылкой вина или банкой для варенья!',
      stats: {
        decomposition: '4000 лет',
        recyclable: '∞ бесконечно без потерь!',
        danger: 'Острые осколки'
      },
      color: 'from-emerald-500 to-teal-600',
      personality: ['🎩 Аристократичный', '♾️ Бессмертный', '✨ Прозрачный', '🍇 Винный'],
      totemAnimal: '🦢 Лебедь'
    },
    {
      name: 'Философский Органический Отход',
      emoji: '🍎',
      title: 'Круговорот Жизни',
      description: 'Ты — сама жизнь! Ты разлагаешься быстро (1-2 месяца), превращаясь в питательный компост. Ты кормишь червей, удобряешь почву и даешь жизнь новым растениям. Но на свалке ты производишь метан — газ в 25 раз хуже CO₂!',
      advice: 'Не лежи на свалке как безработный. Найди компостную кучу и стань удобрением! Твоя карма зависит от того, где ты окажешься.',
      stats: {
        decomposition: '1-2 месяца',
        recyclable: 'Компостирование!',
        danger: 'Метан на свалке'
      },
      color: 'from-green-500 to-lime-600',
      personality: ['🌱 Жизнедатель', '🐛 Друг червей', '💨 Метановый', '♻️ Круговорот'],
      totemAnimal: '🐛 Дождевой червь'
    },
    {
      name: 'Агрессивный Пенопласт',
      emoji: '📦',
      title: 'Несокрушимый Упаковщик',
      description: 'Ты легкий, защитный и абсолютно неубиваемый! Ты не разлагаешься НИКОГДА, распадаясь на микрочастицы, которые будут жить вечно. Животные принимают тебя за еду и умирают. Но ты отличный упаковщик!',
      advice: 'Хватит прикидываться едой! Птицы не ценят твой юмор. Найди специальный пункт приема и стань новой упаковкой.',
      stats: {
        decomposition: 'НИКОГДА (500+ лет)',
        recyclable: 'Сложно, спец. переработка',
        danger: 'Смертелен для птиц! 🦜'
      },
      color: 'from-gray-100 to-gray-300',
      personality: ['☁️ Легкий', '🛡️ Защитный', '💀 Смертоносный', '😤 Надоедливый'],
      totemAnimal: '🦅 Погибшая чайка'
    },
    {
      name: 'Хитрый Тетрапак',
      emoji: '🧃',
      title: 'Многослойная Личность',
      description: 'Ты — загадка природы! Картон + пластик + алюминий = сложная переработка. Ты разлагаешься 30+ лет, но если найти специальный пункт — из тебя сделают мебель или стройматериалы!',
      advice: 'Перестань быть таким сложным. Найди специализированный центр переработки и раскрой свой многослойный потенциал!',
      stats: {
        decomposition: '30+ лет',
        recyclable: 'Да, но сложно',
        danger: 'Средняя'
      },
      color: 'from-orange-400 to-red-500',
      personality: ['🎭 Многоликий', '🧩 Сложный', '🏗️ Строительный', '🤯 Запутанный'],
      totemAnimal: '🦊 Хитрая лиса'
    },
    {
      name: 'Драматичный Использованный Подгузник',
      emoji: '👶',
      title: 'Король Драмы',
      description: 'О боже, ТЫ — самый драматичный персонаж на свалке! Ты разлагаешься 500 лет, занимая 4% всех свалок мира. Ты токсичен, вонюч и абсолютно неперерабатываем. Но можно использовать многоразовые подгузники!',
      advice: 'Твоя жизнь — это трагедия в 5 актах. Финал печальный. Пожалуйста, переходи на многоразовые аналоги и спаси планету от себя.',
      stats: {
        decomposition: '500 лет',
        recyclable: 'НЕТ ❌',
        danger: 'Биологическая опасность'
      },
      color: 'from-pink-300 to-purple-400',
      personality: ['🎭 Драматичный', '💩 Проблемный', '😭 Плачущий', '🚫 Неперерабатываемый'],
      totemAnimal: '👶 Плачущий младенец'
    },
    {
      name: 'Загадочный Электронный Отход',
      emoji: '📱',
      title: 'Цифровой Призрак',
      description: 'Ты полон тайн и сокровищ! Внутри тебя золото, серебро, медь... и ртуть, свинец, кадмий. Ты — самый ценный и самый опасный мусор одновременно. Правильная утилизация — твой единственный путь к спасению!',
      advice: 'Не валяйся в ящике стола как цифровой хлам. Отдай себя на специальную переработку и стань новым гаджетом!',
      stats: {
        decomposition: '1000+ лет (токсины)',
        recyclable: 'Спец. утилизация!',
        danger: 'ЭКСТРЕМАЛЬНАЯ! ☠️'
      },
      color: 'from-slate-700 to-zinc-900',
      personality: ['💎 Ценный', '⚡ Электрический', '☠️ Ядовитый', '🤖 Технологичный'],
      totemAnimal: '🦾 Киборг'
    }
  ];

  const getZodiacByDate = (date: string): ZodiacSign => {
    const dateObj = new Date(date);
    const month = dateObj.getMonth();
    return zodiacSigns[month % zodiacSigns.length];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate) return;
    
    const zodiac = getZodiacByDate(birthDate);
    setResult(zodiac);
    
    setTimeout(() => {
      document.getElementById('result-section')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 via-pink-800 to-orange-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-8xl mb-6 animate-bounce">🗑️✨</div>
          <h2 className="text-6xl font-bold mb-6 text-white drop-shadow-2xl">
            Мусорный Гороскоп
          </h2>
          <p className="text-3xl text-white/90 mb-4 font-bold">
            Кто ты в мире отходов?
          </p>
          <p className="text-xl text-white/80 mb-8">
            Узнай свою мусорную сущность и измени судьбу планеты! 🌍
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur shadow-2xl border-4 border-yellow-400 mb-16">
          <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-400 border-b-4 border-orange-500">
            <CardTitle className="text-3xl text-center text-gray-900 flex items-center justify-center gap-3">
              <Icon name="Calendar" size={32} />
              Введи дату рождения
              <Icon name="Sparkles" size={32} />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-lg font-semibold mb-3 block text-gray-700">
                  📅 Когда ты появился на этой планете?
                </label>
                <Input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="text-xl py-6 border-4 border-purple-300 focus:border-purple-500"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full text-2xl py-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold shadow-xl animate-pulse"
                size="lg"
              >
                <Icon name="Sparkles" size={28} className="mr-3" />
                🔮 Узнать правду о себе!
              </Button>
            </form>
          </CardContent>
        </Card>

        {result && (
          <div id="result-section" className="max-w-4xl mx-auto animate-fade-in">
            <Card className={`bg-gradient-to-br ${result.color} text-white shadow-2xl border-4 border-yellow-400 overflow-hidden`}>
              <CardHeader className="bg-black/30 backdrop-blur border-b-4 border-yellow-400">
                <div className="text-center">
                  <div className="text-9xl mb-4 animate-bounce">{result.emoji}</div>
                  <CardTitle className="text-5xl mb-3 drop-shadow-2xl">
                    {result.name}
                  </CardTitle>
                  <Badge className="text-2xl px-6 py-3 bg-yellow-400 text-gray-900 font-bold">
                    {result.title}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-8 space-y-8">
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/40">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="User" size={28} />
                    Твоя мусорная личность:
                  </h3>
                  <p className="text-xl leading-relaxed">{result.description}</p>
                </div>

                <div className="bg-yellow-400/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-yellow-400">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Lightbulb" size={28} />
                    Жизненный совет:
                  </h3>
                  <p className="text-xl leading-relaxed italic">{result.advice}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border-2 border-white/40 text-center">
                    <Icon name="Timer" size={32} className="mx-auto mb-3" />
                    <div className="text-sm opacity-80 mb-2">Разложение</div>
                    <div className="text-xl font-bold">{result.stats.decomposition}</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border-2 border-white/40 text-center">
                    <Icon name="Recycle" size={32} className="mx-auto mb-3" />
                    <div className="text-sm opacity-80 mb-2">Переработка</div>
                    <div className="text-xl font-bold">{result.stats.recyclable}</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border-2 border-white/40 text-center">
                    <Icon name="AlertTriangle" size={32} className="mx-auto mb-3" />
                    <div className="text-sm opacity-80 mb-2">Опасность</div>
                    <div className="text-xl font-bold">{result.stats.danger}</div>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/40">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Heart" size={28} />
                    Черты характера:
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {result.personality.map((trait, index) => (
                      <Badge key={index} className="text-lg px-4 py-2 bg-white/30 text-white border-2 border-white/50">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl p-8 border-2 border-pink-400">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Sparkles" size={28} />
                    Тотемное животное:
                  </h3>
                  <p className="text-3xl font-bold text-center">{result.totemAnimal}</p>
                </div>

                <div className="bg-red-500/30 backdrop-blur-lg rounded-2xl p-6 border-2 border-red-400">
                  <div className="flex items-start gap-4">
                    <Icon name="Info" size={32} className="flex-shrink-0" />
                    <div>
                      <div className="font-bold text-xl mb-2">📢 Это не оскорбление!</div>
                      <p className="text-lg">
                        Это смешная и поучительная персонализация. Каждый из нас производит мусор — 
                        вопрос в том, как мы с этим справляемся. Узнай себя и измени мир! 🌍♻️
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <Button
                    onClick={() => {
                      const text = `Я — ${result.name}! ${result.emoji}\n\nА ты кто в мире отходов? Узнай свою мусорную сущность! 🗑️✨`;
                      if (navigator.share) {
                        navigator.share({ title: 'Мусорный Гороскоп', text });
                      } else {
                        navigator.clipboard.writeText(text);
                        alert('Скопировано в буфер обмена!');
                      }
                    }}
                    className="text-xl px-8 py-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold"
                    size="lg"
                  >
                    <Icon name="Share2" size={24} className="mr-3" />
                    📤 Поделиться в соцсетях
                  </Button>
                  
                  <div className="text-sm opacity-90">
                    Поделись результатом и узнай, кто твои друзья! 😄
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <Button
                onClick={() => {
                  setResult(null);
                  setBirthDate('');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xl px-8 py-6 bg-white/20 hover:bg-white/30 text-white border-2 border-white"
                size="lg"
              >
                <Icon name="RotateCcw" size={24} className="mr-3" />
                🔄 Узнать за друга
              </Button>
            </div>
          </div>
        )}

        {!result && (
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white text-center border-2 border-white/30">
              <div className="text-5xl mb-4">📦</div>
              <div className="font-bold text-xl mb-2">Персонализация</div>
              <div className="text-sm opacity-90">Узнай свой уникальный мусорный тип</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white text-center border-2 border-white/30">
              <div className="text-5xl mb-4">😂</div>
              <div className="font-bold text-xl mb-2">Юмор + Факты</div>
              <div className="text-sm opacity-90">Серьёзная инфа в смешной упаковке</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white text-center border-2 border-white/30">
              <div className="text-5xl mb-4">🚀</div>
              <div className="font-bold text-xl mb-2">Вирусный контент</div>
              <div className="text-sm opacity-90">Делись с друзьями в соцсетях!</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrashZodiac;
