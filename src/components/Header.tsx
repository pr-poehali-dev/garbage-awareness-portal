import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Leaf" className="text-primary" size={32} />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ЭкоОмск
          </span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
          <a href="#solutions" className="text-foreground hover:text-primary transition-colors">Решения</a>
          <a href="#map" className="text-foreground hover:text-primary transition-colors">Карта</a>
          <a href="#quiz" className="text-foreground hover:text-primary transition-colors">Квиз</a>
          <a href="#resources" className="text-foreground hover:text-primary transition-colors">Ресурсы</a>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Icon name="Phone" size={18} className="mr-2" />
          Контакты
        </Button>
      </nav>
    </header>
  );
};

export default Header;
