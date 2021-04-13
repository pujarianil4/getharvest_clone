import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from "styled-components"
import { submitSignUpData } from '../../../Redux/Auth/authAction';


// const Section = styled.section`
//     display: flex;
//     flex-flow: column;
// `



export default function Signup() {
    const dispatch = useDispatch();
    const [inp, setInp] = useState({})

    const handleInp = (e) => {

        const { value, name } = e.target;
        let payload = {
            ...inp,
            [name]: value
        }
        setInp(payload);
    }

    const submitSignUp = (e) => {
        e.preventDefault ();
        const action = submitSignUpData(inp);
        dispatch(action); 
    }


    return (
        <div>
            <form style={{ margin: "10% 30%" }}>
                <div >
                    <label>First Name</label>
                    <input name="fname" onChange={handleInp} /><br />
                    <label>Last Name</label>
                    <input name="lname" onChange={handleInp} /><br />
                    <label>Company Name</label>
                    <input name="cname" onChange={handleInp} /><br />
                    <label>Work Email</label>
                    <input name="wemail" onChange={handleInp} /><br />
                    <label>Password</label>
                    <input name="password" onChange={handleInp} /><br />

                </div>
                <button onClick={submitSignUp}>Create my account</button>
            </form>
        </div>
    )
}
