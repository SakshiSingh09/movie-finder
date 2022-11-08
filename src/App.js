import React, {useEffect, useState} from "react";
import './App.css';
import SearchForm from "./Component/SearchForm";
import Sidebar from "./Component/Sidebar";
import Genre from "./Component/Genre";
import SearchedMovies from "./Component/SearchedMovies";
import { useNavigate } from "react-router-dom";

function App() {
  const [upcomingMovie, setupcomingMovie] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");  
  const [isShowingMovie, setIsShowingMovie] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    window.addEventListener('load',function reloadPage(){
      navigate('/');
    })
    async function getUpComingMovie(){
      const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=45c19e5ad1a4792ab884744bb269265b";
      const responsedata = await fetch(url).then(response => response.json());
      setupcomingMovie(responsedata.results)
    }
    async function getTopRatedMovie(){
      const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=45c19e5ad1a4792ab884744bb269265b";
      const responsedata = await fetch(url).then(response => response.json());
      setTopRatedMovie(responsedata.results);
    }
    const getGenreList = async () =>{
      const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=45c19e5ad1a4792ab884744bb269265b";
      const response = await fetch(url).then(res => res.json());
      setGenreList(response.genres);
  }
    const getMovieRequest = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=45c19e5ad1a4792ab884744bb269265b&language=en-US&query=${movieName}&page=1&include_adult=false`;
      const responseJson = await fetch(url).then(response => response.json());
      setMovies(responseJson);
  }    
    getUpComingMovie();
    getTopRatedMovie();
    getGenreList();
    getMovieRequest();
  },[movieName])

  return (
    <div className="movie-app">
      <div className="header">
        <h1 className="heading">GoMovie</h1>
        <SearchForm setMovieName={setMovieName} setIsShowingMovie={setIsShowingMovie}/>
      </div>
      <div className="main">
        <Sidebar genreList={genreList}/>
        <div className="right">
          {isShowingMovie ? <SearchedMovies movies={movies} setIsShowingMovie={setIsShowingMovie}/>:
            <Genre upComingMovieList={upcomingMovie} topRatedMovieList={topRatedMovie}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
