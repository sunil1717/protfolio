import React from "react";

import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import FireflyScene from "./components/FireflyScene"
const App = () => {
  return (
    <div  className="relative min-h-screen">
     
       <div className="absolute inset-0 z-0">
         <FireflyScene />
      </div>
      
      <div className="relative z-10 " >
        <Navbar />
        <Homepage />
      </div>
    </div>
  );
};

export default App;
