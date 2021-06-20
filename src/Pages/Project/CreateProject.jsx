import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { projectData } from "../../Redux/Project/projectAction";
import styles from './CreateProject.module.css'

export default function CreateProject() {

    const dispatch = useDispatch()
    const [inp, setInp] = useState({})
    const [timeMaterial, setTimeMaterial] = useState(true)
    const [fixedFee, setFixedFee] = useState(false)

    const userId = useSelector(state => state.auth.uid);

    const handleInp = (e) => {
        const { name, value, type, checked } = e.target;
        let val = type === "checkbox" ? checked : value;
        let payload = {
            ...inp,
            [name]: val
        }
        setInp(payload);
    }
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const action = projectData(inp, userId);
        dispatch(action);
        history.replace("/time")
    }

    const handleTimeAndMaterials = (e) => {
        e.preventDefault()
        setTimeMaterial(true);
        setFixedFee(false);
    }
    const handleFixedFee = (e) => {
        e.preventDefault()

        setTimeMaterial(false);
        setFixedFee(true);
    }
    const handleNonBillable = (e) => {
        e.preventDefault()
        setTimeMaterial(false);
        setFixedFee(false);
    }

    return (
        <div className={styles.mainCont}>

            <div>
                <div className={styles.heading}>
                    <h1>New Project</h1>
                </div>
                <form autocomplete="off">


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
                                <textarea placeholder="Optional, but great for notes like invoice schedules. You can see notes when creating an invoice for Fixed Fee projects." rows="3" onChange={handleInp} name="notes" value={inp.notes}  ></textarea>
                            </div>
                        </div>

                    </div>

                    <div className={styles.projectypesBox}>

                        <div className={styles.projectLeft}>
                            <label htmlFor=""> Project Type </label>
                        </div>
                        <div className={styles.projectRight}>
                            <div className={styles.projectButtons}>
                                <button onClick={handleTimeAndMaterials} > <div></div>Time & Materials</button>
                                <button onClick={handleFixedFee}> <div></div>Fixed Fee</button>
                                <button onClick={handleNonBillable}> <div></div>Non Billable</button>
                            </div>

                            <div className={styles.ProjectTypeCategory}>
                                {
                                    timeMaterial ? <div className={styles.ProjectTypeCategoryChild}>
                                        <div>
                                            <div><label>Hourly Rates</label> </div>
                                            <div><input onChange={handleInp} name="hourlyrates" value={inp.hourlyrates} placeholder="Hourly Rates" /></div>
                                        </div>

                                        <div>
                                            <div> <label>Budgets</label></div>
                                            <div><input onChange={handleInp} name="budget" value={inp.budget} placeholder="Budget" /> </div>
                                        </div>
                                    </div> : fixedFee ? <div className={styles.ProjectTypeCategoryChild}>
                                        <div>
                                            <div> <label>Project Fee</label></div>
                                            <div> <input onChange={handleInp} name="projectfee" value={inp.projectfee} placeholder="Project Fee" /></div>

                                        </div>

                                        <div>
                                            <div><label>Fixed FeeBudget</label></div>
                                            <div>  <input onChange={handleInp} name="fixedfeebudget" value={inp.fixedfeebudget} placeholder="Fixed FeeBudget" /></div>
                                        </div>
                                    </div> : <div className={styles.ProjectTypeCategoryChild}>
                                        <div>
                                            <div><label>Non-Billable Budget</label></div>
                                            <div> <input onChange={handleInp} name="nonbillablebudget" value={inp.nonbillablebudget} placeholder="Non-Billable Budget" /> </div>
                                        </div>
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
                            <div className={styles.myCheckbox}><input onChange={handleInp} name="bd" checked={inp.bd} type="checkbox" /></div>
                        </div>
                        <div>
                            <div className={styles.taskwidth}><label>Design</label></div>
                            <div className={styles.myCheckbox}><input onChange={handleInp} name="design" checked={inp.design} type="checkbox" /></div>
                        </div>

                        <div>
                            <div className={styles.taskwidth}><label>Business Development</label></div>
                            <div className={styles.myCheckbox}><input onChange={handleInp} name="marketing" checked={inp.marketing} type="checkbox" /></div>
                        </div>
                        <div>
                            <div className={styles.taskwidth}><label>Business Development</label></div>
                            <div className={styles.myCheckbox}><input onChange={handleInp} name="programming" type="checkbox" checked={inp.programming} /></div>
                        </div>
                        <div>
                            <div className={styles.taskwidth}><label>project Management</label></div>
                            <div className={styles.myCheckbox}>  <input onChange={handleInp} name="projectMan" checked={inp.projectMan} type="checkbox" /></div>
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
