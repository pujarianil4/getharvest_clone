import React, { useState } from 'react'
import { InvoicesR } from './InvoicesR'
import styles from './ProjectR.module.css'
import { TaskR } from './TaskR'
const ProjectDisR =()=>
{
    const [showt,setShowt]=useState(true);
    const [showI,setShowI]=useState(false);
    return(
        <div className={styles.body} >
        {/* Top Bar Starting */}
          <div className={styles.topBarR}>
              <div className={styles.BackProject}>
                  <button> {`< Back To Project`} </button>
              </div>
              <div className={styles.SearchClient}>
                  <input type="text"
                  placeholder="Search By Client or Project Name"
                  />
              </div>
          </div>
          {/* Top Bar ending */}
          <div style={{marginLeft:"15%"}}>
              <h2>Client Name</h2>
          </div>
          <div className={styles.pcodeClass}>
              <h2 style={{marginLeft:"15%",marginTop:"-5px"}}>[CODE]</h2>
               <h2 style={{marginTop:"-5px",marginLeft:"1%",marginRight:"1%"}}>PROJECT NAME</h2>
             <div className={styles.TimeBox}>Time & Materials</div>
              <div className={styles.Editbtn}>
                  <button>Edit Project</button>
              </div>
              <div className={styles.Action}>
                  <button>Actions</button>
              </div>
          </div>
          <div style={{marginLeft:"15%"}}>
              startDate-EndDate(days left)
          </div>
          <div style={{marginLeft:"15%"}}>
              Notes
          </div>
          <div className={styles.GraphBox}>
              <div className={styles.ProgressBox}><button>Project Progress</button><button>Hours Per Week</button></div>
              <div className={styles.graphbottom}>
                  <div className={styles.inboxGraph}>
                         <p style={{color:"grey"}}>Total Hours</p>
                         <h2>0.00</h2>
                         <div style={{display:"flex",justifyContent:"space-between"}}><p>Billable Hours</p> <p>0.00</p></div>
                         <div style={{display:"flex",justifyContent:"space-between"}}><p>Non-Billable Hours</p><p>0.00</p></div>
                  </div>
                  <div className={styles.inboxGraph}>
                      <p style={{color:"grey"}}>Budget Remaining (100%)</p>
                      <h2>$10,000.00 </h2>
                      <progress value="0"></progress>
                      <div style={{display:"flex",justifyContent:"space-between"}}><p>Budget</p><p>$10,000.00</p></div>
                  </div>
                  <div className={styles.inboxGraph}>
                      <p style={{color:"grey"}}>Internal Costs</p>
                      <h2 style={{color:"#888"}}>N/A</h2>
                  </div>
                  <div className={styles.inboxGraph}>
                      <p style={{color:"grey"}}>Uninvoiced Amount</p>
                       <h2>$0.00</h2>
                  </div>
              </div>
          </div>
          <div style={{marginLeft:"30%",marginTop:"2%"}}><button onClick={()=>setShowt(true)} className={styles.TaskBtn}>TASK</button><button>TEAM</button><button onClick={()=>setShowt(false)} className={styles.TaskBtn}>Invoices</button></div>
          {
           showt?<TaskR/>:<InvoicesR/>   
          }
         {/* <TaskR/> */}
         <div className={styles.downbar}>
              <div className={styles.trailBox}>29 days left in your free trial <button>Upgrade</button></div>
              <div><h1 style={{color:"grey"}}>HARVEST</h1></div>
         </div>
        </div>
    )
};
export {ProjectDisR}