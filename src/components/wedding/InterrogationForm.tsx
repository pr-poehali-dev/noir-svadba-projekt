import { useState } from 'react';
import Icon from '@/components/ui/icon';
import funcUrls from '../../../backend/func2url.json';

interface FormData {
  fullName: string;
  phone: string;
  persons: string;
  attendance: string;
  wishes: string;
  signature: string;
}

const InterrogationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    persons: '1',
    attendance: '',
    wishes: '',
    signature: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Обязательное поле';
    if (!formData.phone.trim()) newErrors.phone = 'Обязательное поле';
    if (!formData.attendance) newErrors.attendance = 'Выберите вариант';
    if (!formData.signature.trim()) newErrors.signature = 'Подпись обязательна';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(funcUrls.rsvp, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          persons: parseInt(formData.persons),
          attendance: formData.attendance,
          wishes: formData.wishes,
          signature: formData.signature,
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка сервера');
      }

      setSubmitted(true);
    } catch {
      setSubmitError('Не удалось отправить показания. Попробуйте ещё раз.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <section id="rsvp" className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-noir-dark" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <div className="aged-paper rounded-sm p-8 sm:p-12">
            <div className="seal mx-auto mb-6">
              <span>Принято<br />к делу<br />13.06.26</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-noir-ink mb-4">
              ПОКАЗАНИЯ ПРИНЯТЫ
            </h3>
            <p className="font-typewriter text-noir-ink/70 text-sm mb-6 leading-relaxed">
              Ваши показания зарегистрированы и приобщены к делу.<br />
              Явка {formData.attendance === 'yes' ? 'подтверждена' : 'отклонена'}.
            </p>

            {formData.attendance === 'yes' && (
              <div className="border border-noir-ink/15 rounded-sm p-4 text-left bg-white/30">
                <p className="font-typewriter text-noir-red text-xs tracking-wider uppercase mb-3">
                  Памятка свидетелю:
                </p>
                <ul className="space-y-2 font-mono text-noir-ink/70 text-xs">
                  <li>1. Явиться 13 июня 2026 к 10:15</li>
                  <li>2. Быть нарядно одетым(ой)</li>
                  <li>3. Женщинам — не в белом!</li>
                  <li>4. Детей оставить под домашним арестом</li>
                  <li>5. При себе иметь хорошее настроение</li>
                  <li>6. Подарки = вещественные доказательства</li>
                </ul>
              </div>
            )}

            <p className="mt-6 font-typewriter text-noir-ink/40 text-[10px]">
              Подпись: {formData.signature} | Протокол № {Math.floor(Math.random() * 9000 + 1000)}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-noir-dark" />
      <div className="fingerprint top-20 right-20 rotate-12" />
      <div className="fingerprint bottom-20 left-10 -rotate-30" />

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-typewriter text-noir-red-bright text-xs tracking-[5px] uppercase mb-3">
            Раздел VI
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-noir-text mb-2">
            ПРОТОКОЛ ДОПРОСА
          </h2>
          <h3 className="font-typewriter text-noir-text-dim text-sm tracking-wider">
            СВИДЕТЕЛЯ (ПОНЯТОГО)
          </h3>
          <div className="w-24 h-[2px] bg-noir-red/40 mx-auto mt-4" />
        </div>

        <form onSubmit={handleSubmit} className="border border-noir-text-dim/15 rounded-sm p-6 sm:p-10 bg-noir-navy/30">
          <p className="font-typewriter text-noir-text/60 text-xs leading-relaxed mb-8 border-b border-noir-text-dim/10 pb-6">
            Я, нижеподписавшийся, добровольно даю согласие на участие в следственных действиях,
            назначенных на 13 июня 2026 года, и обязуюсь прибыть в указанное место.
          </p>

          <div className="space-y-6">
            <div>
              <label className="font-typewriter text-noir-text-dim text-xs tracking-wider uppercase block mb-2">
                Фамилия, Имя *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                placeholder="Введите фамилию и имя"
                className="noir-input w-full rounded-sm"
              />
              {errors.fullName && <p className="text-noir-red-bright text-xs mt-1 font-typewriter">{errors.fullName}</p>}
            </div>

            <div>
              <label className="font-typewriter text-noir-text-dim text-xs tracking-wider uppercase block mb-2">
                Телефон *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="noir-input w-full rounded-sm"
              />
              {errors.phone && <p className="text-noir-red-bright text-xs mt-1 font-typewriter">{errors.phone}</p>}
            </div>

            <div>
              <label className="font-typewriter text-noir-text-dim text-xs tracking-wider uppercase block mb-2">
                Количество персон
              </label>
              <div className="flex gap-3">
                {['1', '2', '3', '4'].map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => handleChange('persons', n)}
                    className={`w-12 h-12 rounded-sm border font-heading text-lg transition-all ${
                      formData.persons === n
                        ? 'border-noir-red-bright bg-noir-red/20 text-noir-red-bright'
                        : 'border-noir-text-dim/20 text-noir-text-dim hover:border-noir-text-dim/40'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-typewriter text-noir-text-dim text-xs tracking-wider uppercase block mb-3">
                Мера пресечения *
              </label>
              <div className="space-y-3">
                {[
                  { value: 'yes', label: 'Явка строго обязательна', icon: 'CheckCircle' },
                  { value: 'no', label: 'Не смогу явиться', icon: 'XCircle' },
                ].map(option => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-3 p-3 rounded-sm border cursor-pointer transition-all ${
                      formData.attendance === option.value
                        ? 'border-noir-red-bright bg-noir-red/10'
                        : 'border-noir-text-dim/15 hover:border-noir-text-dim/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={option.value}
                      checked={formData.attendance === option.value}
                      onChange={(e) => handleChange('attendance', e.target.value)}
                      className="sr-only"
                    />
                    <Icon
                      name={option.icon}
                      size={18}
                      className={formData.attendance === option.value ? 'text-noir-red-bright' : 'text-noir-text-dim/40'}
                    />
                    <span className={`font-typewriter text-sm ${
                      formData.attendance === option.value ? 'text-noir-text' : 'text-noir-text-dim'
                    }`}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.attendance && <p className="text-noir-red-bright text-xs mt-1 font-typewriter">{errors.attendance}</p>}
            </div>

            <div>
              <label className="font-typewriter text-noir-text-dim text-xs tracking-wider uppercase block mb-2">
                Собственноручные показания
              </label>
              <textarea
                value={formData.wishes}
                onChange={(e) => handleChange('wishes', e.target.value)}
                placeholder="Пожелания молодожёнам (необязательно)"
                rows={3}
                className="noir-input w-full rounded-sm resize-none"
              />
            </div>

            <div className="border-t border-dashed border-noir-text-dim/15 pt-6">
              <label className="font-typewriter text-noir-text-dim text-xs tracking-wider uppercase block mb-2">
                <Icon name="Pen" size={12} className="inline mr-1" />
                Электронная подпись понятого *
              </label>
              <input
                type="text"
                value={formData.signature}
                onChange={(e) => handleChange('signature', e.target.value)}
                placeholder="Введите фамилию повторно"
                className="noir-input w-full rounded-sm"
              />
              {errors.signature && <p className="text-noir-red-bright text-xs mt-1 font-typewriter">{errors.signature}</p>}
              <p className="text-noir-text-dim/40 text-[10px] font-typewriter mt-1">
                Подпись подтверждает достоверность указанных сведений
              </p>
            </div>

            {submitError && (
              <div className="border border-noir-red-bright/30 bg-noir-red/10 rounded-sm p-3 text-center">
                <p className="font-typewriter text-noir-red-bright text-xs">{submitError}</p>
              </div>
            )}

            <div className="text-center pt-4">
              <button
                type="submit"
                className="stamp-button"
                disabled={submitting}
                style={{ opacity: submitting ? 0.6 : 1 }}
              >
                {submitting ? 'Отправка...' : 'Заверить подписью и печатью'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InterrogationForm;
