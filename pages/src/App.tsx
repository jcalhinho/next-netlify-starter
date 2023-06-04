import { AnimatePresence, motion } from "framer-motion";
import { url } from "inspector";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import {
  Routes,
  Route,
  Outlet,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";
import Contact from "../components/Contact";
//import Container from "./components/Container";
import Nicocarmine from "../components/Nicocarmine";
import Travaux from "../components/Travaux";
import Travaux1 from "../components/Travaux1";
import Travaux10 from "../components/Travaux10";
import Travaux11 from "../components/Travaux11";
import Travaux12 from "../components/Travaux12";
import Travaux13 from "../components/Travaux13";
import Travaux14 from "../components/Travaux14";
import Travaux15 from "../components/Travaux15";
import Travaux16 from "../components/Travaux16";
import Travaux17 from "../components/Travaux17";
import Travaux18 from "../components/Travaux18";
import Travaux19 from "../components/Travaux19";
import Travaux2 from "../components/Travaux2";
import Travaux20 from "../components/Travaux20";
import Travaux3 from "../components/Travaux3";
import Travaux4 from "../components/Travaux4";
import Travaux5 from "../components/Travaux5";
import Travaux6 from "../components/Travaux6";
import Travaux7 from "../components/Travaux7";
import Travaux8 from "../components/Travaux8";
import Travaux9 from "../components/Travaux9";

export default function App() {
  const location = useLocation();
const [nextRoute,setnextRoute] =useState(true);

   
  const url0: number = parseInt(location.pathname.slice(9));
  let url: number | string = parseInt(location.pathname.slice(9)) - 1;
  let url2: number | string = parseInt(location.pathname.slice(9)) + 1;


  const calcurl = () => {
    if (url0 === 1) {
      url = 20;
      url2 = 2;
    }
    if (url0 === 20) {
      url = 19;
      url2 = 1;
    }
  };
  calcurl();

  


  function Layout() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
  function Layout2() {
    if(location.pathname === "/travaux"){
       return (
      <div>
        {/* <div className="container"> */}
          <motion.div 
                           initial={{y:window.innerHeight}}
                            animate={{y: 0 , transition:{duration:0.8}}}
                           // exit={{y: window.innerHeight , transition:{duration:0.8}}}
                            
                         
    
                >
          <div className="top-left">
            <div className="top-left-ensemble">
              <Link className="top-left-contact" to="/contact">
                contact
              </Link>
              <Link className="top-left-nico" to="/">
                nicocarmine
              </Link>
            </div>
            
          </div></motion.div>
          {
            //Check if message failed
            location.pathname === "/travaux" || location.pathname === "/contact" ? null : (
              <Link to={"/travaux/" + url}>
                <div id="link" className="top-left-icon">
                  <p className="top-left-iconleft">
                    <SlArrowLeft />
                  </p>
                </div>
              </Link>
            )
          }
          <motion.div 
                          initial={{y:window.innerHeight}}
                          animate={{y: 0 , transition:{duration:0.8}}}
                         // exit={{y: window.innerHeight , transition:{duration:0.8}}}
                >
          <div className="top-right">
            <div className="top-left-ensemble">
              <Link className="top-left-travaux" to="/travaux">
                travaux
              </Link>
            </div>
          </div>
          </motion.div>
          {
            //Check if message failed
            location.pathname === "/travaux" || location.pathname === "/contact" ? null : (
              <Link to={"/travaux/" + url2}>
                <div id="link" className="top-right-icon">
                  <p className="top-left-iconright">
                    <SlArrowRight />
                  </p>
                </div>
              </Link>
            )
          }
         
          {" "}
        {/* </div> */}

        <Outlet />
      </div>
    );
    }
    else {
      return (
        <div>
          {/* <div className="container"> */}
           
            <div className="top-left">
              <div className="top-left-ensemble">
                <Link className="top-left-contact" to="/contact">
                  contact
                </Link>
                <Link className="top-left-nico" to="/">
                  nicocarmine
                </Link>
              </div>
              
            </div>
            {
              //Check if message failed
              location.pathname === "/travaux" || location.pathname === "/contact" ? null : (
                <Link to={"/travaux/" + url}>
                  <div id="link" className="top-left-icon">
                    <p className="top-left-iconleft">
                      <SlArrowLeft 
                      onClick={()=>setnextRoute(true)}
                      />
                    </p>
                  </div>
                </Link>
              )
            }
           
            <div className="top-right">
              <div className="top-left-ensemble">
                <Link className="top-left-travaux" to="/travaux">
                  travaux
                </Link>
              </div>
            </div>
            
            {
              //Check if message failed
              location.pathname === "/travaux" || location.pathname === "/contact" ? null : (
                <Link to={"/travaux/" + url2}>
                  <div id="link" className="top-right-icon">
                    <p className="top-left-iconright">
                      <SlArrowRight onClick={()=>setnextRoute(false)}/>
                    </p>
                  </div>
                </Link>
              )
            }
           
            {" "}
          {/* </div> */}
  
          <Outlet />
        </div>
      )
    }
   
  }
  //   console.log(navigate(-1));
  
  const routeVariantsnico = {
    initial: {
      opacity:0,
    },
    animate: {
      transition: { duration: 0.8 },
      opacity: 1,
      x: "0%",
      y: "0%",
    },
    exit:{y: "-100%"}
  };
 
  const routeVariantstravaux = {
    initial: {
      opacity:0,
      y:"100%"
    },
    animate: {
      transition: { duration: 0.8 },
      opacity: 1,
      x: "0%",
      y: "0%",
    },
    exit:{opacity:0}
  };
  
  
  function NEXTRoute() {
if(nextRoute){
  console.log(nextRoute)
    const routeVariantstravauxnumber = {
      initial:{x:window.innerWidth}, 
      animate: {
        transition: { duration: 0.8 },
        opacity: 1,
        x: "0%",
        y: "0%",
      },
      exit:{ transition: { duration: 0.4 },x:-window.innerWidth}
    };
    return routeVariantstravauxnumber
}else {
  console.log(nextRoute)
  const routeVariantstravauxnumber = {
    initial:{x:-window.innerWidth}, 
    animate: {
      transition: { duration: 0.8 },
      opacity: 1,
      x: "0%",
      y: "0%",
    },
    exit:{ transition: { duration: 0.4 },x:window.innerWidth}
  };
  return routeVariantstravauxnumber
}
   
    

  }
  
  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <motion.div
                variants={routeVariantsnico}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Nicocarmine />
                </motion.div>
              }
            />
            <Route
             path="/contact"
              element={
                <motion.div
                variants={routeVariantsnico}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <><Layout2 /><Contact /></>
                </motion.div>
              }
            />
          </Route>

          <Route path="/travaux" element={<Layout2 />}>
            <Route
              index
              element={
                <motion.div
                variants={routeVariantstravaux}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Travaux />
                </motion.div>
              }
            />

            
              <Route path={`/travaux/1`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux1 /></motion.div>}/>
              <Route path={`/travaux/2`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux2 /></motion.div>}/>
              <Route path={`/travaux/3`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux3 /></motion.div>}/>
              <Route path={`/travaux/4`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux4 /></motion.div>}/>
              <Route path={`/travaux/5`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux5 /></motion.div>}/>
              <Route path={`/travaux/6`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux6 /></motion.div>}/>
              <Route path={`/travaux/7`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux7 /></motion.div>}/>
              <Route path={`/travaux/8`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux8 /></motion.div>}/>
              <Route path={`/travaux/9`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux9 /></motion.div>}/>
              <Route path={`/travaux/10`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux10 /></motion.div>}/>
              <Route path={`/travaux/11`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux11 /></motion.div>}/>
              <Route path={`/travaux/12`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux12 /></motion.div>}/>
              <Route path={`/travaux/13`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux13 /></motion.div>}/>
              <Route path={`/travaux/14`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux14 /></motion.div>}/>
              <Route path={`/travaux/15`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux15 /></motion.div>}/>
              <Route path={`/travaux/16`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux16 /></motion.div>}/>
              <Route path={`/travaux/17`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux17 /></motion.div>}/>
              <Route path={`/travaux/18`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux18 /></motion.div>}/>
              <Route path={`/travaux/19`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux19 /></motion.div>}/>
              <Route path={`/travaux/20`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux20 /></motion.div>}/>

                  
                    
                    
                    
                 
                    
                  
                
              
            
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
