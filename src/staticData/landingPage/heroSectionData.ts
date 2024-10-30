import { supabaseImg } from "@/libs/supabaseFetch";

export const LandingPageHeroSectionData = {
    title: "ABODE OF THE CLOUDS",
    description: "Meghalaya beautifully blends its rich cultural heritage with the lush Hills, offering a unique fusion of tradition and natural beauty.",
    images: {
        img1: {
            name: "Dawki River",
            location: "Dawki, East Khasi Hills",
            imgUrl: supabaseImg("/dawki.webp"),
            slug: "",
        },
        img2: {
            name: "Cherrapunji",
            location: "Cherrapunji, East Khasi Hills",
            imgUrl: supabaseImg("/cherrapunji.webp"),
            slug: "",
        },
        img3: {
            name: "Nohkalikai Falls",
            location: "Cherrapunji, East Khasi Hills",
            imgUrl: supabaseImg("/nohkalikai-falls.webp"),
            slug: "",
        }
    },
    plan:{
        link: "/",
        lable: "Let's plan your trip (soon)"
    }
}