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
        <div className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/files/03d6f106-d607-4a02-9364-12f53123a5eb.jpeg" 
            alt="ЭкоМир 55" 
            className="h-12 w-12 object-contain"
            style={{ filter: 'hue-rotate(100deg) saturate(1.5)' }}
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ЭкоМир 55
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