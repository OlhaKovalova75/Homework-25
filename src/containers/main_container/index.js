import main_container from "../../assets/image/casper.jpg";
import "./style.css";
import Input from "../../components/Input";
import React from "react";
import Sidebar from "./sidebar/sidebar";


const CentralContainer = () => {
  const getName = () => "TEST";
  return (
    <div className="container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />

      <div className="main-container">
        <img src={main_container} className="main_logo" alt="logo" />
        <h2>Hello! I am Casper!</h2>
        <p>
          Not much is known about how Casper came to be a ghost, or how he did
          end up with the Ghostly Trio. According to the 1995 feature film
          Casper, he died when contracted pneumonia from playing out in the cold
          for too long, but so far, that's the only version there is.
        </p>
        <label>Write down your name</label>
        <Input name={getName()} />
      </div>
    </div>
  );
};

export default CentralContainer;
