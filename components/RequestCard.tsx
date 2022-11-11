import { ChatBubbleOvalLeftIcon } from "@heroicons/react/20/solid";
import { Button, Card } from "flowbite-react";
import Link from "next/link";

interface RequestTabsProps {
  status?: string;
}

export default function RequestCard(props: RequestTabsProps) {
  const status = props.status ?? "pending";
  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Company Logo Design
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Hi I&rsquo;ma Ahmed I need a logo and a banner for my company
      </p>
      <div className="flex justify-between">
        <Link href="/chat">
          <Button>
            <ChatBubbleOvalLeftIcon width={16} /> &nbsp;Contact Client
          </Button>
        </Link>
        {status === "pending" && (
          <div className="flex">
            <Button color="failure" className="w-sm bg-red-400 mr-2">
              Decline
            </Button>
            <Link href={"/requests/1/process"}>
              <Button className="w-sm">
                Proceed
                <svg
                  className="ml-2 -mr-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        )}

        {status === "in_progress" && (
          <div className="flex">
            <Button color="failure" className="w-sm bg-red-400 mr-2">
              Cancel
            </Button>
            <Link href={"/requests/1/process"}>
              <Button className="w-sm">
                Mark as done
                <svg
                  className="ml-2 -mr-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        )}

        {status === "done" && <p className="w-sm text-green-400 mr-2">Done</p>}
        {status === "declined" && (
          <p className="w-sm text-gray-400 mr-2">Declined</p>
        )}
      </div>
    </Card>
  );
}
