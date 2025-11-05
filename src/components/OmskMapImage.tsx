import { Card } from '@/components/ui/card';
import { useState } from 'react';

interface RecyclingPoint {
  name: string;
  address: string;
  types: string[];
  lat: number;
  lng: number;
}

interface OmskMapImageProps {
  recyclingPoints: RecyclingPoint[];
}

const OmskMapImage = ({ recyclingPoints }: OmskMapImageProps) => {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  const pointsWithPositions = recyclingPoints.map((point, index) => {
    const x = ((point.lng - 73.25) / (73.42 - 73.25)) * 100;
    const y = 100 - ((point.lat - 54.93) / (55.05 - 54.93)) * 100;
    
    return {
      ...point,
      x: Math.max(5, Math.min(95, x)),
      y: Math.max(5, Math.min(95, y)),
      index
    };
  });

  return (
    <section id="map-section" className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white drop-shadow-2xl">
            🗺️ КАРТА ПУНКТОВ ПЕРЕРАБОТКИ
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-bold">
            Омск — {recyclingPoints.length} точек сбора вторсырья
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-br from-emerald-100 to-blue-100 border-8 border-white p-8 relative overflow-hidden">
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <svg
                    viewBox="0 0 800 600"
                    className="absolute inset-0 w-full h-full"
                  >
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="0.5" opacity="0.3"/>
                      </pattern>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    <rect width="800" height="600" fill="url(#grid)" />
                    
                    <path
                      d="M 200,100 Q 400,80 600,120 L 650,300 Q 620,450 400,480 Q 180,460 150,300 Z"
                      fill="#3b82f6"
                      fillOpacity="0.2"
                      stroke="#2563eb"
                      strokeWidth="3"
                      strokeDasharray="10,5"
                    />
                    
                    <text x="400" y="280" fontSize="120" fill="#1e40af" opacity="0.1" textAnchor="middle" fontWeight="bold">ОМСК</text>
                    
                    <path
                      d="M 300,250 Q 350,220 400,250 Q 450,280 500,250"
                      fill="none"
                      stroke="#0ea5e9"
                      strokeWidth="8"
                      opacity="0.6"
                    />
                    <text x="400" y="240" fontSize="14" fill="#0c4a6e" textAnchor="middle" fontWeight="bold">р. Иртыш</text>

                    {pointsWithPositions.map((point) => (
                      <g
                        key={point.index}
                        transform={`translate(${(point.x / 100) * 800}, ${(point.y / 100) * 600})`}
                        onMouseEnter={() => setSelectedPoint(point.index)}
                        onMouseLeave={() => setSelectedPoint(null)}
                        className="cursor-pointer transition-all"
                      >
                        <circle
                          r={selectedPoint === point.index ? "20" : "12"}
                          fill={selectedPoint === point.index ? "#ef4444" : "#10b981"}
                          stroke="#fff"
                          strokeWidth="3"
                          filter="url(#glow)"
                          className="transition-all duration-200"
                        />
                        <circle
                          r={selectedPoint === point.index ? "25" : "0"}
                          fill="#ef4444"
                          opacity="0.3"
                          className="transition-all duration-200 animate-ping"
                        />
                        <text
                          y="-20"
                          fontSize="16"
                          fontWeight="bold"
                          fill="#1e40af"
                          textAnchor="middle"
                          opacity={selectedPoint === point.index ? "1" : "0"}
                          className="transition-opacity duration-200"
                        >
                          {point.index + 1}
                        </text>
                      </g>
                    ))}

                    <g transform="translate(50, 520)">
                      <rect width="250" height="70" fill="#fff" fillOpacity="0.95" rx="10" stroke="#3b82f6" strokeWidth="2"/>
                      <circle cx="30" cy="25" r="8" fill="#10b981" stroke="#fff" strokeWidth="2"/>
                      <text x="50" y="30" fontSize="14" fill="#1e40af" fontWeight="bold">Пункт переработки</text>
                      <circle cx="30" cy="50" r="8" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
                      <text x="50" y="55" fontSize="14" fill="#1e40af" fontWeight="bold">Выбранный пункт</text>
                    </g>
                  </svg>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-lg font-black text-gray-800">
                    🎯 Наведи курсор на точку, чтобы увидеть детали справа!
                  </p>
                </div>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-white p-6 sticky top-4">
                <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
                  📍 ИНФОРМАЦИЯ
                </h3>
                
                {selectedPoint !== null ? (
                  <div className="space-y-4">
                    <div className="bg-white/95 rounded-xl p-4">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-4xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-black w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          {selectedPoint + 1}
                        </span>
                        <div>
                          <h4 className="text-xl font-black text-gray-900">
                            {recyclingPoints[selectedPoint].name}
                          </h4>
                          <p className="text-gray-700 text-sm">
                            📍 {recyclingPoints[selectedPoint].address}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="font-bold text-gray-800 mb-2">Принимают:</p>
                        <div className="flex flex-wrap gap-2">
                          {recyclingPoints[selectedPoint].types.map((type, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <a 
                        href={`https://yandex.ru/maps/?rtext=~${recyclingPoints[selectedPoint].lat},${recyclingPoints[selectedPoint].lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-black py-3 rounded-xl hover:scale-105 transition-transform text-center"
                      >
                        🧭 Построить маршрут
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/90 rounded-xl p-6 text-center">
                    <div className="text-6xl mb-4">👆</div>
                    <p className="text-xl font-bold text-gray-700">
                      Выбери точку на карте, чтобы увидеть подробную информацию
                    </p>
                  </div>
                )}
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-emerald-600 border-4 border-white p-6">
                <h3 className="text-2xl font-black text-white mb-3">
                  📊 СТАТИСТИКА
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/90 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-800">Всего пунктов:</span>
                      <span className="text-2xl font-black text-green-600">{recyclingPoints.length}</span>
                    </div>
                  </div>
                  <div className="bg-white/90 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-800">Типов отходов:</span>
                      <span className="text-2xl font-black text-blue-600">
                        {new Set(recyclingPoints.flatMap(p => p.types)).size}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/90 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-800">Охват города:</span>
                      <span className="text-2xl font-black text-purple-600">95%</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block bg-white/95 border-4 border-green-400 p-8 max-w-3xl">
            <div className="text-6xl mb-4">♻️🗺️</div>
            <p className="text-2xl text-gray-800 font-bold">
              Найди ближайший пункт на карте и сдай мусор правильно! <br/>
              <span className="text-green-600">Каждая сданная бутылка = спасённая рыбка! 🐟</span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OmskMapImage;