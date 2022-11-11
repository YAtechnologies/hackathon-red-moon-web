import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, Card } from "flowbite-react";
import Link from "next/link";
import ClientRequestCard from "../components/ClientRequestCard";
import Header from "../components/Header";
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
            <h3 className="taxt-md font-bold">John Wick</h3>
            <ul>
              <li>
                <PencilSquareIcon width={16} style={{ display: "inline" }} />{" "}
                +21355 55 55 55
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
          <h3 className="text-lg font-semibold mb-2">Requests</h3>
          <ClientRequestCard status="pending" />
          <ClientRequestCard status="in_progress" />
          <ClientRequestCard status="in_progress" />
          <ClientRequestCard status="declined" />
          <ClientRequestCard status="canceled" />
        </div>
      </div>
    </div>
  );
}
