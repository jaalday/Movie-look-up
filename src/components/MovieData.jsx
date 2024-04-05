import { useState, useEffect } from "react";
// import './App.css'

const MovieData = ({ searchValue }) => {
  console.log(searchValue);
  const [data, setData] = useState([]);



  const fetchData = async (searchValue) => {

    const url2 = `https://www.omdbapi.com/?s=${searchValue}&apikey=34535333`;
    const apiData = await fetch(url2).then((response) => response.json());
    console.log("data: ", apiData);
    setData(apiData.Search);
  };
  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue]);

  return (
    <>
      <div>
        {!!data.length &&
          data.map((movie) => {
            return <img className="image" src={movie.Poster} key={movie.imdbID} />
                
            
          })}
      </div>
    </>
  );
};

export default MovieData;
