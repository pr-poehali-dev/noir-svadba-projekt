import Icon from '@/components/ui/icon';

const CrimeScene = () => {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-noir-dark" />
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139,32,32,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(26,35,64,0.5) 0%, transparent 50%)`
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-typewriter text-noir-red-bright text-xs tracking-[5px] uppercase mb-3">
            Раздел III
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-noir-text mb-2">
            ПРОТОКОЛ ОСМОТРА
          </h2>
          <h3 className="font-heading text-xl sm:text-2xl text-noir-text-dim">
            МЕСТА ПРОИСШЕСТВИЯ
          </h3>
          <div className="w-24 h-[2px] bg-noir-red/40 mx-auto mt-4" />
        </div>

        <div className="aged-paper rounded-sm p-6 sm:p-10 relative">
          <div className="absolute top-4 left-4 opacity-30">
            <div className="paperclip" />
          </div>

          <div className="text-noir-ink space-y-8">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-noir-red/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Calendar" size={20} className="text-noir-red" />
              </div>
              <div>
                <p className="font-typewriter text-noir-ink/50 text-xs tracking-[3px] uppercase mb-1">
                  Дата и время происшествия
                </p>
                <p className="font-heading text-2xl sm:text-3xl font-bold text-noir-ink">
                  13 июня 2026 года
                </p>
                <p className="font-typewriter text-noir-ink/70 text-sm mt-1">
                  Начало оперативных действий: 10:30
                </p>
              </div>
            </div>

            <hr className="border-noir-ink/10" />

            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-noir-red/10 flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={20} className="text-noir-red" />
              </div>
              <div>
                <p className="font-typewriter text-noir-ink/50 text-xs tracking-[3px] uppercase mb-1">
                  Место происшествия
                </p>
                <p className="font-heading text-xl sm:text-2xl font-bold text-noir-ink">
                  Управление ЗАГС
                </p>
                <p className="font-typewriter text-noir-ink/70 text-sm mt-1">
                  г. Белгород, ул. Попова, д. 14
                </p>
              </div>
            </div>

            <div className="w-full h-64 rounded-sm overflow-hidden border-2 border-noir-ink/20 relative bg-noir-ink/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={48} className="mx-auto mb-3 text-noir-ink/20" />
                  <p className="font-typewriter text-noir-ink/40 text-xs">
                    КАРТА МЕСТА ПРОИСШЕСТВИЯ
                  </p>
                  <p className="font-typewriter text-noir-ink/30 text-[10px] mt-1">
                    Вставьте iframe Яндекс.Карт
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-dashed border-noir-ink/15 pt-6 mt-6">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="FileWarning" size={16} className="text-noir-red" />
                <p className="font-typewriter text-noir-red text-xs tracking-wider uppercase">
                  Примечание следователя
                </p>
              </div>
              <p className="font-typewriter text-noir-ink/70 text-sm italic pl-6">
                «Понятые обязаны явиться по указанному адресу. Неявка будет расценена как 
                попытка скрыться от правосудия и лишит вас доступа к фуршетным уликам.»
              </p>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 seal hidden sm:flex">
            <span>Место<br />осмотрено<br />13.06.26</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrimeScene;