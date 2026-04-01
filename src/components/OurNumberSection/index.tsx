
import { useState, useEffect, useRef } from 'react'

export function OurNumberSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const numbers = [
    {name: "Projectos", value: 200},
    {name: "Clientes", value: 200},
    {name: "Premios", value: 200},
    {name: "Clientes satisfeitos", value: 200},
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          numbers.forEach((number, index) => {
            let start = 0
            const end = number.value
            const duration = 2000 // 2 segundos
            const increment = end / (duration / 16) // 60fps

            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                start = end
                clearInterval(timer)
              }
              setCounts(prev => {
                const newCounts = [...prev]
                newCounts[index] = Math.floor(start)
                return newCounts
              })
            }, 16)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="w-full bg-gradient-to-b from-white to-gray-100 relative animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl px-8 py-16 md:py-20 z-10 relative mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {numbers?.map((number, index) => {
          return (
            <div
              key={number.name}
              className="flex flex-col items-center justify-start"
            >
              <div>
                <h3 className="text-5xl md:text-6xl text-primary">
                  {counts[index]}+
                </h3>
                <p className="font-2xl text-gray-700 mt-4 text-center">
                  {number.name}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
