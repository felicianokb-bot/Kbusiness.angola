
export async function OurNumberSection() {
  const numbers = [
    {name: "Projectos", value: 200},
    {name: "Clientes", value: 200},
    {name: "Premios", value: 200},
    {name: "Clientes satisfeitos", value: 200},
  ]

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-100 relative animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl px-8 py-16 md:py-20 z-10 relative mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {numbers?.map((number) => {
          return (
            <div
              key={number.name}
              className="flex flex-col items-center justify-start"
            >
              <div>
                <h3 className="text-5xl md:text-6xl text-primary">
                  {number.value}+
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
