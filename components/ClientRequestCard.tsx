import { ChatBubbleOvalLeftIcon } from "@heroicons/react/20/solid";
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
      <div className="flex justify-between">
        <Link href="/chat">
          <Button>
            <ChatBubbleOvalLeftIcon width={16} /> &nbsp;Contact Provider
          </Button>
        </Link>
        {status === "pending" && (
          <p className="w-sm text-yellow-400 mr-4 pt-2">Pending</p>
        )}

        {status === "in_progress" && (
          <p className="w-sm text-green-400 mr-2">In progress</p>
        )}

        {status === "declined" && (
          <p className="w-sm text-orange-600 mr-2">Declined</p>
        )}

        {status === "canceled" && (
          <p className="w-sm text-orange-600 mr-2">Canceled</p>
        )}
      </div>
    </Card>
  );
}
