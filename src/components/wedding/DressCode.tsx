import Icon from '@/components/ui/icon';

const DressCode = () => {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-noir-dark" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-typewriter text-noir-red-bright text-xs tracking-[5px] uppercase mb-3">
            Раздел V
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-noir-text mb-2">
            ПРИКАЗ №1 ОТ 15.08.2026
          </h2>
          <h3 className="font-typewriter text-noir-text-dim text-sm sm:text-base tracking-wider">
            «О ФОРМЕ ОДЕЖДЫ ЛИЧНОГО СОСТАВА»
          </h3>
          <div className="w-24 h-[2px] bg-noir-red/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="border border-noir-text-dim/15 rounded-sm p-6 sm:p-8 bg-noir-navy/50 relative group hover:border-noir-red/20 transition-colors duration-500">
            <div className="absolute top-4 right-4">
              <Icon name="User" size={20} className="text-noir-text-dim/30" />
            </div>
            <p className="font-typewriter text-noir-red-bright text-[10px] tracking-[4px] uppercase mb-4">
              Для мужчин
            </p>
            <h4 className="font-heading text-xl font-bold text-noir-text mb-4">
              Оперативная форма
            </h4>
            <ul className="space-y-3">
              {['Костюмы классического кроя', 'Галстуки или бабочки', 'Подтяжки приветствуются', 'Шляпы в стиле нуар'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-mono text-noir-text/80 text-sm">
                  <Icon name="Check" size={14} className="text-noir-gold/60 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 bg-noir-dark/40 rounded-sm">
              <p className="font-typewriter text-noir-text-dim text-[11px]">
                Рекомендуемые цвета: чёрный, тёмно-синий, серый
              </p>
            </div>
          </div>

          <div className="border border-noir-text-dim/15 rounded-sm p-6 sm:p-8 bg-noir-navy/50 relative group hover:border-noir-red/20 transition-colors duration-500">
            <div className="absolute top-4 right-4">
              <Icon name="Sparkles" size={20} className="text-noir-text-dim/30" />
            </div>
            <p className="font-typewriter text-noir-red-bright text-[10px] tracking-[4px] uppercase mb-4">
              Для женщин
            </p>
            <h4 className="font-heading text-xl font-bold text-noir-text mb-4">
              Парадная форма
            </h4>
            <ul className="space-y-3">
              {['Платья в стиле 50-х', 'Офисный шик и элегантность', 'Красная помада обязательна', 'Перчатки и шляпки по желанию'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-mono text-noir-text/80 text-sm">
                  <Icon name="Check" size={14} className="text-noir-gold/60 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 bg-noir-dark/40 rounded-sm">
              <p className="font-typewriter text-noir-text-dim text-[11px]">
                Рекомендуемые цвета: бордо, чёрный, изумруд, золото
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-block border-2 border-dashed border-noir-gold/20 px-6 py-4 rounded-sm bg-noir-navy/30">
            <p className="font-typewriter text-noir-gold/70 text-sm">
              <Icon name="Award" size={16} className="inline mr-2" />
              Лица в тематических нарядах получат внеочередные улики (комплименты)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
