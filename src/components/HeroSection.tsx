import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  wasteCounter: number;
  recyclingPointsCount: number;
}

const HeroSection = ({ wasteCounter, recyclingPointsCount }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/projects/80d20a93-447f-4b97-8907-e004902ecd46/files/1a10056d-8b5b-4391-a4b4-0c8d420ada86.jpg"
          alt="Эко фон"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6 inline-block">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-5xl md:text-7xl animate-bounce">🌟</div>
              <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                SIRIUS55
              </h1>
              <div className="text-5xl md:text-7xl animate-bounce" style={{animationDelay: '0.2s'}}>🚀</div>
            </div>
            <p className="text-xl md:text-2xl font-bold text-emerald-600 animate-pulse">
              Омск за чистое будущее планеты!
            </p>
          </div>
          <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg px-6 py-2">
            <Icon name="Sparkles" size={20} className="mr-2" />
            Экология начинается с каждого из нас
          </Badge>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Узнай, как правильно сортировать мусор, найди пункт приёма и спаси планету! 🌍♻️
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow animate-scale-in">
              <Icon name="TrendingUp" className="text-accent mx-auto mb-3" size={40} />
              <div className="text-4xl font-bold text-primary mb-2 animate-counter">
                {wasteCounter.toLocaleString('ru-RU')}
              </div>
              <p className="text-xs text-muted-foreground">тонн мусора производится в мире ежегодно</p>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow animate-scale-in" style={{animationDelay: '0.1s'}}>
              <Icon name="Recycle" className="text-primary mx-auto mb-3" size={40} />
              <div className="text-4xl font-bold text-secondary mb-2">
                {recyclingPointsCount}
              </div>
              <p className="text-xs text-muted-foreground">пунктов приёма вторсырья</p>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow animate-scale-in" style={{animationDelay: '0.2s'}}>
              <Icon name="Trees" className="text-secondary mx-auto mb-3" size={40} />
              <div className="text-4xl font-bold text-accent mb-2">
                12%
              </div>
              <p className="text-xs text-muted-foreground">мусора перерабатывается</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;