import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface TrashItem {
  id: number;
  name: string;
  emoji: string;
  type: 'plastic' | 'glass' | 'paper' | 'organic' | 'battery';
}

interface TrashSortingGameProps {
  onScore: (points: number) => void;
}

const TrashSortingGame = ({ onScore }: TrashSortingGameProps) => {
  const [currentItem, setCurrentItem] = useState<TrashItem | null>(null);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [totalItems, setTotalItems] = useState(0);

  const trashItems: TrashItem[] = [
    { id: 1, name: 'Пластиковая бутылка', emoji: '🍾', type: 'plastic' },
    { id: 2, name: 'Стеклянная банка', emoji: '🫙', type: 'glass' },
    { id: 3, name: 'Газета', emoji: '📰', type: 'paper' },
    { id: 4, name: 'Банановая кожура', emoji: '🍌', type: 'organic' },
    { id: 5, name: 'Батарейка', emoji: '🔋', type: 'battery' },
    { id: 6, name: 'Картонная коробка', emoji: '📦', type: 'paper' },
    { id: 7, name: 'Пластиковый стакан', emoji: '🥤', type: 'plastic' },
    { id: 8, name: 'Винная бутылка', emoji: '🍷', type: 'glass' },
    { id: 9, name: 'Яблочный огрызок', emoji: '🍎', type: 'organic' },
    { id: 10, name: 'Старый телефон', emoji: '📱', type: 'battery' },
    { id: 11, name: 'Журнал', emoji: '📚', type: 'paper' },
    { id: 12, name: 'Пластиковый пакет', emoji: '🛍️', type: 'plastic' },
  ];

  const bins = [
    { type: 'plastic', name: 'Пластик', color: 'bg-blue-500', emoji: '♻️' },
    { type: 'glass', name: 'Стекло', color: 'bg-green-500', emoji: '🫙' },
    { type: 'paper', name: 'Бумага', color: 'bg-yellow-500', emoji: '📄' },
    { type: 'organic', name: 'Органика', color: 'bg-orange-500', emoji: '🌱' },
    { type: 'battery', name: 'Опасные', color: 'bg-red-500', emoji: '⚠️' },
  ];

  const funnyFeedback = {
    correct: [
      '🎯 Точно в цель!',
      '🔥 Огонь! Гринпис гордится!',
      '⚡ Мастер сортировки!',
      '🌟 Эко-легенда!',
      '🎊 Идеально!',
      '💚 Планета благодарит!',
      '🦸 Супергерой переработки!',
    ],
    wrong: [
      '😅 Ой! Не в тот контейнер!',
      '🤦 Почти! Попробуй ещё!',
      '😬 Упс... Не то место!',
      '🙈 Мимо кассы!',
      '😵 Не туда, дружище!',
      '🤷 Бывает! Учимся!',
    ]
  };

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isPlaying) {
      endGame();
    }
  }, [timeLeft, isPlaying]);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setCombo(0);
    setTimeLeft(30);
    setTotalItems(0);
    setFeedback('');
    generateNewItem();
  };

  const endGame = () => {
    setIsPlaying(false);
    setCurrentItem(null);
    onScore(score);
    setFeedback(`🎮 Игра окончена! Счёт: ${score}. Точность: ${totalItems > 0 ? Math.round((score / (totalItems * 10)) * 100) : 0}%`);
  };

  const generateNewItem = () => {
    const randomItem = trashItems[Math.floor(Math.random() * trashItems.length)];
    setCurrentItem(randomItem);
    setTotalItems(prev => prev + 1);
  };

  const handleSort = (binType: string) => {
    if (!currentItem || !isPlaying) return;

    if (binType === currentItem.type) {
      const points = 10 + combo * 2;
      setScore(score + points);
      setCombo(combo + 1);
      setFeedback(funnyFeedback.correct[Math.floor(Math.random() * funnyFeedback.correct.length)] + ` +${points}`);
    } else {
      setCombo(0);
      setFeedback(funnyFeedback.wrong[Math.floor(Math.random() * funnyFeedback.wrong.length)]);
    }

    setTimeout(() => {
      setFeedback('');
      generateNewItem();
    }, 800);
  };

  return (
    <Card className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="text-center space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <div className="text-3xl font-bold text-primary">{score}</div>
            <div className="text-sm text-muted-foreground">Очки</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-orange-500">{combo}x</div>
            <div className="text-sm text-muted-foreground">Комбо</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-red-500">{timeLeft}</div>
            <div className="text-sm text-muted-foreground">Секунд</div>
          </div>
        </div>

        {!isPlaying && !currentItem && (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">🎮 Сортировка мусора на скорость!</h3>
            <p className="text-muted-foreground">
              Быстро сортируй отходы по правильным контейнерам! <br />
              Правильные ответы подряд дают комбо-бонус! 🔥
            </p>
            <Button onClick={startGame} size="lg" className="gap-2">
              <Icon name="Play" size={20} />
              Начать игру
            </Button>
          </div>
        )}

        {isPlaying && currentItem && (
          <div className="space-y-6">
            <div className="text-8xl animate-bounce">{currentItem.emoji}</div>
            <h3 className="text-2xl font-bold">{currentItem.name}</h3>
            
            {feedback && (
              <Badge className="text-lg py-2 px-4 animate-pulse">
                {feedback}
              </Badge>
            )}

            <div className="grid grid-cols-5 gap-3 mt-6">
              {bins.map((bin) => (
                <Button
                  key={bin.type}
                  onClick={() => handleSort(bin.type)}
                  className={`${bin.color} hover:opacity-80 flex flex-col gap-2 h-24`}
                  variant="default"
                >
                  <span className="text-3xl">{bin.emoji}</span>
                  <span className="text-xs font-semibold">{bin.name}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {!isPlaying && score > 0 && (
          <div className="space-y-4">
            <div className="text-6xl">
              {score >= 150 ? '🏆' : score >= 100 ? '🥇' : score >= 50 ? '🥈' : '🥉'}
            </div>
            <p className="text-lg">
              {score >= 150 && 'Невероятно! Ты — мастер сортировки! 🌟'}
              {score >= 100 && score < 150 && 'Отлично! Эко-эксперт! 💚'}
              {score >= 50 && score < 100 && 'Хорошо! Продолжай тренироваться! 👍'}
              {score < 50 && 'Неплохо для начала! Попробуй ещё! 💪'}
            </p>
            <Button onClick={startGame} variant="outline" className="gap-2">
              <Icon name="RotateCcw" size={20} />
              Играть снова
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default TrashSortingGame;
