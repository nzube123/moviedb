const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0021b5a28c9efe4011629cc1f6c2f89e';

export async function PopularMovie() {
    try {
        const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!res.ok) {
            throw new Error(`HTTP error is ${res.status}`);

        }
        const data = await res?.json();
        return data;
    } catch (error) {
        console.error("fetch error:", error);
        return { error: "Failed to fetch movies" }
    }
}
