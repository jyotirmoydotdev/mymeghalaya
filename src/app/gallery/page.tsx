import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import { ParallaxScroll } from '@/components/ui/parallax-scroll';
import React from 'react'

const page = () => {
  const images = [
    "/Cherrapunji.webp",
    "/KynremFalls.webp",
    "/Nohkalikai-Falls.webp",
    "/SevenSisterFalls.webp",
    "/darechikgre.webp",
    "/daribokgre.webp",
    "/dawki.webp",
    "/forest.webp",
    "/pelga.webp",
    "/red-panda.webp",
    "/tepota.webp",
    "/tura-peak.webp",
    "/wei-sawdong.webp",
  ];
  function shuffleArray(array:string[]):string[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  const shuffledImages = shuffleArray(images);
  return (
    <div className='max-h-[100vh]'>
        <Navbar/>
        <div className='w-full justify-center flex px-5 my-3'>
          <div className="w-full max-w-5xl border-b">
            <div className="text-4xl p-3 text-left font-bold" >GALLERY</div>
          </div>
        </div>
        <ParallaxScroll images={shuffledImages} />;
        <Footer/>
    </div>
  )
}

export default page