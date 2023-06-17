
import React from "react";
import Feature from "./Feature";
import './Header.css';
import dings from "../img/ai.jpg"

function Player() {
  const buttonStyle = 
  "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]";
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[40rem] pt-[14rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* titld icon */}
      {/* <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />  */}
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem] ">
        
        {/* <span>
          <b>für dein nächstes Investment</b>
        </span>  */}
      </div> 
      {/* features  */}
      <div className="feature4 relative w-[30%] h-[20%]">
        <h1>PRELISTEN THE SONGS</h1>
        <br />
      <img src={dings}></img>
      </div>
      <div className="feature5 relative w-[70%] h-[20%]">
        <br />
      <h1>SYQEM</h1>
      <br />
      <h1>Artificial irrElephants</h1>
      <br />
      <h2>Out on 30th June 2023</h2>
      <br />
      <button className={buttonStyle+` bg-[#232A4E]`}> Pre Order</button>
      </div>
      <div className="feature6 relative w-[70%] h-[20%]">
        
      </div>
      {/* <div className="feature flex items-center justify-around mt-[2rem] w-[100%]">
    
      
        <Feature icon1='199€' icon='mw.jpeg' title="Für Immer und Jetzt" songtitle="By Mazze Wiesner" />
        <Feature icon1='299€' icon='tr.jpg' title="Ain't Gettin None" songtitle="By Tori Roe" />
        <Feature icon1='399€' icon='vf1.jpg' title="Flammenvogel" songtitle="By Vogelfrey" />
      </div> */}
    </div>
  );
}

export default Player;