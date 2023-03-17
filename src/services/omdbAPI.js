// fetch data from API
export const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=47c50941&t=${searchTerm}`)
    //   const data =  await response.json();
    //   setMovie(data);
    const data = await response.json();
    console.log(data)
    return data;
      
    } catch (error) {
      console.error(error)
    }
  }