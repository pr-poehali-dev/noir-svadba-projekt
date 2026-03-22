import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-noir-navy" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-typewriter text-noir-red-bright text-xs tracking-[5px] uppercase mb-3">
            Оперативный штаб
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-noir-text mb-2">
            СВЯЗЬ С КОМАНДОВАНИЕМ
          </h2>
          <div className="w-24 h-[2px] bg-noir-red/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="border border-noir-text-dim/15 rounded-sm p-6 bg-noir-dark/30 text-center">
            <Icon name="Phone" size={20} className="mx-auto mb-3 text-noir-red-bright/60" />
            <p className="font-typewriter text-noir-text-dim text-[10px] tracking-[3px] uppercase mb-2">
              Задержанная (невеста)
            </p>
            <p className="font-heading text-lg text-noir-text font-bold mb-1">Ксения</p>
            <a href="tel:+79066035670" className="font-mono text-noir-gold/70 text-sm hover:text-noir-gold transition-colors">
              8-906-603-56-70
            </a>
          </div>

          <div className="border border-noir-text-dim/15 rounded-sm p-6 bg-noir-dark/30 text-center">
            <Icon name="Phone" size={20} className="mx-auto mb-3 text-noir-red-bright/60" />
            <p className="font-typewriter text-noir-text-dim text-[10px] tracking-[3px] uppercase mb-2">
              Следователь (жених)
            </p>
            <p className="font-heading text-lg text-noir-text font-bold mb-1">Владимир</p>
            <a href="tel:+79507120184" className="font-mono text-noir-gold/70 text-sm hover:text-noir-gold transition-colors">
              8-950-712-01-84
            </a>
          </div>
        </div>

        <div className="border border-dashed border-noir-text-dim/20 rounded-sm p-6 sm:p-8 mb-12 bg-noir-dark/20">
          <h4 className="font-typewriter text-noir-red-bright text-xs tracking-[3px] uppercase mb-4 text-center">
            <Icon name="ClipboardList" size={14} className="inline mr-2" />
            Памятка для свидетелей
          </h4>
          <ul className="space-y-3 max-w-md mx-auto">
            {[
              'При себе иметь вещественные доказательства (подарки)',
              'Хорошее настроение — обязательно',
              'Пустой желудок — рекомендуется',
              'Детей оставить под домашним арестом',
              'Быть нарядно одетым(ой), женщинам — не в белом',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Icon name="CheckSquare" size={14} className="text-noir-gold/50 mt-0.5 flex-shrink-0" />
                <span className="font-mono text-noir-text/70 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[1px] bg-noir-text-dim/20" />
            <Icon name="Heart" size={14} className="text-noir-red-bright/40" />
            <div className="w-12 h-[1px] bg-noir-text-dim/20" />
          </div>

          <p className="font-typewriter text-noir-text-dim/40 text-xs">
            © 2026 | Дело № 13.06.2026
          </p>
          <p className="font-typewriter text-noir-text-dim/30 text-[10px]">
            Лицензия: Брак выдан. Срок действия — пожизненно.
          </p>
          <p className="font-typewriter text-noir-text-dim/20 text-[10px] mt-4">
            Все совпадения с реальными лицами и событиями — не случайны
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
