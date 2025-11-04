import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  reward: string;
}

interface EcoAchievementsProps {
  ecoScore: number;
}

const EcoAchievements = ({ ecoScore }: EcoAchievementsProps) => {
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: '1',
      title: '🌱 Первый шаг',
      description: 'Начни путь эко-героя',
      icon: 'Sprout',
      unlocked: false,
      progress: 0,
      maxProgress: 10,
      rarity: 'common',
      reward: '+10 очков'
    },
    {
      id: '2',
      title: '♻️ Сортировщик',
      description: 'Правильно отсортируй 50 предметов',
      icon: 'Recycle',
      unlocked: false,
      progress: 0,
      maxProgress: 50,
      rarity: 'common',
      reward: '+25 очков'
    },
    {
      id: '3',
      title: '🌍 Планетохранитель',
      description: 'Доведи планету до 100% здоровья',
      icon: 'Globe',
      unlocked: false,
      progress: 0,
      maxProgress: 100,
      rarity: 'rare',
      reward: '+50 очков'
    },
    {
      id: '4',
      title: '⚡ Скоростной эколог',
      description: 'Набери 500+ очков в игре за 30 секунд',
      icon: 'Zap',
      unlocked: false,
      progress: 0,
      maxProgress: 1,
      rarity: 'epic',
      reward: '+100 очков'
    },
    {
      id: '5',
      title: '👑 Спаситель Земли',
      description: 'Набери 1000 эко-очков',
      icon: 'Crown',
      unlocked: false,
      progress: 0,
      maxProgress: 1000,
      rarity: 'epic',
      reward: '+200 очков'
    },
    {
      id: '6',
      title: '🏆 Легенда экологии',
      description: 'Открой все достижения',
      icon: 'Trophy',
      unlocked: false,
      progress: 0,
      maxProgress: 5,
      rarity: 'legendary',
      reward: '🎁 Секретная награда'
    },
    {
      id: '7',
      title: '💎 Премиум герой',
      description: 'Купи ЭкоПремиум пропуск',
      icon: 'Gem',
      unlocked: false,
      progress: 0,
      maxProgress: 1,
      rarity: 'legendary',
      reward: 'Вечная слава!'
    },
    {
      id: '8',
      title: '🎯 Меткий стрелок',
      description: 'Набери комбо x10 в сортировке',
      icon: 'Target',
      unlocked: false,
      progress: 0,
      maxProgress: 1,
      rarity: 'rare',
      reward: '+75 очков'
    }
  ]);

  const [showUnlock, setShowUnlock] = useState(false);
  const [unlockedAchievement, setUnlockedAchievement] = useState<Achievement | null>(null);

  useEffect(() => {
    setAchievements(prev => prev.map(ach => {
      if (ach.id === '1' && ecoScore >= 10 && !ach.unlocked) {
        unlockAchievement(ach);
        return { ...ach, unlocked: true, progress: ach.maxProgress };
      }
      if (ach.id === '5' && ecoScore >= 1000 && !ach.unlocked) {
        unlockAchievement(ach);
        return { ...ach, unlocked: true, progress: ach.maxProgress };
      }
      if (ach.id === '5' && ecoScore < 1000) {
        return { ...ach, progress: ecoScore };
      }
      return ach;
    }));
  }, [ecoScore]);

  const unlockAchievement = (achievement: Achievement) => {
    setUnlockedAchievement(achievement);
    setShowUnlock(true);
    setTimeout(() => setShowUnlock(false), 3000);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-600';
      case 'rare': return 'from-blue-400 to-blue-600';
      case 'epic': return 'from-purple-400 to-purple-600';
      case 'legendary': return 'from-yellow-400 to-orange-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-400';
      case 'rare': return 'border-blue-400';
      case 'epic': return 'border-purple-400';
      case 'legendary': return 'border-yellow-400 shadow-lg shadow-yellow-400/50';
      default: return 'border-gray-400';
    }
  };

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalProgress = (unlockedCount / achievements.length) * 100;

  return (
    <>
      <Card className="max-w-5xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl flex items-center gap-2">
                <Icon name="Award" className="text-purple-600" size={36} />
                🏆 Достижения ЭкоГероя
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Открыто: {unlockedCount} / {achievements.length}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-purple-600">{ecoScore}</div>
              <div className="text-sm text-muted-foreground">Эко-очков</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-3">
              <Progress value={totalProgress} className="h-3 flex-1" />
              <span className="text-sm font-semibold">{Math.round(totalProgress)}%</span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`relative p-4 rounded-xl border-2 transition-all ${
                  achievement.unlocked
                    ? `bg-gradient-to-br ${getRarityColor(achievement.rarity)} text-white ${getRarityBorder(achievement.rarity)} hover:scale-105`
                    : 'bg-gray-100 border-gray-300 opacity-60 hover:opacity-80'
                }`}
              >
                {achievement.rarity === 'legendary' && achievement.unlocked && (
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-xl animate-pulse"></div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <div className={`text-3xl ${achievement.unlocked ? 'scale-110 animate-bounce' : 'grayscale'}`}>
                      {achievement.title.split(' ')[0]}
                    </div>
                    {achievement.unlocked && (
                      <Icon name="CheckCircle" className="text-white" size={20} />
                    )}
                  </div>

                  <h3 className={`font-bold text-sm mb-1 ${achievement.unlocked ? 'text-white' : 'text-gray-700'}`}>
                    {achievement.title}
                  </h3>
                  
                  <p className={`text-xs mb-3 ${achievement.unlocked ? 'text-white/90' : 'text-gray-600'}`}>
                    {achievement.description}
                  </p>

                  {!achievement.unlocked && (
                    <div className="space-y-1">
                      <Progress 
                        value={(achievement.progress / achievement.maxProgress) * 100} 
                        className="h-2"
                      />
                      <div className="text-xs text-gray-600">
                        {achievement.progress} / {achievement.maxProgress}
                      </div>
                    </div>
                  )}

                  {achievement.unlocked && (
                    <div className="text-xs font-semibold text-white/90 flex items-center gap-1">
                      <Icon name="Gift" size={14} />
                      {achievement.reward}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border-2 border-yellow-400">
            <div className="flex items-center gap-3">
              <Icon name="Info" className="text-yellow-600" size={24} />
              <div>
                <p className="font-semibold text-gray-800">💡 Совет:</p>
                <p className="text-sm text-gray-700">
                  Играй в игры, ухаживай за планетой и покупай Премиум, чтобы открыть все достижения!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {showUnlock && unlockedAchievement && (
        <div className="fixed top-20 right-4 z-[10000] animate-slide-in-right">
          <Card className={`w-80 bg-gradient-to-br ${getRarityColor(unlockedAchievement.rarity)} text-white border-4 ${getRarityBorder(unlockedAchievement.rarity)} shadow-2xl`}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="text-5xl animate-bounce">
                  {unlockedAchievement.title.split(' ')[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">🎉 Достижение открыто!</p>
                  <p className="font-bold text-lg">{unlockedAchievement.title}</p>
                  <p className="text-sm text-white/90 mt-1">{unlockedAchievement.reward}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default EcoAchievements;
