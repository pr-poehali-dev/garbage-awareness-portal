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
      title: 'Промышленные выбросы',
      description: 'Нефтеперерабатывающий завод, химические предприятия загрязняют воздух',
      severity: 'high'
    },
    {
      icon: 'Trash2',
      title: 'Проблема с мусором',
      description: 'Ежегодно образуется ~400 тыс. тонн ТБО, недостаточная переработка',
      severity: 'high'
    },
    {
      icon: 'Droplets',
      title: 'Загрязнение рек',
      description: 'Иртыш и Омь страдают от промышленных и бытовых стоков',
      severity: 'medium'
    },
    {
      icon: 'TreePine',
      title: 'Мало зелёных зон',
      description: 'Дефицит парков и скверов в некоторых районах города',
      severity: 'medium'
    }
  ];

  const ecoInitiatives = [
    {
      icon: 'Recycle',
      title: 'Раздельный сбор',
      description: 'Установлено 200+ контейнеров для раздельного сбора отходов',
      status: 'active'
    },
    {
      icon: 'Wind',
      title: 'Мониторинг воздуха',
      description: 'Работают 12 станций контроля качества атмосферного воздуха',
      status: 'active'
    },
    {
      icon: 'Leaf',
      title: 'Озеленение',
      description: 'Программа высадки 10 000 деревьев ежегодно',
      status: 'progress'
    },
    {
      icon: 'Zap',
      title: 'Эко-транспорт',
      description: 'Закупка электробусов и развитие велоинфраструктуры',
      status: 'progress'
    }
  ];

  const ecoFacts = [
    {
      icon: 'Factory',
      title: 'Промышленные предприятия',
      value: '~150',
      description: 'Основные загрязнители воздуха',
      impact: 'negative'
    },
    {
      icon: 'Waves',
      title: 'Реки под угрозой',
      value: '2 крупные',
      description: 'Иртыш и Омь требуют очистки',
      impact: 'negative'
    },
    {
      icon: 'Trees',
      title: 'Зелёных насаждений',
      value: '~2400 га',
      description: 'Парки, скверы, лесопарки',
      impact: 'positive'
    },
    {
      icon: 'Trash2',
      title: 'Мусора ежегодно',
      value: '400 тыс. тонн',
      description: 'Перерабатывается менее 10%',
      impact: 'negative'
    },
    {
      icon: 'Container',
      title: 'Контейнеров для раздельного сбора',
      value: '200+',
      description: 'Установлено по всему городу',
      impact: 'positive'
    },
    {
      icon: 'Wind',
      title: 'Качество воздуха',
      value: 'ИЗА 8-12',
      description: 'Индекс загрязнения атмосферы',
      impact: 'negative'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">🏙️ Омск — город на стыке эпох</h2>
          <p className="text-xl text-muted-foreground">
            Промышленный центр Сибири с богатой историей и экологическими вызовами
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
                Экологические проблемы
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
                  ⚠️ Омск входит в топ-15 самых загрязнённых городов России
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-300 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Icon name="Sparkles" size={28} />
                Эко-инициативы города
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
                  💚 Присоединяйся к эко-движению Омска!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-700 text-center justify-center">
              <Icon name="BarChart3" size={28} />
              Экологическая статистика Омска
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

        <div className="mt-12 p-6 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-xl border-2 border-emerald-300 text-center">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">🌍 Омск может стать чище!</h3>
          <p className="text-lg text-gray-700 mb-4">
            Каждый житель может внести свой вклад в экологию города через переработку отходов и осознанное потребление
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="text-lg px-4 py-2 bg-green-500 hover:bg-green-600">
              ♻️ Сортируй мусор
            </Badge>
            <Badge className="text-lg px-4 py-2 bg-blue-500 hover:bg-blue-600">
              🚴 Используй велосипед
            </Badge>
            <Badge className="text-lg px-4 py-2 bg-purple-500 hover:bg-purple-600">
              🌱 Сажай деревья
            </Badge>
            <Badge className="text-lg px-4 py-2 bg-orange-500 hover:bg-orange-600">
              💡 Экономь энергию
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmskInfo;