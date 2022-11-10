import React from "react";
import Birthday from "./Components/Birthday/Birthday";
import Colors from "./Components/ColorsGenerator/Colors";
import Experiences from "./Components/Experience/Experiences";
import LoremGenerator from "./Components/Lorem Genarator/LoremGenerator";
import Menu from "./Components/Menu/Menu";
import Question from "./Components/Question/Question";
import Revews from "./Components/Revews/Revews";
import Tours from "./Components/tours/Tours";


function App() {
  return (
    <div className=''>
      {/* <Pages></Pages> */}
      <Birthday></Birthday>
      <Tours></Tours>
      <Revews></Revews>
      <Question></Question>
      <Menu></Menu>
      <Experiences></Experiences>
      <LoremGenerator></LoremGenerator>
      <Colors></Colors>
    </div>
  );
}

export default App;
