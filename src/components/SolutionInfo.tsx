import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const SolutionInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_30px,rgba(34,197,94,0.1)_30px,rgba(34,197,94,0.1)_60px)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-6xl mb-4">📚♻️🌍</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            ПОЛНОЕ РУКОВОДСТВО ПО РЕШЕНИЮ ПРОБЛЕМЫ МУСОРА
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-bold max-w-4xl mx-auto">
            Всё, что нужно знать о раздельном сборе, переработке и экологичной жизни
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <Card className="bg-white border-4 border-green-500 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🎯</div>
              <h3 className="text-3xl font-black text-gray-900">1. ОСНОВЫ РАЗДЕЛЬНОГО СБОРА</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-xl font-black text-blue-900 mb-4 flex items-center gap-2">
                  <Icon name="Trash2" size={24} className="text-blue-600" />
                  ПЛАСТИК (Синий контейнер)
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-green-700 mb-1">✅ МОЖНО:</p>
                    <p className="text-gray-700">• Бутылки от напитков (PET/PETE)<br/>• Пластиковые канистры<br/>• Флаконы от шампуней<br/>• Крышки и пробки</p>
                  </div>
                  <div>
                    <p className="font-bold text-red-700 mb-1">❌ НЕЛЬЗЯ:</p>
                    <p className="text-gray-700">• Грязную упаковку<br/>• Одноразовую посуду<br/>• Пакеты с металлизацией<br/>• Игрушки</p>
                  </div>
                  <div className="bg-blue-100 rounded p-3">
                    <p className="text-sm font-bold">💡 СОВЕТ: Сполосни бутылку, открути крышку, сомни!</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-6">
                <h4 className="text-xl font-black text-amber-900 mb-4 flex items-center gap-2">
                  <Icon name="FileText" size={24} className="text-amber-600" />
                  БУМАГА (Жёлтый контейнер)
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-green-700 mb-1">✅ МОЖНО:</p>
                    <p className="text-gray-700">• Газеты и журналы<br/>• Офисная бумага<br/>• Картонные коробки<br/>• Тетради без пружин</p>
                  </div>
                  <div>
                    <p className="font-bold text-red-700 mb-1">❌ НЕЛЬЗЯ:</p>
                    <p className="text-gray-700">• Жирную упаковку от еды<br/>• Ламинированную бумагу<br/>• Чеки (термобумага)<br/>• Салфетки</p>
                  </div>
                  <div className="bg-amber-100 rounded p-3">
                    <p className="text-sm font-bold">💡 СОВЕТ: Картон разрежь и сложи плоско!</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="text-xl font-black text-green-900 mb-4 flex items-center gap-2">
                  <Icon name="Wine" size={24} className="text-green-600" />
                  СТЕКЛО (Зелёный контейнер)
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-green-700 mb-1">✅ МОЖНО:</p>
                    <p className="text-gray-700">• Стеклянные бутылки<br/>• Банки любого цвета<br/>• Флаконы от духов<br/>• Стеклотара</p>
                  </div>
                  <div>
                    <p className="font-bold text-red-700 mb-1">❌ НЕЛЬЗЯ:</p>
                    <p className="text-gray-700">• Зеркала<br/>• Оконное стекло<br/>• Хрусталь<br/>• Керамику</p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm font-bold">💡 СОВЕТ: Стекло можно не мыть, но ополосни!</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="Zap" size={24} className="text-gray-600" />
                  МЕТАЛЛ (Серый контейнер)
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-green-700 mb-1">✅ МОЖНО:</p>
                    <p className="text-gray-700">• Алюминиевые банки<br/>• Жестяные консервы<br/>• Металлические крышки<br/>• Фольгу (скомканную)</p>
                  </div>
                  <div>
                    <p className="font-bold text-red-700 mb-1">❌ НЕЛЬЗЯ:</p>
                    <p className="text-gray-700">• Аэрозольные баллоны<br/>• Батарейки<br/>• Провода<br/>• Скобы и гвозди</p>
                  </div>
                  <div className="bg-gray-100 rounded p-3">
                    <p className="text-sm font-bold">💡 СОВЕТ: Металл перерабатывается БЕСКОНЕЧНО!</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-4 border-red-500 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">⚠️</div>
              <h3 className="text-3xl font-black text-gray-900">2. ОПАСНЫЕ ОТХОДЫ (Специальный сбор)</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-xl p-6">
                <h4 className="text-lg font-black text-red-900 mb-3">🔋 БАТАРЕЙКИ</h4>
                <p className="text-gray-700 mb-3">Одна батарейка загрязняет 400 л воды и 20 м² почвы!</p>
                <div className="bg-red-100 rounded p-3">
                  <p className="text-sm font-bold">Куда: Специальные контейнеры в магазинах (Икея, Медиа Маркт)</p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h4 className="text-lg font-black text-orange-900 mb-3">💡 ЛАМПОЧКИ</h4>
                <p className="text-gray-700 mb-3">Энергосберегающие содержат ртуть — нельзя в обычный мусор!</p>
                <div className="bg-orange-100 rounded p-3">
                  <p className="text-sm font-bold">Куда: Пункты приёма опасных отходов, ДЭЗы</p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <h4 className="text-lg font-black text-yellow-900 mb-3">📱 ЭЛЕКТРОНИКА</h4>
                <p className="text-gray-700 mb-3">Телефоны, ноутбуки — источник ценных металлов!</p>
                <div className="bg-yellow-100 rounded p-3">
                  <p className="text-sm font-bold">Куда: Салоны связи (МТС, Мегафон), эко-центры</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-4 border-purple-500 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🏘️</div>
              <h3 className="text-3xl font-black text-gray-900">3. СИСТЕМА ПЕРЕРАБОТКИ В ОМСКЕ</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6">
                <h4 className="text-2xl font-black text-gray-900 mb-4">Как работает цепочка переработки:</h4>
                <div className="grid md:grid-cols-5 gap-4 text-center">
                  <div>
                    <div className="text-4xl mb-2">🏠</div>
                    <p className="font-bold text-gray-800">1. Сортируешь дома</p>
                  </div>
                  <div className="flex items-center justify-center text-3xl">→</div>
                  <div>
                    <div className="text-4xl mb-2">🗑️</div>
                    <p className="font-bold text-gray-800">2. Сдаёшь в пункт</p>
                  </div>
                  <div className="flex items-center justify-center text-3xl">→</div>
                  <div>
                    <div className="text-4xl mb-2">🏭</div>
                    <p className="font-bold text-gray-800">3. Завод перерабатывает</p>
                  </div>
                  <div className="flex items-center justify-center text-3xl">→</div>
                  <div>
                    <div className="text-4xl mb-2">📦</div>
                    <p className="font-bold text-gray-800">4. Новые товары</p>
                  </div>
                  <div className="flex items-center justify-center text-3xl">→</div>
                  <div>
                    <div className="text-4xl mb-2">🛒</div>
                    <p className="font-bold text-gray-800">5. Покупаешь снова!</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-xl font-black text-green-900 mb-4">🎯 Что получается из вторсырья:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Пластик</strong> → флисовые куртки, ковры, пластиковая мебель</li>
                    <li>• <strong>Бумага</strong> → туалетная бумага, картон, упаковка</li>
                    <li>• <strong>Стекло</strong> → новые бутылки и банки (100% переработка!)</li>
                    <li>• <strong>Металл</strong> → стройматериалы, запчасти, новые банки</li>
                    <li>• <strong>Одежда</strong> → утеплитель, тряпки, ветошь</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-xl font-black text-blue-900 mb-4">📊 Экономия ресурсов:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 1 тонна бумаги = <strong>17 спасённых деревьев</strong> 🌳</li>
                    <li>• 1 тонна пластика = <strong>700 кг нефти</strong> сэкономлено ⚡</li>
                    <li>• 1 тонна стекла = <strong>650 кг песка</strong> сохранено 🏖️</li>
                    <li>• 1 банка = энергия для <strong>3 часов ТВ</strong> 📺</li>
                    <li>• Переработка сокращает <strong>выбросы CO₂ на 70%</strong> 🌍</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-4 border-orange-500 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">💡</div>
              <h3 className="text-3xl font-black text-gray-900">4. ПРАКТИЧЕСКИЕ СОВЕТЫ ДЛЯ ЖИЗНИ</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6">
                <h4 className="text-lg font-black text-gray-900 mb-4">🏠 ДОМА</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Заведи 4 контейнера для разных типов мусора</li>
                  <li>• Держи под мойкой пакет для пластика</li>
                  <li>• Сплющивай бутылки — экономия места!</li>
                  <li>• Ополаскивай тару перед выбросом</li>
                  <li>• Собирай батарейки в отдельную банку</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6">
                <h4 className="text-lg font-black text-gray-900 mb-4">🛒 В МАГАЗИНЕ</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Носи многоразовую сумку (экошоппер)</li>
                  <li>• Покупай товары в минимальной упаковке</li>
                  <li>• Выбирай перерабатываемую тару (стекло, металл)</li>
                  <li>• Избегай одноразового пластика</li>
                  <li>• Бери термокружку для кофе с собой</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6">
                <h4 className="text-lg font-black text-gray-900 mb-4">🌍 В ГОРОДЕ</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Участвуй в субботниках и эко-акциях</li>
                  <li>• Сдавай старую одежду в благотворительные магазины</li>
                  <li>• Используй приложения для поиска пунктов приёма</li>
                  <li>• Организуй раздельный сбор в школе/офисе</li>
                  <li>• Рассказывай друзьям об экологии!</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 border-4 border-white p-8 text-white">
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-3xl font-black mb-4">ГЛАВНОЕ ПРАВИЛО</h3>
              <p className="text-2xl font-bold mb-6">
                Лучший мусор — тот, которого НЕ БЫЛО!
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/20 rounded-xl p-4">
                  <h4 className="text-xl font-black mb-2">♻️ REDUCE</h4>
                  <p className="text-lg">Сокращай потребление — покупай меньше лишнего</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <h4 className="text-xl font-black mb-2">🔄 REUSE</h4>
                  <p className="text-lg">Используй повторно — банки, пакеты, коробки</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <h4 className="text-xl font-black mb-2">♻️ RECYCLE</h4>
                  <p className="text-lg">Перерабатывай — сдавай вторсырьё в пункты приёма</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-white p-8">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">📞</div>
              <h3 className="text-3xl font-black mb-4">НУЖНА ПОМОЩЬ?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white/90 rounded-xl p-6 text-gray-900">
                  <h4 className="text-xl font-black mb-3">🌐 Полезные ресурсы:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Recyclemap.ru</strong> — карта пунктов приёма по всей России</li>
                    <li>• <strong>Greenpeace.ru</strong> — гиды по раздельному сбору</li>
                    <li>• <strong>Собиратор</strong> — приложение для сортировки</li>
                    <li>• Телеграм: @musora_bolshe_net</li>
                  </ul>
                </div>
                <div className="bg-white/90 rounded-xl p-6 text-gray-900">
                  <h4 className="text-xl font-black mb-3">📱 Наши возможности:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Детектор ИИ</strong> — определит любой мусор по фото</li>
                    <li>• <strong>Карта Омска</strong> — 12 пунктов приёма с маршрутами</li>
                    <li>• <strong>Калькулятор</strong> — посчитай свой экослед</li>
                    <li>• <strong>Лидерборд</strong> — соревнуйся с другими!</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionInfo;
