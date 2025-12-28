"use client"
import { Afar } from "../../lib/inference";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { fetchdata } from "../../lib/apicall";


export function Category({ category, title }: { category: string, title: string }) {
    const { data: PopularMovie, error } = useSuspenseQuery({
        queryKey: ["myapi", category],
        queryFn: () => fetchdata(category),
    })

    return (
        <>
            {error
                ?
                <div>An error occured</div>
                :
                <section>

                    <h1>{title}</h1>
                    <div className="movie_cont">
                        {PopularMovie?.results?.map((results: Afar) => {
                            return <div key={results.id} className="movies">
                                <Link className="link" href={`/details/${results.id}`}>
                                    <Image src={`https://image.tmdb.org/t/p/w500/${results.poster_path}`} width={150} height={220} alt={results.title} />
                                    <p className="title">{results.title}</p>
                                </Link>
                            </div>
                        })}
                    </div>
                </section>
            }
        </>
    )
}

