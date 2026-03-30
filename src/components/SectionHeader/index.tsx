import { cn } from "@/lib/utils"
import React from "react"

interface SectionHeaderProps {
  label: string
  title: string
  description?: React.ReactNode
  align?: "left" | "center"
  className?: string
  descriptionClassName?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-12",
        align === "left" ? "items-start text-left" : "items-center text-center",
        className
      )}
    >
      <h3 className="text-white text-lg mb-8 bg-primary px-4 py-1 inline-block uppercase">
        {label}
      </h3>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
      {description ? (
        <div
          className={cn(
            "max-w-[720px]",
            align === "left" ? "" : "mx-auto",
            descriptionClassName
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  )
}
