

// import './App.css'

import MovieSeries from "./components/Netflix";
import "./components/card.css";


export const App=()=> {
 
  return (
    <>
    <section className="container"> 
      <h1 className="head">List of Netflix Series</h1>
    <MovieSeries />
    {/* <ColorCard />
    <ProfileCard /> */}
    </section>
    </>
  )
}

export const Quiz=()=>{
  const students=[3];
  return (
    <>
    {/* 1st method
    <p>{students.length===0 && "No students found"}</p> */}
    <p>{!students.length && "No students found"}</p>
    <p>Number of students: {students.length}</p>
    </>
  )

}





