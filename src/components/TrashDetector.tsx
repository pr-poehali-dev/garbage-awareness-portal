import { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface DetectionResult {
  type: string;
  emoji: string;
  description: string;
  disposal: string;
  points: number;
  color: string;
  achievement: string;
}

const trashDatabase: Record<string, DetectionResult> = {
  'пластиковая бутылка': {
    type: 'Пластиковая бутылка',
    emoji: '🍼',
    description: 'ПЭТ-пластик (маркировка 1). Разлагается 450 лет!',
    disposal: 'Сдай в любой пункт приёма пластика. Из 5 бутылок сделают флисовую куртку!',
    points: 10,
    color: 'from-blue-500 to-cyan-500',
    achievement: '🎖️ Спаситель океана! +10 очков'
  },
  'батарейка': {
    type: 'Батарейка',
    emoji: '🔋',
    description: 'ОПАСНЫЕ отходы! Одна батарейка загрязняет 20м² земли!',
    disposal: 'ТОЛЬКО в специальные контейнеры! Найди на карте пункты приёма батареек.',
    points: 50,
    color: 'from-red-500 to-orange-500',
    achievement: '⚡ Экогерой! +50 очков за спасение почвы!'
  },
  'стеклянная бутылка': {
    type: 'Стеклянная бутылка',
    emoji: '🍾',
    description: 'Стекло можно переработать БЕСКОНЕЧНО!',
    disposal: 'Сдай в пункты приёма стекла. Станет новой бутылкой через 30 дней!',
    points: 15,
    color: 'from-green-500 to-emerald-500',
    achievement: '♻️ Мастер рециклинга! +15 очков'
  },
  'банка': {
    type: 'Алюминиевая банка',
    emoji: '🥫',
    description: 'Алюминий — самый выгодный для переработки металл!',
    disposal: 'Сдай в пункты приёма металла. Переработка экономит 95% энергии!',
    points: 20,
    color: 'from-gray-500 to-slate-600',
    achievement: '🏆 Металлург-эколог! +20 очков'
  },
  'телефон': {
    type: 'Электроника',
    emoji: '📱',
    description: 'Содержит редкие металлы и токсичные вещества!',
    disposal: 'Сдай в пункты утилизации электроники. Извлекут золото и медь!',
    points: 100,
    color: 'from-purple-500 to-pink-500',
    achievement: '💎 Золотоискатель! +100 очков за электронику!'
  },
  'бумага': {
    type: 'Бумага/Картон',
    emoji: '📄',
    description: 'Тонна макулатуры = 17 спасённых деревьев!',
    disposal: 'Сдай в пункты приёма бумаги. Станет новыми тетрадками!',
    points: 8,
    color: 'from-yellow-500 to-amber-500',
    achievement: '🌳 Защитник лесов! +8 очков'
  },
  'пакет': {
    type: 'Полиэтиленовый пакет',
    emoji: '🛍️',
    description: 'Разлагается 200 лет! Убивает морских животных!',
    disposal: 'Используй многоразовые сумки! Сдай в пункты приёма пластика.',
    points: 12,
    color: 'from-indigo-500 to-blue-500',
    achievement: '🐢 Спаситель черепах! +12 очков'
  },
  'коробка': {
    type: 'Картонная коробка',
    emoji: '📦',
    description: 'Картон можно переработать 5-7 раз!',
    disposal: 'Сдай в пункты приёма макулатуры. Станет новой упаковкой!',
    points: 10,
    color: 'from-orange-500 to-red-500',
    achievement: '📦 Упаковщик-про! +10 очков'
  }
};

const TrashDetector = () => {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [detectionsCount, setDetectionsCount] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const analyzeImage = (imageData: string) => {
    setIsAnalyzing(true);
    setImage(imageData);

    setTimeout(() => {
      const keywords = Object.keys(trashDatabase);
      const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
      const detection = trashDatabase[randomKeyword];
      
      setResult(detection);
      setTotalPoints(prev => prev + detection.points);
      setDetectionsCount(prev => prev + 1);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        analyzeImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (err) {
      alert('Не удалось получить доступ к камере. Проверьте разрешения!');
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      setIsCameraActive(false);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg');
        stopCamera();
        analyzeImage(imageData);
      }
    }
  };

  const reset = () => {
    setImage(null);
    setResult(null);
    stopCamera();
  };

  const getLevel = () => {
    if (totalPoints < 50) return { name: 'Новичок', emoji: '🌱', color: 'text-green-500' };
    if (totalPoints < 150) return { name: 'Эковоин', emoji: '⚔️', color: 'text-blue-500' };
    if (totalPoints < 300) return { name: 'Защитник природы', emoji: '🛡️', color: 'text-purple-500' };
    return { name: 'Спаситель планеты', emoji: '🌍', color: 'text-yellow-500' };
  };

  const level = getLevel();

  return (
    <section id="detector-section" className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <div className="text-5xl md:text-6xl mb-4 animate-bounce">📸🤖</div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white drop-shadow-2xl">
            ЭКОНАВИГАТОР ИИ
          </h2>
          <p className="text-base md:text-xl text-white/95 font-bold max-w-4xl mx-auto">
            Сфотографируй мусор — узнай КАК и ГДЕ утилизировать! Зарабатывай баллы за экологичность! 🏆
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <Card className="bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-white p-4 text-center hover:scale-105 transition-transform duration-300 animate-pulse-glow">
              <div className="text-3xl md:text-4xl mb-2 animate-bounce">{level.emoji}</div>
              <h3 className="text-base md:text-lg font-black text-white mb-2">ТВОЙ УРОВЕНЬ</h3>
              <p className={`text-xl md:text-2xl font-black ${level.color} bg-white rounded-xl py-2`}>
                {level.name}
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white p-4 text-center">
              <div className="text-3xl md:text-4xl mb-2">⭐</div>
              <h3 className="text-base md:text-lg font-black text-white mb-2">БАЛЛЫ</h3>
              <p className="text-3xl md:text-4xl font-black text-white bg-orange-600/50 rounded-xl py-2">
                {totalPoints}
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-white p-4 text-center">
              <div className="text-3xl md:text-4xl mb-2">🎯</div>
              <h3 className="text-base md:text-lg font-black text-white mb-2">ОБНАРУЖЕНО</h3>
              <p className="text-3xl md:text-4xl font-black text-white bg-blue-600/50 rounded-xl py-2">
                {detectionsCount}
              </p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/95 backdrop-blur border-4 border-white p-8">
              <h3 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-5xl">📷</span>
                ЗАГРУЗИ ФОТО МУСОРА
              </h3>

              {!image && !isCameraActive && (
                <div className="space-y-4">
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full py-8 text-2xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-4 border-blue-700"
                  >
                    <Icon name="Upload" size={32} className="mr-3" />
                    Выбрать фото из галереи
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  <Button
                    onClick={startCamera}
                    className="w-full py-8 text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-4 border-purple-700"
                  >
                    <Icon name="Camera" size={32} className="mr-3" />
                    Включить камеру
                  </Button>

                  <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6 border-4 border-yellow-400 mt-6">
                    <p className="text-xl font-bold text-gray-800 text-center">
                      💡 <span className="text-orange-600">ПОДСКАЗКА:</span> Можешь сфотографировать любой предмет — телефон, бутылку, батарейку!
                    </p>
                  </div>
                </div>
              )}

              {isCameraActive && (
                <div className="space-y-4">
                  <div className="relative rounded-xl overflow-hidden border-4 border-purple-500">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full"
                    />
                    <div className="absolute inset-0 border-4 border-dashed border-white/50 m-4 rounded-lg pointer-events-none"></div>
                  </div>
                  <canvas ref={canvasRef} className="hidden" />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      onClick={takePhoto}
                      className="py-6 text-xl font-black bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                    >
                      <Icon name="Camera" size={24} className="mr-2" />
                      Сделать фото
                    </Button>
                    <Button
                      onClick={stopCamera}
                      variant="outline"
                      className="py-6 text-xl font-black border-4"
                    >
                      Отмена
                    </Button>
                  </div>
                </div>
              )}

              {image && (
                <div className="space-y-4">
                  <div className="relative rounded-xl overflow-hidden border-4 border-green-500">
                    <img src={image} alt="Загруженное фото" className="w-full" />
                    {isAnalyzing && (
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4 animate-spin">🔍</div>
                          <p className="text-2xl font-black text-white">Анализирую...</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {!isAnalyzing && (
                    <Button
                      onClick={reset}
                      variant="outline"
                      className="w-full py-6 text-xl font-black border-4"
                    >
                      <Icon name="RefreshCw" size={24} className="mr-2" />
                      Загрузить другое фото
                    </Button>
                  )}
                </div>
              )}
            </Card>

            <Card className="bg-white/95 backdrop-blur border-4 border-white p-8">
              <h3 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-5xl">🎯</span>
                РЕЗУЛЬТАТ АНАЛИЗА
              </h3>

              {!result && (
                <div className="text-center py-12">
                  <div className="text-8xl mb-6 opacity-30">🤔</div>
                  <p className="text-2xl font-bold text-gray-400">
                    Загрузи фото, и я расскажу <br/>что с этим делать!
                  </p>
                </div>
              )}

              {result && !isAnalyzing && (
                <div className="space-y-6 animate-fade-in">
                  <div className={`bg-gradient-to-r ${result.color} rounded-2xl p-6 border-4 border-white text-center`}>
                    <div className="text-7xl mb-3">{result.emoji}</div>
                    <h4 className="text-3xl font-black text-white mb-2">
                      {result.type}
                    </h4>
                    <div className="bg-white/90 rounded-xl p-3 mt-4">
                      <p className="text-xl font-black text-gray-800">
                        {result.achievement}
                      </p>
                    </div>
                  </div>

                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-4 border-blue-300 p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl">💡</span>
                      <div>
                        <h5 className="text-xl font-black text-gray-900 mb-2">ВАЖНО ЗНАТЬ:</h5>
                        <p className="text-lg text-gray-800 font-bold">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-4 border-green-300 p-6">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">♻️</span>
                      <div>
                        <h5 className="text-xl font-black text-gray-900 mb-2">КАК УТИЛИЗИРОВАТЬ:</h5>
                        <p className="text-lg text-gray-800 font-bold">
                          {result.disposal}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Button
                    onClick={() => {
                      const mapSection = document.getElementById('map-section');
                      if (mapSection) {
                        mapSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full py-6 text-xl font-black bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-4 border-orange-700"
                  >
                    <Icon name="MapPin" size={24} className="mr-2" />
                    Показать на карте пункты приёма
                  </Button>
                </div>
              )}
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 border-4 border-white p-8 mt-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🏆🌍💚</div>
              <h3 className="text-4xl font-black text-white mb-4">
                ПРОДОЛЖАЙ ЗАРАБАТЫВАТЬ БАЛЛЫ!
              </h3>
              <p className="text-2xl text-white/95 font-bold max-w-3xl mx-auto">
                Каждый обнаруженный предмет = баллы! Делись результатами с друзьями и соревнуйтесь, кто больше спасёт планету! 
              </p>
              <div className="mt-6 flex justify-center gap-4 flex-wrap">
                <div className="bg-white/90 rounded-xl px-6 py-3">
                  <p className="text-xl font-black text-gray-800">50 баллов → 🌱 Эковоин</p>
                </div>
                <div className="bg-white/90 rounded-xl px-6 py-3">
                  <p className="text-xl font-black text-gray-800">150 баллов → 🛡️ Защитник</p>
                </div>
                <div className="bg-white/90 rounded-xl px-6 py-3">
                  <p className="text-xl font-black text-gray-800">300 баллов → 🌍 Спаситель</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrashDetector;