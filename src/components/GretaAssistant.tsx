import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const GretaAssistant = () => {
  const [currentPhrase, setCurrentPhrase] = useState('Привет! Я Грета, твой саркастичный эко-помощник. Нажми на кнопку, и я скажу, что думаю! 🌍');
  const [emotion, setEmotion] = useState('😊');

  const phrases = [
    {
      text: 'Ты знаешь, что пластиковый пакет живёт дольше, чем твои новогодние обещания? 🛍️',
      emotion: '🤨',
      category: 'sarcasm'
    },
    {
      text: 'Поздравляю! Ты выбросил батарейку в обычный мусор. Где-то умерла панда. 🐼💔',
      emotion: '😱',
      category: 'dark'
    },
    {
      text: 'Когда ты не сортируешь мусор, где-то плачет белый медведь. Буквально. 🐻‍❄️😭',
      emotion: '😢',
      category: 'motivational'
    },
    {
      text: 'Fun fact: Твой углеродный след больше, чем у динозавров. И посмотри, что с ними случилось! 🦕💥',
      emotion: '🤯',
      category: 'sarcasm'
    },
    {
      text: 'Ты покупаешь воду в пластике? Океан хочет с тобой поговорить. Лично. 🌊😤',
      emotion: '😠',
      category: 'angry'
    },
    {
      text: 'Если бы переработка была трендом в TikTok, планета уже бы процветала. Но нет... 📱🤦',
      emotion: '🤦',
      category: 'sarcasm'
    },
    {
      text: 'Ты знал, что из переработанного пластика делают футболки? Может, хватит покупать новые? 👕',
      emotion: '🤔',
      category: 'tip'
    },
    {
      text: 'Каждая переработанная бутылка — это маленькая победа над апокалипсисом! Давай больше побед! 🏆',
      emotion: '💪',
      category: 'motivational'
    },
    {
      text: 'Планета нагревается быстрее, чем твой телефон на зарядке. Задумайся. 🔥📱',
      emotion: '🔥',
      category: 'fact'
    },
    {
      text: 'Ты молодец, что здесь! Но это не отменяет того пакета, который ты взял в магазине. 😏',
      emotion: '😏',
      category: 'sarcasm'
    },
    {
      text: 'Знаешь что круто? Многоразовая сумка. Знаешь что не круто? Забыть её дома. 🛍️🤡',
      emotion: '🤡',
      category: 'tip'
    },
    {
      text: 'Если все начнут сортировать мусор, я останусь без работы. Но я готова к этому! 💚',
      emotion: '😊',
      category: 'motivational'
    },
    {
      text: 'Ты ещё пользуешься одноразовыми стаканчиками? Серьёзно? В 2025 году? ☕😑',
      emotion: '😑',
      category: 'angry'
    },
    {
      text: 'Лайфхак: Если выбросить мусор в нужный контейнер, магически становишься лучше! ✨',
      emotion: '✨',
      category: 'motivational'
    },
    {
      text: 'Океан — это не свалка. Но почему-то многие так не думают... 🌊🗑️',
      emotion: '😤',
      category: 'fact'
    },
  ];

  const getRandomPhrase = () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setCurrentPhrase(randomPhrase.text);
    setEmotion(randomPhrase.emotion);
  };

  return (
    <Card className="p-8 max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-200">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="text-6xl animate-bounce">{emotion}</div>
          <div>
            <h3 className="text-2xl font-bold text-green-800">Грета — Эко-активистка</h3>
            <p className="text-sm text-green-600">Саркастичный голос планеты</p>
          </div>
        </div>

        <Card className="p-6 bg-white border-2 border-green-300 relative">
          <div className="absolute -left-2 top-6 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent"></div>
          <p className="text-lg leading-relaxed">{currentPhrase}</p>
        </Card>

        <Button 
          onClick={getRandomPhrase} 
          className="w-full gap-2 bg-green-600 hover:bg-green-700" 
          size="lg"
        >
          <Icon name="MessageCircle" size={20} />
          Грета, скажи что-нибудь!
        </Button>

        <div className="text-center text-sm text-muted-foreground">
          <p>💡 Совет: Грета может быть резкой, но она желает планете добра!</p>
        </div>
      </div>
    </Card>
  );
};

export default GretaAssistant;
