"use client"
import { useSuspenseQuery } from "@tanstack/react-query";
// import { credits, getMovieById } from "@/app/lib/ApiCall";
// import type { Cast, Genre } from "@/app/lib/interface";
import Image from "next/image";
import { useParams } from "next/navigation";
import '../../styles/details.css'
import { Suspense } from "react";
import DetailSkeleton from "../../ui/skeleton/details";
import { getMovieId } from "../../lib/apicall";

function DetailMovie() {
    const movieId = useParams();
    const id = movieId.id as string;
    const { data } = useSuspenseQuery({
        queryKey: ['details', id],
        queryFn: () => getMovieId(id)
    })

    return (
        <>
            <section className='details'>
                <div className='poster_div'>
                    <Image src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} width={300} height={300} className="poster_img" alt={"data?.title"} />
                    {/* <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} className='poster_img' alt={data?.title} /> */}
                    <div className='title-cont'>
                        <h1>{data?.title}</h1>
                        <p className='movie_details'>{data?.overview}</p>
                        <p className='movie_details'><b>Rating:</b> {data?.vote_average} <span className='fade'>/ 10</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; <b>Popularity:</b> {data?.popularity} </p>
                    </div>
                </div>
                <div>
                    <p className='movie_details'><b>Release Date:</b> {data?.release_date}</p>
                    <p className='movie_details'><b>Votes:</b> {data?.vote_count}</p>
                    <p className='movie_details'><b>Adult rating:</b> {data?.adult === false ? "No rated PG" : "Rated PG +16"}</p>
                    <p className='movie_details'><b>Price of movie:</b> {data?.budget}</p>
                </div>
            </section>

        </>
    )
}


export default function MovieDetails() {
    return (
        <Suspense fallback={<DetailSkeleton />}>
            <DetailMovie />
        </Suspense>
    )
}