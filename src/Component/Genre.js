import React from "react";
import Drama from "./GenresList/Drama";
import Action from "./GenresList/Action";
import Animation from "./GenresList/Animation";
import Adventure from "./GenresList/Adventure";
import Comedy from "./GenresList/Comedy";
import Crime from "./GenresList/Crime";
import Documentary from "./GenresList/Documentary";
import Family from "./GenresList/Family";
import Fantasy from "./GenresList/Fantasy";
import History from "./GenresList/History";
import Horror from "./GenresList/Horror";
import Music from "./GenresList/Music";
import Mystery from "./GenresList/Mystery";
import Romance from "./GenresList/Romance";
import ScienceFiction from "./GenresList/ScienceFiction";
import Thriller from "./GenresList/Thriller";
import TVMovie from "./GenresList/TVMovie";
import War from "./GenresList/War";
import Western from "./GenresList/Western";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

export default function Genre(props){
    return(
        <Routes>
          <Route path="/" exact element={<Home upComingMovieList={props.upComingMovieList} topRatedMovieList={props.topRatedMovieList}/>}></Route>
          <Route path="/drama" exact element={<Drama />}></Route>
          <Route path="/action" exact element={<Action />}></Route>
          <Route path="/adventure" exact element={<Adventure />}></Route>
          <Route path="/animation" exact element={<Animation />}></Route>
          <Route path="/comedy" exact element={<Comedy />}></Route>
          <Route path="/crime" exact element={<Crime />}></Route>
          <Route path="/documentary" exact element={<Documentary />}></Route>
          <Route path="/family" exact element={<Family />}></Route>
          <Route path="/fantasy" exact element={<Fantasy />}></Route>
          <Route path="/history" exact element={<History />}></Route>
          <Route path="/horror" exact element={<Horror />}></Route>
          <Route path="/music" exact element={<Music />}></Route>
          <Route path="/mystery" exact element={<Mystery />}></Route>
          <Route path="/romance" exact element={<Romance />}></Route>
          <Route path="/sciencefiction" exact element={<ScienceFiction />}></Route>
          <Route path="/tvmovie" exact element={<TVMovie />}></Route>
          <Route path="/thriller" exact element={<Thriller />}></Route>
          <Route path="/war" exact element={<War />}></Route>
          <Route path="/western" exact element={<Western />}></Route>
        </Routes>        
    )
}