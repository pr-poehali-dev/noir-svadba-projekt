import Icon from '@/components/ui/icon';

const DressCode = () => {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-noir-dark" />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-typewriter text-noir-red-bright text-xs tracking-[5px] uppercase mb-3">
            Раздел V
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-noir-text mb-2">
            ПРИКАЗ №1 ОТ 13.06.2026
          </h2>
          <h3 className="font-typewriter text-noir-text-dim text-sm sm:text-base tracking-wider">
            «О ФОРМЕ ОДЕЖДЫ ЛИЧНОГО СОСТАВА»
          </h3>
          <div className="w-24 h-[2px] bg-noir-red/40 mx-auto mt-4" />
        </div>

        <div className="border border-noir-text-dim/15 rounded-sm p-6 sm:p-10 bg-noir-navy/30 text-center">
          <Icon name="Shirt" size={32} className="mx-auto mb-4 text-noir-gold/50" fallback="CircleAlert" />

          <p className="font-mono text-noir-text/80 text-base sm:text-lg leading-relaxed mb-6">
            Всем свидетелям и понятым предписано явиться <span className="text-noir-gold font-bold">нарядно одетыми</span>.
          </p>

          <div className="border-2 border-dashed border-noir-red/30 rounded-sm p-5 sm:p-6 bg-noir-red/5 mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Icon name="AlertTriangle" size={18} className="text-noir-red-bright" />
              <p className="font-typewriter text-noir-red-bright text-sm tracking-wider uppercase">
                Внимание, женщины!
              </p>
            </div>
            <p className="font-mono text-noir-text/90 text-sm leading-relaxed">
              Большая просьба — <span className="text-noir-red-bright font-bold">не приходить в белом</span>.
              <br />
              <span className="text-noir-text-dim text-xs">Белый цвет зарезервирован как вещественное доказательство подозреваемой.</span>
            </p>
          </div>

          <p className="font-typewriter text-noir-text-dim/50 text-xs">
            Нарушение данного приказа влечёт за собой укоризненные взгляды
          </p>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
