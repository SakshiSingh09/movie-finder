import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Movie from "./Movie";

export default function Genre(props){
    return(
        <Routes>
          <Route path="/" exact element={<Home upComingMovieList={props.upComingMovieList} topRatedMovieList={props.topRatedMovieList}/>}></Route>
          <Route path={`/:id/:name`} element={<Movie />}/>
        </Routes>        
    )
}