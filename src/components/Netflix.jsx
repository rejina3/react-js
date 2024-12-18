import seriesData from "../api/seriesData.json";
import color from "../api/color.json";
import { Color } from "./Color";
import { SeriesCard } from "./SeriesCard";
import { ProfileCardContent } from "./ProfileCardContent";
import { BtnDisplay } from "./Button";
import { useState } from "react";

const MovieSeries = () => {
  return (
    <>
      <ul className="grid grid-three-cols ">
        {seriesData.map((currEle) => {
          return <SeriesCard key={currEle.id} currEle={currEle} />;
        })}
      </ul>
    </>
  );
};

export const ColorCard = () => {
  return (
    <>
      {color.map((data) => {
        return <Color key={data.id} data={data} />;
      })}
    </>
  );
};

export const ProfileCard = () => {
  return (
    <>
      <ProfileCardContent
        name="Rejina"
        age={20}
        greetings={<h3>Hello, rejina How are you?</h3>}
      >
        <p>you are awsome</p>
      </ProfileCardContent>
    </>
  );
};


export const Button=()=>{
  const handleButtonClick=()=>{
      alert ("Thank you for clikcing me");
  }
  const handleButtonHover=()=>{
      alert ("Thank you for hovering me");
  }
  return(
<>
<BtnDisplay onClick={handleButtonClick} onMouseEnter={handleButtonHover}>
  </BtnDisplay>
</>
  );
};


export const IncrementDecrementButton=()=>{
  const [count, setCount] = useState(0);

// Increment function
const handleIncrement = () => {
  setCount((prevCount) => prevCount + 1); // Use previous state to increment
};

// Decrement function
const handleDecrement = () => {
  setCount((prevCount) => {
    if (prevCount > 0) {
      return prevCount - 1; // Decrement if count is greater than 0
    }
    return prevCount; // Return the same count if it's 0 or less
  });
};

  return(
    <>
    <div className="countNumber">
      <button className="btn" onClick={handleIncrement}>+</button>
      <span>{count}</span>
      <button className="btn" onClick={handleDecrement}>-</button>
    </div>
    </>
  )
}

export default MovieSeries;
