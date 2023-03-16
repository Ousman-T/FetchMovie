

function MovieDisplay(props){
    const {movie} = props;
    return (
        <div>
    <h1>Your Searched Movie</h1>
    <img src={movie.Poster}/>
    <h2>{movie.Title}</h2>
    <h6>{movie.Director}</h6>
    <h6>{movie.Actors}</h6>
    <h6>{movie.Genre}</h6>
    <h6>{movie.Plot}</h6>
    <h6>{movie.Year}</h6>
    <h6>{movie.BoxOffice}</h6>
    </div>
    )    
}
export default MovieDisplay;
    


        



    
    
