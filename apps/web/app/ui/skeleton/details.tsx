export default function DetailSkeleton() {
    return (
        <>
        <section className='details'>
                            <div className='poster_div'>
                                <div className="imageskeleton"></div>
                                {/* <img src={`https://image.tmdb.org/t/p/w500${?.poster_path}`} className='poster_img' alt={?.title} /> */}
                                <div className='title-cont'>
                                    <h1>Title</h1>
                                    <p className='movie_details'>Overview</p>
                                    <p className='movie_details'><b>Rating:</b> VoteAVerage <span className='fade'>/ 10</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; <b>Popularity:</b> popularity </p>
                                </div>
                            </div>
                            <div>
                                <p className='movie_details'><b>Genres:</b> genre</p>
                                <p className='movie_details'><b>Release Date:</b> release_date</p>
                                <p className='movie_details'><b>Votes:</b> vote_count</p>
                                <p className='movie_details'><b>Adult rating:</b> Rateing pg or not</p>
                                <p className='movie_details'><b>Price of movie:</b> Budget</p>
                                <div className='movie_details cast'><b>Top Cast:</b>
                                    <div className="cast_details">
                                            <div className="item_cast">
                                                <div className="castpic"></div>
                                                {/* <Image className="cast_profile" src={`https://image.tmdb.org/t/p/w200${cast?.profile_path}`} width={200} height={170} alt={cast?.name} /> */}
                                                {/* <img className="cast_profile" src={`https://image.tmdb.org/t/p/w200${cast?.profile_path}`} alt={cast?.name} /> */}
                                                <div className="side_details">
                                                    <p>castname</p>
                                                    <p>castcharacter</p>
                                                </div>
                                            </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </section>
        </>
    )
}