import Icon from '@/components/ui/icon';

const AdultsOnly = () => {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-noir-dark via-noir-navy to-noir-dark" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <div className="mb-10">
          <div className="inline-flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-noir-red-bright relative prohibition-sign">
            <Icon name="Baby" size={48} className="text-noir-red-bright" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-noir-red-bright rotate-45 rounded-full" />
            </div>
          </div>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-noir-red-bright mb-4">
          ДЕТЯМ ВХОД ВОСПРЕЩЁН
        </h2>

        <div className="font-typewriter text-noir-text-dim text-xs tracking-[3px] uppercase mb-8">
          Гриф «Только для совершеннолетних»
        </div>

        <div className="max-w-xl mx-auto border border-noir-red/20 rounded-sm p-6 sm:p-8 bg-noir-dark/50">
          <p className="font-mono text-noir-text/80 text-sm leading-relaxed">
            В связи с наличием на месте происшествия <span className="text-noir-red-bright">острых предметов</span> (столовые приборы), 
            <span className="text-noir-red-bright"> танцевальных спецсредств</span> (музыка повышенной громкости) 
            и <span className="text-noir-red-bright">фуршетных улик</span> (напитки для взрослых), 
            мероприятие проводится <span className="text-noir-gold font-bold">исключительно для совершеннолетних</span>.
          </p>
        </div>

        <div className="mt-8 seal mx-auto">
          <span>18+<br />Доступ<br />ограничен</span>
        </div>

        <p className="mt-6 font-typewriter text-noir-text-dim/50 text-xs">
          Несовершеннолетних свидетелей просим оставить под домашним арестом
        </p>
      </div>
    </section>
  );
};

export default AdultsOnly;
