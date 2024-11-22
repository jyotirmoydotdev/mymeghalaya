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
        false ? (
          <UserHome />
        ) : (
          <div className='flex min-h-screen flex-col bg-background'>
            <div className="mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
              <Navbar />
              <HeroSection />
              <MeghalayaSection />
              {/* <Destination/> */}
              <Footer />
            </div>
          </div>
        )
      }
    </main>
  );
}