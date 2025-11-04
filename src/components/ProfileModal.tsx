import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
  user: { name: string; email: string } | null;
  quizScore: number;
  onLogout: () => void;
}

const ProfileModal = ({ open, onClose, user, quizScore, onLogout }: ProfileModalProps) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const ecoLevel = Math.floor(quizScore / 10);
  const achievements = [
    { id: 1, name: 'Первые шаги', icon: 'Footprints', unlocked: quizScore >= 10, description: 'Пройди первый квиз' },
    { id: 2, name: 'Эко-новичок', icon: 'Sprout', unlocked: quizScore >= 20, description: 'Набери 20 баллов' },
    { id: 3, name: 'Эко-эксперт', icon: 'Award', unlocked: quizScore >= 30, description: 'Идеальный результат квиза' },
    { id: 4, name: 'Защитник планеты', icon: 'Shield', unlocked: false, description: 'Пройди 5 квизов' },
  ];

  const handleSave = () => {
    onClose();
  };

  const handleLogout = () => {
    onLogout();
    onClose();
  };

  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon name="User" className="text-primary" size={28} />
            Мой профиль
          </DialogTitle>
          <DialogDescription>
            Управляй своим эко-профилем и достижениями
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="stats">Статистика</TabsTrigger>
            <TabsTrigger value="achievements">Достижения</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="profile-name">Имя</Label>
              <Input
                id="profile-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile-email">Email</Label>
              <Input
                id="profile-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSave} className="flex-1 bg-primary hover:bg-primary/90">
                <Icon name="Save" size={18} className="mr-2" />
                Сохранить
              </Button>
              <Button onClick={handleLogout} variant="destructive" className="flex-1">
                <Icon name="LogOut" size={18} className="mr-2" />
                Выйти
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-4">
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-primary mb-2">{quizScore}</div>
                <p className="text-muted-foreground">Эко-баллов заработано</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Эко-уровень {ecoLevel}</span>
                  <span>{quizScore % 10}/10</span>
                </div>
                <Progress value={(quizScore % 10) * 10} className="h-3" />
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <Icon name="Trophy" className="text-accent mb-2" size={32} />
                <div className="text-2xl font-bold">3</div>
                <p className="text-sm text-muted-foreground">Квизов пройдено</p>
              </Card>
              <Card className="p-4">
                <Icon name="Target" className="text-secondary mb-2" size={32} />
                <div className="text-2xl font-bold">89%</div>
                <p className="text-sm text-muted-foreground">Точность ответов</p>
              </Card>
              <Card className="p-4">
                <Icon name="Zap" className="text-primary mb-2" size={32} />
                <div className="text-2xl font-bold">7</div>
                <p className="text-sm text-muted-foreground">Дней активности</p>
              </Card>
              <Card className="p-4">
                <Icon name="Trees" className="text-accent mb-2" size={32} />
                <div className="text-2xl font-bold">12</div>
                <p className="text-sm text-muted-foreground">Деревьев спасено</p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            <div className="grid gap-3">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className={`p-4 ${achievement.unlocked ? 'bg-primary/5 border-primary' : 'opacity-50'}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${achievement.unlocked ? 'bg-primary/10' : 'bg-muted'}`}>
                      <Icon
                        name={achievement.icon as any}
                        className={achievement.unlocked ? 'text-primary' : 'text-muted-foreground'}
                        size={32}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold">{achievement.name}</h4>
                        {achievement.unlocked && (
                          <Badge className="bg-primary text-primary-foreground">
                            <Icon name="Check" size={12} className="mr-1" />
                            Получено
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
