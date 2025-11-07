import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const VideoSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <div className="text-5xl md:text-6xl mb-4">🎬🏭♻️</div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white drop-shadow-2xl">
            КАК РАБОТАЕТ ЗАВОД ПЕРЕРАБОТКИ?
          </h2>
          <p className="text-base md:text-xl text-white/95 font-bold max-w-4xl mx-auto">
            Смотри реальное видео с завода! Узнай, что происходит с мусором после сортировки 🔬
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-white/95 backdrop-blur border-4 border-white p-4 md:p-8 shadow-2xl">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-full p-3">
                  <Icon name="PlayCircle" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900">
                    Экскурсия на завод по переработке отходов
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 font-semibold">
                    Познавательное видео про сортировку и переработку мусора
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-2xl bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://rutube.ru/play/embed/40c74e831d6bb029a2e1b887fbf26ecf/"
                frameBorder="0"
                allow="clipboard-write; autoplay"
                allowFullScreen
                title="Видео про переработку мусора"
              ></iframe>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-4 border-2 border-green-300">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🏭</div>
                  <div>
                    <h4 className="text-sm md:text-base font-black text-gray-900">ПРОИЗВОДСТВО</h4>
                    <p className="text-xs md:text-sm text-gray-700 font-semibold">
                      Современное оборудование
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-4 border-2 border-blue-300">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">👷</div>
                  <div>
                    <h4 className="text-sm md:text-base font-black text-gray-900">ЛЮДИ</h4>
                    <p className="text-xs md:text-sm text-gray-700 font-semibold">
                      Работники завода
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-4 border-2 border-purple-300">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">♻️</div>
                  <div>
                    <h4 className="text-sm md:text-base font-black text-gray-900">РЕЗУЛЬТАТ</h4>
                    <p className="text-xs md:text-sm text-gray-700 font-semibold">
                      Новая продукция
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-4 md:p-6 border-2 border-orange-300">
              <div className="flex items-start gap-3">
                <div className="text-3xl md:text-4xl flex-shrink-0">💡</div>
                <div>
                  <h4 className="text-base md:text-lg font-black text-gray-900 mb-2">
                    Что ты увидишь в видео:
                  </h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-800 font-semibold">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-black">✓</span>
                      <span>Как сортируют мусор на конвейере</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-black">✓</span>
                      <span>Что происходит с пластиком, бумагой и металлом</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-black">✓</span>
                      <span>Как из мусора делают новые товары</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-black">✓</span>
                      <span>Почему важно правильно сортировать отходы</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-white/90 rounded-xl px-6 py-4 border-2 border-white shadow-xl">
            <p className="text-base md:text-lg font-black text-gray-900">
              🌍 После просмотра ты поймёшь, почему каждая бутылка на счету!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;