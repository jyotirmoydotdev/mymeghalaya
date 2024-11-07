export interface DistrictDataType {
    id: string;
    name: string;
    description: string,
    url: string,
    about: string;
    img: {
        url: string;
        blurDataUrl: string;
        name: string;
        location: string;
    }
}