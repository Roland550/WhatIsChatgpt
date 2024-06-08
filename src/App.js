import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Feature,
  WhatGPT4,
  Header,
} from "./containers";
import { Cta, Brand, Navbar , } from "./components";

const App = () =>{
  return(
    <div className="App">
    <div className="gradient_bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT4 />
    <Feature />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
  )
}
export default App
