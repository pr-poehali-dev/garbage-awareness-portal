import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onAuthClick: () => void;
  user: { name: string; email: string } | null;
  onProfileClick: () => void;
}

const Header = ({ onAuthClick, user, onProfileClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Leaf" className="text-primary" size={32} />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ЭкоМир
          </span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
          <a href="#solutions" className="text-foreground hover:text-primary transition-colors">Решения</a>
          <a href="#map" className="text-foreground hover:text-primary transition-colors">Карта</a>
          <a href="#quiz" className="text-foreground hover:text-primary transition-colors">Квиз</a>
          <a href="#resources" className="text-foreground hover:text-primary transition-colors">Ресурсы</a>
        </div>
        {user ? (
          <Button onClick={onProfileClick} className="bg-primary hover:bg-primary/90">
            <Icon name="User" size={18} className="mr-2" />
            {user.name}
          </Button>
        ) : (
          <Button onClick={onAuthClick} className="bg-primary hover:bg-primary/90">
            <Icon name="LogIn" size={18} className="mr-2" />
            Войти
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
