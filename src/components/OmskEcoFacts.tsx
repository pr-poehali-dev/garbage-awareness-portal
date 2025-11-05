import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const OmskEcoFacts = () => {
  const facts = [
    {
      emoji: '🏭',
      title: 'ПРОМЫШЛЕННЫЙ ГИГАНТ',
      text: 'Омск — один из крупнейших промышленных центров Сибири. Нефтепереработка, химия, машиностроение',
      stat: '400+',
      statLabel: 'крупных предприятий',
      color: 'from-orange-500 to-red-600',
      bg: 'bg-orange-50'
    },
    {
      emoji: '🌊',
      title: 'МОГУЧИЙ ИРТЫШ',
      text: 'Река Иртыш — главная водная артерия города длиной 4248 км! Омск стоит на слиянии Иртыша и Оми',
      stat: '4248 км',
      statLabel: 'длина Иртыша',
      color: 'from-blue-500 to-cyan-600',
      bg: 'bg-blue-50'
    },
    {
      emoji: '🗑️',
      title: 'МУСОРНАЯ РЕАЛЬНОСТЬ',
      text: 'Омичи производят около 1 млн тонн отходов в год! Это как 50 000 грузовиков мусора',
      stat: '1 млн т',
      statLabel: 'мусора в год',
      color: 'from-purple-500 to-pink-600',
      bg: 'bg-purple-50'
    },
    {
      emoji: '🌳',
      title: 'ЗЕЛЁНЫЕ ЛЁГКИЕ',
      text: 'В Омске более 30 парков и скверов! Птичья гавань — уникальный природный заповедник в центре города',
      stat: '30+',
      statLabel: 'парков и скверов',
      color: 'from-green-500 to-emerald-600',
      bg: 'bg-green-50'
    },
    {
      emoji: '♻️',
      title: 'ПЕРЕРАБОТКА',
      text: 'Только 5% отходов в Омске перерабатывается! В Европе этот показатель — 47%. Есть куда расти!',
      stat: '5%',
      statLabel: 'переработка сейчас',
      color: 'from-yellow-500 to-orange-500',
      bg: 'bg-yellow-50'
    },
    {
      emoji: '🌫️',
      title: 'КАЧЕСТВО ВОЗДУХА',
      text: 'Омск входит в топ-15 городов России по загрязнению воздуха. Основные виновники — автотранспорт и заводы',
      stat: 'Топ-15',
      statLabel: 'по загрязнению РФ',
      color: 'from-gray-500 to-slate-600',
      bg: 'bg-gray-50'
    },
    {
      emoji: '🚗',
      title: 'АВТОМОБИЛЬНЫЙ БУМ',
      text: 'В Омске более 500 000 автомобилей! Это каждый 2-й житель. Выхлопные газы — главная проблема экологии',
      stat: '500К+',
      statLabel: 'автомобилей',
      color: 'from-red-500 to-rose-600',
      bg: 'bg-red-50'
    },
    {
      emoji: '🏗️',
      title: 'СВАЛКА-ГИГАНТ',
      text: 'Главная свалка Омска занимает площадь 80 футбольных полей! И растёт каждый день на 2700 тонн мусора',
      stat: '80',
      statLabel: 'футбольных полей',
      color: 'from-amber-500 to-orange-600',
      bg: 'bg-amber-50'
    },
    {
      emoji: '💡',
      title: 'ЭКО-ИНИЦИАТИВЫ',
      text: 'В Омске появляются контейнеры для раздельного сбора, открываются эко-магазины и пункты приёма батареек!',
      stat: '100+',
      statLabel: 'эко-точек',
      color: 'from-teal-500 to-cyan-600',
      bg: 'bg-teal-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🏭</div>
        <div className="absolute bottom-10 right-10 text-9xl">🌳</div>
        <div className="absolute top-1/2 left-1/4 text-9xl">♻️</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl font-black mb-6 text-white drop-shadow-2xl">
            🏙️ ОМСК: ЭКОЛОГИЯ В ЦИФРАХ
          </h2>
          <p className="text-3xl text-white/90 font-bold mb-4">
            Факты, которые заставят задуматься
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-lg px-8 py-4 rounded-full border-4 border-white/50">
            <p className="text-2xl text-white font-bold">
              Население: <span className="text-yellow-300">1,15 млн человек</span> • Площадь: <span className="text-yellow-300">572 км²</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {facts.map((fact, index) => (
            <Card 
              key={index} 
              className={`${fact.bg} border-4 border-white/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
                {fact.emoji}
              </div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-4">{fact.emoji}</div>
                
                <h3 className={`text-2xl font-black mb-4 bg-gradient-to-r ${fact.color} bg-clip-text text-transparent`}>
                  {fact.title}
                </h3>
                
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {fact.text}
                </p>
                
                <div className={`bg-gradient-to-r ${fact.color} p-6 rounded-2xl text-white text-center transform group-hover:scale-110 transition-transform`}>
                  <div className="text-5xl font-black mb-2">{fact.stat}</div>
                  <div className="text-sm font-bold uppercase tracking-wider">{fact.statLabel}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block bg-white/95 backdrop-blur-lg border-4 border-yellow-400 p-10 max-w-3xl">
            <div className="text-7xl mb-6">🌍💚</div>
            <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              МЕНЯЕМ ОМСК ВМЕСТЕ!
            </h3>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Каждый омич может внести вклад в экологию города: <br/>
              <span className="font-bold text-green-600">сортируй мусор</span>, 
              <span className="font-bold text-blue-600"> используй общественный транспорт</span>, 
              <span className="font-bold text-purple-600"> сажай деревья</span>!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OmskEcoFacts;