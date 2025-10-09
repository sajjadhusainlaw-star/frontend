// app/page.tsx OR pages/index.tsx
import Image from "next/image";
import NewsCard from "@/components/ui/NewsCard";
import logo from "../../public/logo.svg";
import { Hero } from "@/components/home/Hero";
import Stores from "@/components/home/Stores";
import CategorySection from "@/components/home/CategorySection";

export default function Home() {
  return (<>
   <Hero/>
   <Stores/>
  <CategorySection/>
  </>
    
   
  );
}
