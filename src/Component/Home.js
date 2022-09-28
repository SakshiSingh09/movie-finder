import React, { useEffect } from "react";
import 'boxicons';

export default function Home(props){
    function getReleaseYear(date){
        let day = date.split("-");
        let year = day[0];
        return year;
    }
    useEffect(()=>{
        document.title = 'GoMovie - Home';
    })
    if (props.upComingMovieList.length !== 0 && props.topRatedMovieList.length !== 0){
        return(
            <>
            <div>
                <h1 className="right-heading">UpComing Movies</h1>           
                <div className="movieList">
                {props.upComingMovieList.map(movie => {
                    return (
                        <div className="movieContent" key={movie.id}>
                        <div className="movieCard-top-section">
                            <img src={"https://image.tmdb.org/t/p/original"+movie.poster_path} alt="movie"></img>
                            <p className="movieOverview">{movie.overview}</p>
                           </div>
                           <div className="movieCard-bottom-section">
                           <h4>{(movie.title).length>30?(movie.title).substring(0,30)+" ...":movie.title}</h4>
                               <div className="rating-row">
                               <h5>&#9675; {movie.release_date}</h5>
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
            <div>
                <h1 className="right-heading">TopRated Movies</h1>           
                <div className="movieList">
                {props.topRatedMovieList.map(movie => {
                    return (
                        <div className="movieContent" key={movie.id}>
                        <div className="movieCard-top-section">
                            <img src={"https://image.tmdb.org/t/p/original"+movie.poster_path} alt="movie"></img>
                            <p className="movieOverview">{movie.overview}</p>
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
            </>
        )
    }
}