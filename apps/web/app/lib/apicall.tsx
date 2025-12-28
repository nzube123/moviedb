export async function fetchdata(category: string) {
    switch (category) {
        case 'popular':
            return await popular();
            break;

        case 'top-rated':
            return await topRated();
            break;

        default:
            break;
    }
}


async function popular() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/popular`);
    return res.json();
}

async function topRated() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/top-rated`);
    return res.json();
}

export const getMovieId = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/movie/${id}`);
    return res.json()
}