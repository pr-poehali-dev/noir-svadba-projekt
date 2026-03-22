import Icon from '@/components/ui/icon';

const CaseFileCover = () => {
  const scrollToNext = () => {
    const el = document.getElementById('suspects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden vignette">
      <div className="absolute inset-0 bg-noir-navy" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(212,197,160,0.03) 50px, rgba(212,197,160,0.03) 51px),
            repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(212,197,160,0.03) 50px, rgba(212,197,160,0.03) 51px)`
        }}
      />

      <div className="fingerprint top-10 right-10 rotate-12" />
      <div className="fingerprint bottom-20 left-8 -rotate-45" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="w-12 h-[1px] bg-noir-gold/40" />
          <Icon name="Shield" size={20} className="text-noir-gold/60" />
          <div className="w-12 h-[1px] bg-noir-gold/40" />
        </div>

        <p className="font-typewriter text-noir-gold/70 text-xs sm:text-sm tracking-[6px] uppercase mb-4">
          Совершенно секретно
        </p>

        <h2 className="font-typewriter text-noir-text-dim text-sm sm:text-base tracking-[4px] uppercase mb-8">
          Органы внутренних дел Сердечного округа
        </h2>

        <div className="relative inline-block mb-6">
          <div className="absolute -inset-4 border border-noir-red/20 rounded-sm" />
          <div className="absolute -inset-8 border border-noir-red/10 rounded-sm" />
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold text-noir-text tracking-wider">
            ДЕЛО №
          </h1>
          <div className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-noir-red-bright mt-2">
            13.06.2026
          </div>
        </div>

        <div className="mt-8 mb-12">
          <p className="font-typewriter text-noir-text/80 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto">
            По факту хищения сердца детектива{' '}
            <span className="text-noir-gold font-bold">Машляка</span>{' '}
            гражданкой{' '}
            <span className="text-noir-red-bright font-bold">Ксенией</span>
          </p>
        </div>

        <div className="mb-8 flex items-center justify-center gap-4 text-noir-text-dim text-xs font-typewriter">
          <span>ТОМ 1</span>
          <span className="w-1 h-1 bg-noir-red rounded-full" />
          <span>ЛИСТ 1</span>
          <span className="w-1 h-1 bg-noir-red rounded-full" />
          <span>НАЧАТО: 13.06.2026</span>
        </div>

        <button
          onClick={scrollToNext}
          className="stamp-button"
        >
          Пройти опознание
        </button>

        <div className="absolute -bottom-2 right-4 sm:right-12 seal hidden sm:flex">
          <span>Сердечный<br />округ<br />МВД</span>
        </div>
      </div>

      <div className="absolute bottom-8 z-10 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-noir-text-dim/40" />
      </div>
    </section>
  );
};

export default CaseFileCover;