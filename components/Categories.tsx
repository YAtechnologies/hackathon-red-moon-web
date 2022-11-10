import { BuildingLibraryIcon, ComputerDesktopIcon, CursorArrowRaysIcon, PaintBrushIcon, PencilIcon, PresentationChartLineIcon, SwatchIcon, TruckIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"

const services = [
  {
    id: 1,
    name: 'Formations',
    href: '#',
    color: 'Black',
    icon: BuildingLibraryIcon
  },
  {
    id: 1,
    name: 'IT',
    href: '#',
    color: 'Black',
    icon: ComputerDesktopIcon
  },
  {
    id: 1,
    name: 'Publicité',
    href: '#',
    color: 'Black',
    icon: CursorArrowRaysIcon
  },
  {
    id: 1,
    name: 'Santé',
    href: '#',
    color: 'Black',
    icon: TruckIcon
  },
  {
    id: 1,
    name: 'Décoration',
    href: '#',
    color: 'Black',
    icon: SwatchIcon
  },
  {
    id: 1,
    name: 'Design',
    href: '#',
    color: 'Black',
    icon: PaintBrushIcon
  },
  {
    id: 1,
    name: 'Réparation',
    href: '#',
    color: 'Black',
    icon: WrenchScrewdriverIcon
  },
  {
    id: 1,
    name: 'Finance',
    href: '#',
    color: 'Black',
    icon: PresentationChartLineIcon
  },
]
export default function Categories() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Need a service?</span>
          <span className="block text-indigo-600">We&rsquo;ll find a professional for you.</span>
        </h2>
      </div>
      <div className="mx-auto max-w-2xl pb-6 sm:px-6 lg:max-w-7xl lg:px-4">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {services.map((service) => (
            <div key={service.id} className="group relative flex flex-col justify-center items-center rounded-lg hover:bg-sky-100 ">
              <div className="flex justify-center">
                <service.icon className="h-24 w-24" aria-hidden="true" ></service.icon>
              </div>
              <div className="mt-2">
                <span className="text-lg font-semibold">
                  {service.name}
                </span>
                </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


export function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        
      </div>
    </div>
  )
}
