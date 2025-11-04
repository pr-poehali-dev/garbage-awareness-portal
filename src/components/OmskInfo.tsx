import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const OmskInfo = () => {
  const crazySolutions = [
    {
      icon: 'Lightbulb',
      title: 'Мусорная валюта',
      description: '1 кг пластика = 10 рублей на карту! Сдавай мусор — плати за интернет!',
      coolness: '🔥 ОГОНЬ',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: 'Trophy',
      title: 'Эко-рейтинг домов',
      description: 'Лучший двор по раздельному сбору получает бесплатную елку и фейерверк!',
      coolness: '⭐ ТОП',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: 'Gamepad2',
      title: 'AR-игра "Охотники за мусором"',
      description: 'Собирай мусор в парках — получай NFT и прокачивай эко-героя в приложении!',
      coolness: '🎮 WOW',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: 'Rocket',
      title: 'Мусор в космос',
      description: 'Омск — космическая столица! Давайте запустим мусор на орбиту! (шутка... или нет?) 🚀',
      coolness: '🌌 БЕЗУМИЕ',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: 'Zap',
      title: 'Мусоросжигательный завод → Электричество',
      description: 'Мусор горит → турбины крутятся → свет в домах! Энергия из хлама!',
      coolness: '⚡ ГЕНИЙ',
      color: 'from-red-400 to-orange-500'
    },
    {
      icon: 'Bus',
      title: 'Бесплатный проезд за раздельный сбор',
      description: 'Сдал 5 кг за месяц — неделя бесплатных поездок! Мотивация 💯',
      coolness: '🚌 КРУТО',
      color: 'from-cyan-400 to-blue-500'
    }
  ];

  const greenZones = [
    {
      name: 'Птичья гавань',
      emoji: '🦆',
      description: '155 видов птиц! Больше чем в зоопарке!',
      fact: '41 га — размер 57 футбольных полей!'
    },
    {
      name: 'Зелёный остров',
      emoji: '🏝️',
      description: 'Аттракционы + природа = идеальное свидание!',
      fact: 'Работает с 1948 года — старше твоих бабушек!'
    },
    {
      name: 'Парк 30-летия ВЛКСМ',
      emoji: '🎡',
      description: 'Колесо обозрения видно из космоса! (почти)',
      fact: '70 га леса внутри города — свежий воздух гарантирован!'
    },
    {
      name: 'Дендросад Гензе',
      emoji: '🌲',
      description: '170 видов растений со всего мира!',
      fact: 'Основан в 1948 г. — старейший дендросад Сибири!'
    },
    {
      name: 'Парк «На Королёва»',
      emoji: '🚀',
      description: 'Космический парк для космических людей!',
      fact: 'Назван в честь создателя "Востока" — Гагарин бы одобрил!'
    }
  ];

  const wildFacts = [
    {
      icon: 'Flame',
      title: '700 000 тонн мусора',
      value: '= 140 000 слонов',
      shock: 'Или 3 500 000 человек по весу! Целый Омск из мусора! 😱',
      color: 'bg-red-500'
    },
    {
      icon: 'Timer',
      title: 'Каждую минуту',
      value: '9 мусоровозов',
      shock: 'За час — целая парковка грузовиков! За день — автопробка до Москвы! 🚛',
      color: 'bg-orange-500'
    },
    {
      icon: 'Recycle',
      title: 'Переработка',
      value: 'Меньше 10%',
      shock: '90% закапывается! Будущие археологи найдут наши пакеты через 1000 лет! 🏺',
      color: 'bg-yellow-500'
    },
    {
      icon: 'Factory',
      title: '150 заводов',
      value: '= много дыма',
      shock: 'Если каждый завод выпустит на 1% меньше дыма — воздух станет на 150% чище! 🧮',
      color: 'bg-purple-500'
    },
    {
      icon: 'Droplets',
      title: 'Иртыш течёт',
      value: '4248 км',
      shock: 'Если весь Иртыш загрязнён — это как испортить дорогу от Омска до Парижа! 🌊',
      color: 'bg-blue-500'
    },
    {
      icon: 'TreePine',
      title: '10 000 деревьев в год',
      value: '27 в день',
      shock: 'За 10 лет посадим 100 000! Это новый лес размером с центр города! 🌳',
      color: 'bg-green-500'
    }
  ];

  const ecoHacks = [
    {
      icon: 'ShoppingBag',
      title: 'Тканевая сумка',
      saves: 'Экономит 300 пакетов в год',
      bonus: '+ Выглядишь стильно на фоне с одноразовыми пакетами 😎'
    },
    {
      icon: 'Bike',
      title: 'Велик вместо авто',
      saves: '1 тонна CO₂ в год не попадёт в атмосферу',
      bonus: '+ Пресс качается бесплатно 💪'
    },
    {
      icon: 'Coffee',
      title: 'Термокружка',
      saves: '365 одноразовых стаканов в год',
      bonus: '+ Кофе дольше горячий ☕'
    },
    {
      icon: 'Smartphone',
      title: 'Чини, не выбрасывай',
      saves: 'Меньше электронных отходов',
      bonus: '+ Экономишь 30 000 рублей на новом телефоне 💰'
    },
    {
      icon: 'Sprout',
      title: 'Компост из отходов',
      saves: '200 кг органики не попадёт на свалку',
      bonus: '+ Бесплатное удобрение для огорода 🌱'
    },
    {
      icon: 'Package',
      title: 'Покупай без упаковки',
      saves: 'Тонна пластика меньше в океане',
      bonus: '+ Продавцы уважают за осознанность ✊'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">🏙️ Омск: Битва за чистоту!</h2>
          <p className="text-2xl text-muted-foreground">
            1,13 млн героев против 700 тыс. тонн мусора. Кто победит? 🥊
          </p>
        </div>

        <Card className="border-4 border-green-400 bg-gradient-to-br from-green-50 to-emerald-100 mb-12 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700 text-center justify-center text-3xl">
              <Icon name="TreePine" size={36} />
              🌳 Зелёные оазисы: где дышится легко
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {greenZones.map((zone, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border-2 border-green-300 hover:shadow-2xl transition-all hover:scale-105 hover:-rotate-1">
                  <div className="text-center">
                    <div className="text-6xl mb-3 animate-bounce">{zone.emoji}</div>
                    <h4 className="font-bold text-green-800 mb-2 text-xl">{zone.name}</h4>
                    <p className="text-sm text-gray-700 mb-2">{zone.description}</p>
                    <Badge className="bg-green-500 text-white">{zone.fact}</Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl border-4 border-green-600 mt-6 shadow-lg">
              <p className="font-bold text-2xl">
                🌿 Итого ~2400 гектаров зелени! Это 3360 футбольных полей! ⚽
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-4 border-red-500 bg-gradient-to-br from-red-50 to-orange-100 mb-12 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700 text-center justify-center text-3xl">
              <Icon name="Flame" size={36} />
              🔥 Дикие факты про экологию Омска
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wildFacts.map((fact, index) => (
                <div key={index} className={`p-6 ${fact.color} text-white rounded-xl shadow-lg hover:scale-105 transition-transform`}>
                  <div className="flex flex-col items-center text-center space-y-3">
                    <Icon name={fact.icon as any} size={48} />
                    <div className="text-sm font-bold opacity-90">{fact.title}</div>
                    <div className="text-3xl font-black">{fact.value}</div>
                    <div className="text-sm bg-white/20 backdrop-blur p-3 rounded-lg">
                      {fact.shock}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-4 border-purple-500 bg-gradient-to-br from-purple-50 to-pink-100 mb-12 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-700 text-center justify-center text-3xl">
              <Icon name="Zap" size={36} />
              ⚡ Безумные решения (но они работают!)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crazySolutions.map((solution, index) => (
                <div key={index} className={`p-6 bg-gradient-to-br ${solution.color} text-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105`}>
                  <div className="flex flex-col items-center text-center space-y-3">
                    <Icon name={solution.icon as any} size={48} className="animate-pulse" />
                    <Badge className="bg-white/30 backdrop-blur text-white text-sm px-3 py-1">
                      {solution.coolness}
                    </Badge>
                    <h4 className="text-xl font-bold">{solution.title}</h4>
                    <p className="text-sm leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-4 border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-100 mb-12 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700 text-center justify-center text-3xl">
              <Icon name="Sparkles" size={36} />
              💡 Эко-лайфхаки для омичей
            </CardTitle>
            <p className="text-center text-muted-foreground mt-2 text-lg">
              Маленькие шаги — большая разница!
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {ecoHacks.map((hack, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border-2 border-blue-300 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                        <Icon name={hack.icon as any} className="text-white" size={32} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-800 text-lg mb-2">{hack.title}</h4>
                      <p className="text-sm text-green-700 font-semibold mb-1">✅ {hack.saves}</p>
                      <p className="text-xs text-gray-600 italic">{hack.bonus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="p-10 bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 rounded-2xl border-4 border-orange-500 text-center shadow-2xl">
          <div className="text-7xl mb-4 animate-bounce">🦸‍♂️</div>
          <h3 className="text-4xl font-bold mb-4 text-gray-800">Омск зовёт героев!</h3>
          <p className="text-2xl text-gray-700 mb-6">
            700 000 тонн мусора против 1,13 млн человек. <br />
            Если каждый сдаст 1 кг — проблема исчезнет за год! 💥
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="text-xl px-8 py-4 bg-green-500 hover:bg-green-600 cursor-pointer hover:scale-110 transition-transform shadow-lg">
              ♻️ Начни сортировать СЕЙЧАС
            </Badge>
            <Badge className="text-xl px-8 py-4 bg-blue-500 hover:bg-blue-600 cursor-pointer hover:scale-110 transition-transform shadow-lg">
              🚴 Пересядь на велик
            </Badge>
            <Badge className="text-xl px-8 py-4 bg-purple-500 hover:bg-purple-600 cursor-pointer hover:scale-110 transition-transform shadow-lg">
              🌱 Посади дерево
            </Badge>
          </div>
          <div className="mt-8 text-xl font-bold text-orange-700 bg-white/50 backdrop-blur p-4 rounded-xl">
            🔥 Омск может стать самым чистым городом Сибири! Начни с себя! 🔥
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmskInfo;
