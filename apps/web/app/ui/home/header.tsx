"use client"
export default function HeaderJSX() {
    return (
        <>
            <center>
            <header className="header_cont">
                <h1>Discover interesting movies by using our movie database</h1>
                <p>Explore our vast collection of movies and find interesting, exciting content.</p>
                <p className="search_cont">
                    <input className="search" type="search" placeholder="Search for movies..." />
                    <button className="search_btn">Search</button>
                </p>
            </header>
        </center>
        </>
    )
}