'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { TestemonialCard } from './TestemonialCard'

import { testemonialsArray } from './serviceData'

export function TestemonialSection() {

  return (
    <section id='testemunhos' className="w-full py-20 sm:py-24 md:py-32 bg-white animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl px-8 mx-auto flex flex-col items-center gap-14">
        <div className='flex flex-col items-center'>
          <h3 className="text-white text-lg mb-8 bg-primary w-40 text-center uppercase">
            Testemunhos
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Nossos clientes falam
          </h2>
          <p className="max-w-[720px] text-sm md:text-base text-gray-700 text-center">
            Conheça os testemunhos de alunos que passaram pela Casa da Música de
            Benguela e descubra o impacto real da nossa missão.
          </p>
        </div>
      </div>

      <div className="max-w-7xl px-8 mx-auto mt-10 ">
        <Carousel
          plugins={[
            Autoplay({
                delay: 3000
            })
            ]}
            opts={{
                loop: true
            }}
        >
          <CarouselContent className="py-10">
            {testemonialsArray.map((testemonial) => {
              return (
                <CarouselItem
                  key={testemonial.id}
                  className="flex items-center justify-center"
                >
                  <TestemonialCard testemonial={testemonial} />
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
