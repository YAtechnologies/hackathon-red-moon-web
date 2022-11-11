import { Button, Card } from "flowbite-react";
import Link from "next/link";

interface RequestTabsProps {
  status?: string;
}

export default function ClientRequestCard(props: RequestTabsProps) {
  const status = props.status ?? "pending";
  return (
    <Card className="mb-2">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Company Logo Design
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Hi I&rsquo;ma Ahmed I need a logo and a banner for my company
      </p>
      {status === "pending" && (
        <div className="flex justify-end">
          <p className="w-sm text-yellow-400 mr-2">Pending</p>
        </div>
      )}

      {status === "in_progress" && (
        <div className="flex justify-end">
          <p className="w-sm text-green-400 mr-2">In progress</p>
        </div>
      )}

      {status === "declined" && (
        <div className="flex justify-end">
          <p className="w-sm text-orange-600 mr-2">Declined</p>
        </div>
      )}

      {status === "canceled" && (
        <div className="flex justify-end">
          <p className="w-sm text-orange-600 mr-2">Canceled</p>
        </div>
      )}
    </Card>
  );
}
