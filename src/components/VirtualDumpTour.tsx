import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TourPoint {
  id: number;
  name: string;
  emoji: string;
  description: string;
  shockFact: string;
  stats: { label: string; value: string; icon: string }[];
  color: string;
}

const VirtualDumpTour = () => {
  const [currentPoint, setCurrentPoint] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [arMode, setArMode] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  const tourPoints: TourPoint[] = [
    {
      id: 0,
      name: 'Вход на свалку',
      emoji: '🚪',
      description: 'Добро пожаловать в ад. Запах ударяет за 500 метров. Горы мусора до 15 метров высотой.',
      shockFact: 'Эта свалка принимает 700 000 тонн мусора ежегодно — это 9 грузовиков КАЖДУЮ минуту',
      stats: [
        { label: 'Площадь', value: '50 гектаров', icon: 'Ruler' },
        { label: 'Высота', value: 'до 15 метров', icon: 'TrendingUp' },
        { label: 'Возраст', value: '30+ лет', icon: 'Calendar' }
      ],
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 1,
      name: 'Гора пластика',
      emoji: '🏔️',
      description: 'Бутылки, пакеты, упаковки — целая гора из пластика. Каждая бутылка будет здесь 450 лет.',
      shockFact: 'Только 9% пластика в России перерабатывается. Остальные 91% — вот они, перед вами',
      stats: [
        { label: 'Пластика в год', value: '300 000 тонн', icon: 'Package' },
        { label: 'Срок разложения', value: '450 лет', icon: 'Timer' },
        { label: 'Переработка', value: '9%', icon: 'TrendingDown' }
      ],
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 2,
      name: 'Долина органики',
      emoji: '🍎',
      description: 'Гниющие пищевые отходы. Выделяют метан — газ в 25 раз опаснее CO₂ для климата.',
      shockFact: 'Органика составляет 40% всего мусора и создаёт токсичный фильтрат, отравляющий грунтовые воды',
      stats: [
        { label: 'Органики в год', value: '280 000 тонн', icon: 'Apple' },
        { label: 'Метан', value: 'в 25 раз хуже CO₂', icon: 'Wind' },
        { label: 'Можно компостировать', value: '100%', icon: 'Sprout' }
      ],
      color: 'from-green-600 to-green-800'
    },
    {
      id: 3,
      name: 'Кладбище электроники',
      emoji: '📱',
      description: 'Телефоны, компьютеры, холодильники. Содержат ртуть, свинец, кадмий — яды для человека и природы.',
      shockFact: 'В России выбрасывается 1,5 млн тонн электронных отходов в год. Менее 5% утилизируется правильно',
      stats: [
        { label: 'Электроники', value: '20 000 тонн', icon: 'Smartphone' },
        { label: 'Токсичные металлы', value: 'Ртуть, свинец', icon: 'Flame' },
        { label: 'Правильная утилизация', value: '5%', icon: 'AlertTriangle' }
      ],
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: 4,
      name: 'Океан из стекла',
      emoji: '🍾',
      description: 'Битые бутылки, банки, окна. Острые края опасны для животных. Стекло не разлагается никогда.',
      shockFact: 'Стекло разлагается 4000 лет. Эти бутылки увидят люди через 120 поколений',
      stats: [
        { label: 'Стекла в год', value: '50 000 тонн', icon: 'Wine' },
        { label: 'Разложение', value: '4000 лет', icon: 'Infinity' },
        { label: 'Переработка', value: '∞ раз', icon: 'Recycle' }
      ],
      color: 'from-cyan-600 to-cyan-800'
    },
    {
      id: 5,
      name: 'Зона горения',
      emoji: '🔥',
      description: 'Здесь мусор тлеет годами. Дым содержит диоксины — один из самых ядовитых веществ на Земле.',
      shockFact: 'Диоксины вызывают рак и мутации. Один грамм может отравить миллион человек',
      stats: [
        { label: 'Температура', value: 'до 800°C', icon: 'Flame' },
        { label: 'Токсичный дым', value: 'Диоксины', icon: 'Skull' },
        { label: 'Радиус загрязнения', value: '5 км', icon: 'MapPin' }
      ],
      color: 'from-red-600 to-red-800'
    },
    {
      id: 6,
      name: 'Ядовитое озеро',
      emoji: '💧',
      description: 'Фильтрат — токсичная жидкость из разлагающегося мусора. Просачивается в грунтовые воды.',
      shockFact: '1 литр фильтрата загрязняет 1000 литров чистой воды. Отсюда он попадает в Иртыш',
      stats: [
        { label: 'Объём фильтрата', value: '10 000 м³/год', icon: 'Droplets' },
        { label: 'Загрязнение воды', value: '1:1000', icon: 'Waves' },
        { label: 'Тяжёлые металлы', value: 'Свинец, кадмий', icon: 'Zap' }
      ],
      color: 'from-teal-600 to-teal-800'
    },
    {
      id: 7,
      name: 'Обзорная точка',
      emoji: '🔭',
      description: 'Вид на всю свалку сверху. 50 гектаров — это 70 футбольных полей мусора. И это только один город.',
      shockFact: 'В России 1300+ официальных свалок и 30 000+ нелегальных. Общая площадь — как вся Московская область',
      stats: [
        { label: 'Площадь свалки', value: '50 га = 70 полей', icon: 'Map' },
        { label: 'Свалок в России', value: '1300 официальных', icon: 'MapPin' },
        { label: 'Незаконных', value: '30 000+', icon: 'AlertOctagon' }
      ],
      color: 'from-orange-600 to-orange-800'
    }
  ];

  const handleRotate = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setRotation(prev => prev - 45);
    } else {
      setRotation(prev => prev + 45);
    }
  };

  const handleNextPoint = () => {
    setCurrentPoint(prev => (prev + 1) % tourPoints.length);
    setRotation(0);
  };

  const handlePrevPoint = () => {
    setCurrentPoint(prev => (prev - 1 + tourPoints.length) % tourPoints.length);
    setRotation(0);
  };

  const startAR = async () => {
    try {
      setCameraError('');
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      setStream(mediaStream);
      setArMode(true);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Ошибка доступа к камере:', error);
      setCameraError('Не удалось получить доступ к камере. Разрешите доступ в настройках браузера.');
    }
  };

  const stopAR = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setArMode(false);
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  const point = tourPoints[currentPoint];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
            🗑️ Виртуальный тур по свалке 360°
          </h2>
          <p className="text-2xl text-gray-300 mb-4">
            Увидь масштаб проблемы собственными глазами
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge className="text-xl px-6 py-3 bg-red-600 text-white animate-pulse">
              ⚠️ Осторожно: реальность шокирует
            </Badge>
            {!arMode && (
              <Button
                onClick={startAR}
                className="text-xl px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold animate-pulse shadow-2xl border-2 border-white"
                size="lg"
              >
                <Icon name="Camera" size={28} className="mr-3" />
                📱 ВКЛЮЧИТЬ AR-РЕЖИМ
              </Button>
            )}
            {arMode && (
              <Button
                onClick={stopAR}
                className="text-xl px-8 py-6 bg-red-600 hover:bg-red-700 text-white font-bold"
                size="lg"
              >
                <Icon name="X" size={28} className="mr-3" />
                Выключить AR
              </Button>
            )}
          </div>
          {cameraError && (
            <div className="bg-red-500/20 border-2 border-red-500 rounded-xl p-4 max-w-2xl mx-auto">
              <p className="text-red-300">{cameraError}</p>
            </div>
          )}
          {arMode && (
            <div className="bg-purple-500/20 border-2 border-purple-500 rounded-xl p-4 max-w-2xl mx-auto animate-pulse">
              <p className="text-purple-300 text-lg">
                📱 <strong>AR-РЕЖИМ АКТИВЕН!</strong> Наведи камеру на ровную поверхность (стол, пол) и увидишь мини-свалку в твоём пространстве!
              </p>
            </div>
          )}
        </div>

        <Card className={`border-4 border-red-500 bg-gradient-to-br ${point.color} shadow-2xl mb-8 overflow-hidden`}>
          <CardHeader className="bg-black/50 backdrop-blur border-b-4 border-red-500">
            <div className="flex items-center justify-between">
              <Button
                onClick={handlePrevPoint}
                className="bg-white/20 hover:bg-white/30 border-2 border-white"
                size="lg"
              >
                <Icon name="ChevronLeft" size={24} />
              </Button>

              <CardTitle className="flex flex-col items-center gap-2 text-white text-center">
                <div className="text-7xl animate-bounce">{point.emoji}</div>
                <div className="text-3xl font-bold">{point.name}</div>
                <Badge className="text-sm bg-red-500 text-white">
                  Точка {currentPoint + 1} из {tourPoints.length}
                </Badge>
              </CardTitle>

              <Button
                onClick={handleNextPoint}
                className="bg-white/20 hover:bg-white/30 border-2 border-white"
                size="lg"
              >
                <Icon name="ChevronRight" size={24} />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            <div className="mb-8 relative">
              {!arMode ? (
                <div 
                  className="w-full h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl border-4 border-white/30 overflow-hidden relative transition-transform duration-500"
                  style={{ transform: `perspective(1000px) rotateY(${rotation}deg)` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-9xl mb-6 drop-shadow-2xl">{point.emoji}</div>
                      <div className="text-4xl font-bold drop-shadow-lg mb-4">{point.name}</div>
                      <div className="text-lg opacity-75">Вращай камеру для осмотра</div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
              ) : (
                <div className="relative w-full h-96 rounded-2xl border-4 border-purple-500 overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                  
                  <div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{ 
                      transform: `perspective(800px) rotateY(${rotation}deg) rotateX(${Math.sin(rotation / 180 * Math.PI) * 10}deg)`,
                      transition: 'transform 0.5s ease-out'
                    }}
                  >
                    <div className="relative">
                      <div className="text-8xl drop-shadow-2xl filter brightness-110 animate-float">
                        {point.emoji}
                      </div>
                      
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-black/50 rounded-full blur-xl"></div>
                      
                      <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                        AR
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-4 py-2 rounded-full text-sm border-2 border-purple-500">
                    <Icon name="Camera" size={16} className="inline mr-2" />
                    AR активен
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur p-4 rounded-xl border-2 border-purple-500">
                    <p className="text-center text-sm">
                      🎯 Объект расположен в вашем пространстве<br />
                      Поверни телефон, чтобы осмотреть со всех сторон
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-center gap-4 mt-6">
                <Button
                  onClick={() => handleRotate('left')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                  size="lg"
                >
                  <Icon name="RotateCcw" size={24} className="mr-2" />
                  Повернуть влево
                </Button>
                <Button
                  onClick={() => handleRotate('right')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                  size="lg"
                >
                  Повернуть вправо
                  <Icon name="RotateCw" size={24} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="bg-black/60 backdrop-blur-lg p-8 rounded-2xl border-2 border-white/30 mb-6">
              <p className="text-xl leading-relaxed mb-6">{point.description}</p>
              
              <div className="bg-red-500/20 border-2 border-red-500 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <Icon name="AlertTriangle" size={32} className="flex-shrink-0 text-red-400" />
                  <div>
                    <div className="font-bold text-red-400 mb-2 text-lg">ШОКИРУЮЩИЙ ФАКТ:</div>
                    <p className="text-lg leading-relaxed">{point.shockFact}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {point.stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border-2 border-white/30 hover:scale-105 transition-transform">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon name={stat.icon as any} size={32} />
                    </div>
                    <div className="text-sm opacity-75">{stat.label}</div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {tourPoints.map((tp, index) => (
            <button
              key={tp.id}
              onClick={() => {
                setCurrentPoint(index);
                setRotation(0);
              }}
              className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                currentPoint === index
                  ? 'bg-red-500 border-red-300 shadow-2xl scale-105'
                  : 'bg-gray-800 border-gray-600 hover:bg-gray-700'
              }`}
            >
              <div className="text-4xl mb-2">{tp.emoji}</div>
              <div className="text-sm font-semibold">{tp.name}</div>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 p-12 rounded-3xl border-4 border-yellow-400 text-center shadow-2xl">
          <div className="text-8xl mb-6">😱</div>
          <h3 className="text-5xl font-bold mb-6">Это реальность, а не фантастика</h3>
          <p className="text-2xl mb-6 leading-relaxed">
            700 000 тонн мусора в год — это <span className="font-bold text-3xl">1 900 тонн КАЖДЫЙ ДЕНЬ</span>
          </p>
          <p className="text-xl mb-8 opacity-90">
            Если ничего не изменится — через 10 лет свалка удвоится в размере.<br />
            Через 50 лет — Омск будет окружён горами мусора.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl">
              <div className="text-4xl mb-3">🔥</div>
              <div className="text-2xl font-bold mb-2">Горящий мусор</div>
              <div className="text-sm">Диоксины в воздухе — рак и мутации</div>
            </div>
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl">
              <div className="text-4xl mb-3">💧</div>
              <div className="text-2xl font-bold mb-2">Ядовитый фильтрат</div>
              <div className="text-sm">Отравляет грунтовые воды и реки</div>
            </div>
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl">
              <div className="text-4xl mb-3">💨</div>
              <div className="text-2xl font-bold mb-2">Метан в атмосфере</div>
              <div className="text-sm">В 25 раз опаснее CO₂ для климата</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="text-xl px-8 py-4 bg-white text-red-600 hover:bg-gray-100 cursor-pointer hover:scale-110 transition-transform shadow-xl">
              ♻️ Начни сортировать СЕЙЧАС
            </Badge>
            <Badge className="text-xl px-8 py-4 bg-white text-orange-600 hover:bg-gray-100 cursor-pointer hover:scale-110 transition-transform shadow-xl">
              🌱 Меньше потребляй
            </Badge>
            <Badge className="text-xl px-8 py-4 bg-white text-yellow-600 hover:bg-gray-100 cursor-pointer hover:scale-110 transition-transform shadow-xl">
              🗑️ Используй экоточки
            </Badge>
          </div>

          <div className="mt-8 text-3xl font-bold bg-black/40 backdrop-blur p-6 rounded-2xl">
            🚨 Каждый выброшенный пакет — это ТЫ на этой свалке! 🚨
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default VirtualDumpTour;
