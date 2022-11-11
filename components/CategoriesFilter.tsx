import { Button } from "flowbite-react";
import { useState } from "react";

const subCategories = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 1,
    name: "Video Editing",
  },
  {
    id: 2,
    name: "Composing and Soundtracks",
  },
  {
    id: 3,
    name: "Voice Over",
  },
  {
    id: 4,
    name: "Visual Effects and Animations",
  },
  {
    id: 5,
    name: "Infographic Design",
  },
  {
    id: 6,
    name: "Logo Design",
  },
  {
    id: 7,
    name: "Social Media Design & Web Banners",
  },
];

export default function CategoriesFilter() {
  const [selected, setSelected] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(parseInt(event.target.value));
  };
  return (
    <>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Sub-Categories Filter
      </h3>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {subCategories.map((subCategory) => (
          <li
            key={subCategory.id}
            className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
          >
            <div className="flex items-center pl-3">
              <input
                id="list-radio-license"
                type="radio"
                value={subCategory.id}
                name="list-radio"
                checked={selected === subCategory.id}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="list-radio-license"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {subCategory.name}{" "}
              </label>
            </div>
          </li>
        ))}
      </ul>
      <Button className="mt-2 w-full">Apply</Button>
    </>
  );
}
