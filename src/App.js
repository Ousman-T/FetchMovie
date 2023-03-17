import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { useState } from 'react';


function App() {
  // store the data about a movie
  const [movie, setMovie] = useState(null);
  // fetch data from API
  const getMovie = async (searchTerm) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=47c50941&t=${searchTerm}`)
    const data =  await response.json();
    setMovie(data);
  }
  return (
    <div className="App">
      <Form movieSearch={getMovie}/>
    <div style={{left:"30%", position:"relative"}}>
      {movie && <MovieDisplay movie={movie}/>}
    </div>
    </div>
  );
}

export default App;
