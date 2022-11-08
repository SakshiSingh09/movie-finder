import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    const navigate = useNavigate();
    function clearMovies(){
        navigate("/");
    }
  return (
    <div className='alert'>
      <p>Not found</p>
      <box-icon name='x' color="white" onClick={clearMovies}></box-icon>
    </div>
  )
}

export default Error
