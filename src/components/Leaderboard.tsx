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
    { rank: 1, name: 'Лицей №64', type: 'school', points: 15420, recycled: 2847, avatar: '🏫', achievement: '🏆 Чемпион Омска', district: 'Советский' },
    { rank: 2, name: 'Гимназия №19', type: 'school', points: 14280, recycled: 2501, avatar: '🎓', achievement: '🥈 Эко-легенда', district: 'Центральный' },
    { rank: 3, name: 'Школа №87', type: 'school', points: 13950, recycled: 2398, avatar: '📚', achievement: '🥉 Спаситель природы', district: 'Кировский' },
    { rank: 4, name: 'Школа №55', type: 'school', points: 12100, recycled: 2156, avatar: '🏫', achievement: '⭐ Эко-герой', district: 'Октябрьский' },
    { rank: 5, name: 'Лицей №25', type: 'school', points: 11450, recycled: 1989, avatar: '🎓', achievement: '💚 Защитник планеты', district: 'Ленинский' },
    { rank: 6, name: 'Гимназия №88', type: 'school', points: 10890, recycled: 1847, avatar: '📚', achievement: '🌱 Эко-воин', district: 'Советский' },
    { rank: 7, name: 'Школа №120', type: 'school', points: 9850, recycled: 1703, avatar: '🏫', achievement: '♻️ Рециклер-про', district: 'Центральный' },
    { rank: 8, name: 'Школа №73', type: 'school', points: 8920, recycled: 1589, avatar: '📚', achievement: '🌿 Зелёный патруль', district: 'Кировский' }
  ];

  const classes: LeaderboardEntry[] = [
    { rank: 1, name: '11А, Лицей №64', type: 'class', points: 4820, recycled: 847, avatar: '🎯', achievement: '👑 Короли экологии', district: 'Советский' },
    { rank: 2, name: '10Б, Гимназия №19', type: 'class', points: 4510, recycled: 798, avatar: '🎖️', achievement: '🔥 Огонь команды', district: 'Центральный' },
    { rank: 3, name: '9В, Школа №87', type: 'class', points: 4120, recycled: 721, avatar: '⚡', achievement: '💪 Сила природы', district: 'Кировский' },
    { rank: 4, name: '11Г, Школа №55', type: 'class', points: 3890, recycled: 689, avatar: '🚀', achievement: '🌟 Звёзды эко', district: 'Октябрьский' },
    { rank: 5, name: '10А, Лицей №25', type: 'class', points: 3650, recycled: 634, avatar: '💎', achievement: '✨ Бриллианты', district: 'Ленинский' },
    { rank: 6, name: '9Б, Гимназия №88', type: 'class', points: 3410, recycled: 598, avatar: '🎪', achievement: '🎨 Креативщики', district: 'Советский' }
  ];

  const individuals: LeaderboardEntry[] = [
    { rank: 1, name: 'Анастасия К.', type: 'individual', points: 1847, recycled: 342, avatar: '👑', achievement: '🦸‍♀️ Супергероиня', district: 'Лицей №64' },
    { rank: 2, name: 'Даниил М.', type: 'individual', points: 1620, recycled: 298, avatar: '🏆', achievement: '⚔️ Воин экологии', district: 'Гимназия №19' },
    { rank: 3, name: 'Мария С.', type: 'individual', points: 1510, recycled: 276, avatar: '💫', achievement: '🌸 Хранительница', district: 'Школа №87' },
    { rank: 4, name: 'Артём П.', type: 'individual', points: 1380, recycled: 251, avatar: '🎯', achievement: '🎖️ Капитан', district: 'Школа №55' },
    { rank: 5, name: 'Софья Л.', type: 'individual', points: 1290, recycled: 234, avatar: '✨', achievement: '🌟 Звезда', district: 'Лицей №25' },
    { rank: 6, name: 'Максим Г.', type: 'individual', points: 1180, recycled: 217, avatar: '🚀', achievement: '💪 Силач', district: 'Гимназия №88' }
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
    <section className="py-20 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-8xl mb-6 animate-bounce">🏆🌍📊</div>
          <h2 className="text-7xl font-black mb-6 text-white drop-shadow-2xl">
            ТАБЛИЦА ЛИДЕРОВ ОМСКА
          </h2>
          <p className="text-3xl text-white/95 font-bold max-w-4xl mx-auto">
            Соревнуйся со школами, классами и учениками! Кто больше спасёт планету?
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
              <p className="text-5xl font-black text-white mb-1">{individuals.length}К+</p>
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