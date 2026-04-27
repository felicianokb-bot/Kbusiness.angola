 "use client"

import Image from "next/image"
import { partnersImages } from "@/data/partners"

export function PartnersLogos() {
  if (!partnersImages || partnersImages.length === 0) {
    return null
  }
  return (
    <section className="py-8 bg-white animate-in fade-in slide-in-from-bottom-10 duration-500 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {partnersImages.map((src) => (
            <div key={src} className="w-full h-40 sm:h-48 lg:h-56 flex items-center justify-center rounded-xl bg-gray-50">
              <Image src={src} alt="Parceiro" width={360} height={180} className="w-auto h-full object-contain p-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
