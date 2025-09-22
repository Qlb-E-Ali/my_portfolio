import React from "react";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import ProjectSelection from "./Pages/ProjectSelection";
import ClientReview from "./Pages/ClientReview";


const App = () => {


  return (
    <div>
      <Navbar/>
      <Home/>
      <Portfolio/>
      <ProjectSelection/>
      <ClientReview/>
    </div>
  )
}

export default App