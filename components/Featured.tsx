import { BuildingLibraryIcon, ComputerDesktopIcon, CursorArrowRaysIcon, PaintBrushIcon, PencilIcon, PresentationChartLineIcon, SwatchIcon, TruckIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
import { Button, Card } from "flowbite-react"

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
export default function Featured() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Featured Services?</span>
        </h2>
      </div>
      <div className="mx-auto max-w-2xl pb-6 sm:px-6 lg:max-w-7xl lg:px-4">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {services.map((service, index) => (
            <div  key={index} className="max-w-sm">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Web site developement
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
              <Button>View more</Button>
            </Card>
          </div>
          ))}
        </div>
        </div>
    </div>
  )
}
