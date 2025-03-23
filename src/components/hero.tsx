'use client'

import React, { useEffect, useRef, useState } from 'react'
import { TiTick } from 'react-icons/ti'
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { LiaMapMarkedAltSolid } from 'react-icons/lia'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DatePickerWithRange } from "./date-picker";
import { Slider } from "./ui/slider";
import HillsLine from "./hills";
import Map from './map';
import Autoplay from 'embla-carousel-autoplay';
import { supabaseurl } from '@/lib/supabase';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { MdArrowOutward } from 'react-icons/md'
import { Feather } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


export const data = [
    {
        id: "south-west-garo-hills",
        name: "South West Garo Hills",
        description: "",
        url: "",
        about: "South West Garo Hills, an administrative district in Meghalaya, India, was officially upgraded to a full-fledged district on August 7, 2012, with its headquarters at Ampati. This milestone was marked by an inauguration by Dr. Mukul Sangma, then Chief Minister of Meghalaya. The district was carved out of West Garo Hills and includes villages from the Betasing and Zikzak Community and Rural Development Blocks, along with others from surrounding blocks like Selsella and Gambeggre. These reorganized villages fall under new Gram Sevak Circles to streamline local administration.\n\nThe reorganization of Gram Sevak Circles ensured that most villages, except for those under Dalu Block, are now part of the Betasing Community and Rural Development Block. As of the 2011 Census, the population of South West Garo Hills stands at 172,495, with a near-equal male-to-female ratio. The district's literacy rate is 56.7%. The majority of the population belongs to Scheduled Tribes (80.10%), with a small Scheduled Caste community (1.21%). Christianity dominates the region, followed by Hinduism and Islam.\n\nGaro is the most widely spoken language, with 51.14% of the district's population speaking it. Bengali, Hajong, and Koch are also significant minority languages, spoken by 26.43%, 16.46%, and 5.48% of the population, respectively. Garo, spoken by over 88,000 people, is followed by Bengali with 45,586 speakers, Hajong with 31,523, and Koch with over 10,000 speakers.",
        img: {
            url: supabaseurl("/images-public/komen-lake.webp"),
            blurDataUrl: "data:image/webp;base64,UklGRswHAABXRUJQVlA4WAoAAAAgAAAAZQIAyAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg3gUAABBWAJ0BKmYCyQE+0WiwUyglpKKgCAEAGglpbuFhGYCv498v7uqj/U/4dlgn//VxLGx7mfIAnsA99snIe+2TkPfbJyHvtlFFN+frKahODH8zigyhSr+aC7YX03eG4JsG+t4mlhrOddjfb+6JMIHuvzSA4s51Y6g1oHeVvUtKzizfAF/KDHzl5H6+n+mOAWcsmJSxHQxblT956ip+6bG/28mJQxswIGZxF5RsGw1nl9e3dcW7v/ei1EnOUQAE3UdKsq9waSOtfr0oCrprT9pJp1QISXhf3Yx02Ri131OLSAEpC/RHO0ztu9pYgrTvC5eUCx4h6756hJVkJ0uTmye99lrHUognJqaG5VEPXfU4t3XvqIX7u7uTUEkEXEi23+reIeHyFZTjAGWH6I2l8zqYGfcLhmBB7DnyXDdxU/eeqN/OdgLHdD0Q/O+QPuX97R+iOss0P0N3nqKkFGTKrbcWMttf3cLZHr7z1FT958grHiG0vqenE1Z0sVQLjBa5NH+BQFWTbwe9sDI94Iglu9sbIuKqHSu+NCIqfvPUVP3LaKdmpgU9LJ+5jIvEOsqGZb2j9EeHv3rmKWKil3rj7nvbDfAvtH9tm0fojoWCTo/yloKMAUWNB94h1k22UQBKVjxtcyIe3yNg+1WN4UJ6cQ4VKZ5obwRmAI8AdwFDhBmvJ+nrQICrJtzSsqGj6tzAOBc7za8X6AkYIHzGSsp/EmmCuVzRQZxq6pmvteLm7k8Rr2ceu+epgE156iq0qsUtKgWS7XiRaKybeYQ/onR7z3TtaTch77ZOR/yn9fBGy4U2ehOxxB/Pae2TkPfbJw1oprwj7+imYDr6uR7jGn0u14uTkPXLU4A96iRxdEcwmt7ZOQ99snOIc5Fo+N4iiCQLo2WpsnIe+2TkPfWtB6VTOgaFnjIFJDeLk5D32rAA/vVwA/wb5G+HOT+rc05nk5j9SRXlI8Ndmr4dP3mJE7VbO3J30MxnzkOF85Ny0lGgTRh9SGNbVupz/juh0LlvHxacQm+j7YfGOkqOjupJZ2aK6ul1h85SWNJYtOUUWLGT4O/lgiNRIGOx+JMJ0VYDMn4j5MFlyA0eO7goPe59OBBv35YeEMtFPgxFwAQoJHiCtGm9scyGC9EtVHrMeWQlFWKPCXjocFV3ZbTMZF1RXYQADEYWxKAGtVFGcuNlOwefdm+xS7mByA/a3E5haamFoGwgWCt+vPgUFxvcPQesEIz9hR86seLIX/eJ7Yq9MddOYTDASkpqXguR51IEcqcj6wmHs/oLe9qOaU3pEPV+BuE1Yc/VzN7VRSKYoOoBlrMJwjJl6F5id6qdfO+DCrhMCWGT7CrbRBtM++oR/0HTcPhK+3bazm+cBoNqaTDzrE8q7FtCoTiMjdBFlFT6/EetJofk4h/L8+MvriRmyUgpTStaxReLuONNwbFC/eOJRTXMLFzvfeVtRt3sqCgmyHMpmKu/iSxwuQ7cxFy/s0Md3C+SsVVbVe9LbrUI1tvoQx5SdvHsIlOax42m2V1Io/X7qwo0aOmWN+OKPVL13WgWqKbrO/NidKFtn29R1Hvi2vvzikawu5EgD5AesajntbThzstpCoS1CT/MRTay1ejyrKsIlvxD8v+XN72muwuvFYsnYkjKpb80jO5NFPwq/oDJkgB4vrvrg0Z4qxLBC7aAHpa4sDQqjy2XSM31c3E7XEXmznClx+eR0w37wUzgBcrFHAr9zNhTLC4ocOuz9Fi/TQBoIEvweIMB4HqMiouuO14CJ6+4vI0NvaidwYFCCBM/ulfBIYe0uF5C9fufS+koF/TMSArbnTm4gABZxUE6jTqxlwACOYJiyiCfQRjPmpZ1ugCAABWu9E7PGvbLyP8vXnzNk8mIAKpJUdjrI9tCs2SML7XyzZeYluyRfLEAC0/GM57zpXAH1tPJAUGJFeAAAADGt2w8Ql+uPVDf0wwWt+YAAFakcWC3L+k4nSCVDvbhucgAAJlEDjpH5S4TlRQMbAAAAAAA",
            name: "Komen Lake",
            location: "South West Garo Hills",
        },
    },
    {
        id: "west-garo-hills",
        name: "West Garo Hills",
        description: "",
        url: "",
        about: "West Garo Hills, located in the westernmost part of Meghalaya, is an administrative district with Tura as its headquarters. The district spans an area of 3,714 km² and, as of 2011, had a population of 643,291, making it the second most populous district in the state after East Khasi Hills. The district is bordered by East Garo Hills to the east, South Garo Hills to the southeast, Assam's Goalpara district to the north and northwest, and Bangladesh to the south. The region is rich in cultural diversity, with a population primarily consisting of the Garo community, alongside significant Bengali, Assamese, Nepali, and other ethnic groups.\n\nThe history of West Garo Hills dates back to October 22, 1976, when the larger Garo Hills district was split into East and West Garo Hills. Further administrative changes occurred in 1992 when West Garo Hills was divided again to form South Garo Hills. In 2012, the Ampati Civil Sub-Division was elevated to a full district, known as South West Garo Hills. Despite these developments, West Garo Hills remains one of India's 250 most backward districts, receiving financial support from the Backward Regions Grant Fund Programme to boost development.\n\nThe district's population is linguistically diverse, with Garo (A'chik) being the most spoken language, followed by Bengali and smaller languages like Hajong, Koch, and Assamese. The district's literacy rate stands at 68.38%, with a sex ratio of 979 females for every 1,000 males. Tura, the district's main town, has a vibrant mix of ethnic groups, including the Garos, Bengalis, Assamese, and smaller communities like the Hajong, Rabhas, and South Indians, contributing to the region's rich cultural tapestry.",
        img: {
            url: supabaseurl("/images-public/tura-peak.webp"),
            blurDataUrl: "data:image/webp;base64,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",
            name: "Tura Peak",
            location: "West Garo Hills",
        },
    },
    {
        id: "north-garo-hills",
        name: "North Garo Hills",
        description: "",
        url: "",
        about: "North Garo Hills, an administrative district in Meghalaya, India, was carved out of the East Garo Hills district to enhance public convenience and governance. With Resubelpara as its headquarters, the district spans an area of 1,113 square kilometers and had a population of 118,325 as of 2001. Strategically located in the northernmost part of the Garo Hills, it serves as a gateway to the region, sharing borders with Assam and other districts in Meghalaya. The district's population is a diverse mix of indigenous Garo tribes along with minor communities such as Rabhas, Hajongs, Kacharis, and Boros, reflecting an ethnic blend of Indo-Burmese-Tibetan ancestry.\n\nResubelpara has a rich administrative history, dating back to 1952 when it was first established as a Development Block. Over the years, it gradually evolved into a significant administrative unit, attaining full district status in 2012 under the leadership of Dr. Mukul Sangma, the then Chief Minister of Meghalaya. The district's geographical boundaries are shaped by neighboring Assam to the north and east, while to the west lies West Garo Hills and to the south, East Garo Hills. The district enjoys a subtropical climate with abundant rainfall, contributing to its lush greenery and agrarian lifestyle.\n\nAgriculture is the backbone of North Garo Hills, with nearly 90% of the population depending on it for livelihood. Rice, along with other staples like yam, millet, maize, and pulses, forms the primary crop. Horticulture is also a flourishing sector, with fruits such as oranges, pineapples, and jackfruits being prominent. Plantation crops like areca nut, cashew, and rubber are cultivated alongside floriculture, which has seen growing interest in the region. While agriculture dominates the economy, small-scale industries such as sericulture, dairy farming, and carpentry are also emerging, presenting significant potential for development in food processing and agro-based industries.",
        img: {
            url: supabaseurl("/images-public/jolding-wari.webp"),
            blurDataUrl: "data:image/webp;base64,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",
            name: "Jolding Wari",
            location: "North Garo Hills",
        },

    },
    {
        id: "east-garo-hills",
        name: "East Garo Hills",
        description: "",
        url: "",
        about: "The East Garo Hills district was established in 1976 as part of a reorganization of the larger Garo Hills district in Meghalaya, aimed at improving administrative access for the local population. The district's headquarters, Williamnagar, is named after Captain Williamson A. Sangma, the first Chief Minister of Meghalaya. Located on the plains along the Simsang River, Williamnagar holds historical significance, as it was near here in 1837 that the Garos made their last major stand against British forces. The heroic Garo leader, Pa Togan Nengminja Sangma, was killed in a skirmish at Chisobibra, close to the present-day town.\n\nWilliamnagar serves as the administrative center of East Garo Hills, which spans 2,603 square kilometers. According to the 2011 census, the district has a population of 317,917, comparable to that of the Bahamas. With a population density of 122 inhabitants per square kilometer, East Garo Hills experienced a growth rate of 26.75% over the decade from 2001 to 2011. The district boasts a sex ratio of 968 females for every 1,000 males and a literacy rate of 75.51%. The local languages include A'Tong, a Tibeto-Burman language spoken by approximately 10,000 people in both India and Bangladesh.\n\nEast Garo Hills is also home to rich biodiversity, with Nokrek National Park, established in 1986, as one of its key natural reserves. The park, which covers an area of 47 square kilometers, is shared with the neighboring South and West Garo Hills districts. Nokrek is known for its pristine landscapes and serves as a sanctuary for various wildlife species, contributing to the district's importance as a center for conservation efforts. The district's lush flora and fauna, coupled with its historical and cultural heritage, make it a unique part of Meghalaya.",
        img: {
            url: supabaseurl("/images-public/memo-lake.webp"),
            blurDataUrl: "data:image/webp;base64,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",
            name: "Memo Lake",
            location: "East Garo Hills",
        },
    },
    {
        id: "south-garo-hills",
        name: "South Garo Hills",
        description: "",
        url: "",
        about: "South Garo Hills, established in 1992, is an administrative district in Meghalaya and the least populous in the state. Its headquarters is located in Baghmara, and it covers an area of 1,850 square kilometers. Initially, the district had five assembly constituencies, but it has since been reduced to three. South Garo Hills is one of the regions receiving funds under the Backward Regions Grant Fund Programme due to its designation as one of India's 250 most backward districts by the Ministry of Panchayati Raj in 2006.\n\nAccording to the 2011 census, the district has a population of 142,334, similar in size to the nation of Saint Lucia. The population density is 77 inhabitants per square kilometer, and its growth rate from 2001 to 2011 was a notable 41.19%. The district's sex ratio stands at 944 females for every 1,000 males, and the literacy rate is 72.39%. A majority of the population, 94.31%, belong to Scheduled Tribes. Garo is the primary language, though other minority languages such as A'Tong are also spoken.\n\nSouth Garo Hills is rich in natural beauty, home to the stunning Balphakram National Park, which spans 220 square kilometers. It also shares the Nokrek National Park with neighboring districts, adding to its ecological significance. The district is known for its unique wildlife, including the Siju and Baghmara Pitcher Plant Wildlife Sanctuaries and endemic species like the Cyrtodactylus karsticolus gecko. Despite its scenic landscapes and biodiversity, the district's rich cultural and historical legacy makes it a unique part of Meghalaya's heritage.",
        img: {
            url: supabaseurl("/images-public/wari-chora.webp"),
            blurDataUrl: "data:image/webp;base64,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",
            name: "Wari Chora",
            location: "South Garo Hills",
        },

    },
    {
        id: "west-khasi-hills",
        name: "West Khasi Hills",
        description: "",
        url: "",
        about: "West Khasi Hills, an administrative district in Meghalaya, was carved out of the larger Khasi Hills district on October 28, 1976. Its headquarters is located in Nongstoin, and the district spans a vast area of 5,247 square kilometers. According to the 2011 census, the district has a population of 383,461, which is comparable to the population of the Maldives. The population density is 73 inhabitants per square kilometer, and the district has a growth rate of 30.25% over the decade 2001-2011. The sex ratio is 980 females for every 1,000 males, with a literacy rate of 77.87%.\n\nThe district is predominantly inhabited by the Khasi tribe, known for its matrilineal system of inheritance and social structure. However, the Garo tribe also has a significant presence in the Mawshynrut region of West Khasi Hills. While traditional customs have been maintained, the Khasi society has seen significant transformations in recent times, particularly due to the adoption of Western lifestyles among the educated population. This blend of modernity and tradition adds to the cultural richness of the region.\n\nGeographically, West Khasi Hills is characterized by its scenic landscapes, rolling hills, and deep gorges. The district is known for its natural beauty and plays a crucial role in Meghalaya's cultural and ecological landscape. The road connectivity across the district is generally good, linking Nongstoin to other parts of the state, though many interior villages still face transportation challenges. Despite these difficulties, the district's unique culture and natural charm continue to make it a significant part of Meghalaya's diverse heritage.",
        img: {
            url: supabaseurl("/images-public/meghalayas-dzuko-valley.webp"),
            blurDataUrl: "data:image/webp;base64,UklGRtIEAABXRUJQVlA4WAoAAAAgAAAAMgEAvQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg5AIAAPAcAJ0BKjMBvgA+0VqoUigkIyKiMQvBABoJZ27gV1r9S//Fy/9qtgZ1BPzxu8Y0AEgLxfD6DT6nyTQlWrRabn0qXnbE7+mgtFFolZR+D6f3HlAN/WM6Crchv/gDmhrDx6mllsWGPIZ0D+uI1q59ShAEnhlLN8z15b39n2f1TAs9trUkPLzxW2evlNhmbLMs8Q81nmdZ77J1nvtdFdjij0XcUkPdZ/AcuP6nbtdjFzK2pjJl9BKoCDX6T17b0oG8Udx9P/BCbjvXV1UR1wLRRHwmGojWxg3U67Ror2sK87EXsIeKzm/YBwOYjpY8jkHxIAD+7Sv/HXHPTUHxS0J2umjqUO6yIMBq8NbW8l4iXidizJlJgAI9cCeXTMbOfaMHKud6Eziluni0YfpkISSLI6kpEYeaQABUvKVSFplOKAtgP0cBTRw14tw9phRlr90jJMRdtLWeVVmFoq7M1um6OHMlVsPNWf6BJ32saLEUMpgnIn5WMBzAUHv6pTTP1nnx2r+xwDBSXLwpuhrdzfHf6OttvSNm33o4C0A3fZJREfyRbPYeUfK9Wgj4L+VrsuRo79xxLMoGRUUGbBMCKwFDsfws3AHfLOwl2hVya7aaGd4FvWXE+MqBRwWOR8SFxaFknZj/FBYJfyVWYm7I62zF3gpkwKUhrLLlu6+GRKI4xwr+dcYqxkweaq0WnENnl75dF3FZJct/BsEpHmIxyJClm5hibk9XoSB1tXGiYsR3PCtnVPZOx+0P/XgnKXLig/GiD85M4b0D1HT74I+h8JqGjXNuoCsBX7lbaquYNP0ZLSaWARIw2pjkbExKWnKW7GzpLvU1sxmJ/pvzsGHMHHG0amxnym2NMSfz6nzXbYeicCFXPtUIUV8vMRZZoS9rNOktoC+0d+wvpymJ7C5usKSKa+6ugCUfGQS3pkbjIQBMKLZGTpL5+/oG09wmySWQM2THp9GmznbavfzvpbE+0rOS02Z4vTgA",
            name: "Meghalaya's Dzuko Valley",
            location: "West Khasi Hills",
        },

    },
    {
        id: "eastern-west-khasi-hills",
        name: "Eastern West Khasi Hills",
        description: "",
        url: "",
        about: "Eastern West Khasi Hills, one of the newest districts in Meghalaya, was created in 2021 after the bifurcation of West Khasi Hills. Located just 25 kilometers from the state capital, Shillong, its headquarters is the town of Mairang. The district covers 1,356.77 square kilometers, which constitutes 6% of the state's area. It is home to a population of 131,451, according to the 2011 census. Bordered by several other districts, including Ri Bhoi to the north and South West Khasi Hills to the south, Eastern West Khasi Hills is a geographically diverse region with deep historical and cultural roots.\n\nThe district is known for its stunning natural features, such as the Mawthadraishan Range, which runs through its center, and the iconic Kyllang Rock. Mawthadraishan Peak, rising to 1,924.5 meters, is the highest point in the district. Kyllang Rock, a massive granitic dome, is steeped in Khasi folklore and regarded as a mystical figure in the local legends. The central highlands of the district serve as a natural divide between the Brahmaputra River basin to the north and the Meghna River basin to the south. Major rivers like the Kynshi and Khri, along with their tributaries, flow through the region, adding to its scenic beauty and ecological importance.\n\nRich in history, Eastern West Khasi Hills played a significant role during the Anglo-Khasi War, with Tirot Sing, the leader of the Khasi resistance, hailing from this area. A memorial in Mairang commemorates his bravery and leadership. Today, the district remains predominantly inhabited by the Khasi people, who practice a vibrant culture while sustaining their agricultural traditions of growing paddy rice, maize, and potatoes. National Highway 106 links the district to Shillong and Nongstoin, while other state highways connect it to neighboring regions, ensuring the district remains connected and accessible.",
        img: {
            url: supabaseurl("/images-public/kyllang-rock.webp"),
            blurDataUrl: "data:image/webp;base64,UklGRsYHAABXRUJQVlA4WAoAAAAgAAAAZQIAlwEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg2AUAANBZAJ0BKmYCmAE+0WisUiqqpCKg0zlxUBoJaW7hXy729WddxTx8tOAbFQLE+LY68Y/QArdumebDzYebD47hf35mY7nHc47oOgOkxBVehWQjA2NL5tTgxEQEbKw6Cvo8Dd+r1GnvBXgs9IcOiF2PAALVvNlkw9PsokoUOiMERVeivDfU8Vmo3C6X39RSdgBOix2PMnGbkOH10sDd6bURh8EXGds2Q4dEY0BjS+KJBeNSdVq6G702pMMEzzGIs2PBNJ2QVagjBXhvrwtB2Cq972yplS90ppwVZoJnmLjO+6vwfz8UsH/xdVyqXY8x/kOiPmeYuM7ZacFWaCajDSN/j/IcQ/4iQt7W/FRCT9c9vE9EwO/Be60+M7ZacFWaDnu57FRcjgvGGsq7emyBt0gTYmvGIwxoIwyQypKkqSxVXWjZNwZ59qFcQkLUEYK03t6Gx4JqL6cFWZuzLMI7tBprqF7BdXzUX1WkYtWit65CRdoBd96OvFxnbOuZhHdoKKkzMfI8gNkaluIMqaWLEww+4YjDGfHQM4Z92fVWdcXTLCK2BNlzsZ8Z4tI6GdY8AD/feiqzQc+1CoOo070I5mY7nH1/cUb20DqB5qRHdpNXxOHkEzy/7rvxXHjEBIgJEBIgJtIKfN8hww+CrM3Zln4CX5jOO5x3OO5x33IaAkw7yYPdae534x4shA4ZLWOWDhktZGny70UR9O2/VaCZ4+IoHDJaxywcMlrHLPmOn422/ajKOcHIcC7qwcMlrHLBwyWscsJlwuxwDgOfvUHbL4UDpjbDzYebDzYgDh3VbzcPdzQBJp8YeMQEiAkQEiAkQGSCKJaW6BdscFkZ+rP1Z+rP1Z8c4hUwU2fcpYkxa8BnZ5sPNh5sPNh4xL/qwmXC7GDLyy5OzzYebDzYebDanc9X6C/Y96usO11ozE6xywcMlrHLCVH1YxAciSFYopzH0UWT8YgJEBIgI5AA/vOjnxBwlFjAtu8joL8JtnGQnoum4JQ7T2GE7V8n/Bgm5t25P+DmRnL7efbpylGsXWO5UGPxFPIPCeNHSQGjgrmVSja4D+CMMW55GBjicbKHCG4rYho1ECrjVv5Wlq+PowvP1lYowoDRiyahx67hkVH5dmk7V3Q+MYGO9ghuEVgiDddmskRD2TlvJe8U/gAG9BIQXgBMn5VK6FmBCa9JQ7guWiYkkciMHTkRdGjg8KlB60mKzvcH5jwptLpe5daqzLZbMQ04yCAaWEZPi1P5QiICtSehVbOqDFSYQyx3ZepVyoGtcTLE2KvB1dfRcVzNdpau7YHZ1eeS4x/YUlFm2kJS5Qd4tEmUhWdOpTZXiJyst2m2JBuG6/LQ02ZVUlM6DuaRqn4QxDrzmdP3iEhv9xCP5mEyWLe1DdcUz4i8zcKJZB9EmL5TkaHJ7n1wStpriT3wNDPHIFPDl/mR/v44mTH5gSQwf43RrFQAVN7Cc8zo8V4ZEY3oEtQ3SULytR8S4wkuzk3dPfcHA+Ru5lkRpI0b3w66oUUFHyL/FP+TNt9vlcTD3BeGmL8it9gpQcHXWosWuWTQLRwtgog94QVO67QkmUYeqIK5PAn3wyAMyO5Qp2OsB6rwAMWRVTIlxdcordVecAmyKStiH7JEVqLsYt4YM+hnq350sWzKABlvsooszWc0feJPXaAfd8b9wLpvRU1fqX/ol12YMAA86Cv/ZwBECsQu5LMpY1pu97hcKqAAC+pIFYkCfLEtwBwsfAvNvChhQP4fggACFrNLQmFszG7Lmb6GSCLDcOeuWE1B+ABKn0ZKbRs5ITcGUYWRyOhElVS7dP8HSAAAuagryhCnOajIXz+Kv9VNZOhekG0QAAQojBiAQIzqJgBVXNEV3sMn0sE8vwAAN/M+BOfEKu3Pp4u1CQSQ87varWmWlAAC7OsLcryhknTr3gcPaqKt6AudjEAA5X6KrNVbdT3g6QxhFdw7hjMlZIL/ShffYgAP4cq+HJ3xvXIaGFioMAAAAAAA",
            name: "Kyllang Rock",
            location: "Eastern West Khasi Hills",
        },

    },
    {
        id: "south-west-khasi-hills",
        name: "South West Khasi Hills",
        description: "",
        url: "",
        about: "Southwest Khasi Hills, carved out of the West Khasi Hills district on August 3, 2012, is a relatively new administrative district in Meghalaya. Its headquarters is located at Mawkyrwat, and the district spans an area of 1,341 square kilometers. The district comprises villages from two Community & Rural Development Blocks—Ranikor and Mawkyrwat—as well as 18 additional villages from the Nongstoin block. The region's strategic boundaries include West Khasi Hills to the north and west, East Khasi Hills to the east, and the international border with Bangladesh to the south.\n\nHistorically, the district has deep cultural roots tied to the Khasi people, one of the earliest ethnic groups in the Indian subcontinent, belonging to the Proto-Austroloid Mon-Khmer race. The Khasi society, with its matrilineal system, continues to follow traditional customs while adapting to modern influences. The Khasis are divided into various subgroups, including the War-Khasis, who inhabit the southern part of the district, and the Lyngngams in the northwest. Traditional attire, such as the 'Jymphong' for men and elaborate female dress, is still worn during ceremonial occasions, preserving the region's cultural identity.\n\nThe social structure of the Khasis is unique, with descent traced through the mother, but the father playing a crucial role in the family's material and mental well-being. Inheritance follows the matrilineal system, with the youngest daughter, or 'Ka Khadduh,' inheriting ancestral property. While many Khasis have adopted Christianity, traditional religious beliefs in a Supreme Creator and nature deities still hold significance in certain communities. The cultural richness of the region is reflected in its customs, festivals, and social practices, which continue to shape the identity of the district.",
        img: {
            url: supabaseurl("/images-public/nongnah-village.jpg"),
            blurDataUrl: "data:image/webp;base64,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",
            name: "Nongnah Village",
            location: "South West Khasi Hills",
        },

    },
    {
        id: "ri-bhoi",
        name: "Ri Bhoi",
        description: "",
        url: "",
        about: "Ri Bhoi is a captivating administrative district in Meghalaya, India, known for its rugged terrain and unique geographical features. Nestled approximately 53 kilometers from Shillong and 50 kilometers from Guwahati, the district covers an area of 2,378 square kilometers. Established as a full-fledged district on June 4, 1992, Ri Bhoi was carved from the East Khasi Hills. Despite its expansive size, it remains one of the least populous districts in Meghalaya, with a population of 258,840 as of the 2011 census. This relatively low population density adds to the district's tranquil charm.\n\nThe landscape of Ri Bhoi is characterized by a series of hill ranges that gradually descend into the Brahmaputra Valley. The district is dotted with significant rivers, including the Umtrew, Umsiang, Umran, and Umiam, which add to its natural beauty. The region's diverse topography, from rugged hills to lush river valleys, contributes to its ecological richness. Notably, the Nongkhyllem Wildlife Sanctuary, established in 1981, covers 29 square kilometers and serves as a haven for local wildlife.\n\nRi Bhoi is also notable for its connectivity and infrastructure. It boasts the only airport in Meghalaya, located at Umroi, and is well-linked by National Highway No. 37, which connects to Shillong and beyond. The district's strategic location makes it a vital junction for travel to Assam, Mizoram, and other northeastern states. With a population density of 109 inhabitants per square kilometer and a literacy rate of 77.22%, Ri Bhoi reflects a blend of traditional tribal culture and modern connectivity, making it a unique and important part of Meghalaya.",
        img: {
            url: supabaseurl("/images-public/umiam-lake.webp"),
            blurDataUrl: "data:image/webp;base64,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",
            name: "Umiam Lake",
            location: "Ri Bhoi",
        },
    },
    {
        id: "east-khasi-hills",
        name: "East Khasi Hills",
        description: "",
        url: "",
        about: "East Khasi Hills, a vibrant administrative district in the Indian state of Meghalaya, is a picturesque area where the bustling town of Shillong serves as its headquarters. With an expanse of 2,748 square kilometers and a population of 825,922 as of the 2011 census, it stands as the most populous of Meghalaya's 12 districts. Established on October 28, 1976, when the original Khasi Hills district was divided into East and West Khasi Hills, it further expanded on June 4, 1992, to also include Ri-Bhoi District.\n\nThe district's geographical landscape is a stunning mix of rolling grasslands, deep gorges, and verdant plateaus. It stretches from the serene Shillong Plateau, known for its breathtaking vistas, to the dramatic ravines of Mawsynram and Shella-Bholaganj that border Bangladesh. Among its notable features is Shillong Peak, the highest point in the district, offering panoramic views of the surrounding countryside. The climate ranges from temperate in the highlands to tropical in the lower regions, with the southwest monsoon bringing substantial rainfall from May to September.\n\nEast Khasi Hills is also renowned for its cultural richness and natural beauty. It is home to the unique whistled language of Kongthong village and the awe-inspiring Kynrem Falls. Mawlynnong village, recognized for its exceptional cleanliness, has garnered accolades as one of Asia's cleanest villages. The district's attractions include Nohkalikai Falls, one of India's tallest waterfalls, and Umiam Lake, a serene spot just outside Shillong. The well-connected Shillong, with major roads leading to Guwahati and Silchar, serves as a gateway to these enchanting sites, though interior village connectivity remains a challenge.",
        img: {
            url: supabaseurl("/images-public/cherrapunji.webp"),
            blurDataUrl: "data:image/webp;base64,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",
            name: "Cherrapunji",
            location: "East Khasi Hills",
        },
    },
    {
        id: "west-jaintia-hills",
        name: "West Jaintia Hills",
        description: "",
        url: "",
        about: "West Jaintia Hills, an administrative district in Meghalaya, India, emerged from the bifurcation of the former Jaintia Hills District on July 31, 2012. Covering an area of 1,693 square kilometers, this district is a land of diverse landscapes and significant natural resources. With Jowai as its headquarters, West Jaintia Hills serves as a hub for governmental offices, educational institutions, and healthcare facilities. The district's boundaries stretch north to Assam, south to Bangladesh and East Jaintia Hills, east to Assam, and west to East Khasi Hills, placing it strategically in the heart of Meghalaya.\n\nDespite its rich agricultural heritage, the district is notably influenced by its mineral wealth. The region is known for its abundant limestone deposits, which have given rise to several cement factories, especially in East Jaintia Hills. Coal mining is also a major activity, with significant operations in Lad Rymbai, although most of the mining sites have now shifted to East Jaintia Hills. Agriculture remains a crucial aspect of life here, with the Lakadong turmeric—recognized for its exceptional curcumin content—being a standout product. This turmeric has gained national attention and is under consideration for a Geographical Indication tag.\n\nWest Jaintia Hills is characterized by its rugged terrain and limited transportation options, relying predominantly on roadways. Major highways such as NH 40 and NH 44 connect the district to surrounding areas. The district's demographic profile, with a population density of 159.69 per square kilometer, is predominantly comprised of Scheduled Tribes, who speak various dialects including Pnar, War, and Khasi. Among its notable sites are the towering monoliths in Nartiang, the serene Thadlaskein Lake, and the impressive Krangshuri Falls. Educational institutions, while not extensive, include reputable colleges and schools in Jowai, Khliehriat, and Nongtalang, contributing to the district's growth and development.",
        img: {
            url: supabaseurl("/images-public/nartiang-monoliths.webp"),
            blurDataUrl: "data:image/webp;base64,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",
            name: "Nartiang Monoliths",
            location: "West Jaintia Hills",
        },

    },
    {
        id: "east-jaintia-hills",
        name: "East Jaintia Hills",
        description: "",
        url: "",
        about: "East Jaintia Hills, established on July 31, 2012, is a vibrant district in Meghalaya, India, with Khliehriat serving as its administrative headquarters. Carved from the former Jaintia Hills District, this region spans an area of 2,115 square kilometers and is renowned for its scenic beauty and rich cultural heritage. The district is bordered by Assam to the north, south, and east, while West Jaintia Hills lies to the west. Khliehriat, which transitioned from an administrative unit in 1976 to a civil sub-division in 1982, eventually became the district headquarters in 2012, providing a central hub for governance and development.\n\nThe district's population of 122,939 predominantly includes the Pnar (also known as Jaintia), Khynriam, and Biate tribes. Scheduled Tribes make up 96.11% of this population, with Pnar being the most widely spoken language. East Jaintia Hills is divided into two Community and Rural Development Blocks: Khliehriat and Saipung. This administrative setup ensures effective local governance and development, addressing the needs of its diverse communities.\n\nGeographically, East Jaintia Hills is situated in the easternmost part of Meghalaya, with an altitude of about 1,200 meters above sea level. The region enjoys a humid subtropical monsoon climate, experiencing significant rainfall from mid-May to September, followed by cooler, drier conditions in the winter. The district is rich in natural resources, including coal and limestone, which contribute to its economic activities. Agriculture thrives here with rice as the primary crop, complemented by the cultivation of betel-nut, betel-leaves, potatoes, and various spices. The district also boasts essential infrastructure, with National Highway 44 connecting it to Shillong and the eastern parts of Assam, facilitating regional connectivity and growth.",
        img: {
            url: supabaseurl("/images-public/khaddum-pieltleng-falls.webp"),
            blurDataUrl: "data:image/webp;base64,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",
            name: "Khaddum Pieltleng Falls",
            location: "East Jaintia Hills",
        },

    },
]

const packageData = [
    {
        day: 5,
        night: 4,
        title: "All-Inclusive Packages",
        description: "These include everthing from flight to accommodation, meals, and activities",
        img: supabaseurl("/images-public/nongnah-village.jpg"),
        blur: "data:image/webp;base64,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",
    },
    {
        day: 5,
        night: 4,
        title: "Cultural Packages",
        description: "Focus on cultural experiences such as heritage tours, and local performances",
        img: supabaseurl("/images-public/wari-chora.webp"),
        blur:"data:image/webp;base64,UklGRpAHAABXRUJQVlA4WAoAAAAgAAAAZQIAywEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggogUAAJBqAJ0BKmYCzAE+0VqoUigpIyKh8EuhIBoJaW7hXxtN+ydhLHEdrc/Px5jrK1Jse5nyACyxAltOubz+bbWcc2v2egFxYhNtZ/Bu1mszTggkW22aXWzLxSgcP/UP4RaCEO2lOGSlv8jgSCA33Vmxx4l6MnnUSNMhPJwD9MAIODUCLMLIdolPIk2wcBHSsaVgF3z2IEjzkm2DrVR2sBeiMlW0ZsOdXxILc9F8YL4OshPJwD8/atCesDOgH6iVaP+kXM+1aE9YB0J8/bB/B1kJ5OAgeoUQ34AfnsHng6eQicA/P4rzkm2DrITycA/P2rNUx+i78DrKPB3Dr8OASeyFD6ROAfn7Vmng6uhxXgPzHiRgzCeGYAs/SlwQfKD9qzTzOriwTycA+RMnCZOFiPmXfiBKj9Z4luGzzNQ105yTau1EhRsT504Qj/EycKuWNXEV+L3XAFIgjarcRz6hTwfUJ5OAfnToAw2thtZzeGoecISJwGhBEBABzJ6808j7MiROBKXxCzhMnCZN42i1AeaPXK/WjN9iBQaWBBIkxkSJwD8/a7FbYbWw27ll2hZu7Wckqs4zT3zg+5jV89+JE1zn7VocI/xMofOu4mLN3azkXwjOPCSZoKXkjk7g4dGP2VMw26E6PTQs3drORfSKO2wAu8joZ7u7a7C8PdL4QkLDajtKzZPklAdtrBgj47A5yPw5yaIuWWVc4Dg+evl5D7UO7XJZ5JQHbFzUBXg3GQclYOOBdiKEIcCKO2zgh5JQHbawYI+MB/3ZOerU0PoRljHGEsC0A7bWci+Cx9tq8w6248jbRFPsz9p/S9RD6X+oeSQFTCWLlnNKWvfSTaQq/FYSS/peoh9L/UPJH8h5Il4F4+7Ggchg4kGxoGmN2hHweQ8koDttYMEe/F8OVPx4JN2PM6gA4K1uHkj+Q8koDttYQuyt+TSM/xP96IUMN+1JlmGGaAhUPpf6h5I/kOr2k2STTwdTWXNwF8KJhBVB9F6OWBaAdtrORfBY+SZiwL0lh9mSTKW404oO+ESqKgdtrORWWWklUdDhx+gCxBC1dM9FFOlhUZFp6oR8YHbbWoZrueZGR2hMBv3Qckks8TuL8wOl/qHklAUBT5k4cuSRbBnkqCagO6Q4/GOMJY0DQKQAAAD+9X0Hy0N9cs9yjr2BHbs9fi2R9MdtAzPv+8d2SdlUZWwEJMzu2wRXvhNmrzppZ70eOJ7UbWPfptodxh8SH3ycB9NROmbG4MdcR/CZZGT3en0JsBS7BsCylvLqXVdWGU8YEMJjsYz/bZQAEx5lsm43/xf1ou1/Mhgzmb5pEpS3kil5TracWyUS22KTidAqwMNwWxAZk9CcwKtDKmhoiLk9MCK5w62yINic74xrOXjzDThhOal1koAtwgVn5BgLjR45YzG70U77h69EK8IYotoQh1Pm4fgMpBSFMbjwvIA7hvNFkmhOUV4zLhvihQeVZLWnes7kt9W2prCQ001Tw5DrB5nl2nUpNC2+n8OZrnTaQfjs5AmE73ghXYIEziZODjG+LJEwhfRRSM9Sldpk9U3W5SQJgKhLtn5EEzWuh8lwcuwUPfRGEQlhF49lFjGPTc5hKiKeADY2L1B3zjkcDSL7Fd9yYh1IcfqJgHsMdzf7rL4LJJ7QJBjHhAuITiYBvzRzdhVgBMnpxHjRsO+xclnKIAwpq+HZy70Y+DqABnfqBO/BKpbAugsvy9zxAAFTYnQRyC7GXOr8BXiTnhQBUGu1bwFjayZCM/Uofj5ItRVZwBnfvnNy0IWGQ2urV6IN+K3HMBZWJ5M6ialOjnxAWD0LraAKFc1Je/4k1CZWI6OU77W5z5iKzHLBDMX9LWZUHNdFHusDjyDbNb32RqAFlmU04+VjttEjz5OTCcF0hmQPUL/UFQ/orl8VS23csW8Tl6SdhAAA",
    },
    {
        day: 5,
        night: 4,
        title: "Adventure Packages",
        description: "Tailored for thrill-seekers, offering activites like hiking, or extreme sports",
        img: supabaseurl("/images-public/umiam-lake.webp"),
        blur: "data:image/webp;base64,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",
    },
]


export default function Hero() {
    const [budget, setbudget] = useState([300])
    const [activePathIndex, setActivePathIndex] = useState<number>(0);
    const [expandedIndex, setExpandedIndex] = useState(0);
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500'];
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const newIndex = Number(entry.target.getAttribute('data-index'));

                    if (entry.isIntersecting && (newIndex === activePathIndex + 1 || newIndex === activePathIndex - 1)) {
                        setActivePathIndex(newIndex);
                    }
                });
            },
            { threshold: 1 }
        );

        cardRefs.current.forEach((cardRef) => {
            if (cardRef) observer.observe(cardRef);
        });

        return () => {
            cardRefs.current.forEach((cardRef) => {
                if (cardRef) observer.unobserve(cardRef);
            });
        };
    }, [activePathIndex]);
    return (
        <div className="relative ">
            <div className="text-[14rem] absolute font-black text-gray-100 dark:text-zinc-900 -z-10 -left-20 pointer-events-none">MEGHALAYA</div>
            <div className='container p-4 mb-5 sm:mb-20'>
                <div className="grid grid-cols-1 md:grid-cols-2 content-center gap-4">
                    <div className="flex justify-center items-center bg-emerald-500 dark:bg-emerald-600 rounded-md p-2 drop-shadow-lg py-2 sm:py-5">
                        <div className=" absolute -z-10">
                            <HillsLine
                                width={650}
                                color="#34d399"
                                className=" hidden sm:block w-[650px]"
                            />
                        </div>
                        <Tabs defaultValue="holiday" className="w-[400px]">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="holiday">Holiday</TabsTrigger>
                                <TabsTrigger value="hotels">Hotels</TabsTrigger>
                            </TabsList>
                            <TabsContent value="holiday">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Holiday</CardTitle>
                                        <CardDescription>
                                            Book your next holiday package to Meghalaya and create unforgettable memories
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="date">Date</Label>
                                            <DatePickerWithRange />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="people">People</Label>
                                            <Select>
                                                <SelectTrigger className="">
                                                    <SelectValue placeholder="Select people" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1-people">1 People</SelectItem>
                                                    <SelectItem value="2-people">2 People</SelectItem>
                                                    <SelectItem value="3-people">3 People</SelectItem>
                                                    <SelectItem value="4-people">4 People</SelectItem>
                                                    <SelectItem value="5-people">5 People</SelectItem>
                                                </SelectContent>
                                            </Select>

                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="people">Budget</Label>
                                            <div className="flex gap-2 h-10 items-center">
                                                <Slider defaultValue={budget} onValueChange={setbudget} max={2000} step={1} />
                                                {/* <Input className="text-xs w-[4rem]" value={budget[0]} onChange={handleInputChange}></Input> */}
                                                <div>
                                                    ₹{budget}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white">Explore</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="hotels">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Hotels</CardTitle>
                                        <CardDescription>
                                            Book the perfect stay for your dream vacation in Meghalaya
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="date">Date</Label>
                                            <DatePickerWithRange />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="guest">Guest</Label>
                                            <Select>
                                                <SelectTrigger className="">
                                                    <SelectValue placeholder="Select guests" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1-people">1 Guest</SelectItem>
                                                    <SelectItem value="2-people">2 Guest</SelectItem>
                                                    <SelectItem value="3-people">3 Guest</SelectItem>
                                                    <SelectItem value="4-people">4 Guest</SelectItem>
                                                    <SelectItem value="5-people">5 Guest</SelectItem>
                                                </SelectContent>
                                            </Select>

                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="budget">Location</Label>
                                            <Select>
                                                <SelectTrigger className="">
                                                    <SelectValue placeholder="Select location" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1-people">Tura</SelectItem>
                                                    <SelectItem value="3-people">Jowai</SelectItem>
                                                    <SelectItem value="5-people">Shora</SelectItem>
                                                    <SelectItem value="2-people">Shillong</SelectItem>
                                                    <SelectItem value="4-people">Cherapunji</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white">Search</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="flex flex-col gap-4 sm:gap-6 h-full justify-center pl-0 sm:pl-16">
                        <div className=" text-3xl sm:text-6xl font-bold text-gray-700 dark:text-white">
                            <span className=''>Meghalaya</span> the <div className='font-semibold font-serif italic text-emerald-500 '>Scotland of the East </div>
                        </div>
                        <div className="text-gray-500 dark:text-gray-300 text-xs sm:text-base pl-0 sm:pl-4 ">Build your next unforgettable memory in Meghalaya with MyMeghalaya the ultimate one-stop guide to exploring the wonders of this breathtaking destination.</div>
                        <div className="flex flex-col pl-0 sm:pl-4 gap-2 text-xs sm:text-base pb-2">
                            <div className="flex gap-2 items-center">
                                <div className=""><TiTick className='fill-emerald-400' /></div>
                                <div className="">Be part of our growing travel community</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className=""><TiTick className='fill-emerald-400' /></div>
                                <div className="">Discover handpicked destinations, curated just for you</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className=""><TiTick className='fill-emerald-400' /></div>
                                <div className="">Your trusted companion for exploring Meghalaya</div>
                            </div>
                        </div>
                        {/* <div className="flex items-center gap-3 pl-0 sm:pl-4 text-xs sm:text-sm">
                            <div className="flex -space-x-2">
                                <div className=" size-6 sm:size-8 bg-gray-500 rounded-full border-2 border-white"></div>
                                <div className=" size-6 sm:size-8 bg-gray-500 rounded-full border-2 border-white"></div>
                                <div className=" size-6 sm:size-8 bg-gray-500 rounded-full border-2 border-white"></div>
                            </div>
                            Trusted By 100K Peoples
                        </div> */}
                        {/* <div className=" flex gap-4 pl-0 sm:pl-4">
                            <Button size={'default'} className='w-fit text-sm sm:text-base font-bold py-6 rounded-lg active:scale-105 hover:scale-105 transition-all bg-emerald-500 hover:bg-emerald-600' asChild>
                                <Link href={'/home'}>
                                    Explore More
                                </Link>
                            </Button>
                            <Button className='w-fit text-sm sm:text-base font-bold py-6 rounded-lg active:scale-105 hover:scale-105 transition-all text-emerald-600 hover:text-emerald-600' variant={'outline'} asChild>
                                <Link href={'/login'}>
                                    Join Now
                                </Link>
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='container p-4 mb-5 sm:mb-20 overflow-hidden'>
                <div className="flex flex-col py-4 text-center mb-10">
                    <div className=" text-4xl font-semibold">Escape to Our</div>
                    <div className=" text-4xl text-emerald-500 font-serif italic">Favorite Destination</div>
                    <div className="text-sm text-muted-foreground">Discover the Meghalaya most popular vaction spots, from Sunrise View Point, <br /> Dawki and many more.</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5">
                    <div className="flex justify-center relative">
                        <div className=" inset-x-0 text-center  font-black bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-white  dark:from-zinc-700 dark:to-black text-5xl sm:text-8xl absolute -z-10 pointer-events-none">MEGHALAYA</div>
                        <div className="max-w-5xl w-full space-y-5 flex flex-col justify-center items-center">
                            <Map activePathIndex={activePathIndex} />
                            <div className="gap-2 cursor-pointer group hover:font-bold transition-all hover:text-emerald-500 text-muted-foreground flex items-center justify-center py-2 px-5 shadow-md outline rounded-full outline-muted w-fit">Explore Destinations <span className=' group-hover:scale-110 group-hover:rotate-[360deg] transition-all rounded-full shadow-md outline outline-emerald-500 p-1'> <GoArrowRight className=' stroke-1 stroke-emerald-500 fill-emerald-500' /></span></div>
                        </div>
                    </div>
                    <div className=" pt-8 mx-0 sm:mx-8">
                        <Carousel className='relative'
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 3000,
                                }),
                            ]}>
                            <div className=" hidden absolute w-14 h-full bg-gradient-to-l from-white to-transparent right-0 z-10 pointer-events-none"></div>
                            <CarouselContent className=''>
                                {data.map((district, i) => (
                                    <CarouselItem className='basis-auto snap-center' key={i}>
                                        <Link href={district.url} className={cn('group flex flex-col gap-1.5 sm:gap-3 pb-4 w-[15rem] sm:w-[23rem] ')}>
                                            <div className="">
                                                <div
                                                    className={cn("h-36 sm:h-52 w-full bg-transparent overflow-hidden group/card relative !m-0 !p-0 rounded-md sm:rounded-xl")}>
                                                    <div className="relative h-full w-full">
                                                        <div className="h-full w-full relative bg-gray-50 dark:bg-black">
                                                            <Image
                                                                alt={district.img.name}
                                                                title={district.img.name}
                                                                className={"h-full w-full object-cover object-center scale-100 sm:scale-[1.15]"}
                                                                width={500}
                                                                height={500}
                                                                src={district.img.url}
                                                                blurDataURL={district.img.blurDataUrl}
                                                                loading='lazy'
                                                                placeholder='blur'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="inline-flex flex-col sm:flex-row items-center gap-2">
                                                <span className='font-bold'>
                                                    {district.img.name}
                                                </span>
                                                <span className="inline-flex text-sm items-center gap-2 text-muted-foreground line-clamp-1">
                                                    {district.img.location}
                                                </span>
                                            </div>
                                            <div className="text-[10px] text-wrap line-clamp-2 sm:text-sm text-muted-foreground">
                                                {district.about}
                                            </div>
                                            <div className="flex gap-2 items-center text-xs text-emerald-500 font-medium group-hover:font-bold group-hover:gap-3 transition-all sm:text-sm">
                                                <span>Learn more</span>
                                                <GoArrowRight />
                                            </div>
                                        </Link>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            {/* <CarouselNext />
                            <CarouselPrevious /> */}
                        </Carousel>
                    </div>
                </div>
                {/* <div className="text-xl sm:text-4xl font-black text-gray-500 uppercase  hyphens-auto text-justify px-0 py-4 sm:p-[3rem] indent-20 sm:indent-96">
                    Meghalaya, known as the &lsquo;abode of clouds&lsquo;, is a mesmerizing state in northeast India, rich in natural beauty and cultural heritage. Carved from Assam on January 21, 1972, it comprises the United Khasi, Jaintia Hills, and Garo Hills.
                    <Link href='/meghalaya' className="text-sky-400 "> 
                        read more <MdArrowOutward className=' inline-flex w-fit' />
                    </Link> 
                </div> */}
            </div>
            <div className="container p-4 mb-5 sm:mb-20 relative">
                <div className="flex flex-col py-4 text-center mb-10">
                    <div className=" text-4xl font-semibold">Why should Trip</div>
                    <div className=" text-4xl text-emerald-500 font-serif italic">With Us?</div>
                    <div className="text-sm text-muted-foreground">Experience Meghalaya Like Never Before with Our Expert-Led Tours</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex flex-col rounded-md  outline outline-muted shadow-md p-4 space-y-4">
                        <div className=" text-emerald-500 font-serif italic shadow-md outline outline-muted rounded-full size-6 text-center"> 1 </div>
                        <div className=" font-serif text-xl italic font-semibold">Professional Guide</div>
                        <div className=" text-muted-foreground">Experienced and friendly guides make your holidy safe and comfortable.</div>
                    </div>
                    <div className="flex flex-col rounded-md  outline outline-muted shadow-md p-4 space-y-4">
                        <div className=" text-emerald-500 font-serif italic shadow-md outline outline-muted size-6 rounded-full text-center"> 2 </div>
                        <div className=" font-serif text-xl italic font-semibold">An affordable price</div>
                        <div className=" text-muted-foreground">Affordable prices and many attractive promotions, and we provide <span className=' font-semibold text-emerald-500'>FREE</span> entrance tickets to parks.</div>
                    </div>
                    <div className="flex flex-col rounded-md  outline outline-muted shadow-md p-4 space-y-4">
                        <div className=" text-emerald-500 font-serif italic shadow-md outline outline-muted size-6 rounded-full text-center"> 3 </div>
                        <div className=" font-serif text-xl italic font-semibold">Easy Booking</div>
                        <div className=" text-muted-foreground">Just follow and finished booking step, you can immediately book for the departure date.</div>
                    </div>
                </div>
            </div>
            <div className="container p-4 mb-5 sm:mb-20 relative">
                <div className="flex flex-col py-4 text-center mb-10">
                    <div className=" text-4xl font-semibold">Choose your <span className=" text-4xl text-emerald-500 font-serif italic">Package</span></div>
                    <div className="text-sm text-muted-foreground">Find the Perfect Meghalaya Adventure for you. Customizable Tours to suit Every Traveler</div>
                </div>
                <div className="w-full">
                    <div className="flex flex-col sm:flex-row gap-4">
                        {packageData.map((packages, index) => (
                            <div className={`${expandedIndex === index ? 'w-full sm:w-1/2' : 'w-full sm:w-1/4'} h-80 relative transition-all duration-700 ease-in-out rounded-lg shadow-md flex items-center`}
                                key={index}
                                onMouseEnter={() => setExpandedIndex(index)}
                            >
                                <Image
                                    src={packages.img}
                                    width={500}
                                    height={500}
                                    alt={packages.title}
                                    className={` w-full h-full object-cover cursor-pointer rounded-lg pointer-events-none`}
                                    blurDataURL={packages.blur}
                                    placeholder='blur'
                                    loading='lazy'
                                />
                                <div className=" absolute h-full w-full cursor-pointer p-6 overflow-hidden">
                                    <div className=" flex flex-col ga-5 justify-between h-full">
                                        <div className=" w-fit bg-white/40 py-1 px-2 text-xs sm:text-sm rounded-full outline outline-white/80 text-white tracking-tight">
                                            {packages.day} day, {packages.night} night
                                        </div>
                                        <div className={`w-[20rem] flex flex-col gap-3 overflow-hidden p-1`}>
                                            <div className="flex flex-col">
                                                <div className=" transition-transform text-base sm:text-2xl text-white font-bold sm:font-normal">{packages.title}</div>
                                                <div className=" transition-transform text-sm sm:text-base text-white">{packages.description}</div>
                                            </div>
                                            <div className=" w-fit bg-white/40 py-1 px-2 h-fit text-nowrap text-sm sm:text-lg rounded-full outline outline-white/80 text-white tracking-tight">
                                                Choose Package
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container p-4 mb-5 sm:mb-20">
                <div className="flex flex-col py-4 text-center mb-10">
                    <div className=" text-4xl font-semibold">Frequently Asked</div>
                    <div className=" text-4xl text-emerald-500 font-serif italic">Question</div>
                    <div className="text-sm text-muted-foreground">Find answers to all the questions you had in mid or may have later.</div>
                </div>
                <Accordion type="single" collapsible className='max-w-2xl mx-auto mb-10 text-sm sm:text-base'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What should I bring for the Meghalaya trip?</AccordionTrigger>
                        <AccordionContent>
                            <div className="">
                                <ul className='list-disc list-inside'>
                                    <li className=''><span className=' font-bold'>Clothing:</span> Pack light, breathable clothes for daytime and a couple of warm layers for cooler evenings.</li>
                                    <li className=''><span className=' font-bold'>Footwear:</span> Sturdy, comfortable walking shoes or hiking boots are a must for exploring trails.</li>
                                    <li className=''><span className=' font-bold'>Rain Gear:</span> Meghalaya is known as one of the wettest places on Earth, so a waterproof jacket or poncho is essential.</li>
                                    <li className=''><span className=' font-bold'>Accessories:</span> Sunglasses, a hat, sunscreen, and a small backpack for day trips.</li>
                                    <li className=''><span className=' font-bold'>Miscellaneous:</span> Don't forget a reusable water bottle, any personal medications, and a basic first aid kit.</li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How fit do I need to be for the Meghalaya trip?</AccordionTrigger>
                        <AccordionContent>
                            <div className="">
                                <ul className='list-disc list-inside'>
                                    <li className=''><span className='font-bold'>General Fitness:</span>A moderate level of fitness is recommended. Many attractions involve walking or light hiking, so being in decent shape will help you enjoy the trip more.</li>
                                    <li className=''><span className='font-bold'>Trekking/Activities:</span> If you plan on doing longer treks or visiting off-the-beaten-path sites, some additional stamina and endurance might be beneficial.</li>
                                    <li className=''><span className='font-bold'>Self-Pace:</span> Remember, you can always take breaks and explore at your own pace. Preparation with some light exercise beforehand can go a long way.</li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What is the best time to visit Meghalaya?</AccordionTrigger>
                        <AccordionContent>
                            <div className="">
                                <ul className='list-disc list-inside'>
                                    <li className=''><span className='font-bold'>Post-Monsoon (October to December):</span>This season offers clear skies and lush green landscapes after the heavy rains.</li>
                                    <li className=''><span className='font-bold'>Spring (February to April):</span> Enjoy pleasant weather and blooming nature, ideal for sightseeing and outdoor activities.</li>
                                    <li className=''><span className='font-bold'>Monsoon Caution:</span> While the monsoon season (June to September) is spectacular for waterfalls and greenery, heavy rains can sometimes disrupt travel plans.</li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Is Meghalaya safe for solo travelers?</AccordionTrigger>
                        <AccordionContent>
                            <div className="">
                                <ul className='list-disc list-inside'>
                                    <li className=''><span className='font-bold'>General Safety:</span> Meghalaya is generally considered safe for solo travelers.</li>
                                    <li className=''><span className='font-bold'>Travel Tips:</span> Exercise usual travel precautions—inform someone about your plans, avoid poorly lit or isolated areas at night, and keep your valuables secure.</li>
                                    <li className=''><span className='font-bold'>Local Advice:</span>It's a good idea to connect with local guides or fellow travelers for insights and recommendations during your stay.</li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="flex flex-col items-center justify-between">
                    <div className=" pb-10 text-center text-muted-foreground">*Prices do not apply to High Season: <span className='font-bold'>Holidy Season, Christmas</span> and <span className='font-bold'>New Year</span></div>
                    <div className="gap-2 cursor-pointer group hover:font-bold transition-all hover:text-emerald-500 text-muted-foreground flex items-center justify-center py-2 px-5 shadow-md outline rounded-full outline-muted w-fit">Contact Us <span className=' group-hover:scale-110 group-hover:rotate-[360deg] transition-all rounded-full shadow-md outline outline-emerald-500 p-1'> <GoArrowRight className=' stroke-1 stroke-emerald-500 fill-emerald-500' /></span></div>
                </div>
            </div>
        </div>
    );
}
