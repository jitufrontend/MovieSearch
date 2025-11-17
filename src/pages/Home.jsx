import { useState, useEffect, useRef } from "react";
import MovieList from "../components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const fetchMovies = async (query) => {
    setLoading(true);
    const res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=e3a83ebc&s=${query}`
    );
    const data = await res.json();
    console.log(data);
    setMovies(data.Search || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies("avatar");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) fetchMovies(query);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input
          ref={inputRef}
          className="searchInput"
          placeholder="Search for a movie..."
        />
        <button type="submit">Search 🔎</button>
      </form>
      {loading ? <p>loading ...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
