import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-6 mb-12">
            <p className="text-[#00F0FF] font-mono text-xs md:text-sm tracking-[0.4em] uppercase font-bold">
              // Guia Definitivo 2026
            </p>
            <h1 className="text-6xl sm:text-8xl md:text-[140px] leading-[0.8] font-black italic uppercase tracking-tighter">
              O Dinheiro <br/> 
              <span className="text-transparent text-stroke-white block mt-2">
                Reinventado.
              </span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed font-medium">
              Descubra como a tecnologia blockchain está transformando a economia global, 
              devolvendo o controle financeiro para as pessoas de forma transparente e segura.
            </p>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <a 
                href="#moedas" 
                className="px-10 py-5 bg-[#00F0FF] text-black font-black text-xs uppercase rounded-full hover:scale-105 transition-all text-center whitespace-nowrap"
              >
                Ecossistema
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
