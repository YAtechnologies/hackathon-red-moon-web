import { BeakerIcon, BuildingLibraryIcon, ComputerDesktopIcon, CursorArrowRaysIcon, LanguageIcon, PaintBrushIcon, PencilIcon, PhotoIcon, PlusCircleIcon, PresentationChartLineIcon, ScaleIcon, SwatchIcon, TruckIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: 'Training',
    href: '/category/training',
    color: 'Black',
    icon: BuildingLibraryIcon
  },
  {
    id: 1,
    name: 'Writing & Translation',
    href: '/category/writing-translation',
    color: 'Black',
    icon: LanguageIcon
  },
  {
    id: 1,
    name: 'Digital Marketing',
    href: '/category/digital-marketing',
    color: 'Black',
    icon: CursorArrowRaysIcon
  },
  {
    id: 1,
    name: 'Health',
    href: '/category/health',
    color: 'Black',
    icon: PlusCircleIcon
  },
  {
    id: 1,
    name: 'Content Creation',
    href: '/category/content-creation',
    color: 'Black',
    icon: SwatchIcon
  },
  {
    id: 1,
    name: 'Local & Artisanal Products',
    href: '/category/local-artisanal-products',
    color: 'Black',
    icon: PhotoIcon
  },
  {
    id: 1,
    name: 'Finance',
    href: '/category/finance',
    color: 'Black',
    icon: PresentationChartLineIcon
  },
  {
    id: 1,
    name: 'Legal',
    href: '/category/legal',
    color: 'Black',
    icon: ScaleIcon
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
          {categories.map((category) => (
            <Link href={category.href} key={category.id}>
            <div key={category.id} className="group relative flex flex-col justify-center items-center rounded-lg hover:bg-sky-100 py-2 ">
              <div className="flex justify-center">
                <category.icon className="h-16 w-16" aria-hidden="true" ></category.icon>
              </div>
              <div className="mt-2">
                <span className="text-lg font-semibold">
                  {category.name}
                </span>
                </div>
            </div>
            </Link>
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
