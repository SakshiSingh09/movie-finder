import React from "react"
import { Link } from "react-router-dom"

export default function Sidebar(props){
    function setGenreNameToLowerCase(genreName){
        genreName = genreName.toLowerCase();
        if (genreName.indexOf(' ')>0){
            genreName = genreName.replaceAll(" ","");
        }
        return genreName;
    }
    if(props.genreList.length !== 0){
        return(
            <nav className="sidebar">
                <ul>
                <li key={0}><Link to="/">Home</Link></li>
                {props.genreList.map(genre => {
                    return (
                        <li key={genre.id}>
                        <Link to={`/${setGenreNameToLowerCase(genre.name)}`}>{genre.name}</Link>
                        </li>                        
                    )
                })}
                </ul>
            </nav>
        )
    }
    
    
}