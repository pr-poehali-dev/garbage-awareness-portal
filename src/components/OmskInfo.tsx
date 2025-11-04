import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const OmskInfo = () => {
  const omskFacts = [
    {
      icon: 'Users',
      title: 'Население',
      value: '~1,13 млн человек',
      description: '2-й город по населению в Сибири',
      color: 'bg-blue-50 border-blue-300 text-blue-700'
    },
    {
      icon: 'MapPin',
      title: 'Расположение',
      value: 'Западная Сибирь',
      description: 'Слияние рек Иртыш и Омь',
      color: 'bg-green-50 border-green-300 text-green-700'
    },
    {
      icon: 'Calendar',
      title: 'Основан',
      value: '1716 год',
      description: '308 лет истории',
      color: 'bg-purple-50 border-purple-300 text-purple-700'
    },
    {
      icon: 'Ruler',
      title: 'Площадь',
      value: '566,9 км²',
      description: '8 административных округов',
      color: 'bg-orange-50 border-orange-300 text-orange-700'
    }
  ];

  const ecoProblems = [
    {
      icon: 'Factory',
      title: 'Заводы-дымовухи',
      description: '150 заводов коптят небо. Но без них не будет работы, дилемма! 🤔',
      severity: 'high'
    },
    {
      icon: 'Trash2',
      title: 'Мусорная катастрофа',
      description: '700 000 тонн мусора в год! Это 9 мусоровозов в МИНУТУ! 🚛💨',
      severity: 'high'
    },
    {
      icon: 'Droplets',
      title: 'Реки плачут',
      description: 'Иртыш и Омь говорят: "Мы не помойка!" Давайте их послушаем? 😢',
      severity: 'medium'
    },
    {
      icon: 'TreePine',
      title: 'Где деревья?',
      description: 'В некоторых районах одно дерево на 100 человек. Очередь! 😅',
      severity: 'medium'
    }
  ];

  const ecoInitiatives = [
    {
      icon: 'Recycle',
      title: 'Контейнеры-спасители',
      description: '200+ штук по городу! Сортируй мусор, стань звездой! ⭐',
      status: 'active'
    },
    {
      icon: 'Wind',
      title: 'Шпионы за воздухом',
      description: '12 станций следят за тем, чем ты дышишь. Заботятся! 🕵️',
      status: 'active'
    },
    {
      icon: 'Leaf',
      title: 'Армия деревьев',
      description: '10 000 деревьев в год высаживаем! Скоро будем как Амазонка! 🌴',
      status: 'progress'
    },
    {
      icon: 'Zap',
      title: 'Электробусы наступают',
      description: 'Тихие, чистые, футуристичные! Будущее уже здесь! 🚌⚡',
      status: 'progress'
    }
  ];

  const greenZones = [
    {
      name: 'Птичья гавань',
      emoji: '🦆',
      description: 'Природный парк где живёт 155 видов птиц! Настоящий птичий рай в центре города!'
    },
    {
      name: 'Зелёный остров',
      emoji: '🏝️',
      description: 'Парк культуры и отдыха — твой оазис посреди городских джунглей!'
    },
    {
      name: 'Парк 30-летия ВЛКСМ',
      emoji: '🎡',
      description: 'Парк с аттракционами и зелёными аллеями. Веселье + свежий воздух!'
    },
    {
      name: 'Дендросад имени Гензе',
      emoji: '🌲',
      description: 'Ботанический рай! Тут 170 видов растений со всего мира!'
    },
    {
      name: 'Парк «На Королёва»',
      emoji: '🚀',
      description: 'Космический парк для прогулок! Назван в честь Королёва — сам Гагарин одобрил бы!'
    }
  ];

  const ecoFacts = [
    {
      icon: 'Factory',
      title: 'Заводов-монстров',
      value: '~150 штук',
      description: 'Дымят, коптят, но зарплаты дают 💰',
      impact: 'negative'
    },
    {
      icon: 'Waves',
      title: 'Иртыш и Омь',
      value: '2 речки',
      description: 'Просят помощи: "Не мусорьте, пожалуйста!" 🙏',
      impact: 'negative'
    },
    {
      icon: 'Trash2',
      title: 'Мусора в год',
      value: '700 000 тонн!',
      description: 'Это как 140 000 слонов! 🐘🐘🐘',
      impact: 'negative'
    },
    {
      icon: 'Recycle',
      title: 'Переработка',
      value: 'Меньше 10%',
      description: 'Есть куда расти! Помоги планете! 💪',
      impact: 'negative'
    },
    {
      icon: 'Container',
      title: 'Эко-контейнеров',
      value: '200+ штук',
      description: 'Сортируй мусор — будь крутым! 😎',
      impact: 'positive'
    },
    {
      icon: 'Wind',
      title: 'Воздух такой...',
      value: 'ИЗА 8-12',
      description: 'Не идеально, но можно дышать 😅',
      impact: 'negative'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">🏙️ Омск — где природа сражается с заводами!</h2>
          <p className="text-xl text-muted-foreground">
            Город контрастов: одной рукой строим заводы, другой сажаем деревья 🌳🏭
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {omskFacts.map((fact, index) => (
            <Card key={index} className={`${fact.color} border-2 hover:shadow-lg transition-shadow`}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <Icon name={fact.icon as any} size={40} />
                  <div>
                    <div className="text-sm font-semibold opacity-80">{fact.title}</div>
                    <div className="text-2xl font-bold my-1">{fact.value}</div>
                    <div className="text-xs opacity-70">{fact.description}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-red-300 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <Icon name="AlertTriangle" size={28} />
                🚨 Эко-боссы которых надо победить
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {ecoProblems.map((problem, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-red-200">
                  <div className="flex items-start gap-3">
                    <Icon name={problem.icon as any} className="text-red-600 mt-1" size={24} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-red-800">{problem.title}</h4>
                        <Badge variant={problem.severity === 'high' ? 'destructive' : 'outline'}>
                          {problem.severity === 'high' ? '🔴 Критично' : '🟡 Средне'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center pt-2">
                <p className="text-sm font-semibold text-red-700">
                  ⚠️ Омск в топ-15 самых загрязнённых! Но мы можем это изменить! 💪
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-300 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Icon name="Sparkles" size={28} />
                ✨ Наша армия добра!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {ecoInitiatives.map((initiative, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <Icon name={initiative.icon as any} className="text-green-600 mt-1" size={24} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-green-800">{initiative.title}</h4>
                        <Badge variant={initiative.status === 'active' ? 'default' : 'secondary'}>
                          {initiative.status === 'active' ? '✅ Работает' : '🔄 В процессе'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700">{initiative.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center pt-2">
                <p className="text-sm font-semibold text-green-700">
                  💚 Вместе мы сила! Присоединяйся к эко-движению! 🚀
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-green-400 bg-gradient-to-br from-green-50 to-emerald-100 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700 text-center justify-center">
              <Icon name="TreePine" size={28} />
              🌳 Зелёные оазисы Омска
            </CardTitle>
            <p className="text-center text-muted-foreground mt-2">
              Места где можно подышать и забыть про заводы!
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {greenZones.map((zone, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border-2 border-green-300 hover:shadow-lg transition-shadow hover:scale-105">
                  <div className="text-center">
                    <div className="text-5xl mb-3 animate-bounce">{zone.emoji}</div>
                    <h4 className="font-bold text-green-800 mb-2 text-lg">{zone.name}</h4>
                    <p className="text-sm text-gray-700">{zone.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center p-4 bg-green-100 rounded-lg border-2 border-green-400">
              <p className="font-bold text-green-800 text-lg">
                🌿 Всего ~2400 гектаров зелени! Это как 3360 футбольных полей! ⚽
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-700 text-center justify-center">
              <Icon name="BarChart3" size={28} />
              📊 Омская статистика (без фильтров!)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ecoFacts.map((fact, index) => (
                <div key={index} className={`p-4 rounded-lg border-2 hover:shadow-lg transition-shadow ${
                  fact.impact === 'positive' 
                    ? 'bg-green-50 border-green-300' 
                    : 'bg-red-50 border-red-300'
                }`}>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Icon 
                      name={fact.icon as any} 
                      size={36} 
                      className={fact.impact === 'positive' ? 'text-green-600' : 'text-red-600'} 
                    />
                    <div className="text-sm font-semibold opacity-80">{fact.title}</div>
                    <div className="text-2xl font-bold">{fact.value}</div>
                    <p className="text-xs opacity-70">{fact.description}</p>
                    <Badge variant={fact.impact === 'positive' ? 'default' : 'destructive'}>
                      {fact.impact === 'positive' ? '✅ Хорошо' : '⚠️ Проблема'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 p-8 bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 rounded-xl border-4 border-orange-400 text-center shadow-xl">
          <div className="text-6xl mb-4 animate-bounce">🦸‍♂️</div>
          <h3 className="text-3xl font-bold mb-3 text-gray-800">Стань эко-героем Омска!</h3>
          <p className="text-xl text-gray-700 mb-6">
            Даже супергерои начинали с малого. Твоя миссия — спасти город от мусора! 💪
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="text-lg px-6 py-3 bg-green-500 hover:bg-green-600 cursor-pointer hover:scale-110 transition-transform">
              ♻️ Сортируй мусор (как босс!)
            </Badge>
            <Badge className="text-lg px-6 py-3 bg-blue-500 hover:bg-blue-600 cursor-pointer hover:scale-110 transition-transform">
              🚴 Велик вместо авто
            </Badge>
            <Badge className="text-lg px-6 py-3 bg-purple-500 hover:bg-purple-600 cursor-pointer hover:scale-110 transition-transform">
              🌱 Сажай деревья (прямо сейчас!)
            </Badge>
            <Badge className="text-lg px-6 py-3 bg-orange-500 hover:bg-orange-600 cursor-pointer hover:scale-110 transition-transform">
              💡 Выключай свет (электричество дорогое!)
            </Badge>
            <Badge className="text-lg px-6 py-3 bg-pink-500 hover:bg-pink-600 cursor-pointer hover:scale-110 transition-transform">
              🛍️ Многоразовые пакеты (стильно!)
            </Badge>
          </div>
          <div className="mt-6 text-lg font-bold text-orange-700">
            🔥 700 000 тонн мусора не победят себя сами! ДЕЙСТВУЙ! 🔥
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmskInfo;