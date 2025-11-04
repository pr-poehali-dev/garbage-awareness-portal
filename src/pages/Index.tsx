import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import MapSection from '@/components/MapSection';
import QuizSection from '@/components/QuizSection';
import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';
import ProfileModal from '@/components/ProfileModal';

const Index = () => {
  const [wasteCounter, setWasteCounter] = useState(8547320);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);
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

  const quizQuestions = [
    {
      question: 'В какой контейнер выбросить пластиковую бутылку?',
      options: ['Синий (пластик)', 'Зелёный (стекло)', 'Коричневый (органика)', 'Серый (смешанные)'],
      correct: 0
    },
    {
      question: 'Сколько лет разлагается пластиковый пакет?',
      options: ['5-10 лет', '50-100 лет', '400-1000 лет', '10-20 лет'],
      correct: 2
    },
    {
      question: 'Что нельзя выбрасывать в контейнер для бумаги?',
      options: ['Газеты', 'Картонные коробки', 'Ламинированную бумагу', 'Журналы'],
      correct: 2
    }
  ];

  const handleQuizAnswer = (answerIndex: number) => {
    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setQuizScore(prev => prev + 10);
    }
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowQuizResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setQuizScore(0);
    setShowQuizResult(false);
  };

  const handleLogin = (email: string, name: string) => {
    setUser({ email, name });
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    setQuizScore(0);
    resetQuiz();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header 
        onAuthClick={() => setShowAuthModal(true)} 
        user={user}
        onProfileClick={() => setShowProfileModal(true)}
      />
      <HeroSection wasteCounter={wasteCounter} recyclingPointsCount={recyclingPoints.length} />
      <SolutionsSection />
      <MapSection recyclingPoints={recyclingPoints} />
      <QuizSection 
        quizQuestions={quizQuestions}
        currentQuestion={currentQuestion}
        quizScore={quizScore}
        showQuizResult={showQuizResult}
        onAnswer={handleQuizAnswer}
        onReset={resetQuiz}
      />
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
        quizScore={quizScore}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default Index;
