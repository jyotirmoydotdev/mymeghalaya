import axios from "axios"

export const fetchDestinations = async ({ pageParam }: { pageParam: number }) => {
    const res = await axios.get("/api/destinations?page=" + pageParam)
    return res.data
}