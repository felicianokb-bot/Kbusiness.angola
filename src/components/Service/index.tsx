import Image from 'next/image'
import { SectionHeader } from '../SectionHeader'

export function Service() {
 

  return (
    <section id="areas" className="py-16 md:py-24 lg:py-28 xl:py-32 bg-gray-200 scroll-mt-24 animate-in fade-in slide-in-from-bottom-10 duration-500">
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

          <div id="aprovisionamento-procurement" className="w-full bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-200">
            <h3 className="text-2xl md:text-3xl uppercase mb-3 font-bold">
              Servicos de Aprovisionamento &amp; Procurement
            </h3>
            <p className="text-base md:text-lg font-semibold mb-4">
              K Business - Solucoes Integradas
            </p>
            <p className="mb-6 text-gray-700">
              Na K Business, o aprovisionamento e encarado como uma funcao estrategica: nao apenas de compra, mas de criacao de valor,
              eficiencia operacional e otimizacao de custos. Apoiamos empresas na identificacao, aquisicao e gestao de bens e servicos,
              com acesso a uma rede global de fornecedores e parceiros.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="text-lg font-bold mb-3">Fornecimento Estrategico</h4>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>Levantamento e analise das necessidades operacionais</li>
                  <li>Identificacao e qualificacao de fornecedores nacionais e internacionais</li>
                  <li>Negociacao e otimizacao de condicoes comerciais</li>
                  <li>Definicao de estrategias de fornecimento ajustadas ao negocio</li>
                </ul>
                <p className="mt-3 text-sm font-semibold text-primary">
                  Solucoes eficientes e sustentaveis, orientadas para resultados concretos.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="text-lg font-bold mb-3">Procurement Global</h4>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>Pesquisa e sourcing internacional</li>
                  <li>Comparacao tecnica e economica de solucoes</li>
                  <li>Acesso a fabricantes e distribuidores globais</li>
                  <li>Mitigacao de riscos de fornecimento</li>
                </ul>
                <p className="mt-3 text-sm font-semibold text-primary">
                  Onde existir uma necessidade, encontramos a solucao.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="text-lg font-bold mb-3">Gestao da Cadeia de Abastecimento</h4>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>Planeamento e gestao de compras</li>
                  <li>Coordenacao logistica e transporte</li>
                  <li>Monitorizacao de prazos e performance</li>
                  <li>Definicao de indicadores de gestao (custo, servico e qualidade)</li>
                </ul>
                <p className="mt-3 text-sm font-semibold text-primary">
                  Transformamos a cadeia de abastecimento num fator de competitividade.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="text-lg font-bold mb-3">Consolidacao &amp; Central de Compras</h4>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>Consolidacao de multiplas necessidades num unico ponto</li>
                  <li>Reducao da complexidade operacional</li>
                  <li>Otimizacao de custos atraves de escala</li>
                  <li>Gestao integrada de fornecedores</li>
                </ul>
                <p className="mt-3 text-sm text-gray-700">
                  Categorias: equipamentos, materiais tecnicos, produtos operacionais e solucoes especificas por industria.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold mb-3">Abordagem K Business</h4>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>Diagnostico real das necessidades do cliente</li>
                  <li>Solucoes ajustadas ao contexto operacional</li>
                  <li>Rede de fornecedores validada</li>
                  <li>Execucao rapida e eficaz</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-3">Nosso Diferencial</h4>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>Capacidade de sourcing global</li>
                  <li>Experiencia em ambientes exigentes e complexos</li>
                  <li>Flexibilidade e adaptacao a diferentes setores</li>
                  <li>Foco em solucoes praticas e implementaveis</li>
                  <li>Orientacao total para resultados</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
