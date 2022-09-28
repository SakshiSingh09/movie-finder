import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm(props){
    const [inputValue, setValue] = useState("");
    const navigate = useNavigate();

    const crossStyle = {
        visibility: inputValue.length>0?'visible':'hidden'
    }

    const handleOnChange = (event) =>{
        setValue(event.target.value);
        document.title = 'Search';
    }

    const handleReset = () => {
        setValue('');
    }
 
    const handleNavigation = () => {
            navigate("/");
        }
    
  
    return(
        <div className="searchSection">
            <input className="searchBar" type="text" placeholder="Enter Movie Name" name="movie" value={inputValue} onChange={handleOnChange}></input>
            <box-icon name='x' onClick={handleReset} style={crossStyle}></box-icon>
            <box-icon name='search' color="white" type="regular" size="sm" 
            onClick={
                () => {
                    props.setMovieName(inputValue);
                    props.setIsShowingMovie(true);
                    setValue("");
                    handleNavigation();
                }
                
                }></box-icon>
        </div>
    );
}