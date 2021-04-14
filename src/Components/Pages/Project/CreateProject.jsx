import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { projectData } from "../../../Redux/Project/projectAction";
import styles from './CreateProject.module.css'

export default function CreateProject() {

    const dispatch = useDispatch()
    const [inp, setInp] = useState({})
    const [tm, setTm] = useState(true)
    const [ff, setFf] = useState(false)
    //const [nb, setNb] = useState(false)

    const handleInp = (e) => {
        const { name, value } = e.target;
        let payload = {
            ...inp,
            [name]: value
        }
        setInp(payload);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const action = projectData(inp);
        dispatch(action);

    }

    const handleTimeAndMaterials = (e) => {
        e.preventDefault()
        setTm(true);
        setFf(false);
       // setNb(false);
    }
    const handleFixedFee = (e) => {
        e.preventDefault()

        setTm(false);
        setFf(true);
       // setNb(false);
    }
    const handleNonBillable = (e) => {
        e.preventDefault()

        setTm(false);
        setFf(false);
        //setNb(true);
    }

    return (
        <div className={styles.mainCont}>

            <div>
                    <div className={styles.heading}>
                        <h1>New Project</h1>
                    </div>
                <form>


                    <div className={styles.InputBoxes}>

                         <div className={styles.labels}>
                            <div><label htmlFor="">Client</label> </div>  
                            <div><label htmlFor="">Project Name</label></div>
                            <div><label htmlFor="">Project Code</label></div>
                            <div><label htmlFor="">Date</label></div>
                            <div><label htmlFor="">Notes</label></div>
                         </div>
                         
                    
                    

                    <div className={styles.inputs}>
                        <div><input onChange={handleInp} name="client" value={inp.client} type="text" placeholder="client" /></div>
                        <div><input onChange={handleInp} name="pname" value={inp.pname} type="text" placeholder="project name" /></div>
                        <div><input onChange={handleInp} name="pcode" value={inp.pcode} type="text" placeholder="project code" /></div>
                        <div>
                            <input onChange={handleInp} name="starton" value={inp.starton} type="date" placeholder="starts on" />
                            to
                            <input onChange={handleInp} name="endson" value={inp.endson} type="date" placeholder="ends on" />
                        </div>
                        <div>
                        
                        <textarea  placeholder="Optional, but great for notes like invoice schedules. You can see notes when creating an invoice for Fixed Fee projects." rows="3" onChange={handleInp} name="notes" value={inp.notes}  ></textarea>
                        </div>
                    </div>
                

                 

                    </div>















                    <div className={styles.projectypesBox}>

                        <div className={styles.projectLeft}>
                            <label htmlFor=""> Project Type </label>
                        </div>
                        <div className={styles.projectRight}>
                                <div className={styles.projectButtons}>
                                <button onClick={handleTimeAndMaterials}>Time & Materials</button>
                                <button onClick={handleFixedFee}>Fixed Fee</button>
                                <button onClick={handleNonBillable}>Non Billable</button>
                                </div>


                 <div className={styles.ProjectTypeCategory}>
                        {
                            tm ? <div>
                                <label>HourlyRates</label>
                                <input onChange={handleInp} name="hourlyrates" value={inp.hourlyrates} placeholder="hourlyRates" /> <br />

                                <label>Budgets</label>
                                <input onChange={handleInp} name="budget" value={inp.budget} placeholder="budget" /> <br />
                            </div> :
                                ff ? <div>
                                    <label>projectFee</label>
                                    <input onChange={handleInp} name="projectfee" value={inp.projectfee} placeholder="projectFee" /> <br />

                                    <label>fixedFeeBudget</label>
                                    <input onChange={handleInp} name="fixedfeebudget" value={inp.fixedfeebudget} placeholder="fixedFeeBudget" /> <br />
                                </div> :
                                    <div>
                                        <label>NonBillableBudget</label>
                                        <input onChange={handleInp} name="nonbillablebudget" value={inp.nonbillablebudget} placeholder="nonBillableBudget" /> <br />

                                    </div>
                        }

                </div>

                        </div>

                    </div>


                    
                   <div className={styles.ProjectTaskHeading}>
                        <div><h4>Tasks</h4></div>
                         <div><p>Billable</p><p>
                            Select All / None</p></div>
                   </div>
                    <div className={styles.projectTasks}>
                    <div>
                        <div className={styles.taskwidth}><label>Business Development</label></div>
                        <input type="checkbox"/>
                    </div>
                    <div>
                        <div className={styles.taskwidth}><label>Design</label></div>
                        <input type="checkbox"/>
                    </div>
                    <div>
                        <div className={styles.taskwidth}><label>Business Development</label></div>
                        <input type="checkbox" />
                    </div>
                    <div>
                    <div className={styles.taskwidth}><label>Business Development</label></div>
                        <input type="checkbox" />
                    </div>
                    <div>
                    <div className={styles.taskwidth}><label>Business Development</label></div>
                        <input type="checkbox" />
                    </div>
                    </div>
                    
                        

                 



                    <div className={styles.Buttons}>
                    <button onClick={handleSubmit}>submit</button>
                    <button>Cancel</button>
                    </div>
                </form>


            </div>

        </div>
    )
}
