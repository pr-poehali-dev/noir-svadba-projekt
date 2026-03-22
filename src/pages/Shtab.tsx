import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import funcUrls from '../../backend/func2url.json';

interface RsvpResponse {
  id: number;
  fullName: string;
  phone: string;
  persons: number;
  attendance: string;
  wishes: string;
  signature: string;
  createdAt: string;
}

const Shtab = () => {
  const [responses, setResponses] = useState<RsvpResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(funcUrls.rsvp)
      .then(res => res.json())
      .then(data => {
        setResponses(data.responses || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Не удалось загрузить данные');
        setLoading(false);
      });
  }, []);

  const attending = responses.filter(r => r.attendance === 'yes');
  const declined = responses.filter(r => r.attendance === 'no');
  const totalPersons = attending.reduce((sum, r) => sum + r.persons, 0);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-noir-dark">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <p className="font-typewriter text-noir-red-bright text-xs tracking-[5px] uppercase mb-3">
            Доступ ограничен
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-noir-text mb-2">
            ОПЕРАТИВНЫЙ ШТАБ
          </h1>
          <p className="font-typewriter text-noir-text-dim text-sm">
            Сводка по явке свидетелей — Дело № 13.06.2026
          </p>
          <div className="w-24 h-[2px] bg-noir-red/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="border border-noir-text-dim/15 rounded-sm p-4 bg-noir-navy/30 text-center">
            <p className="font-heading text-3xl font-bold text-noir-text">{responses.length}</p>
            <p className="font-typewriter text-noir-text-dim text-[10px] tracking-wider uppercase mt-1">Всего ответов</p>
          </div>
          <div className="border border-noir-text-dim/15 rounded-sm p-4 bg-noir-navy/30 text-center">
            <p className="font-heading text-3xl font-bold text-green-500">{attending.length}</p>
            <p className="font-typewriter text-noir-text-dim text-[10px] tracking-wider uppercase mt-1">Подтвердили</p>
          </div>
          <div className="border border-noir-text-dim/15 rounded-sm p-4 bg-noir-navy/30 text-center">
            <p className="font-heading text-3xl font-bold text-noir-red-bright">{declined.length}</p>
            <p className="font-typewriter text-noir-text-dim text-[10px] tracking-wider uppercase mt-1">Отказались</p>
          </div>
          <div className="border border-noir-text-dim/15 rounded-sm p-4 bg-noir-navy/30 text-center">
            <p className="font-heading text-3xl font-bold text-noir-gold">{totalPersons}</p>
            <p className="font-typewriter text-noir-text-dim text-[10px] tracking-wider uppercase mt-1">Всего гостей</p>
          </div>
        </div>

        {loading && (
          <div className="text-center py-20">
            <p className="font-typewriter text-noir-text-dim text-sm animate-pulse">Загрузка дела...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="font-typewriter text-noir-red-bright text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && responses.length === 0 && (
          <div className="text-center py-20 border border-dashed border-noir-text-dim/15 rounded-sm">
            <Icon name="FileQuestion" size={48} className="mx-auto mb-4 text-noir-text-dim/30" />
            <p className="font-typewriter text-noir-text-dim text-sm">Показаний пока не поступало</p>
          </div>
        )}

        {!loading && attending.length > 0 && (
          <div className="mb-10">
            <h2 className="font-typewriter text-green-500 text-xs tracking-[3px] uppercase mb-4 flex items-center gap-2">
              <Icon name="CheckCircle" size={14} />
              Явка подтверждена ({attending.length})
            </h2>
            <div className="space-y-3">
              {attending.map(r => (
                <div key={r.id} className="border border-noir-text-dim/15 rounded-sm p-4 sm:p-5 bg-noir-navy/20">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <Icon name="User" size={16} className="text-noir-gold/50" />
                      <span className="font-heading text-lg font-bold text-noir-text">{r.fullName}</span>
                      <span className="font-mono text-noir-gold text-sm">{r.persons} чел.</span>
                    </div>
                    <div className="flex items-center gap-3 text-noir-text-dim">
                      <a href={`tel:${r.phone}`} className="font-mono text-xs hover:text-noir-gold transition-colors">{r.phone}</a>
                      <span className="font-mono text-[10px] opacity-50">{formatDate(r.createdAt)}</span>
                    </div>
                  </div>
                  {r.wishes && (
                    <p className="font-mono text-noir-text/60 text-xs mt-2 pl-7 italic">«{r.wishes}»</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && declined.length > 0 && (
          <div>
            <h2 className="font-typewriter text-noir-red-bright text-xs tracking-[3px] uppercase mb-4 flex items-center gap-2">
              <Icon name="XCircle" size={14} />
              Не смогут явиться ({declined.length})
            </h2>
            <div className="space-y-3">
              {declined.map(r => (
                <div key={r.id} className="border border-noir-text-dim/10 rounded-sm p-4 bg-noir-navy/10 opacity-60">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <Icon name="User" size={16} className="text-noir-text-dim/30" />
                      <span className="font-heading text-base text-noir-text-dim">{r.fullName}</span>
                    </div>
                    <span className="font-mono text-noir-text-dim text-[10px]">{formatDate(r.createdAt)}</span>
                  </div>
                  {r.wishes && (
                    <p className="font-mono text-noir-text-dim/50 text-xs mt-2 pl-7 italic">«{r.wishes}»</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-16">
          <p className="font-typewriter text-noir-text-dim/20 text-[10px]">
            Оперативный штаб | Дело № 13.06.2026 | Доступ: только для следователя
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shtab;
