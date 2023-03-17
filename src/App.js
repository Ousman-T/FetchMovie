import './App.css';
import { getMovie } from '../src/services/omdbAPI'
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { useState, useEffect } from 'react';


function App() {
  // store the data about a movie
  const [movie, setMovie] = useState(null);
  // // fetch data from API
  // const getMovie = async (searchTerm) => {
  //   try {
  //     const response = await fetch(`https://www.omdbapi.com/?apikey=47c50941&t=${searchTerm}`)
  //     const data =  await response.json();
  //     setMovie(data);
      
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

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
      <Form movieSearch={getMovie} setMovie={setMovie}/>
    <div style={{left:"30%", position:"relative"}}>
      <MovieDisplay movie={movie}/>
    </div>
    </div>
  );
}

export default App;
