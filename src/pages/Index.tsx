import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSolution from '@/components/ProblemSolution';
import TrashDetector from '@/components/TrashDetector';
import ImpactCalculator from '@/components/ImpactCalculator';
import Leaderboard from '@/components/Leaderboard';
import OmskMapImage from '@/components/OmskMapImage';
import PrivateShop from '@/components/PrivateShop';
import FloatingLogo from '@/components/FloatingLogo';
import Footer from '@/components/Footer';

const Index = () => {
  const [wasteCounter, setWasteCounter] = useState(8547320);

  useEffect(() => {
    const interval = setInterval(() => {
      setWasteCounter(prev => prev + Math.floor(Math.random() * 10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const recyclingPoints = [
    { name: 'ЭкоЦентр "Зелёная планета"', address: 'Омск, ул. Ленина, 50', types: ['пластик', 'стекло', 'бумага'], lat: 54.9885, lng: 73.3242 },
    { name: 'Пункт приёма "ЭкоСити"', address: 'Омск, пр. Мира, 120', types: ['батарейки', 'лампы', 'электроника'], lat: 54.9924, lng: 73.3686 },
    { name: 'ЭкоСтанция "Чистый мир"', address: 'Омск, ул. Победы, 88', types: ['пластик', 'металл', 'одежда'], lat: 55.0281, lng: 73.3174 },
    { name: 'Центр переработки "ВторРесурс"', address: 'Омск, ул. Садовая, 15', types: ['стекло', 'бумага', 'картон'], lat: 54.9736, lng: 73.3842 },
    { name: 'ЭкоПункт "Новая жизнь"', address: 'Омск, ул. Советская, 42', types: ['батарейки', 'пластик', 'металл'], lat: 54.9647, lng: 73.3789 },
    { name: 'Сибирский центр утилизации', address: 'Омск, ул. 10 лет Октября, 195', types: ['электроника', 'батарейки', 'лампы'], lat: 54.9542, lng: 73.3698 },
    { name: 'ЭкоПарк "Иртыш"', address: 'Омск, Иртышская набережная, 12', types: ['пластик', 'стекло', 'металл'], lat: 54.9921, lng: 73.3686 },
    { name: 'Омск-Рециклинг', address: 'Омск, ул. 70 лет Октября, 27', types: ['бумага', 'картон', 'пластик'], lat: 54.9733, lng: 73.3194 },
    { name: 'ЭкоЛайф', address: 'Омск, пр. Комарова, 18к3', types: ['одежда', 'текстиль', 'обувь'], lat: 54.9458, lng: 73.3752 },
    { name: 'ГринПойнт', address: 'Омск, ул. Маяковского, 65', types: ['батарейки', 'пластик', 'стекло'], lat: 54.9884, lng: 73.3675 },
    { name: 'ЭкоБокс 55', address: 'Омск, ул. Лукашевича, 8', types: ['электроника', 'металл', 'пластик'], lat: 54.9674, lng: 73.3291 },
    { name: 'ЧистоГрад', address: 'Омск, ул. Фрунзе, 72', types: ['стекло', 'бумага', 'картон'], lat: 54.9801, lng: 73.3598 }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <FloatingLogo />
      <Header />
      <HeroSection wasteCounter={wasteCounter} recyclingPointsCount={recyclingPoints.length} />
      
      <ProblemSolution />
      
      <TrashDetector />
      
      <ImpactCalculator />
      
      <Leaderboard />
      
      <OmskMapImage recyclingPoints={recyclingPoints} />
      
      <PrivateShop />

      <Footer />
    </div>
  );
};

export default Index;