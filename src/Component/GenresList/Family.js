import React, { useEffect, useState } from "react"

export default function Family(){
    const [familyMovies, setfamilyMovies] = useState([]);
    async function getfamilyMovies(){
        const url = "https://api.themoviedb.org/3/discover/movie?api_key=45c19e5ad1a4792ab884744bb269265b&with_genres=10751";
        const responsedata = await fetch(url).then(response => response.json());
        setfamilyMovies(responsedata.results);
      }
    
    useEffect(()=>{
        getfamilyMovies();
        document.title = 'Family Movies';
    },[])

    function getReleaseYear(date){
        let day = date.split("-");
        let year = day[0];
        return year;
    }

    if (familyMovies.length !== 0){
        return(
            <div>
                <h1 className="right-heading">Family Movies</h1>           
                <div className="movieList">
                {familyMovies.map(movie => {
                    return (
                        <div className="movieContent" key={movie.id}>
                        <div className="movieCard-top-section">
                            <img src={"https://image.tmdb.org/t/p/original"+movie.poster_path} alt="movie"></img>
                           </div>
                           <div className="movieCard-bottom-section">
                           <h4>{(movie.title).length>30?(movie.title).substring(0,30)+" ...":movie.title}</h4>
                               <div className="rating-row">
                               <h5>&#9675; {getReleaseYear(movie.release_date)}</h5>
                               <div className="rating">
                               <box-icon type='solid' color="gold" size="xs" name='star'></box-icon>
                               <h5>({movie.vote_count})</h5>
                               <h5>{movie.vote_average}</h5>
                               </div>
                               </div> 
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
}