import React from 'react'
import { ImagesSlider } from './ui/images-slider';
import { ImgType } from '@/types/imageType';

const FeaturedImg = () => {
  const images = [
    "/darechikgre.webp",
    "/pelga.webp"
  ];
  const imagesWithName: ImgType[] =[
    {
      name: "darechikgre",
      url: "/darechikgre.webp",
    },
    {
      name: "pelga",
      url: "/pelga.webp",
    },
    {
      name: "tepota",
      url: "/tepota.webp",
    }
  ]
  return (
    <div className="bg-gray-50  border-t ">
      <ImagesSlider autoplay={true} className="h-[40vh] sm:h-[80vh]" overlay={false} images={imagesWithName}>
        <></>
      </ImagesSlider>
    </div>
  )
}

export default FeaturedImg