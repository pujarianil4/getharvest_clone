import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Tab } from "./Tab/Tab"
import style from "./TimeDayTabs.module.css"

export function DayTabs(){
const day=["M","T","W","Th","F","S","Su"]

const [active,setactive]=useState("M")

const handlechange=(title)=>{
    setactive(title)
}
    return (
        <div className={style.maindiv}>
        
          <div className={style.daytabs}>
                {
                    day.map((title)=>
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