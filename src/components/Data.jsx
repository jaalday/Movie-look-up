import { useState } from "react";

function Data({ action }) {
  const [myInput, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const generateList = (e) => {
    e.preventDefault();
    console.log(myInput);
    action(myInput);
  };

  return (
    <>
      <div className="card">
        <h1>Movie Look up</h1>
        <form onSubmit={generateList}>
          <label>
            Type in a movie :
            <input
              type="text"
              name="myInput"
              value={myInput}
              onChange={handleChange}
            />
            <button type="submit">Search</button>
          </label>
        </form>
      </div>
    </>
  );
}

export default Data;
