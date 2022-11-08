import React, { useEffect, useState } from "react"
import Error from "./Error";
import { useParams  } from "react-router-dom"

export default function Movie(){
    const params = useParams();
    const [genreMovies, setGenreMovies] = useState([]);
    const [error, setError] = useState(false)
    
    useEffect(()=>{
        async function getGenreMovies(){
            try{
                const url = `https://api.themoviedb.org/3/discover/movie?api_key=45c19e5ad1a4792ab884744bb269265b&with_genres=${params.id}`;
                const responsedata = await fetch(url).then(response => response.json());
                setGenreMovies(responsedata.results);
            }catch(error){
                setError(true);
            }
          }
          
        getGenreMovies();        
        document.title = `${params.name} movies`;
    },[params.id, params.name])

    function getReleaseYear(date){
        let day = date.split("-");
        let year = day[0];
        return year;
    }
    
    if(error){
        return(
            <Error />
        )
    }
    if (genreMovies.length !== 0){
        return(
            <div>
                <h1 className="right-heading">Documentary Movies</h1>           
                <div className="movieList">
                {genreMovies.map(movie => {
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
