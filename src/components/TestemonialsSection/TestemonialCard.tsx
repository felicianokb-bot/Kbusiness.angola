'use client'

import clsx from 'clsx'
import Image from 'next/image'

interface TestemonialCardProps {
  testemonial: {
    id: number,
    name: string,
    role: string,
    description: string,
    image: string,
  },
}

export function TestemonialCard({ testemonial }: TestemonialCardProps) {
  return (
    <div
      className={clsx(
        'w-full max-w-[982px] bg-[url(/assets/contact.png)] p-4 gap-8 sm:gap-4  group  rounded-2xl flex flex-col md:flex-row items-center justify-center',
      )}
    > 
      <div className='w-full'>
        <div className='bg-white border flex flex-col justify-between shadow-lg px-8 md:px-10 lg:px-10 py-8 sm:py-10 rounded-2xl'>
          <div className='space-y-2'>
            <Image src="/assets/virgula.svg" alt="virgulas" width={55} height={54} />
            <p
              className={clsx(
                'line-clamp-5 text-gray-600  sm:text-lg lg:text-xl mb-10',
              )}
            >
              {testemonial.description}
            </p>
          </div>


          <div>
          <hr className='mb-8' />
            <h4 className={clsx('font-bold text-lg md:text-2xl')}>
              {testemonial.name}
            </h4>
            <p className="text-sm sm:text-base text-gray-500">
              {' '}
              {testemonial.role}{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[366px] h-80 md:h-96 hidden md:block overflow-hidden rounded-2xl flex-shrink-0">
        <Image
          src={String(testemonial.image)}
          alt="Icon"
          className="w-full h-full object-cover"
          width={1100}
          height={1100}
        />
      </div>
    </div>
  )
}
