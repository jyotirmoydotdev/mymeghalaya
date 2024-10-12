import Adventure from "@/components/Adventure";
import Destination from "@/components/Destination";
import Festival from "@/components/Festival";
import Food from "@/components/Food";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
