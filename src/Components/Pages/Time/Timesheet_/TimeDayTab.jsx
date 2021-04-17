import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Tab } from "./Tab/Tab"
import style from "./TimeDayTabs.module.css"
import { Day} from "./Tab/Day"
import { Timesheet } from "./TimeSheet"
import { ShowTime } from "./Tab/ShowTime"
import { useSelector } from "react-redux"
import { Edit } from "./Edit/Edit"
import { Ring } from "react-awesome-spinners"
export function DayTabs({setChangeDate}){

    const [Prev,setPrev]=useState(0)
    
    const TaskEntries = useSelector(state=>state.time.TaskEntries)


  const d = new Date();
   d.setDate(d.getDate()+Prev)
   var weekday = new Array(7);
   weekday[0] = "Su";
   weekday[1] = "M";
   weekday[2] = "T";
   weekday[3] = "W";
   weekday[4] = "Th";
   weekday[5] = "F";
   weekday[6] = "S";
   
 let n = weekday[d.getDay()];

//const days=["M","T","W","Th","F","S","Su"]

const days={
    M:"0",
    T: "0",
    W:"0",
    Th:"0",
    F:"0",
    S:"0",
    Su:"0",
}

const [active,setactive]=useState(n)


const handlechange=(title)=>{
    setactive(title)
 console.log(  Day(title));
setPrev(Day(title))
setChangeDate(Day(title))
}

const changeDate=(val)=>{
    setPrev(Prev+val)
}


let todays_data= TaskEntries.filter((task)=> task.date===d.toDateString())
let todays_timers
let todays_total
 if(todays_data.length !=0 ){
    todays_timers= todays_data.map((el)=>Number(el.timer))
 todays_total= todays_timers.reduce((ac,el)=>{return ac+el})
 }

 let total_timers
let total
 if(TaskEntries.length !=0 ){
    total_timers= TaskEntries.map((el)=>Number(el.timer))
 total= total_timers.reduce((ac,el)=>{return ac+el})
 }


console.log(total_timers)
console.log(total);
console.log(todays_data);

useEffect(()=>{
    n = weekday[d.getDay()];
  
    setactive(n)
},[Prev])

const [disable,setDisable]= useState(false)

const taskloading= useSelector((state)=> state.time.taskloading)


    return (
       <div>
           
            <div className={style.showdate}>
             <button onClick={()=>changeDate(-1)} style={{width:"40px"}}><i class="fa fa-angle-left" style={{fontSize:"15px"}}></i></button>
             <button onClick={()=>changeDate(1)} style={{width:"40px"}}><i class="fa fa-angle-right" style={{fontSize:"15px"}}></i></button>
         <h2><span>{Prev==0&&"Today: "}</span>{d.toDateString()}</h2>
          {Prev!==0&&<Link onClick={()=>setPrev(0)}>Return to Today</Link>}
         </div>
        <div className={style.maindiv}>
        
          <div className={style.daytabs}>
                {
                    Object.entries(days).map((title)=>
                      <Tab
                       key={title}
                       handlechange={handlechange}
                       title={title[0]}
                       time={n==title[0]?todays_total:title[1]}
                       active={active===title[0]}
                       
                      />
                    )
                }
               <div className={style.total}> Total:  {total}:00</div>
          </div>
       {
          !taskloading? todays_data.map(task=> <ShowTime key={task.id}  {...task} setDisable={setDisable} disable={disable}/>)
           : <div className={style.ring}><Ring color="#F26314"/></div>
       }
      { !taskloading&&todays_data.length !==0&& <div className={style.total_timer}>
        <h1>Total:     <span>{todays_total}:00</span></h1>
        </div>}
     
          {!taskloading&& todays_data.length==0&& <div className={style.container} >
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
          </div> }
        </div>
      
        </div>
    )
}


