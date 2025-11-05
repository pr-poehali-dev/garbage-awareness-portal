import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface LeaderboardEntry {
  rank: number;
  name: string;
  type: 'school' | 'class' | 'individual';
  points: number;
  recycled: number;
  avatar: string;
  achievement: string;
  district: string;
}

const Leaderboard = () => {
  const [selectedTab, setSelectedTab] = useState('schools');

  const schools: LeaderboardEntry[] = [
    { rank: 1, name: 'Таврическая школа', type: 'school', points: 3500, recycled: 450, avatar: '🏫', achievement: '🌟 Эко-лидер области', district: 'Омская область' }
  ];

  const classes: LeaderboardEntry[] = [
    { rank: 1, name: 'Твой класс может быть здесь!', type: 'class', points: 0, recycled: 0, avatar: '📚', achievement: '🌱 Начни первым', district: 'Омск' }
  ];

  const individuals: LeaderboardEntry[] = [
    { rank: 1, name: 'Бабкин Артем', type: 'individual', points: 850, recycled: 95, avatar: '👨', achievement: '🏆 Топ по баллам', district: 'Таврическая школа' },
    { rank: 2, name: 'Бабкина Софья', type: 'individual', points: 780, recycled: 88, avatar: '👧', achievement: '⭐ Эко-звезда', district: 'Таврическая школа' },
    { rank: 3, name: 'Бояркина Софья', type: 'individual', points: 720, recycled: 82, avatar: '👧', achievement: '🌱 Природный лидер', district: 'Таврическая школа' },
    { rank: 4, name: 'Артамонова Дарья', type: 'individual', points: 650, recycled: 75, avatar: '👧', achievement: '♻️ Мастер сортировки', district: 'Таврическая школа' },
    { rank: 5, name: 'Коваленко Вероника', type: 'individual', points: 590, recycled: 68, avatar: '👧', achievement: '💚 Эко-герой', district: 'Таврическая школа' },
    { rank: 6, name: 'Профотилова Елизавета', type: 'individual', points: 520, recycled: 61, avatar: '👧', achievement: '🌍 Планета в сердце', district: 'Таврическая школа' }
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'from-yellow-400 to-orange-500';
    if (rank === 2) return 'from-gray-300 to-gray-400';
    if (rank === 3) return 'from-orange-400 to-amber-600';
    return 'from-blue-400 to-cyan-500';
  };

  const getRankEmoji = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return '🏅';
  };

  const renderLeaderboard = (entries: LeaderboardEntry[]) => (
    <div className="space-y-4">
      {entries.map((entry) => (
        <Card
          key={entry.rank}
          className={`relative overflow-hidden border-4 ${
            entry.rank <= 3 ? 'border-yellow-400' : 'border-white'
          } hover:scale-105 transition-all duration-300`}
        >
          <div className={`bg-gradient-to-r ${getRankColor(entry.rank)} p-6`}>
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className={`w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl font-black border-4 ${
                  entry.rank <= 3 ? 'border-yellow-500 animate-pulse' : 'border-gray-300'
                }`}>
                  {entry.rank}
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="text-6xl">{entry.avatar}</div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-black text-white truncate">
                    {entry.name}
                  </h3>
                  <span className="text-3xl">{getRankEmoji(entry.rank)}</span>
                </div>
                <p className="text-sm font-bold text-white/90 mb-2">
                  📍 {entry.district}
                </p>
                <div className="inline-block bg-white/90 rounded-full px-4 py-1">
                  <p className="text-sm font-black text-gray-800">
                    {entry.achievement}
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 text-right">
                <div className="bg-white/90 rounded-xl p-4 mb-2">
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <Icon name="Star" size={24} className="text-yellow-600" />
                    <span className="text-3xl font-black text-gray-900">
                      {entry.points.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-gray-600">БАЛЛОВ</p>
                </div>
                <div className="bg-white/90 rounded-xl p-3">
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <Icon name="Recycle" size={20} className="text-green-600" />
                    <span className="text-xl font-black text-gray-900">
                      {entry.recycled} кг
                    </span>
                  </div>
                  <p className="text-xs font-bold text-gray-600">ПЕРЕРАБОТАНО</p>
                </div>
              </div>
            </div>
          </div>

          {entry.rank === 1 && (
            <div className="absolute top-0 right-0 bg-gradient-to-br from-yellow-300 to-orange-400 text-white px-4 py-2 rounded-bl-xl">
              <p className="text-xs font-black">🏆 ЛИДЕР</p>
            </div>
          )}
        </Card>
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-8xl mb-6 animate-bounce">🏆🌍📊</div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-gray-900 drop-shadow-2xl">
            ТАБЛИЦА ЛИДЕРОВ ОМСКА
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 font-bold max-w-4xl mx-auto">
            Соревнуйся со школами, классами и учениками!
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white p-6 text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-3">🏫</div>
              <h3 className="text-2xl font-black text-white mb-2">ШКОЛЫ</h3>
              <p className="text-5xl font-black text-white mb-1">{schools.length}</p>
              <p className="text-sm font-bold text-white/90">участвуют в борьбе</p>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-red-500 border-4 border-white p-6 text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-3">📚</div>
              <h3 className="text-2xl font-black text-white mb-2">КЛАССЫ</h3>
              <p className="text-5xl font-black text-white mb-1">{classes.length}</p>
              <p className="text-sm font-bold text-white/90">активных команд</p>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-500 to-blue-500 border-4 border-white p-6 text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-3">👥</div>
              <h3 className="text-2xl font-black text-white mb-2">УЧАСТНИКОВ</h3>
              <p className="text-5xl font-black text-white mb-1">{individuals.length}</p>
              <p className="text-sm font-bold text-white/90">эко-героев Омска</p>
            </Card>
          </div>
        </div>

        <Card className="bg-white/95 backdrop-blur border-4 border-white p-8 max-w-6xl mx-auto">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gradient-to-r from-green-100 to-emerald-100 border-4 border-green-400 p-2">
              <TabsTrigger
                value="schools"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white font-black text-lg py-4"
              >
                <Icon name="School" size={24} className="mr-2" />
                ШКОЛЫ
              </TabsTrigger>
              <TabsTrigger
                value="classes"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white font-black text-lg py-4"
              >
                <Icon name="Users" size={24} className="mr-2" />
                КЛАССЫ
              </TabsTrigger>
              <TabsTrigger
                value="individuals"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white font-black text-lg py-4"
              >
                <Icon name="User" size={24} className="mr-2" />
                УЧЕНИКИ
              </TabsTrigger>
            </TabsList>

            <TabsContent value="schools">
              {renderLeaderboard(schools)}
            </TabsContent>

            <TabsContent value="classes">
              {renderLeaderboard(classes)}
            </TabsContent>

            <TabsContent value="individuals">
              {renderLeaderboard(individuals)}
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 border-4 border-white p-8 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-6xl mb-4">🎯💪🔥</div>
            <h3 className="text-4xl font-black text-white mb-4">
              СТАНЬ ЛИДЕРОМ РЕЙТИНГА!
            </h3>
            <p className="text-2xl text-white/95 font-bold mb-6">
              Зарабатывай баллы за каждый сданный предмет! Соревнуйся с друзьями и школами! 
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/90 rounded-xl p-4">
                <div className="text-3xl mb-2">📸</div>
                <p className="text-sm font-black text-gray-800">Фотографируй мусор</p>
              </div>
              <div className="bg-white/90 rounded-xl p-4">
                <div className="text-3xl mb-2">🎯</div>
                <p className="text-sm font-black text-gray-800">Получай баллы</p>
              </div>
              <div className="bg-white/90 rounded-xl p-4">
                <div className="text-3xl mb-2">🏆</div>
                <p className="text-sm font-black text-gray-800">Побеждай в рейтинге</p>
              </div>
              <div className="bg-white/90 rounded-xl p-4">
                <div className="text-3xl mb-2">🌍</div>
                <p className="text-sm font-black text-gray-800">Спасай планету!</p>
              </div>
            </div>
            <Button className="mt-6 bg-white text-orange-600 hover:bg-gray-100 font-black text-xl px-8 py-6 border-4 border-orange-700">
              <Icon name="Trophy" size={24} className="mr-2" />
              Присоединиться к соревнованию
            </Button>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <Card className="inline-block bg-gradient-to-br from-green-400 to-emerald-500 border-4 border-white p-8">
            <div className="flex items-center gap-6">
              <div className="text-7xl">🎖️</div>
              <div className="text-left">
                <h4 className="text-3xl font-black text-white mb-2">
                  ОБНОВЛЕНИЕ КАЖДЫЙ ДЕНЬ!
                </h4>
                <p className="text-xl text-white/90 font-bold">
                  Следи за рейтингом и поднимайся на вершину! 🚀
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;