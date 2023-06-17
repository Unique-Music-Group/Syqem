import { React, useState } from "react";
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import './Header.css';
import dings from "../img/ai.jpg"


function Hero() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };
  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };
  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  }
  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };
  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[0rem] w-[100%] h-[46rem] relative z-[3]">
        {/* left side */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
          <span>Artificial irrElephants</span>{" "}
          <span>
            <b>NEW EAR MOVIE </b>
          </span>
          <span className="text-[15px] text-[#525D6E]">
            Get your copy of SYQEM's brand new Ear Movie Artificial irrElephants 
            <br />
            in the shop of your trust.
          </span>
          {/* download ads */}
          <div>
            <span className="text-[13px]">OUT ON 30th June 2023</span>
            <DownloadAds />
          </div>
        </div>
        {/* right side */}
        <div className="images relative w-[30%] h-[20%]">
        
           {/* <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../img/backgraphics.png")}
            alt=""
            className="absolute top-[-8rem] left-[19rem]"
          /> */}
          <img src={dings}></img>
          {/*<img
            src={require("../img/1463.png")}
            alt=""
            className="absolute top-[-15rem] h-[34rem] left-[100%]" */}
          {/* /> */}
          {/* <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src={require("../img/p 2.png")}
            alt=""
            className="absolute left-[235px] top-[94px] w-[175px]"
          />
          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../img/p 3.png")}
            alt=""
            className="absolute w-[5rem] left-[13rem] top-[12rem]"
          />
          <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../img/p 4.png")}
            alt=""
            className="absolute w-[5rem] left-[12.5rem] top-[12rem]"
          />   */}
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default Hero;