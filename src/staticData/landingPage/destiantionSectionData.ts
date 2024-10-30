import { supabaseImg } from "@/libs/supabaseFetch";

export const LandingPageDestinationSectionData: { name: string, des: string, img: string, link: string }[] = [
    {
        name: "Pelga Falls",
        des: "Pelga waterfall offering a peaceful escape for nature lovers.",
        img: supabaseImg("/pelga.webp"),
        link: "/destinations/pelga-falls"
    },
    {
        name: "Darechikgre",
        des: "Darechikgre is a beautiful sunset and viewpoint of Tura.",
        img: supabaseImg("/darechikgre.webp"),
        link: "/destinations/darechikgre"
    },
    {
        name: "Tura Peak",
        des: "Challenging trail to Tura Peak with rich biodiversity and views.",
        img: supabaseImg("/tura-peak.webp"),
        link: "/destinations/tura-peak"
    },
    {
        name: "Daribokgre",
        des: "Unmatched hilltop views with strict rules to preserve natural beauty.",
        img: supabaseImg("/daribokgre.webp"),
        link: "/destinations/daribokgre"
    },
    {
        name: "Nokrek National Park",
        des: "Nokrek National Park is a Wilderness of Rare Flora, Fauna, and Pristine Beauty",
        img: supabaseImg("/red-panda.webp"),
        link: "/destinations/darechikgre"
    },
    {
        name: "Arwah Cave",
        des: "Explore prehistoric fossils and stunning limestone formations in Arwah Cave.",
        img: supabaseImg("/arwah-cave.webp"),
        link: "/destinations/arwah-cave"
    }
]