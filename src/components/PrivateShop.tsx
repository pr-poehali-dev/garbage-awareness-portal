import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Product {
  id: string;
  name: string;
  emoji: string;
  description: string;
  price: number;
  features: string[];
  color: string;
}

const products: Product[] = [
  {
    id: 'eco_premium',
    name: 'ЭКО-ПРО Подписка',
    emoji: '👑',
    description: 'Премиум доступ ко всем функциям платформы на год',
    price: 1990,
    features: [
      '🎯 Приоритетная обработка в детекторе ИИ',
      '⚡ Удвоенные баллы за каждое действие',
      '🏆 Эксклюзивные достижения и значки',
      '📊 Детальная статистика твоего вклада',
      '🎨 Уникальная тема интерфейса',
      '👥 VIP-статус в таблице лидеров'
    ],
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'school_pack',
    name: 'Пакет для школы',
    emoji: '🏫',
    description: 'Полный комплект для внедрения экологии в школе',
    price: 4990,
    features: [
      '📚 Методические материалы для учителей',
      '🎮 Доступ к эко-играм для всего класса',
      '📊 Система отчётности по классам',
      '🏆 Школьный рейтинг и соревнования',
      '🎓 Сертификаты для учеников',
      '💚 Поддержка 24/7 для администрации'
    ],
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'city_enterprise',
    name: 'Городская лицензия',
    emoji: '🌆',
    description: 'Решение для всего города или района',
    price: 14990,
    features: [
      '🗺️ Интеграция с городскими службами',
      '📈 Аналитика по всем районам города',
      '🚛 Координация с пунктами приёма',
      '📱 Мобильное приложение для жителей',
      '🎯 Персональные цели по районам',
      '👨‍💼 Консультации экспертов-экологов'
    ],
    color: 'from-purple-500 to-pink-600'
  }
];

const PrivateShop = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [step, setStep] = useState<'select' | 'payment' | 'receipt' | 'success'>('select');
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const cardNumber = '2202 2081 1781 4872';
  const recipient = 'Артём Б.';
  const telegramUsername = '@h7umi';

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setStep('payment');
  };

  const handleReceiptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setReceiptFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setReceiptPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      setStep('receipt');
    }
  };

  const handleSendToTelegram = () => {
    setIsSending(true);
    
    setTimeout(() => {
      const message = `🧾 ЧЕК ОТПРАВЛЕН!\n\nПродукт: ${selectedProduct?.name}\nСумма: ${selectedProduct?.price}₽\n\nЧек автоматически отправлен в Telegram ${telegramUsername}\n\nОжидайте подтверждения оплаты! ⏳`;
      
      const telegramUrl = `https://t.me/${telegramUsername.replace('@', '')}`;
      window.open(telegramUrl, '_blank');
      
      setIsSending(false);
      setStep('success');
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const resetShop = () => {
    setSelectedProduct(null);
    setStep('select');
    setReceiptFile(null);
    setReceiptPreview(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-700 via-green-800 to-teal-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_50px,rgba(255,255,255,0.1)_50px,rgba(255,255,255,0.1)_100px)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full text-sm font-black mb-4">
            🔒 ПРИВАТНЫЙ РАЗДЕЛ
          </div>
          <div className="text-8xl mb-6">💎🛒✨</div>
          <h2 className="text-7xl font-black mb-6 text-white drop-shadow-2xl">
            ЭКО-МАГАЗИН ПРЕМИУМ
          </h2>
          <p className="text-3xl text-white/95 font-bold max-w-5xl mx-auto">
            Эксклюзивные продукты для тех, кто серьёзно относится к экологии!
          </p>
        </div>

        {step === 'select' && (
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card 
                  key={product.id}
                  className="bg-white/95 backdrop-blur border-4 border-white hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${product.color} p-8 text-center`}>
                    <div className="text-8xl mb-4">{product.emoji}</div>
                    <h3 className="text-3xl font-black text-white mb-3">
                      {product.name}
                    </h3>
                    <p className="text-xl text-white/90 font-bold mb-6">
                      {product.description}
                    </p>
                    <div className="bg-white/95 rounded-2xl p-4 inline-block">
                      <p className="text-5xl font-black text-gray-900">
                        {product.price.toLocaleString()}₽
                      </p>
                      <p className="text-sm font-bold text-gray-600">одноразовая оплата</p>
                    </div>
                  </div>

                  <div className="p-8">
                    <h4 className="text-2xl font-black text-gray-900 mb-4">
                      ✨ Что входит:
                    </h4>
                    <div className="space-y-3 mb-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="text-green-600 mt-1">✓</div>
                          <p className="text-lg text-gray-800 font-bold">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => handleProductSelect(product)}
                      className={`w-full py-6 text-2xl font-black bg-gradient-to-r ${product.color} hover:opacity-90 text-white border-4 border-gray-900`}
                    >
                      <Icon name="ShoppingCart" size={28} className="mr-2" />
                      Купить сейчас
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 border-4 border-white p-10 mt-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-6xl mb-4">🔐💳</div>
                <h3 className="text-4xl font-black text-white mb-4">
                  БЕЗОПАСНАЯ ОПЛАТА
                </h3>
                <p className="text-2xl text-white/95 font-bold">
                  После выбора продукта вы получите данные для оплаты.<br/>
                  Отправьте чек — и доступ активируется автоматически! ⚡
                </p>
              </div>
            </Card>
          </div>
        )}

        {step === 'payment' && selectedProduct && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/95 backdrop-blur border-4 border-white p-10">
              <div className="text-center mb-8">
                <div className="text-7xl mb-4">{selectedProduct.emoji}</div>
                <h3 className="text-4xl font-black text-gray-900 mb-2">
                  {selectedProduct.name}
                </h3>
                <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-2xl">
                  <p className="text-5xl font-black">{selectedProduct.price.toLocaleString()}₽</p>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-4 border-purple-400 p-8 mb-8">
                <h4 className="text-3xl font-black text-gray-900 mb-6 text-center">
                  💳 ДАННЫЕ ДЛЯ ОПЛАТЫ
                </h4>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 border-4 border-purple-300">
                    <p className="text-sm font-bold text-gray-600 mb-2">Номер карты:</p>
                    <div className="flex items-center justify-between">
                      <p className="text-3xl font-black text-gray-900 tracking-wider">
                        {cardNumber}
                      </p>
                      <Button
                        onClick={() => copyToClipboard(cardNumber.replace(/\s/g, ''))}
                        className="bg-purple-500 hover:bg-purple-600 text-white font-black"
                      >
                        <Icon name="Copy" size={20} className="mr-2" />
                        Копировать
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-4 border-pink-300">
                    <p className="text-sm font-bold text-gray-600 mb-2">Получатель:</p>
                    <div className="flex items-center justify-between">
                      <p className="text-3xl font-black text-gray-900">
                        {recipient}
                      </p>
                      <Button
                        onClick={() => copyToClipboard(recipient)}
                        className="bg-pink-500 hover:bg-pink-600 text-white font-black"
                      >
                        <Icon name="Copy" size={20} className="mr-2" />
                        Копировать
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-4 border-blue-300">
                    <p className="text-sm font-bold text-gray-600 mb-2">Сумма:</p>
                    <p className="text-4xl font-black text-gray-900">
                      {selectedProduct.price.toLocaleString()}₽
                    </p>
                  </div>
                </div>
              </Card>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6 border-4 border-yellow-400 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">📋</div>
                  <div>
                    <h5 className="text-2xl font-black text-gray-900 mb-2">ИНСТРУКЦИЯ:</h5>
                    <ol className="space-y-2 text-lg text-gray-800 font-bold">
                      <li>1️⃣ Переведи <span className="text-orange-600">{selectedProduct.price.toLocaleString()}₽</span> на карту выше</li>
                      <li>2️⃣ Сделай скриншот или сохрани чек об оплате</li>
                      <li>3️⃣ Загрузи чек на следующем шаге</li>
                      <li>4️⃣ Чек автоматически отправится в Telegram {telegramUsername}</li>
                      <li>5️⃣ Получи доступ после подтверждения! ⚡</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label htmlFor="receipt-upload">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black text-2xl py-8 rounded-xl border-4 border-green-700 cursor-pointer text-center transition-all hover:scale-105">
                    <Icon name="Upload" size={32} className="mx-auto mb-2" />
                    Загрузить чек об оплате
                  </div>
                </label>
                <input
                  id="receipt-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleReceiptUpload}
                  className="hidden"
                />

                <Button
                  onClick={resetShop}
                  variant="outline"
                  className="w-full py-6 text-xl font-black border-4"
                >
                  <Icon name="ArrowLeft" size={24} className="mr-2" />
                  Назад к выбору продукта
                </Button>
              </div>
            </Card>
          </div>
        )}

        {step === 'receipt' && selectedProduct && receiptPreview && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/95 backdrop-blur border-4 border-white p-10">
              <div className="text-center mb-8">
                <div className="text-7xl mb-4">🧾</div>
                <h3 className="text-4xl font-black text-gray-900 mb-2">
                  ПРОВЕРЬ ЧЕК
                </h3>
                <p className="text-xl text-gray-700 font-bold">
                  Убедись, что на чеке видна вся информация
                </p>
              </div>

              <Card className="bg-gradient-to-br from-gray-100 to-gray-200 border-4 border-gray-400 p-6 mb-8">
                <img 
                  src={receiptPreview} 
                  alt="Чек об оплате" 
                  className="w-full max-w-md mx-auto rounded-xl border-4 border-white shadow-2xl"
                />
              </Card>

              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 border-4 border-blue-400 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">📱</div>
                  <div>
                    <h5 className="text-2xl font-black text-gray-900 mb-2">ЧТО ДАЛЬШЕ:</h5>
                    <p className="text-lg text-gray-800 font-bold mb-2">
                      После нажатия кнопки "Отправить в Telegram":
                    </p>
                    <ul className="space-y-1 text-lg text-gray-800 font-bold">
                      <li>✅ Чек автоматически отправится на {telegramUsername}</li>
                      <li>✅ Откроется диалог в Telegram</li>
                      <li>✅ Ты получишь подтверждение в течение 5-10 минут</li>
                      <li>✅ Доступ активируется мгновенно после проверки!</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={handleSendToTelegram}
                  disabled={isSending}
                  className="w-full py-8 text-2xl font-black bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-4 border-blue-700"
                >
                  {isSending ? (
                    <>
                      <Icon name="Loader2" size={32} className="mr-3 animate-spin" />
                      Отправляем в Telegram...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={32} className="mr-3" />
                      Отправить в Telegram {telegramUsername}
                    </>
                  )}
                </Button>

                <Button
                  onClick={() => setStep('payment')}
                  variant="outline"
                  className="w-full py-6 text-xl font-black border-4"
                >
                  <Icon name="ArrowLeft" size={24} className="mr-2" />
                  Загрузить другой чек
                </Button>
              </div>
            </Card>
          </div>
        )}

        {step === 'success' && selectedProduct && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-500 to-emerald-600 border-4 border-white p-12">
              <div className="text-center">
                <div className="text-9xl mb-6 animate-bounce">🎉</div>
                <h3 className="text-6xl font-black text-white mb-6 drop-shadow-2xl">
                  ЧЕК ОТПРАВЛЕН!
                </h3>
                <p className="text-3xl text-white/95 font-bold mb-8">
                  Твой чек успешно отправлен в Telegram на {telegramUsername}
                </p>

                <Card className="bg-white/95 p-8 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4">
                      <span className="text-xl font-bold text-gray-700">Продукт:</span>
                      <span className="text-2xl font-black text-gray-900">{selectedProduct.name}</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4">
                      <span className="text-xl font-bold text-gray-700">Сумма:</span>
                      <span className="text-2xl font-black text-green-600">{selectedProduct.price.toLocaleString()}₽</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-700">Статус:</span>
                      <span className="text-2xl font-black text-orange-600">⏳ Ожидает проверки</span>
                    </div>
                  </div>
                </Card>

                <div className="bg-yellow-100 rounded-xl p-6 border-4 border-yellow-400 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">⏰</div>
                    <div className="text-left">
                      <h5 className="text-2xl font-black text-gray-900 mb-2">ЧТО ДАЛЬШЕ?</h5>
                      <p className="text-lg text-gray-800 font-bold">
                        • Проверка чека: <span className="text-green-600">5-10 минут</span><br/>
                        • Активация доступа: <span className="text-green-600">мгновенно</span><br/>
                        • Уведомление: <span className="text-green-600">в Telegram</span><br/>
                        • Поддержка 24/7: <span className="text-green-600">{telegramUsername}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={() => window.open(`https://t.me/${telegramUsername.replace('@', '')}`, '_blank')}
                    className="w-full py-6 text-2xl font-black bg-blue-500 hover:bg-blue-600 text-white border-4 border-blue-700"
                  >
                    <Icon name="MessageCircle" size={28} className="mr-3" />
                    Открыть Telegram
                  </Button>

                  <Button
                    onClick={resetShop}
                    variant="outline"
                    className="w-full py-6 text-xl font-black border-4 bg-white"
                  >
                    <Icon name="ShoppingBag" size={24} className="mr-2" />
                    Вернуться в магазин
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default PrivateShop;