import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// http://www.omdbapi.com/?i=tt3896198&apikey=b9d43a5f - api
//https://api.themoviedb.org/3/movie/550?api_key=45c19e5ad1a4792ab884744bb269265b - tmdb api key
//https://api.themoviedb.org/3/movie/top_rated?api_key=45c19e5ad1a4792ab884744bb269265b -> toprated