import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const OnlineCounter = () => {
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Генерируем уникальный ID сессии
    let sessionId = sessionStorage.getItem('visitor_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
      sessionStorage.setItem('visitor_session_id', sessionId);
    }

    // Функция для обновления счётчика
    const updateCounter = async () => {
      try {
        // Отправляем heartbeat (каждые 30 секунд)
        const timestamp = Date.now();
        
        // Сохраняем в localStorage данные о текущей сессии
        const allSessions = JSON.parse(localStorage.getItem('active_sessions') || '{}');
        allSessions[sessionId] = timestamp;
        
        // Удаляем устаревшие сессии (старше 60 секунд)
        const activeSessions: { [key: string]: number } = {};
        Object.entries(allSessions).forEach(([id, time]) => {
          if (timestamp - (time as number) < 60000) {
            activeSessions[id] = time as number;
          }
        });
        
        localStorage.setItem('active_sessions', JSON.stringify(activeSessions));
        
        // Подсчитываем активных пользователей
        setOnlineUsers(Object.keys(activeSessions).length);
        setIsLoading(false);
      } catch (error) {
        console.error('Ошибка обновления счётчика:', error);
      }
    };

    // Первое обновление
    updateCounter();

    // Обновляем каждые 5 секунд
    const interval = setInterval(updateCounter, 5000);

    // Обработка закрытия вкладки
    const handleBeforeUnload = () => {
      const allSessions = JSON.parse(localStorage.getItem('active_sessions') || '{}');
      delete allSessions[sessionId];
      localStorage.setItem('active_sessions', JSON.stringify(allSessions));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      handleBeforeUnload();
    };
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 px-3 py-1.5 rounded-full border-2 border-emerald-300 shadow-sm">
      <div className="relative">
        <Icon name="Users" size={16} className="text-emerald-600" />
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <span className="text-sm font-bold text-emerald-800">
        {onlineUsers} на сайте
      </span>
    </div>
  );
};

export default OnlineCounter;
