import React from "react";
import Birthday from "./Components/Birthday/Birthday";
import Colors from "./Components/ColorsGenerator/Colors";
import Experiences from "./Components/Experience/Experiences";
import Grocery from "./Components/Grocery/Grocery";
import LoremGenerator from "./Components/Lorem Genarator/LoremGenerator";
import Menu from "./Components/Menu/Menu";
import Nav from "./Components/Menu/Nav";
import Navbar from "./Components/Navbar/Navbar";
import Question from "./Components/Question/Question";
import Revews from "./Components/Revews/Revews";
import SidebarModel from "./Components/SideBarModel/SidebarModel";
import Tours from "./Components/tours/Tours";


function App() {
  return (
    <div className=''>
      {/* <Pages></Pages> */}
      <SidebarModel></SidebarModel>
      {/* 
      <Navbar></Navbar>
      <Birthday></Birthday>
      <Tours></Tours>
      <Revews></Revews>
      <Question></Question>
      <Menu></Menu>
      <Experiences></Experiences>
      <LoremGenerator></LoremGenerator>
      <Colors></Colors> 
      <Grocery></Grocery>
      */}
    </div>
  );
}

export default App;
