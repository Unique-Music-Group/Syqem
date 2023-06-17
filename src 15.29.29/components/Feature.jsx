import {React, useState} from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";


function Feature({ icon, title, songtitle, icon1 }) {
  const variant={
    true:{
      transform:"scale(1)",
    },
    false:{
      transform: "scale(0.5)"
    }
  };

  const [elementIsVisible, setElementIsVisible] = useState(false);


  return (
   
    <VisibilitySensor
    onChange={(isVisible) => setElementIsVisible(isVisible)}
    // minTopValue={100}
    >

      <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
        {/* icon */}
        <motion.div
          variants={variant}
          transition={{
            duration:1,
            type:"ease-out",
          }}
          // animate={`${elementIsVisible}`}
          className="icon bg-[#081730] rounded-2xl p-4"
        >
          <img
            src={require(`../img/${icon}`)}
            alt=""
            className="w-[16rem]"
          />
          
        </motion.div>

        <span className="mt-5">{title}</span>
        <span className="mt-3">{songtitle}</span>

        <span className="text-[#707070] mt-4">
          Nutze jetzt die Chance und sicher deine Shares an Mazze Wiesner's neuem Album "Für Immer und jetzt". 
        </span>

        <span className="text-[#000] underline mt-[2rem] hover:cursor-pointer">
         Ab {icon1}
        </span>
      </div>
    </VisibilitySensor>
  );
}

export default Feature;