import seriesData from "../api/seriesData.json";
import color from "../api/color.json";
import { Color } from "./Color";
import { SeriesCard } from "./SeriesCard";
import { ProfileCardContent } from "./ProfileCardContent";
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

export default MovieSeries;
