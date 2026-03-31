import Image from 'next/image'
import { SectionHeader } from '../SectionHeader'

export function Service() {
 

  return (
    <section id="areas" className="py-16 md:py-24 lg:py-28 xl:py-32 bg-gray-200 bg-[url(/assets/about.jpg)] bg-cover scroll-mt-24 animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl px-8 w-full flex flex-col items-center mx-auto">
        <SectionHeader
          label="Áreas de atuação"
          title=""
          description={
            <p className="text-sm md:text-base text-gray-700">
              Atuação institucional e coordenada em soluções técnicas, comunicação e suporte especializado.
            </p>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-1 gap-24">
          <div className="flex flex-col md:flex-row items-center gap-8 space-y-4 overflow-hidden">
            <div className="w-full md:w-1/2 rounded-md overflow-hidden text-3xl mb-2 flex items-center justify-center">
              <Image src="/assets/2.png" alt="Water Solutions" width={1200} height={800} className="w-full h-auto object-contain" sizes="(min-width:1024px) 50vw, 100vw" />
            </div>
            <div id="water-solutions" className="p-4">
                <h3 className="text-2xl uppercase mb-4 font-bold">
                  Water Solutions
                </h3>

                <p className='mb-4'>Abordagens para qualidade e gestão de água com foco em segurança e conformidade:</p>
                <ul className='space-y-4'>
                  <li><strong>Qualidade da água:</strong> avaliação e recomendações técnicas</li>
                  <li><strong>Higienização de reservatórios:</strong> práticas e protocolos</li>
                  <li><strong>Desinfecção portátil:</strong> soluções adequadas ao contexto</li>
                  <li><strong>Infraestrutura compacta:</strong> orientação técnica para ETAs modulares</li>
                </ul>

            </div>
          </div>


          <div className="flex flex-col-reverse md:flex-row items-center gap-8 space-y-4 overflow-hidden">
            
            <div id='solucoes-agricolas' className="p-4">
                <h3 className="text-2xl uppercase mb-4 font-bold">
                  Soluções Agrícolas
                </h3>

                <p className='mb-4'>Suporte técnico e disponibilidade coordenada para operações agrícolas:</p>
                <ul className='space-y-4'>
                  <li><strong>Fertilizantes e adubos:</strong> opções e orientações objetivas</li>
                  <li><strong>Produtos técnicos:</strong> recomendações adequadas ao contexto</li>
                  <li><strong>Montra de soluções:</strong> ligação entre necessidades e fornecedores</li>
                </ul>

            </div>

            <div className="relative w-full md:w-1/2 bg-primary rounded-md overflow-hidden text-3xl mb-2 aspect-[16/9]">
              <Image src="/assets/banner1.jpg" alt="Soluções Agrícolas" className="object-cover" fill sizes="(min-width:1024px) 50vw, 100vw" />
            </div>
          </div>


          <div  id='comunicacao-imagem' className="flex items-center flex-col md:flex-row  gap-8 space-y-4 overflow-hidden">
            <div className="relative w-full md:w-1/2 bg-primary rounded-md overflow-hidden text-3xl mb-2 aspect-[16/9]">
              <Image src="/assets/banner2.jpg" alt="Comunicação, Imagem & Gráfica" className="object-cover" fill sizes="(min-width:1024px) 50vw, 100vw" />
            </div>
            <div className="p-4">
                <h3 className="text-2xl uppercase mb-4 font-bold">
                  Comunicação, Imagem & Gráfica
                </h3>

                <p className='mb-4'>
                  Identidade e materiais gráficos com foco em clareza e consistência. Atuação com parceiros especializados ao longo de todo o ciclo de produção, garantindo qualidade e coerência visual.
                </p>
                

            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 space-y-4 overflow-hidden">
            <div className="relative w-full md:w-1/2 bg-primary rounded-md overflow-hidden text-3xl mb-2 aspect-[16/9]">
              <Image src="/assets/about.jpg" alt="Consultoria & Assessoria" className="object-cover" fill sizes="(min-width:1024px) 50vw, 100vw" />
            </div>
            <div id="consultoria" className="p-4">
                <h3 className="text-2xl uppercase mb-4 font-bold">
                  Consultoria &amp; Assessoria
                </h3>

                <p className='mb-4'>Orientação institucional, análise de necessidades e coordenação de iniciativas, com sobriedade e foco em execução responsável.</p>
                <ul className='space-y-4'>
                  <li><strong>Diagnóstico:</strong> leitura objetiva de contextos</li>
                  <li><strong>Coordenação:</strong> articulação entre stakeholders e fornecedores</li>
                  <li><strong>Conformidade:</strong> apoio a requisitos e boas práticas</li>
                </ul>

            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
