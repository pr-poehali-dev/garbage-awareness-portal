import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [wasteCounter, setWasteCounter] = useState(8547320);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWasteCounter(prev => prev + Math.floor(Math.random() * 10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const recyclingPoints = [
    { name: 'ЭкоЦентр на Красном пути', address: 'ул. Красный путь, 155', types: ['пластик', 'стекло', 'бумага'], lat: 54.9885, lng: 73.3242 },
    { name: 'Пункт приёма на Ленина', address: 'пр. Ленина, 24', types: ['батарейки', 'лампы', 'электроника'], lat: 54.9924, lng: 73.3686 },
    { name: 'ЭкоСтанция Левобережье', address: 'ул. 10 лет Октября, 195', types: ['пластик', 'металл', 'одежда'], lat: 55.0281, lng: 73.3174 },
    { name: 'Зелёный мир на Декабристов', address: 'ул. Декабристов, 45', types: ['стекло', 'бумага', 'картон'], lat: 54.9736, lng: 73.3842 },
    { name: 'ЭкоПункт на Conquista', address: 'ул. Conquista, 18', types: ['батарейки', 'пластик', 'металл'], lat: 54.9647, lng: 73.3789 }
  ];

  const quizQuestions = [
    {
      question: 'В какой контейнер выбросить пластиковую бутылку?',
      options: ['Синий (пластик)', 'Зелёный (стекло)', 'Коричневый (органика)', 'Серый (смешанные)'],
      correct: 0
    },
    {
      question: 'Сколько лет разлагается пластиковый пакет?',
      options: ['5-10 лет', '50-100 лет', '400-1000 лет', '10-20 лет'],
      correct: 2
    },
    {
      question: 'Что нельзя выбрасывать в контейнер для бумаги?',
      options: ['Газеты', 'Картонные коробки', 'Ламинированную бумагу', 'Журналы'],
      correct: 2
    }
  ];

  const handleQuizAnswer = (answerIndex: number) => {
    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setQuizScore(prev => prev + 10);
    }
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowQuizResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setQuizScore(0);
    setShowQuizResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-200">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ЭкоОмск
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors">Решения</a>
            <a href="#map" className="text-foreground hover:text-primary transition-colors">Карта</a>
            <a href="#quiz" className="text-foreground hover:text-primary transition-colors">Квиз</a>
            <a href="#resources" className="text-foreground hover:text-primary transition-colors">Ресурсы</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Контакты
          </Button>
        </nav>
      </header>

      <section id="hero" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/80d20a93-447f-4b97-8907-e004902ecd46/files/1a10056d-8b5b-4391-a4b4-0c8d420ada86.jpg"
            alt="Эко фон"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              <Icon name="Sparkles" size={16} className="mr-1" />
              Экология начинается с каждого из нас
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Мусор вокруг нас
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Интерактивная платформа для решения проблемы отходов в Омске. Узнай, как правильно сортировать мусор, найди ближайший пункт приёма и стань частью экологического движения! ♻️
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow animate-scale-in">
                <Icon name="TrendingUp" className="text-accent mx-auto mb-3" size={40} />
                <div className="text-4xl font-bold text-primary mb-2 animate-counter">
                  {wasteCounter.toLocaleString('ru-RU')}
                </div>
                <p className="text-sm text-muted-foreground">тонн мусора в Омске в этом году</p>
              </Card>
              
              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow animate-scale-in" style={{animationDelay: '0.1s'}}>
                <Icon name="Recycle" className="text-primary mx-auto mb-3" size={40} />
                <div className="text-4xl font-bold text-secondary mb-2">
                  {recyclingPoints.length}
                </div>
                <p className="text-sm text-muted-foreground">пунктов приёма вторсырья</p>
              </Card>
              
              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow animate-scale-in" style={{animationDelay: '0.2s'}}>
                <Icon name="Trees" className="text-secondary mx-auto mb-3" size={40} />
                <div className="text-4xl font-bold text-accent mb-2">
                  12%
                </div>
                <p className="text-sm text-muted-foreground">мусора перерабатывается</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Решения и методы</h2>
            <p className="text-xl text-muted-foreground">Практические способы борьбы с мусором</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Trash2" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Сортировка отходов</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>Пластик:</strong> бутылки, упаковка (без пищевых остатков)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>Стекло:</strong> банки, бутылки (без крышек)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>Бумага:</strong> газеты, картон (сухие и чистые)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>Батарейки и электроника:</strong> только в спецпункты!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Icon name="ShoppingBag" className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Сокращение потребления</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={18} />
                      <span>Используй многоразовые сумки вместо пакетов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={18} />
                      <span>Покупай продукты без лишней упаковки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={18} />
                      <span>Откажись от одноразовой посуды</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={18} />
                      <span>Выбирай товары в перерабатываемой упаковке</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Icon name="Sprout" className="text-accent" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Компостирование</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span>Органические отходы превращаются в удобрение</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span>Подходит для частных домов и дач</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span>Сокращает объём бытовых отходов на 30%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Участие в акциях</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Субботники по уборке парков и улиц</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Эко-марафоны и челленджи в соцсетях</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Обмен и дарение ненужных вещей</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="map" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Карта пунктов приёма Омска</h2>
            <p className="text-xl text-muted-foreground">Найди ближайший пункт сдачи вторсырья</p>
          </div>

          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="plastic">Пластик</TabsTrigger>
              <TabsTrigger value="glass">Стекло</TabsTrigger>
              <TabsTrigger value="batteries">Батарейки</TabsTrigger>
              <TabsTrigger value="electronics">Электроника</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {recyclingPoints.map((point, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{point.name}</h3>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <Icon name="MapPin" size={16} className="text-primary" />
                          {point.address}
                        </p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Icon name="Navigation" size={16} />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {point.types.map((type, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="plastic" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {recyclingPoints.filter(p => p.types.includes('пластик')).map((point, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all">
                    <h3 className="text-xl font-bold mb-2">{point.name}</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      {point.address}
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="glass" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {recyclingPoints.filter(p => p.types.includes('стекло')).map((point, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all">
                    <h3 className="text-xl font-bold mb-2">{point.name}</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      {point.address}
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="batteries" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {recyclingPoints.filter(p => p.types.includes('батарейки')).map((point, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all">
                    <h3 className="text-xl font-bold mb-2">{point.name}</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      {point.address}
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="electronics" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {recyclingPoints.filter(p => p.types.includes('электроника')).map((point, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all">
                    <h3 className="text-xl font-bold mb-2">{point.name}</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      {point.address}
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="quiz" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Эко-квиз</h2>
              <p className="text-xl text-muted-foreground">Проверь свои знания о сортировке мусора и заработай баллы!</p>
            </div>

            <Card className="p-8">
              {!showQuizResult ? (
                <>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        Вопрос {currentQuestion + 1} из {quizQuestions.length}
                      </span>
                      <Badge className="bg-secondary text-secondary-foreground">
                        <Icon name="Trophy" size={16} className="mr-1" />
                        {quizScore} баллов
                      </Badge>
                    </div>
                    <Progress value={((currentQuestion + 1) / quizQuestions.length) * 100} className="h-2" />
                  </div>

                  <h3 className="text-2xl font-bold mb-6">{quizQuestions[currentQuestion].question}</h3>

                  <div className="space-y-3">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full text-left justify-start h-auto py-4 px-6 hover:bg-primary/10 hover:border-primary transition-all"
                        onClick={() => handleQuizAnswer(index)}
                      >
                        <span className="text-lg">{option}</span>
                      </Button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center animate-scale-in">
                  <Icon name="Award" className="text-accent mx-auto mb-4" size={80} />
                  <h3 className="text-3xl font-bold mb-4">Квиз завершён!</h3>
                  <p className="text-xl mb-6">
                    Ты набрал <span className="text-primary font-bold">{quizScore}</span> из{' '}
                    <span className="font-bold">{quizQuestions.length * 10}</span> баллов
                  </p>
                  <div className="mb-8">
                    {quizScore === quizQuestions.length * 10 && (
                      <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                        🏆 Идеальный результат! Ты эко-эксперт!
                      </Badge>
                    )}
                    {quizScore >= 20 && quizScore < 30 && (
                      <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                        👍 Отличный результат! Продолжай в том же духе!
                      </Badge>
                    )}
                    {quizScore < 20 && (
                      <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-2">
                        💚 Хороший старт! Изучи раздел решений
                      </Badge>
                    )}
                  </div>
                  <Button onClick={resetQuiz} size="lg" className="bg-primary hover:bg-primary/90">
                    <Icon name="RotateCcw" size={20} className="mr-2" />
                    Пройти заново
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      <section id="resources" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Полезные ресурсы</h2>
            <p className="text-xl text-muted-foreground">Материалы и организации для глубокого погружения</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <Icon name="BookOpen" className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Образовательные материалы</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="FileText" size={16} className="text-primary" />
                  <span>Гид по раздельному сбору</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="FileText" size={16} className="text-primary" />
                  <span>Что можно переработать?</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="FileText" size={16} className="text-primary" />
                  <span>Маркировка пластика</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <Icon name="Building2" className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Экоорганизации</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-secondary" />
                  <span>Гринпис Россия</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-secondary" />
                  <span>РазДельный Сбор</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-secondary" />
                  <span>ЭкоОмск (местная)</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <Icon name="Smartphone" className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Мобильные приложения</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Download" size={16} className="text-accent" />
                  <span>RecycleMap - карта пунктов</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Download" size={16} className="text-accent" />
                  <span>EcoChallenge - челленджи</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Download" size={16} className="text-accent" />
                  <span>SortIt - гид по сортировке</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <div className="text-center">
                <Icon name="Calculator" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">Калькулятор экономии</h3>
                <p className="text-muted-foreground mb-6">
                  Если ты правильно сортируешь 10 кг мусора в месяц, за год ты экономишь:
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">17</div>
                    <p className="text-sm text-muted-foreground">деревьев спасено</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">120</div>
                    <p className="text-sm text-muted-foreground">кг CO₂ не выброшено</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">5000</div>
                    <p className="text-sm text-muted-foreground">литров воды сэкономлено</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Leaf" size={32} />
                <span className="text-xl font-bold">ЭкоОмск</span>
              </div>
              <p className="text-background/70">
                Платформа для решения проблемы отходов в нашем городе
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#solutions" className="hover:text-background transition-colors">Решения</a></li>
                <li><a href="#map" className="hover:text-background transition-colors">Карта</a></li>
                <li><a href="#quiz" className="hover:text-background transition-colors">Квиз</a></li>
                <li><a href="#resources" className="hover:text-background transition-colors">Ресурсы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/70">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@ecoomsk.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (3812) 555-777</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Омск, Россия</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="border-background/20 hover:bg-background/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-background/20 hover:bg-background/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-background/20 hover:bg-background/10">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>© 2024 ЭкоОмск. Все права защищены. Сделано с 💚 для нашей планеты</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
