import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const PremiumEcoPass = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [email, setEmail] = useState('');
  const [receiptSent, setReceiptSent] = useState(false);

  const premiumFeatures = [
    { icon: "Sparkles", text: "Золотая галочка в профиле", joke: "Как в Твиттере, только зелёнее!" },
    { icon: "Globe", text: "Своя планета-питомец", joke: "Растёт в 2 раза быстрее. Читкод!" },
    { icon: "Zap", text: "Бустер эко-очков x2", joke: "Как донат в игре, но для планеты!" },
    { icon: "Trophy", text: "Звание 'ЭкоГерой Лвл 99'", joke: "Максималка прокачана!" },
    { icon: "Heart", text: "Прощение 100 пластиковых стаканчиков", joke: "Пей кофе без угрызений!" },
    { icon: "Ship", text: "Бронь в Ковчег при конце света", joke: "VIP-место у окна гарантировано!" },
    { icon: "Star", text: "Значок '♻️ ЭкоБог'", joke: "Грета лайкнет все твои посты!" },
    { icon: "Crown", text: "Право не сортировать мусор год*", joke: "*Нет, это нельзя 😂 Сортируй!" }
  ];

  const handleCopyCard = () => {
    navigator.clipboard.writeText('2202 2081 1781 4872');
  };

  const handleCopyTelegram = () => {
    navigator.clipboard.writeText('79836232746');
  };

  const handleSubmit = () => {
    setReceiptSent(true);
    setTimeout(() => {
      setShowPayment(false);
      setReceiptSent(false);
    }, 3000);
  };

  return (
    <>
      <Card className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border-4 border-yellow-400 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
        
        <CardHeader className="text-center relative z-10">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Icon name="Award" size={80} className="text-yellow-500 animate-bounce" />
              <Icon name="Sparkles" size={24} className="text-yellow-400 absolute -top-2 -right-2 animate-spin" />
              <Icon name="Sparkles" size={24} className="text-orange-400 absolute -bottom-2 -left-2 animate-spin" style={{animationDelay: '0.5s'}} />
            </div>
          </div>
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
            🎫 ЭкоПремиум Пропуск
          </CardTitle>
          <CardDescription className="text-xl text-gray-700 font-semibold">
            Купи прощение за все пакетики и стаканчики! 
          </CardDescription>
          <div className="mt-4 inline-block bg-red-100 border-2 border-red-400 rounded-lg px-4 py-2">
            <p className="text-red-700 font-bold">🔥 Суперцена: Только 50₽!</p>
            <p className="text-sm text-red-600">Дешевле шаурмы!</p>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-300">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Crown" className="text-yellow-500" size={28} />
              Что получишь за 50 рублей:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {premiumFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg hover:shadow-md transition-all hover:scale-105"
                >
                  <Icon name={feature.icon as any} className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">{feature.text}</p>
                    <p className="text-sm text-gray-600 italic">{feature.joke}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 border-2 border-green-400">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Icon name="ShieldCheck" className="text-green-600" size={24} />
              Гарантии:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-green-600" size={20} />
                <span className="text-gray-700">✅ Грета перестанет на тебя злиться (наверное)</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-green-600" size={20} />
                <span className="text-gray-700">✅ Можно пить кофе из одноразовых без стыда</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-green-600" size={20} />
                <span className="text-gray-700">✅ Сертификат "Я молодец" (цифровой, береги деревья)</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" className="text-green-600" size={20} />
                <span className="text-gray-700">✅ Возврат: нет, но зато карма +100500!</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => setShowPayment(true)}
              size="lg"
              className="text-xl px-12 py-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <Icon name="CreditCard" className="mr-2" size={28} />
              Купить за 50₽
            </Button>
            <p className="text-xs text-gray-500 mt-3 italic">
              * Мусор всё равно нужно сортировать, но теперь с чистой совестью! 😄
            </p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Icon name="CreditCard" className="text-green-600" />
              Оплата ЭкоПропуска
            </DialogTitle>
            <DialogDescription>
              Следуйте инструкциям для получения Premium статуса
            </DialogDescription>
          </DialogHeader>

          {!receiptSent ? (
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Icon name="ArrowRight" className="text-blue-600" size={20} />
                  Шаг 1: Переведите 50₽
                </h4>
                <div className="space-y-2">
                  <Label>Номер карты:</Label>
                  <div className="flex gap-2">
                    <Input 
                      value="2202 2081 1781 4872" 
                      readOnly 
                      className="font-mono text-lg"
                    />
                    <Button onClick={handleCopyCard} variant="outline" size="sm">
                      <Icon name="Copy" size={16} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Icon name="ArrowRight" className="text-green-600" size={20} />
                  Шаг 2: Отправьте чек в Telegram
                </h4>
                <div className="space-y-2">
                  <Label>Telegram номер:</Label>
                  <div className="flex gap-2">
                    <Input 
                      value="+7 983 623-27-46" 
                      readOnly 
                      className="font-mono text-lg"
                    />
                    <Button onClick={handleCopyTelegram} variant="outline" size="sm">
                      <Icon name="Copy" size={16} />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    📸 Сделайте скриншот платежа и отправьте с указанием email
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Icon name="Mail" className="text-purple-600" size={20} />
                  Шаг 3: Укажите email для активации
                </h4>
                <Input 
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-lg"
                />
              </div>

              <Button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 text-lg"
                disabled={!email}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Подтвердить отправку
              </Button>

              <p className="text-xs text-center text-gray-500">
                ⏱️ Активация в течение 1-24 часов после проверки оплаты
              </p>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <Icon name="CheckCircle" size={64} className="text-green-500 mx-auto animate-bounce" />
              <h3 className="text-2xl font-bold text-green-600">Заявка принята! 🎉</h3>
              <p className="text-gray-600">
                Ожидайте активацию Premium статуса.<br/>
                Скоро ты станешь ЭкоБогом! ✨
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PremiumEcoPass;