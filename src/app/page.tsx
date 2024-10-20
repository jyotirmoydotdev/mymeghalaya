import Adventure from "@/components/Adventure";
import Destination from "@/components/Destination";
import Festival from "@/components/Festival";
import Food from "@/components/Food";
import HeroSection from "@/components/HeroSection";
import Map from "@/components/Map";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Map />
      {/* <FeaturedImg/> */}
      <Destination />
      <Festival />
      <Food />
      <Adventure />
    </main>
  );
}
