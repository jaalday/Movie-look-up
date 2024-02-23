import { useState } from "react";
import Data from "./components/Data";
import MovieData from "./components/MovieData";

import "./App.css";

function App() {
  const [movies, setMovies] = useState("");

  const getFormData = (title) => {
    setMovies(title);
  };

  return (
    <>
      <Data action={getFormData} />
      {!!movies && <MovieData searchValue={movies} />}
    </>
  );
}

export default App;
