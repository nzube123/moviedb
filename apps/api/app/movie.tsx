// import { URL } from "url";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0021b5a28c9efe4011629cc1f6c2f89e';

export async function getmoviebyid(id: number) {
    try {
        const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
        // console.log("url is;", url);
        
        if (!res.ok) {
            throw new Error(`HTTP error is ${res.status}`);
        }
        const data = await res?.json();
        return data;
    } catch (error) {
        console.error("fetch error:", error);
        return { error: "Failed to fetch movie" }
    }
}





