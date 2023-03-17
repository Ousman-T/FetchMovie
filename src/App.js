import './App.css';
import { getMovie } from '../src/services/omdbAPI'
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { useState, useEffect } from 'react';
import BasicExample from './components/Card';


function App() {
  // store the data about a movie
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovie('Ponyo');
      console.log(data);
      setMovie(data)

    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <Form movieSearch={getMovie} setMovie={setMovie} />
      <MovieDisplay movie={movie} />
    </div>

  );
}

export default App;
