import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,0,0,0.1)_20px,rgba(0,0,0,0.1)_40px)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-8xl mb-6">⚠️🌍💔</div>
          <h2 className="text-7xl font-black mb-6 text-white drop-shadow-2xl">
            ПРОБЛЕМА: МУСОР ВОКРУГ НАС
          </h2>
          <p className="text-3xl text-white/95 font-bold max-w-5xl mx-auto">
            Каждый день мы производим тонны отходов, которые убивают планету. Но есть решение!
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gradient-to-br from-red-500 to-pink-600 border-4 border-white p-10">
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">😱</div>
                <h3 className="text-5xl font-black text-white mb-6 drop-shadow-lg">
                  ЧТО ПРОИСХОДИТ?
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/95 rounded-2xl p-6 border-4 border-red-300">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">🌊</div>
                    <div>
                      <h4 className="text-2xl font-black text-gray-900 mb-2">ОКЕАНЫ ТОНУТ В ПЛАСТИКЕ</h4>
                      <p className="text-lg text-gray-800 font-bold">
                        <span className="text-red-600">8 миллионов тонн</span> пластика попадает в океан каждый год. 
                        Это как высыпать целый мусоровоз в море КАЖДУЮ МИНУТУ! 🚛💦
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 rounded-2xl p-6 border-4 border-orange-300">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">🐢</div>
                    <div>
                      <h4 className="text-2xl font-black text-gray-900 mb-2">ЖИВОТНЫЕ ГИБНУТ</h4>
                      <p className="text-lg text-gray-800 font-bold">
                        <span className="text-red-600">1 миллион</span> морских птиц и 
                        <span className="text-red-600"> 100,000</span> морских животных умирают от пластика ежегодно. 
                        Черепахи путают пакеты с медузами! 😢
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 rounded-2xl p-6 border-4 border-yellow-300">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">🌳</div>
                    <div>
                      <h4 className="text-2xl font-black text-gray-900 mb-2">СВАЛКИ РАСТУТ</h4>
                      <p className="text-lg text-gray-800 font-bold">
                        В России на свалки отправляется <span className="text-red-600">95%</span> мусора. 
                        Площадь свалок = <span className="text-red-600">4 миллиона гектаров</span> — 
                        это как вся Москва × 30 раз! 🏔️
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 rounded-2xl p-6 border-4 border-green-300">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">⏰</div>
                    <div>
                      <h4 className="text-2xl font-black text-gray-900 mb-2">МУСОР НЕ РАЗЛАГАЕТСЯ</h4>
                      <p className="text-lg text-gray-800 font-bold">
                        Пластиковая бутылка — <span className="text-red-600">450 лет</span> 🍼<br/>
                        Полиэтиленовый пакет — <span className="text-red-600">200 лет</span> 🛍️<br/>
                        Алюминиевая банка — <span className="text-red-600">500 лет</span> 🥫
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-emerald-600 border-4 border-white p-10">
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">💡</div>
                <h3 className="text-5xl font-black text-white mb-6 drop-shadow-lg">
                  НАШЕ РЕШЕНИЕ!
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/95 rounded-2xl p-6 border-4 border-green-300">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">📸</div>
                    <div>
                      <h4 className="text-2xl font-black text-gray-900 mb-2">1. ФОТО-ДЕТЕКТОР ИИ</h4>
                      <p className="text-lg text-gray-800 font-bold">
                        Сфотографируй мусор — узнай КАК утилизировать! Искусственный интеллект 
                        определит тип отхода за 2 секунды и покажет ближайший пункт приёма. 🤖
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 rounded-2xl p-6 border-4 border-blue-300">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">🗺️</div>
                    <div>
                      <h4 className="text-2xl font-black text-gray-900 mb-2">2. КАРТА ПУНКТОВ ПРИЁМА</h4>
                      <p className="text-lg text-gray-800 font-bold">
                        <span className="text-green-600">12 пунктов</span> по всему Омску! Интерактивная карта 
                        покажет, куда сдать пластик, батарейки, стекло, электронику. Охват <span className="text-green-600">95%</span> города! 📍
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 rounded-2xl p-6 border-4 border-purple-300">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">🏆</div>
                    <div>
                      <h4 className="text-2xl font-black text-gray-900 mb-2">3. ГЕЙМИФИКАЦИЯ</h4>
                      <p className="text-lg text-gray-800 font-bold">
                        Зарабатывай баллы за каждый сданный предмет! Соревнуйся со школами и друзьями. 
                        Поднимайся по уровням: Новичок → Эковоин → Спаситель планеты! 🎮
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 rounded-2xl p-6 border-4 border-yellow-300">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">📊</div>
                    <div>
                      <h4 className="text-2xl font-black text-gray-900 mb-2">4. ОБРАЗОВАНИЕ</h4>
                      <p className="text-lg text-gray-800 font-bold">
                        Узнай РЕАЛЬНЫЕ факты про мусор в Омске! Смотри шокирующую статистику в реальном времени. 
                        Играй в эко-игры и проверяй знания! 🎓
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 border-4 border-white">
                  <div className="text-center">
                    <div className="text-5xl mb-3">✨</div>
                    <h4 className="text-2xl font-black text-white mb-2">РЕЗУЛЬТАТ</h4>
                    <p className="text-lg text-white font-bold">
                      Если каждый житель Омска сдаст хотя бы 1 бутылку в месяц — 
                      это <span className="text-3xl">1,200,000</span> бутылок! 
                      Из них можно сделать <span className="text-3xl">240,000</span> флисовых курток! 🧥
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 border-4 border-white p-10">
            <div className="text-center mb-8">
              <div className="text-7xl mb-4">📈</div>
              <h3 className="text-5xl font-black text-white mb-4 drop-shadow-lg">
                ЧТО ИЗМЕНИТСЯ?
              </h3>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/95 rounded-2xl p-6 border-4 border-green-400 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-3">🌊</div>
                <h4 className="text-xl font-black text-gray-900 mb-2">ЧИСТЫЕ ОКЕАНЫ</h4>
                <p className="text-lg text-gray-800 font-bold">
                  Меньше пластика в воде = больше живых рыб и черепах! 🐟
                </p>
              </div>

              <div className="bg-white/95 rounded-2xl p-6 border-4 border-blue-400 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-3">🌳</div>
                <h4 className="text-xl font-black text-gray-900 mb-2">СПАСЁННЫЕ ЛЕСА</h4>
                <p className="text-lg text-gray-800 font-bold">
                  Переработка бумаги = меньше вырубки. 1 тонна = 17 деревьев! 🌲
                </p>
              </div>

              <div className="bg-white/95 rounded-2xl p-6 border-4 border-purple-400 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-3">💰</div>
                <h4 className="text-xl font-black text-gray-900 mb-2">ЭКОНОМИЯ ЭНЕРГИИ</h4>
                <p className="text-lg text-gray-800 font-bold">
                  Переработка алюминия экономит 95% энергии! ⚡
                </p>
              </div>

              <div className="bg-white/95 rounded-2xl p-6 border-4 border-pink-400 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-3">👥</div>
                <h4 className="text-xl font-black text-gray-900 mb-2">КУЛЬТУРА</h4>
                <p className="text-lg text-gray-800 font-bold">
                  Омск станет образцом экологии для всей России! 🏆
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 border-8 border-white p-12">
            <div className="text-center">
              <div className="text-8xl mb-6">🚀</div>
              <h3 className="text-6xl font-black text-white mb-6 drop-shadow-2xl">
                НАЧНИ ПРЯМО СЕЙЧАС!
              </h3>
              <p className="text-3xl text-white/95 font-bold mb-8 max-w-3xl mx-auto">
                Каждый сданный предмет — это твой вклад в спасение планеты. Будь героем, а не частью проблемы!
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/95 rounded-2xl p-6 border-4 border-green-500">
                  <div className="text-5xl mb-3">1️⃣</div>
                  <h4 className="text-2xl font-black text-gray-900 mb-2">СФОТОГРАФИРУЙ</h4>
                  <p className="text-lg text-gray-800 font-bold">Используй детектор ИИ выше ⬆️</p>
                </div>
                
                <div className="bg-white/95 rounded-2xl p-6 border-4 border-blue-500">
                  <div className="text-5xl mb-3">2️⃣</div>
                  <h4 className="text-2xl font-black text-gray-900 mb-2">НАЙДИ ПУНКТ</h4>
                  <p className="text-lg text-gray-800 font-bold">Смотри карту ниже ⬇️</p>
                </div>
                
                <div className="bg-white/95 rounded-2xl p-6 border-4 border-purple-500">
                  <div className="text-5xl mb-3">3️⃣</div>
                  <h4 className="text-2xl font-black text-gray-900 mb-2">СДАЙ И ПОЛУЧИ БАЛЛЫ</h4>
                  <p className="text-lg text-gray-800 font-bold">Поднимайся в рейтинге! 🏆</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={() => {
                    const detector = document.getElementById('detector-section');
                    if (detector) detector.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-orange-600 hover:bg-gray-100 font-black text-2xl px-10 py-8 border-4 border-orange-700"
                >
                  <Icon name="Camera" size={32} className="mr-3" />
                  Попробовать детектор
                </Button>
                
                <Button 
                  onClick={() => {
                    const map = document.getElementById('map-section');
                    if (map) map.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white font-black text-2xl px-10 py-8 border-4 border-green-800"
                >
                  <Icon name="MapPin" size={32} className="mr-3" />
                  Посмотреть карту
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block bg-white/95 border-4 border-yellow-400 p-8 max-w-4xl">
            <div className="flex items-center gap-6">
              <div className="text-8xl">🌍💚</div>
              <div className="text-left">
                <h4 className="text-4xl font-black text-gray-900 mb-3">
                  ВМЕСТЕ МЫ — СИЛА!
                </h4>
                <p className="text-2xl text-gray-800 font-bold">
                  Один человек = маленький шаг.<br/>
                  <span className="text-green-600">1,200,000 жителей Омска = РЕВОЛЮЦИЯ!</span> 🚀
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;