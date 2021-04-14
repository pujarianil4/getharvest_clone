import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { submitSignInData } from '../../../Redux/Auth/authAction';

export default function Signin() {

    const dispatch = useDispatch()
    const [inp, setInp] = useState();

    const handleInp = (e) => {
        const { name, value } = e.target;
        let payload = {
            ...inp,
            [name]: value
        }
        setInp(payload)
    }

    const submitSignIn = (e) => {
        e.preventDefault ()

        const action = submitSignInData(inp);
        dispatch(action)
    }


    return (
        <div>

            <div >
                <label>Work Email</label>
                <input name="wemail" onChange={handleInp} /><br />
                <label>Password</label>
                <input name="password" onChange={handleInp} /><br />
            </div>
            <button onClick = {submitSignIn}>Sign In</button>


        </div>
    )
}
