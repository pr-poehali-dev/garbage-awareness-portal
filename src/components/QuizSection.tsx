import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

interface QuizSectionProps {
  quizQuestions: QuizQuestion[];
  currentQuestion: number;
  quizScore: number;
  showQuizResult: boolean;
  onAnswer: (answerIndex: number) => void;
  onReset: () => void;
}

const QuizSection = ({ 
  quizQuestions, 
  currentQuestion, 
  quizScore, 
  showQuizResult, 
  onAnswer, 
  onReset 
}: QuizSectionProps) => {
  return (
    <section id="quiz" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Эко-квиз</h2>
            <p className="text-xl text-muted-foreground">Проверь свои знания о сортировке мусора и заработай баллы!</p>
          </div>

          <Card className="p-8">
            {!showQuizResult ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">
                      Вопрос {currentQuestion + 1} из {quizQuestions.length}
                    </span>
                    <Badge className="bg-secondary text-secondary-foreground">
                      <Icon name="Trophy" size={16} className="mr-1" />
                      {quizScore} баллов
                    </Badge>
                  </div>
                  <Progress value={((currentQuestion + 1) / quizQuestions.length) * 100} className="h-2" />
                </div>

                <h3 className="text-2xl font-bold mb-6">{quizQuestions[currentQuestion].question}</h3>

                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full text-left justify-start h-auto py-4 px-6 hover:bg-primary/10 hover:border-primary transition-all"
                      onClick={() => onAnswer(index)}
                    >
                      <span className="text-lg">{option}</span>
                    </Button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center animate-scale-in">
                <Icon name="Award" className="text-accent mx-auto mb-4" size={80} />
                <h3 className="text-3xl font-bold mb-4">Квиз завершён!</h3>
                <p className="text-xl mb-6">
                  Ты набрал <span className="text-primary font-bold">{quizScore}</span> из{' '}
                  <span className="font-bold">{quizQuestions.length * 10}</span> баллов
                </p>
                <div className="mb-8">
                  {quizScore === quizQuestions.length * 10 && (
                    <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                      🏆 Идеальный результат! Ты эко-эксперт!
                    </Badge>
                  )}
                  {quizScore >= 20 && quizScore < 30 && (
                    <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                      👍 Отличный результат! Продолжай в том же духе!
                    </Badge>
                  )}
                  {quizScore < 20 && (
                    <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-2">
                      💚 Хороший старт! Изучи раздел решений
                    </Badge>
                  )}
                </div>
                <Button onClick={onReset} size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="RotateCcw" size={20} className="mr-2" />
                  Пройти заново
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
