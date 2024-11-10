import HeroSection from "@/components/landingPage/heroSection";
import MeghalayaSection from "@/components/landingPage/meghalayaSection";
import Destination from "@/components/landingPage/destinationSection";
import Navbar from "@/components/layout/navbar";
import UserHome from "@/components/userHome";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      {
        false?(
          <UserHome/>          
        ):(
          <div>
            <Navbar/>
            <HeroSection />
            <MeghalayaSection/>
            <Destination/>
            <Footer/>
          </div>
        )
      }
    </main>
  );
}