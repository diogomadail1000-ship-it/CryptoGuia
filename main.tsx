import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import { AskGemini } from "./components/AskGemini";
import { CRYPTO_BASICS, POPULAR_COINS, GLOSSARY, SAFETY_TIPS } from "./constants";
import { ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white/70 font-sans selection:bg-[#00F0FF]/30">
      <Navbar />
      
      <main>
        <Hero />

        {/* AI Assistant Section */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto px-6">
            <AskGemini />
          </div>
        </section>

        {/* Basics Section */}
        <section id="sobre" className="py-32 border-b border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-4 mb-20">
              <p className="text-[#00F0FF] font-mono text-xs tracking-[0.4em] uppercase font-bold">// Fundamentos</p>
              <h2 className="text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
                A Base da <span className="text-transparent text-stroke-white">Revolução.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3">
              {CRYPTO_BASICS.map((item, idx) => (
                <Card 
                  key={idx}
                  index={idx}
                  title={item.title}
                  description={item.description}
                  className="border-r border-b md:border-b-0 border-white/5"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Popular Coins Section */}
        <section id="moedas" className="py-32 border-b border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-4 mb-20 text-right">
              <p className="text-[#00F0FF] font-mono text-xs tracking-[0.4em] uppercase font-bold">// Ativos Digitais</p>
              <h2 className="text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
                Principais <span className="text-transparent text-stroke-white">Protocolos.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3">
              {POPULAR_COINS.map((coin, idx) => (
                <Card 
                  key={idx}
                  title={`${coin.name} (${coin.symbol})`}
                  description={coin.description}
                  color={coin.color}
                  className="border-r border-b md:border-b-0 border-white/5"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section id="seguranca" className="py-32 border-b border-white/5">
          <div className="container mx-auto px-6">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="max-w-xl">
                  <p className="text-[#00F0FF] font-mono text-xs tracking-[0.4em] uppercase font-bold mb-6">// Proteção de Ativos</p>
                  <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-10 leading-none">
                    Segurança <br/> em Primeiro <br/> <span className="text-transparent text-stroke-white">Lugar.</span>
                  </h2>
                  <p className="text-xl text-white/40 leading-relaxed font-medium">
                    No mundo descentralizado, você é seu próprio banco. Seguir boas 
                    práticas não é opcional, é essencial para manter seu patrimônio.
                  </p>
                </div>

                <div className="space-y-4">
                  {SAFETY_TIPS.map((tip, idx) => (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      key={idx} 
                      className="group flex gap-6 p-8 bg-white/5 border border-white/10 hover:border-[#00F0FF]/50 transition-colors"
                    >
                      <span className="text-2xl font-black text-[#00F0FF]/30 group-hover:text-[#00F0FF] font-mono transition-colors">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <p className="text-white font-bold uppercase tracking-tight text-lg">{tip}</p>
                    </motion.div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* Glossary Section */}
        <section id="funciona" className="py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-4 mb-20 text-center">
              <p className="text-[#00F0FF] font-mono text-xs tracking-[0.4em] uppercase font-bold">// Terminologia</p>
              <h2 className="text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
                Dicionário <span className="text-transparent text-stroke-white">Cripto.</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 border-t border-l border-white/5">
              {GLOSSARY.map((item, idx) => (
                <div key={idx} className="p-8 border-r border-b border-white/5 hover:bg-[#00F0FF]/5 transition-colors group">
                  <span className="block text-[#00F0FF] font-black uppercase tracking-widest text-[10px] mb-3 opacity-50 group-hover:opacity-100 italic transition-opacity">
                    Termo
                  </span>
                  <span className="block text-white font-black uppercase text-xl mb-3 tracking-tighter">{item.term}</span>
                  <p className="text-sm text-white/30 font-medium leading-snug">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-2xl font-black tracking-tighter uppercase">
            Cripto<span className="text-[#00F0FF]">Guia</span>
          </div>
          
          <div className="flex gap-12 font-mono text-[10px] tracking-[0.2em] uppercase text-white/30">
            <div className="flex flex-col">
              <span className="mb-1">Bitcoin price</span>
              <span className="text-white font-bold opacity-100">$64,281.40 <span className="text-[#00F0FF] ml-1">+2.4%</span></span>
            </div>
            <div className="flex flex-col">
              <span className="mb-1">Ethereum price</span>
              <span className="text-white font-bold opacity-100">$3,492.15 <span className="text-[#00F0FF] ml-1">+1.8%</span></span>
            </div>
          </div>

          <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest italic">
            © 2026 CRIPTO GUIA ACADEMY
          </p>
        </div>
      </footer>
    </div>
  );
}
