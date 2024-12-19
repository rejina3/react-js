
export const SeriesCard = ({currEle}) => {
  const {id,img_url,name,country,genre,ratings,movie_url}=currEle;
  const btn_style={
    backgroundColor:`${ratings>=4.5?"#6C63FF":"#F4A261"}`,
    color:"white",
    border:"none",
    padding:"0.5rem"
  }
 const ratingClass= ratings>=4.5?"super":"average";
const handleButtonClick=()=>{
  const hello=prompt("What's your age");
  if (hello<18){
alert("sorry, you are not eligible to watch this movie");
event.preventDefault();

  }
  else{
    alert("Enjoy your movie!");
  }
}
  return (
    <>
    
<li key={id} className="card">
    <img src={img_url} height="250" width="100%"/>
    <div className="cardContent">
      <h1>Name: {name}</h1>
      <h4>Country: {country}</h4>
      <h4>Genre: {genre}</h4>
      <p>
       Ratings:<span className={`rating ${ratingClass}`}>{ratings}</span>
      </p>
      <a href={movie_url}><button style={btn_style} onClick={()=>handleButtonClick()}>Watch now</button></a>

      </div>
      </li>
        
    </>
  );
};



