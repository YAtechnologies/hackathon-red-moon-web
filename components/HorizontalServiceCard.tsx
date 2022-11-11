import Link from "next/link";

interface HorizontalServiceCardProps {
  service: any;
}
export default function HorizontalServiceCard(
  props: HorizontalServiceCardProps
) {
  return (
    <Link
      href="/services/1"
      className="flex flex-col mb-4 items-start bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full h-48 rounded-t-lg  md:w-48 md:rounded-none md:rounded-l-lg"
        src={props.service.image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.service.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </Link>
  );
}
