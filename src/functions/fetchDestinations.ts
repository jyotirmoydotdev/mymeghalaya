import axios from "axios"

export const fetchDestinations = async ({ pageParam }: { pageParam: number }) => {
    const res = await axios.get("/api/v1/destinations?page=" + pageParam)
    return res.data
}