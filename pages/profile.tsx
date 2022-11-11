import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, Card } from "flowbite-react";
import Link from "next/link";
import Header from "../components/Header";
import RequestTabs from "../components/profile/RequestTabs";
import RequestCard from "../components/RequestCard";

const service = {
  id: 1,
  name: "E-commerce Website developement",
  href: "#",
  image:
    "https://cdn.shopify.com/s/files/1/0070/7032/files/ecommerce_website_development.jpg?v=1651557398&width=1024",
  author: "Amine Chikh",
};

export default function Profile() {
  return (
    <div>
      <Header></Header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex">
          <div className="profile grow-0 min-w-[400px] p-6 shadow-md rounded-lg m-4">
            <h2 className="text-lg font-semibold">Profile</h2>
            <div className="w-0 pl-8 my-4">
              <Avatar size={"lg"}></Avatar>
            </div>
            <h3 className="taxt-md font-bold">John Snow</h3>
            <ul>
              <li>
                <PencilSquareIcon width={16} style={{ display: "inline" }} />{" "}
                Front end developer
              </li>
              <li>
                <PencilSquareIcon width={16} style={{ display: "inline" }} />{" "}
                Algiers, Algeria
              </li>
            </ul>
          </div>
          <div className="general-information grow min-w-[400px] p-6  shadow-md rounded-lg m-4">
            <h2 className="text-lg font-semibold">General Information</h2>
            <div className="mt-4">
              <dt className="font-semibold mb-2">About me</dt>
              <dd>
                Tincidunt quam neque in cursus viverra orci, dapibus nec
                tristique. Nullam ut sit dolor consectetur urna, dui cras nec
                sed. Cursus risus congue arcu aenean posuere aliquam. Et vivamus
                lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac
                mauris amet. Urna, sem pretium sit pretium urna, senectus vitae.
                Scelerisque fermentum, cursus felis dui suspendisse velit
                pharetra. Augue et duis cursus maecenas eget quam lectus.
                Accumsan vitae nascetur pharetra rhoncus praesent dictum risus
                suspendisse.
              </dd>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-lg m-4 p-6">
          <h3 className="text-lg font-semibold">Services</h3>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <div className="max-w-sm">
              <Card imgSrc={service.image} className="featured-card">
                {/* <img src={service.image??''}></img> */}
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {service.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Link href={`/services/${service.id}`}>
                  <Button>Edit</Button>
                </Link>
              </Card>
            </div>
            <div className="max-w-sm">
              <Card imgSrc={service.image} className="featured-card">
                {/* <img src={service.image??''}></img> */}
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {service.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Link href={`/services/${service.id}`}>
                  <Button>Edit</Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-lg m-4 p-6">
          <h3 className="text-lg font-semibold mb-2">Requests</h3>
          <RequestCard />
          <RequestTabs />
        </div>
      </div>
    </div>
  );
}
