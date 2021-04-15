import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Tab } from "./Tab/Tab"
import style from "./TimeDayTabs.module.css"
import { Day} from "./Tab/Day"

export function DayTabs(){

   const d = new Date();
   var weekday = new Array(7);
   weekday[0] = "Su";
   weekday[1] = "M";
   weekday[2] = "T";
   weekday[3] = "W";
   weekday[4] = "Th";
   weekday[5] = "F";
   weekday[6] = "S";
   
 let n = weekday[d.getDay()];
const days=["M","T","W","Th","F","S","Su"]

const [active,setactive]=useState(n)


const [Prev,setPrev]=useState(0)
d.setDate(d.getDate()+Prev)
const handlechange=(title)=>{
    setactive(title)
 console.log(  Day(title));
setPrev(Day(title))
}

const changeDate=(val)=>{
    setPrev(Prev+val)
}

    return (
      
        <div className={style.maindiv}>
         <div>
             <button onClick={()=>changeDate(-1)}><i class="fa fa-angle-left" style={{fontSize:"25px"}}></i></button>
             <button onClick={()=>changeDate(1)}><i class="fa fa-angle-right" style={{fontSize:"25px"}}></i></button>
         <h2>{d.toDateString()}</h2>
         </div>
          <div className={style.daytabs}>
                {
                    days.map((title)=>
                      <Tab
                       key={title}
                       handlechange={handlechange}
                       title={title}
                       active={active===title}
                      />
                    )
                }
               <div className={style.total}>Total</div>
          </div>
          <div className={style.container} >
           <div className={style.arrow}>
                <img src="/start arrow.png" alt="img"/>
           </div>
           <div className={style.main_img}>
               <img src="https://cache.harvestapp.com/assets/onboarding/landing-timesheets-day@2x-ba92c8a231563661a31ba7af8e20e4dd1b19e6286b94065e7a45aec949752ce6.png" alt="img"/>
           </div>
           <div className={style.ready}>
            <h2>You’re ready to track time! Let’s get to work.</h2>
            <Link><h2>Got it! I don’t need this tip anymore.</h2></Link>
           </div>
          </div>
        </div>
    )
}