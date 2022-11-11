import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TextInput } from "flowbite-react";
import CategoriesFilter from "../../components/CategoriesFilter";
import Header from "../../components/Header";
import HorizontalServiceCard from "../../components/HorizontalServiceCard";

export default function CategoryListingPage() {
  return (
    <div>
      <Header></Header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-6">
      <h1 className="text-xl font-semibold mb-8">Category: Content Creation</h1>
      <div className="flex">
        <div className="filters mr-">
          <CategoriesFilter></CategoriesFilter>
        </div>
        <div className="list ml-10 flex-grow">
          <TextInput placeholder="Search"className="mb-6" icon={MagnifyingGlassIcon}></TextInput>
          <HorizontalServiceCard />
          <HorizontalServiceCard />
          <HorizontalServiceCard />
          <HorizontalServiceCard />
          <HorizontalServiceCard />
          <HorizontalServiceCard />
        </div>
      </div>
      </div>
    </div>
  )
}