import React from 'react';
import ReactCountdown from 'react-countdown';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const renderer = ({ days, hours, minutes, seconds }: any) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {[
        { value: days, label: 'Dias' },
        { value: hours, label: 'Horas' },
        { value: minutes, label: 'Minutos' },
        { value: seconds, label: 'Segundos' }
      ].map((item, index) => (
        <div key={index} className="card p-6 md:p-8 text-center animate-slide-up"
             style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="text-5xl md:text-6xl font-serif text-sky-400 mb-2">
            {String(item.value).padStart(2, '0')}
          </div>
          <div className="text-neutral-600 text-sm tracking-wider uppercase">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contagem Regressiva</h2>
        <ReactCountdown date={new Date(targetDate)} renderer={renderer} />
      </div>
    </section>
  );
};

export default Countdown;