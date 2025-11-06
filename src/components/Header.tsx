const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/files/03d6f106-d607-4a02-9364-12f53123a5eb.jpeg" 
            alt="Sirius55" 
            className="h-12 w-12 object-contain"
            style={{ filter: 'hue-rotate(100deg) saturate(1.5)' }}
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sirius55
          </span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
          <a href="#map" className="text-foreground hover:text-primary transition-colors">Пункты приёма</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;