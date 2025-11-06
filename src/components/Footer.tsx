import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Leaf" size={32} />
              <span className="text-xl font-bold">Sirius55</span>
            </div>
            <p className="text-background/70">
              Глобальное движение за чистую планету и ответственное обращение с отходами
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Разделы</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#solutions" className="hover:text-background transition-colors">Решения</a></li>
              <li><a href="#map" className="hover:text-background transition-colors">Карта</a></li>
              <li><a href="#quiz" className="hover:text-background transition-colors">Квиз</a></li>
              <li><a href="#resources" className="hover:text-background transition-colors">Ресурсы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-background/70">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>soaga862@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (983) 623-27-46</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>По всему миру 🌍</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="border-background/20 hover:bg-background/10">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="border-background/20 hover:bg-background/10">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="border-background/20 hover:bg-background/10">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
          <p>© 2025 Sirius55. Все права защищены. Сделано с 💚 для нашей планеты</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;