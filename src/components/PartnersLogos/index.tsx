 "use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { partnersImages } from "@/data/partners"

export function PartnersLogos() {
  if (!partnersImages || partnersImages.length === 0) {
    return null
  }
  return (
    <section className="py-8 bg-white animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl mx-auto px-8">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2500
            })
          ]}
          opts={{ loop: true }}
        >
          <CarouselContent className="items-center">
            {partnersImages.map((src) => (
              <CarouselItem key={src} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 p-4">
                <div className="w-full h-20 flex items-center justify-center">
                  <Image src={src} alt="Parceiro" width={160} height={80} className="w-auto h-full object-contain" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
