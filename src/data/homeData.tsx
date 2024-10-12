export interface MeghalayaMapType {
    name: string,
    description: string,
    imgUrl: string,
    url: string,
}

export const MeghalayaMapData: MeghalayaMapType[] = [
    {
        name: "South West Garo Hills",
        description: "Southwest Garo Hills, an administrative district in Meghalaya, India, was officially upgraded",
        imgUrl: "/cherrapunji.webp",
        url: "/meghalaya/south-west-garo-hills",
    },
    {
        name: "West Garo Hills",
        description: "West Garo Hills, located in the westernmost part of Meghalaya, is an administrative district with Tura as its headquarters.",
        imgUrl: "/cherrapunji.webp",
        url: "/meghalaya/west-garo-hills"
    },
    {
        name: "North Garo Hills",
        description: "North Garo Hills, an administrative district in Meghalaya, India, was carved out of the East Garo Hills district to enhance public convenience and",
        imgUrl: "/cherrapunji.webp",
        url: "/meghalaya/north-garo-hills"
    },
    {
        name: "East Garo Hills",
        description: "The East Garo Hills district was established in 1976 as part of a reorganization of the larger Garo Hills district in Meghalaya, aimed at",
        imgUrl: "/cherrapunji.webp",
        url: "/meghalaya/east-garo-hills"
    },
    {
        name: "South Garo Hills",
        description: "South Garo Hills, established in 1992, is an administrative district in Meghalaya and the least populous in the state. Its headquarters is located",
        imgUrl: "/cherrapunji.webp",
        url: "/meghalaya/south-garo-hills"
    },
    {
        name: "West Khasi Hills",
        description: "West Khasi Hills, an administrative district in Meghalaya, was carved out of the larger Khasi Hills district on October 28, 1976. Its headquarters is",
        imgUrl: "/cherrapunji.webp",
        url: "/meghalaya/west-khasi-hills"
    },
    {
        name: "Eastern West Khasi Hills",
        description: "Eastern West Khasi Hills, one of the newest districts in Meghalaya, was created in 2021 after the bifurcation of West Khasi Hills. Located just 25",
        imgUrl: "/cherrapunji.webp",
        url: "/meghalaya/eastern-west-khasi-hills"
    },
    {
        name: "South West Khasi Hills",
        description: "Southwest Khasi Hills, carved out of the West Khasi Hills district on August 3, 2012, is a relatively new administrative district in Meghalaya.",
        imgUrl: "/cherrapunji.webp",
        url: "/meghalaya/south-west-khasi-hills"
    },
    {
        name: "Ri Bhoi",
        description: "Ri Bhoi is a captivating administrative district in Meghalaya, India, known for its rugged terrain and unique geographical features.",
        imgUrl: "/cherrapunji.webp",
        url: "/meghalaya/ri-bhoi"
    },
    {
        name: "East Khasi Hills",
        description: "East Khasi Hills, a vibrant administrative district in the Indian state of Meghalaya, is a picturesque area where the bustling town of Shillong",
        imgUrl: "/cherrapunji.webp",
        url: "/meghalaya/east-khasi-hills"
    },
    {
        name: "West Jaintia Hills",
        description: "West Jaintia Hills, an administrative district in Meghalaya, India, emerged from the bifurcation of the former Jaintia Hills District on July 31, 2012.",
        imgUrl: "/cherrapunji.webp",
        url: "/meghalaya/west-jaintia-hills"
    },
    {
        name: "East Jaintia Hills",
        description: "East Jaintia Hills, established on July 31, 2012, is a vibrant district in Meghalaya, India, with Khliehriat serving as its administrative",
        imgUrl: "/cherrapunji.webp",
        url: "/meghalaya/east-jaintia-hills"
    },
]

export interface CardType {
    icon: React.ReactNode,
    name: string,
    imgText?: string,
    imgUrl: string,
    description: string,
    url: string,
}

export const DestinationsData: CardType[] =[
    {
        icon: "",
        name: "Tura Peak",
        imgText: "",
        imgUrl: "/cherrapunji.webp",
        description: "",
        url: "",
    },
]
export const FestivalsData: CardType[] =[
    
]
export const FoodsData: CardType[] =[
    
]