import * as React from "react";
import "../index.css";

import { motion } from "framer-motion";
import { Data } from "../src/data";
import {Divider} from "@mui/material";
import {Link} from "react-router-dom";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";

const Travaux16 = () => {
  const url : number = parseInt(window.location.href.slice(30)) -1;
  const dataWithoutFirst = Data[url].pics.slice(1);

  return (
      
        <div>
         
         <div className="central">
            <div className="central-pix">
              <img src={Data[url].pics[0]} className="pix" alt="" />
              <div className="text">
                <div className="text-left">
                  <div style={{display:"flex",flexWrap:"wrap"}}>
                  <p className="text-content-titre">{Data[url].titre}</p>
                  <p className="text-content-soustitre">
                  {Data[url].subtitle}</p>
                  </div>
                 
                  <p className="text-content-credit">
                    {Data[url].credit}
                  </p>
                  
                </div>
                <div className="text-right">
                  <p className="text-content-des"> 
                    {Data[url].desc}
                  </p>
                </div>
              </div>
              <Divider className="divider1-white2" />
              {dataWithoutFirst.map((pic, index) => (
                  <img key={index} src={pic} className={index === 0 ? "pixFirst" : "pix"} alt="" />
              ))}


            </div>
          </div>
         
        </div>

  );
};
export default Travaux16;