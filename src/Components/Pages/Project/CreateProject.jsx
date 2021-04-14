import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { projectData } from "../../../Redux/Project/projectAction"

export default function CreateProject() {

    const dispatch = useDispatch()
    const [inp, setInp] = useState({})
    const [tm, setTm] = useState(true)
    const [ff, setFf] = useState(false)
    //const [nb, setNb] = useState(false)

    const handleInp = (e) => {
        const { name, value, type, checked } = e.target;
        let val = type === "checkbox" ? checked : value;
        let payload = {
            ...inp,
            [name]: val
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
    }
    const handleFixedFee = (e) => {
        e.preventDefault()

        setTm(false);
        setFf(true);
    }
    const handleNonBillable = (e) => {
        e.preventDefault()
        setTm(false);
        setFf(false);
    }

    return (
        <div>

            <div>

                <form>

                    <input onChange={handleInp} name="client" value={inp.client} type="text" placeholder="client" /><br />
                    <input onChange={handleInp} name="pname" value={inp.pname} type="text" placeholder="project name" /><br />
                    <input onChange={handleInp} name="pcode" value={inp.pcode} type="text" placeholder="project code" /><br />
                    <input onChange={handleInp} name="starton" value={inp.starton} type="date" placeholder="starts on" />
                    <input onChange={handleInp} name="endson" value={inp.endson} type="date" placeholder="ends on" /><br />
                    <input onChange={handleInp} name="notes" value={inp.notes} type="text" placeholder="notes" /><br />

                    <button onClick={handleTimeAndMaterials}>Time & Materials</button>
                    <button onClick={handleFixedFee}>Fixed Fee</button>
                    <button onClick={handleNonBillable}>Non Billable</button><br /><br />
                    <div>
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

                    <div style={{ border: "1px solid red" }}>
                        <label>Business Development</label>
                        <input name = "bd" checked = {inp.bd} type="checkbox" /><br />
                        <label>Design</label>
                        <input name = "design" checked = {inp.design} type="checkbox" /><br />
                        <label>Marketing</label>
                        <input name = "marketing" checked = {inp.marketing} type="checkbox" /><br />
                        <label>Programming</label>
                        <input name = "programming" type="checkbox" checked = {inp.programming} /><br />
                        <label>project Management</label>
                        <input name = "projectMan" checked = {inp.projectMan} type="checkbox" /><br />

                    </div>
                    <button onClick={handleSubmit}>submit</button>
                </form>

            </div>

        </div>
    )
}
