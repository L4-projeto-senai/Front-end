import React from 'react';

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-white">
      {/* Container Principal com largura máxima e centralização */}
      <div className="mx-auto max-w-4xl text-center space-y-8">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
          Next.js + React Bits
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          Construindo interfaces com <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
            Backgrounds Interativos
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mx-auto max-w-2xl text-lg text-slate-400 sm:text-xl">
          Esta tela está utilizando o efeito Micro Slats diretamente da camada global de layout, mantendo a performance e permitindo interatividade total.
        </p>

        {/* Botões de Ação (CTAs) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="w-full sm:w-auto rounded-xl bg-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:bg-purple-500 hover:shadow-purple-500/40 active:scale-95">
            Começar Agora
          </button>
          
          <button className="w-full sm:w-auto rounded-xl border border-slate-800 bg-slate-900/40 px-8 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all hover:bg-slate-800/60 active:scale-95">
            Ver Documentação
          </button>
        </div>

        {/* Card em Vidro (Glassmorphism) para destacar conteúdo sem cobrir o fundo */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-8">
          {[
            { title: 'Full Canvas', desc: 'Renderizado via WebGL cobrindo 100% da viewport.' },
            { title: 'Sem Blockers', desc: 'Classes pointer-events-none garantem clique nos elementos.' },
            { title: 'Global Layout', desc: 'Permanece ativo sem recarregar ao trocar de rota.' },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-md transition-all hover:border-purple-500/30 hover:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}