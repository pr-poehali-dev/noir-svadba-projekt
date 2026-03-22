import Icon from '@/components/ui/icon';

const events = [
  {
    time: '17:00',
    title: 'Сбор понятых',
    description: 'Фуршет и предварительные показания',
    icon: 'Wine',
  },
  {
    time: '18:00',
    title: 'Оглашение приговора',
    description: 'Торжественная церемония бракосочетания',
    icon: 'Heart',
  },
  {
    time: '19:00',
    title: 'Осмотр вещдоков',
    description: 'Банкет — изучение кулинарных улик',
    icon: 'UtensilsCrossed',
  },
  {
    time: '21:00',
    title: 'Дача показаний под танцы',
    description: 'Дискотека и следственные эксперименты',
    icon: 'Music',
  },
  {
    time: '23:00',
    title: 'Опознание всех всех',
    description: 'Торт и финальный осмотр',
    icon: 'Cake',
  },
];

const Timeline = () => {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-noir-navy via-noir-blue to-noir-navy" />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-typewriter text-noir-red-bright text-xs tracking-[5px] uppercase mb-3">
            Раздел IV
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-noir-text mb-2">
            ПЛАН СЛЕДСТВЕННЫХ
          </h2>
          <h3 className="font-heading text-xl sm:text-2xl text-noir-text-dim">
            ЭКСПЕРИМЕНТОВ
          </h3>
          <div className="w-24 h-[2px] bg-noir-red/40 mx-auto mt-4" />
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-noir-red/40 via-noir-red/20 to-transparent" />

          {events.map((event, index) => (
            <div key={index} className="relative flex gap-6 sm:gap-8 mb-12 last:mb-0 group">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-noir-red/40 bg-noir-dark flex items-center justify-center group-hover:border-noir-red-bright group-hover:bg-noir-red/10 transition-all duration-500">
                  <Icon name={event.icon} size={20} className="text-noir-red-bright/70 group-hover:text-noir-red-bright transition-colors" />
                </div>
              </div>

              <div className="flex-1 pt-1 sm:pt-3">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-noir-red-bright">
                    {event.time}
                  </span>
                </div>
                <h4 className="font-typewriter text-noir-text text-base sm:text-lg tracking-wider uppercase mb-1">
                  {event.title}
                </h4>
                <p className="font-mono text-noir-text-dim text-sm">
                  {event.description}
                </p>
              </div>

              <div className="hidden sm:block absolute -right-2 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Icon name="ChevronRight" size={16} className="text-noir-red-bright/40" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block border border-dashed border-noir-text-dim/20 px-6 py-3 rounded-sm">
            <p className="font-typewriter text-noir-text-dim text-xs">
              <Icon name="Clock" size={14} className="inline mr-2" />
              Хронометраж может быть скорректирован в ходе следствия
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
