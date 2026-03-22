import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [lines, setLines] = useState<string[]>([]);
  const [showBar, setShowBar] = useState(false);

  const terminalLines = [
    '> ИНИЦИАЛИЗАЦИЯ СИСТЕМЫ...',
    '> ЗАГРУЗКА БАЗЫ ДАННЫХ МВД...',
    '> ПРОВЕРКА ДОПУСКА УРОВНЯ «СОВЕРШЕННО СЕКРЕТНО»...',
    '> ПОДКЛЮЧЕНИЕ К АРХИВУ СЕРДЕЧНОГО ОКРУГА...',
    '> УСТАНОВКА ЗАЩИЩЁННОГО СОЕДИНЕНИЯ...',
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < terminalLines.length) {
        setLines(prev => [...prev, terminalLines[i]]);
        i++;
      } else {
        clearInterval(interval);
        setShowBar(true);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showBar) {
      const timer = setTimeout(() => {
        onComplete();
      }, 3800);
      return () => clearTimeout(timer);
    }
  }, [showBar, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center scanlines">
      <div className="w-full max-w-2xl px-6">
        <div className="mb-8 text-left">
          <div className="text-green-500/80 font-mono text-xs sm:text-sm mb-2 opacity-50">
            ╔══════════════════════════════════════════╗
          </div>
          <div className="text-green-500/80 font-mono text-xs sm:text-sm mb-2 opacity-50">
            ║&nbsp;&nbsp;ОРГАНЫ ВНУТРЕННИХ ДЕЛ — ТЕРМИНАЛ v2.6&nbsp;&nbsp;║
          </div>
          <div className="text-green-500/80 font-mono text-xs sm:text-sm mb-6 opacity-50">
            ╚══════════════════════════════════════════╝
          </div>

          {lines.map((line, index) => (
            <div
              key={index}
              className="text-green-400 font-mono text-xs sm:text-sm mb-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {line}
            </div>
          ))}

          {lines.length === terminalLines.length && !showBar && (
            <span className="text-green-400 font-mono text-sm cursor-blink" />
          )}
        </div>

        {showBar && (
          <div className="space-y-3">
            <div className="text-green-400 font-mono text-xs sm:text-sm text-center animate-flicker">
              ДОСТУП РАЗРЕШЁН. ЗАГРУЗКА ДЕЛА...
            </div>
            <div className="w-full h-3 bg-green-900/30 border border-green-500/30 rounded-sm overflow-hidden">
              <div className="h-full bg-green-500/70 loading-bar-fill rounded-sm" />
            </div>
            <div className="flex justify-between text-green-500/50 font-mono text-[10px]">
              <span>CLASSIFIED</span>
              <span>СЕРДЕЧНЫЙ ОКРУГ — АРХИВ</span>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-6 text-green-500/20 font-mono text-[10px] text-center">
        НЕСАНКЦИОНИРОВАННЫЙ ДОСТУП ПРЕСЛЕДУЕТСЯ ПО ЗАКОНУ
      </div>
    </div>
  );
};

export default LoadingScreen;
