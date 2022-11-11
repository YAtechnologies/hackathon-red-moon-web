import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TextInput } from "flowbite-react";
import CategoriesFilter from "../../components/CategoriesFilter";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HorizontalServiceCard from "../../components/HorizontalServiceCard";
import services from "../../utils/data/services";

export default function CategoryListingPage() {
  return (
    <div>
      <Header></Header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-6">
        <h1 className="text-xl font-semibold mb-2">Content Creation</h1>
        <p className="mb-8">
          Content creation is the single most time-consuming responsibility for
          today&rsquo;s content marketers. When you break down our day-to-day
          workflow, creating great content is our chief responsibility, and the
          best way for us to engage with our audience and influence revenue. Not
          to mention that&rsquo;s how we earn our keep.
        </p>
        <hr className="my-6" />
        <div className="flex">
          <div className="filters mr-">
            <CategoriesFilter></CategoriesFilter>
          </div>
          <div className="list ml-10 flex-grow">
            <TextInput
              placeholder="Search"
              className="mb-6"
              icon={MagnifyingGlassIcon}
            ></TextInput>
            {services.map((service) => (
              <HorizontalServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
