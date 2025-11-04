import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import MapSection from '@/components/MapSection';
import EcoTamagotchi from '@/components/EcoTamagotchi';
import TrashSortingGame from '@/components/TrashSortingGame';
import AbsurdCalculator from '@/components/AbsurdCalculator';
import GretaAssistant from '@/components/GretaAssistant';
import PremiumEcoPass from '@/components/PremiumEcoPass';
import FloatingLogo from '@/components/FloatingLogo';
import EcoAchievements from '@/components/EcoAchievements';
import EcoBossBattle from '@/components/EcoBossBattle';
import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';
import ProfileModal from '@/components/ProfileModal';

const Index = () => {
  const [wasteCounter, setWasteCounter] = useState(8547320);
  const [ecoScore, setEcoScore] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWasteCounter(prev => prev + Math.floor(Math.random() * 10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const recyclingPoints = [
    { name: 'ЭкоЦентр "Зелёная планета"', address: 'ул. Ленина, 50', types: ['пластик', 'стекло', 'бумага'], lat: 54.9885, lng: 73.3242 },
    { name: 'Пункт приёма "ЭкоСити"', address: 'пр. Мира, 120', types: ['батарейки', 'лампы', 'электроника'], lat: 54.9924, lng: 73.3686 },
    { name: 'ЭкоСтанция "Чистый мир"', address: 'ул. Победы, 88', types: ['пластик', 'металл', 'одежда'], lat: 55.0281, lng: 73.3174 },
    { name: 'Центр переработки "ВторРесурс"', address: 'ул. Садовая, 15', types: ['стекло', 'бумага', 'картон'], lat: 54.9736, lng: 73.3842 },
    { name: 'ЭкоПункт "Новая жизнь"', address: 'ул. Советская, 42', types: ['батарейки', 'пластик', 'металл'], lat: 54.9647, lng: 73.3789 }
  ];

  const handleScoreUpdate = (points: number) => {
    setEcoScore(prev => prev + points);
  };

  const handleLogin = (email: string, name: string) => {
    setUser({ email, name });
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    setEcoScore(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <FloatingLogo />
      <Header 
        onAuthClick={() => setShowAuthModal(true)} 
        user={user}
        onProfileClick={() => setShowProfileModal(true)}
      />
      <HeroSection wasteCounter={wasteCounter} recyclingPointsCount={recyclingPoints.length} />
      <SolutionsSection />
      <MapSection recyclingPoints={recyclingPoints} />
      
      <section id="interactive" className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">🎮 Интерактивная зона</h2>
            <p className="text-xl text-muted-foreground">Играй, учись и спасай планету с удовольствием!</p>
          </div>
          
          <div className="space-y-12">
            <EcoTamagotchi onLevelUp={handleScoreUpdate} />
            <TrashSortingGame onScore={handleScoreUpdate} />
            <EcoBossBattle onVictory={handleScoreUpdate} />
            <AbsurdCalculator />
            <GretaAssistant />
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-gradient-to-b from-emerald-50 to-purple-50">
        <div className="container mx-auto px-4">
          <EcoAchievements ecoScore={ecoScore} />
        </div>
      </section>

      <section id="premium" className="py-20 bg-gradient-to-b from-purple-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <PremiumEcoPass />
        </div>
      </section>
      
      <ResourcesSection />
      <Footer />
      
      <AuthModal 
        open={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
      />
      
      <ProfileModal
        open={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        user={user}
        quizScore={ecoScore}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default Index;