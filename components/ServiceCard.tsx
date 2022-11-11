import { Button, Card } from "flowbite-react";
import Link from "next/link";

interface ServiceCardProps {
  service: any;
}
export default function ServiceCard(props: ServiceCardProps) {
  const service = props.service;
  return (
    <div className="max-w-sm">
      <Card imgSrc={service.image} className="featured-card">
        {/* <img src={service.image??''}></img> */}
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {service.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Link href={`/services/${service.id}`}>
          <Button>Edit</Button>
        </Link>
      </Card>
    </div>
  );
}
