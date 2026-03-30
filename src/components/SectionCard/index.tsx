import { cn } from "@/lib/utils"
import React from "react"
import Image from "next/image"

interface SectionCardProps {
  title: string
  description: React.ReactNode
  image: string
  className?: string
}

export function SectionCard({ title, description, image, className }: SectionCardProps) {
  return (
    <div className={cn("group relative h-80 md:h-96 w-full overflow-hidden rounded-xl shadow-lg", className)}>
      {/* Background Image */}
      <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
      
      {/* Static Title Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-end p-6">
        <h4 className="font-bold text-2xl text-white transition-opacity duration-300 group-hover:opacity-0">{title}</h4>
      </div>

      {/* Hover Slide-up Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-primary/90 p-6 text-white transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
        <h4 className="font-bold text-2xl mb-2">{title}</h4>
        <div className="text-white/90 text-sm mb-4">{description}</div>
        <p className="font-bold text-white border-b-2 border-white inline-block">Saiba mais</p>
      </div>
    </div>
  )
}
