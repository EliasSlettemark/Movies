import React from 'react';
import Movie from "./components/Movie"

function App() {

  const [movies, setMovies] = React.useState()

  React.useEffect(() => {
fetch("https://api.themoviedb.org/3/discover/movie?api_key=3482f34ca6e1b06a28c6c32568dce1bf")
  .then(res => res.json())
  .then(data => makeMovies(data))
  }, [])

  function makeMovies(data){
    const movieElements = data.results.map(item => {
      return (
        <Movie
          title={item.title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
          overview={item.overview}
          key={item.id}
        />
      )
    })
    setMovies(movieElements)
  }

  function handleKeyDown(e){
    if(e.key === "Enter"){     fetch("https://api.themoviedb.org/3/search/movie?api_key=3482f34ca6e1b06a28c6c32568dce1bf&query=" + e.target.value)
      .then(res => res.json())
      .then(data => makeMovies(data))
    }
  }
  
  return (
     <div className="w-full h-max">
       <div className="w-full h-20 relative bg-[#23538c]">
         <input className="text-white absolute top-1/2 translate-y-[-50%] right-12 bg-transparent border-4 border-[#112D4E] rounded-full px-2 py-1 focus:outline-none focus:bg-[#112D4E]" placeholder="Search" onKeyDown={handleKeyDown}></input>
       </div>
      <div className="flex justify-center flex-wrap">
        {movies}
      </div>
    </div>
  );
}

export default App;