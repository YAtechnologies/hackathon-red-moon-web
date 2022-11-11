import {
  BuildingLibraryIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  PaintBrushIcon,
  PencilIcon,
  PresentationChartLineIcon,
  SwatchIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { Button, Card } from "flowbite-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    name: "E-commerce Website developement",
    href: "#",
    image:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/ecommerce_website_development.jpg?v=1651557398&width=1024",
    author: "Amine Chikh",
  },
  {
    id: 2,
    name: "Professional Logo Design",
    href: "#",
    image:
      "https://image.winudf.com/v2/image1/Y29tLmlmb2N1c2FwcHMubG9nb21ha2VyX3NjcmVlbl8wXzE1NDExODQzNzFfMDE1/screen-0.jpg?fakeurl=1&type=.webp",
    author: "Mehdi Zerrouki",
  },
  {
    id: 2,
    name: "Social Media Management",
    href: "#",
    image:
      "https://www.airwebsolutions.com/wp-content/uploads/2020/07/social-media-management.png",
    author: "Ilham Mess",
  },
  {
    id: 2,
    name: "Business Analyst",
    href: "#",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Who_is_a_Business_Data_Analyst.jpg",
    author: "Ghiles Meriche",
  },
  {
    id: 2,
    name: "Content Writer",
    href: "#",
    image:
      "https://www.joshtalks.com/joshkosh/wp-content/uploads/2018/12/Content-writer-1068x561.jpg",
    author: "Imene Kerdel",
  },
  {
    id: 2,
    name: "Private English Teacher",
    href: "#",
    image:
      "https://www.areadne.eu/wp-content/uploads/2020/06/english_learn_logo-750x350.jpg",
    author: "Lyna Mahdjoub",
  },
  {
    id: 2,
    name: "Accountant",
    href: "#",
    image:
      "https://www.careeraddict.com/uploads/article/58250/illustration-accountant.jpg",
    author: "Hani Cherif",
  },
  {
    id: 2,
    name: "Digital Marketing Manager",
    href: "#",
    image: "https://course-net.com/blog/wp-content/uploads/2022/09/7.jpeg",
    author: "Lynda Fadel",
  },
];
export default function Featured() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Featured Services?</span>
        </h2>
      </div>
      <div className="mx-auto max-w-2xl pb-6 sm:px-6 lg:max-w-7xl lg:px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {services.map((service, index) => (
            <div key={index} className="max-w-sm">
              <Card imgSrc={service.image} className="featured-card">
                {/* <img src={service.image??''}></img> */}
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {service.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Link href={`/services/${service.id}`}>
                  <Button>View more</Button>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
