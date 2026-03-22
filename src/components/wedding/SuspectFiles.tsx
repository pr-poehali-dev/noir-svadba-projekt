import Icon from '@/components/ui/icon';

const SuspectCard = ({
  role,
  name,
  alias,
  description,
  imgUrl,
  isDetective,
}: {
  role: string;
  name: string;
  alias: string;
  description: string;
  imgUrl: string;
  isDetective: boolean;
}) => (
  <div className="relative group">
    <div className="aged-paper rounded-sm p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-noir-red/10">
      <div className="absolute top-3 right-3 opacity-40">
        <div className="paperclip" />
      </div>

      <div className="text-noir-ink text-[10px] font-typewriter tracking-[3px] uppercase mb-4 opacity-60">
        {role}
      </div>

      <div className="relative w-48 h-60 sm:w-56 sm:h-72 mx-auto mb-6 overflow-hidden border-4 border-noir-ink/20">
        <img
          src={imgUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ filter: isDetective ? 'grayscale(80%) contrast(1.1)' : 'grayscale(30%) contrast(1.05)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-noir-ink/30" />
      </div>

      <div className="text-center">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-noir-ink mb-1">{name}</h3>
        <p className="font-typewriter text-noir-red text-xs tracking-wider mb-3">{alias}</p>
        <p className="font-mono text-noir-ink/70 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="police-badge w-10 h-10">
          <Icon name="BadgeCheck" size={24} className="text-noir-gold/40 relative z-10" />
        </div>
      </div>

      <div className="fingerprint -bottom-4 -right-4 rotate-45 opacity-[0.04]" />
    </div>
  </div>
);

const SuspectFiles = () => {
  return (
    <section id="suspects" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-noir-navy via-noir-dark to-noir-navy" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-typewriter text-noir-red-bright text-xs tracking-[5px] uppercase mb-3">
            Секретно
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-noir-text mb-2">
            ДОСЬЕ НА ФИГУРАНТОВ
          </h2>
          <div className="w-24 h-[2px] bg-noir-red/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <SuspectCard
            role="Фигурант №1 — Потерпевший"
            name="Детектив Машляк"
            alias="Ведущий оперативник"
            description="Опытный следователь, раскрывший не одно дело. Однако оказался бессилен перед главной уликой — улыбкой подозреваемой."
            imgUrl="https://cdn.poehali.dev/projects/943c2551-bcf0-4558-a6af-32f391ae79fb/bucket/fc144397-548c-4fe9-8d83-2c600bc2b4fd.jpg"
            isDetective={true}
          />
          <SuspectCard
            role="Фигурант №2 — Подозреваемая"
            name="Ксения"
            alias="Подозреваемая"
            description="Подозревается в систематическом хищении сердец. Особые приметы: обезоруживающая улыбка, опасный взгляд."
            imgUrl="https://cdn.poehali.dev/projects/943c2551-bcf0-4558-a6af-32f391ae79fb/bucket/933dc7f6-f00f-4245-9d64-503aaab86242.jpg"
            isDetective={false}
          />
        </div>

        <div className="text-center mt-12">
          <div className="inline-block border border-noir-red/20 px-6 py-3 rounded-sm">
            <p className="font-typewriter text-noir-text-dim text-xs">
              <Icon name="AlertTriangle" size={14} className="inline mr-2 text-noir-red-bright" />
              ВНИМАНИЕ: Фигуранты считаются вооружёнными (кольцами) и чрезвычайно счастливыми
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuspectFiles;