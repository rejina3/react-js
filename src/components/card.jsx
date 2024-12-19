import React, { useState } from "react";

const MovieSeries = () => {
  const name = "Avengers hehe";
  const age = 26;
  const [availability, setAvailability] = useState("");

  const canWatch = () => {
    return age >= 18 ? "watch now" : "not available";
  };
  
  const handleCheck = () => {
    setAvailability(canWatch());
  };

  return (
    <>
    <img src="movie.png" height="500" width="500"/>
      <h1>Name of the movie: {name}</h1>
      <h2>Country: United States</h2>
      <h2>Genre: Action</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio
        iure quo odit inventore quam adipisci aperiam qui fuga consequuntur
        officiis a minima architecto laborum esse, nam dignissimos ratione et.
      </p>
      <button onClick={handleCheck}>Check Availability</button>
      {availability && <p>{availability}</p>}
    </>
  );
};

export default MovieSeries;

