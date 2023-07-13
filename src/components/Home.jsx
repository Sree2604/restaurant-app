import React from "react";
import Navigation from "./Navigation";
import Jumbo from "./Jumbo";
import Carosel from "./Carosel";
import "./Home.css";



  
const Home = () => {
  return (
   <div>
    <Navigation/>
    <br></br>
    <br></br>
    <Jumbo/>
    <br></br>
    <br />
    <Carosel/> 
   </div>
  );
};
  
export default Home;