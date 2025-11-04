import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Полезные ресурсы</h2>
          <p className="text-xl text-muted-foreground">Материалы и организации для глубокого погружения</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
            <Icon name="BookOpen" className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Образовательные материалы</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="FileText" size={16} className="text-primary" />
                <span>Гид по раздельному сбору</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="FileText" size={16} className="text-primary" />
                <span>Что можно переработать?</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="FileText" size={16} className="text-primary" />
                <span>Маркировка пластика</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
            <Icon name="Building2" className="text-secondary mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Экоорганизации</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Users" size={16} className="text-secondary" />
                <span>Гринпис Россия</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Users" size={16} className="text-secondary" />
                <span>РазДельный Сбор</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Users" size={16} className="text-secondary" />
                <span>ЭкоОмск (местная)</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
            <Icon name="Smartphone" className="text-accent mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Мобильные приложения</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Download" size={16} className="text-accent" />
                <span>RecycleMap - карта пунктов</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Download" size={16} className="text-accent" />
                <span>EcoChallenge - челленджи</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Download" size={16} className="text-accent" />
                <span>SortIt - гид по сортировке</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <div className="text-center">
              <Icon name="Calculator" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Калькулятор экономии</h3>
              <p className="text-muted-foreground mb-6">
                Если ты правильно сортируешь 10 кг мусора в месяц, за год ты экономишь:
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-primary">17</div>
                  <p className="text-sm text-muted-foreground">деревьев спасено</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">120</div>
                  <p className="text-sm text-muted-foreground">кг CO₂ не выброшено</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">5000</div>
                  <p className="text-sm text-muted-foreground">литров воды сэкономлено</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
