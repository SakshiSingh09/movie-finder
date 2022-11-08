import React from "react";


export default function SearchedMovies(props){
    function clearMovies(){
        props.setIsShowingMovie(false);
        document.title = 'GoMovie';
    }
    if(typeof props.movies.results !== 'undefined' && props.movies.results.length !== 0){
        if (typeof props.movies.results !== 'undefined'){
            const movieList = props.movies.results.filter(movie => {
                if (movie.poster_path !== null){
                    return movie;
                }
            })
            function getReleaseYear(date){
                let day = date.split("-");
                let year = day[0];
                return year;
            }
            
            return (
                <div className="requestedMoviePage">
                <box-icon name='x' color="white" onClick={clearMovies}></box-icon>
                <h1 className="right-heading">Movie You Searched...</h1>
                <div className="movieList">
                {movieList.map((movie) => {
                    return(
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
    }else if(props.movies.total_results === 0){
        return(
            <div className="erroDivRequestedMoviePage">
                <box-icon name='x' color="white" onClick={clearMovies}></box-icon>
                <h1 className="errorDiv">Oops! Can't find this movie</h1>
            </div>
        )
    }
}