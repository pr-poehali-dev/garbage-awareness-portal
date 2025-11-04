import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Решения и методы</h2>
          <p className="text-xl text-muted-foreground">Практические способы борьбы с мусором</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon name="Trash2" className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Сортировка отходов</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span><strong>Пластик:</strong> бутылки, упаковка (без пищевых остатков)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span><strong>Стекло:</strong> банки, бутылки (без крышек)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span><strong>Бумага:</strong> газеты, картон (сухие и чистые)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span><strong>Батарейки и электроника:</strong> только в спецпункты!</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Icon name="ShoppingBag" className="text-secondary" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Сокращение потребления</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Используй многоразовые сумки вместо пакетов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Покупай продукты без лишней упаковки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Откажись от одноразовой посуды</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Выбирай товары в перерабатываемой упаковке</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Icon name="Sprout" className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Компостирование</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span>Органические отходы превращаются в удобрение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span>Подходит для частных домов и дач</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span>Сокращает объём бытовых отходов на 30%</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon name="Users" className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Участие в акциях</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Субботники по уборке парков и улиц</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Эко-марафоны и челленджи в соцсетях</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Обмен и дарение ненужных вещей</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
