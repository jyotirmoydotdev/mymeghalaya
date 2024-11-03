import HeroSection from "@/components/landingPage/heroSection";
import MeghalayaSection from "@/components/landingPage/meghalayaSection";
import Destination from "@/components/landingPage/destinationSection";
import Navbar from "@/components/layout/navbar";
import UserHome from "@/components/userHome";
import Footer from "@/components/layout/footer";

// import { subscribeUser, unsubscribeUser, sendNotification } from './actions'
 
function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding)
    .replace(/\\-/g, '+')
    .replace(/_/g, '/')
 
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)
 
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export default function Home() {
  return (
    <main>
      {
        false?(
          <UserHome/>          
        ):(
          <>
          <Navbar/>
          <HeroSection />
          <MeghalayaSection/>
          <Destination/>
          <Footer/>
          </>
        )
      }
    </main>
  );
}