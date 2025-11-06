const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/files/03d6f106-d607-4a02-9364-12f53123a5eb.jpeg" 
              alt="Sirius55" 
              className="h-12 w-12 object-contain transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300"
              style={{ filter: 'hue-rotate(100deg) saturate(1.5)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          <div>
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              SIRIUS55
            </span>
            <div className="text-xs font-bold text-emerald-600">Омск за экологию</div>
          </div>
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