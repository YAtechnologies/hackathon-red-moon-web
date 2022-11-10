import Categories from '../components/Categories';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { Alert } from "flowbite-react";
import Featured from '../components/Featured';

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Categories></Categories>
      <Featured></Featured>
    </div>
  )
}