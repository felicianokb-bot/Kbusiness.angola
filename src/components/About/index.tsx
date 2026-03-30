import { EyeIcon, FlagIcon, GoalIcon } from 'lucide-react'
import Image from 'next/image'
import { SectionHeader } from '../SectionHeader'

export function AboutSection() {
  return (
    <section
      id="quem-somos"
      className=" pb-8 dark:bg-dark-2 scroll-mt-24 animate-in fade-in slide-in-from-bottom-10 duration-500"
    >

      <div className="max-w-7xl mx-auto px-8 py-16 sm:py-24 md:py-28 xl:py-32">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="flex flex-col md:flex-row md:h-auto lg:h-[680px] gap-8 items-center">
            
            
            <div className='relative w-full md:w-1/2 h-full rounded-md overflow-hidden'>
                <Image src="/assets/about1.png" className='object-cover' alt="Equipa da KBusiness" fill sizes="(min-width:768px) 50vw, 100vw" />
            </div>

            <div className="w-full md:px-4 md:w-1/2">
              <SectionHeader
                label="Quem Somos"
                title="KBusiness"
                align="left"
                description={
                  <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
                    A KBusiness é uma empresa angolana de soluções integradas, com atuação em áreas estratégicas como água, consultoria, comunicação institucional e fornecimento técnico especializado. Ao longo do seu percurso, a KBusiness evoluiu de fornecedora técnica para parceira estratégica, apoiando instituições públicas e privadas na análise de desafios, organização e processos de implementação de soluções adequadas à realidade local.
                    <br /><br />
                    A nossa abordagem assenta no conhecimento do terreno, no rigor técnico e na coordenação eficiente de soluções, próprias ou desenvolvidas em parceria, com foco na sustentabilidade, eficiência e impacto real.
                  </p>
                }
              />

              <div className='space-y-4'>
                <div className='flex flex-col md:flex-row gap-8'>
                  <div className='w-14 flex items-center justify-center flex-none h-14 rounded-md bg-primary'>
                    <EyeIcon className='text-white' size={32} />
                  </div>

                  <div className='space-y-2'>
                    <h3 className='font-bold text-2xl uppercase'>Missão</h3>
                    <p>Conectar necessidades a soluções de forma objetiva e coordenada, com ética, rigor técnico e foco no impacto positivo.</p>
                  </div>
                </div>

                
              <div className='flex flex-col md:flex-row gap-8'>
                <div className='w-14 flex items-center justify-center flex-none h-14 rounded-md bg-primary'>
                  <GoalIcon className='text-white' size={32} />
                </div>

                <div className='space-y-2'>
                  <h3 className='font-bold text-2xl uppercase'>Visão</h3>
                  <p>Ser referência em confiança, sobriedade e coordenação institucional, com atuação responsável nas áreas em que operamos.</p>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-8'>
                <div className='w-14 flex items-center justify-center flex-none h-14 rounded-md bg-primary'>
                  <FlagIcon className='text-white' size={32} />
                </div>

                <div className='space-y-2'>
                  <h3 className='font-bold text-2xl uppercase'>Valores</h3>
                  <p>Sobriedade, responsabilidade, ética e transparência, coordenação e parcerias consistentes.</p>
                </div>
              </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
