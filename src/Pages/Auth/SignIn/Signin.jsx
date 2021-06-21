import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router";


import { submitSignInData } from "../../../Redux/Auth/authAction";
import style from "../SIgnUp/Signupstyle.module.css";

export default function Signin() {
  const dispatch = useDispatch();
  const [inp, setInp] = useState();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const handleInp = (e) => {
    const { name, value } = e.target;
    let payload = {
      ...inp,
      [name]: value,
    };
    setInp(payload);
  };

  const submitSignIn = (e) => {
    e.preventDefault();

    const action = submitSignInData(inp);
    dispatch(action);
  };
  const Button = styled.button`
    width: 100%;
    margin-top: 20px;
    padding: 10px 30px;
    background-color: #5ea551;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 15px;
    font-weight: 600;
  `;

  if (isAuth === true) {
    return <Redirect to="/welcome" />;
  }

  return (
    <div className={style.singinForm}>
      <div className={style.signin_card}>
        <table>
          <tbody>
            <tr>
              <td className={style.heading}>
                <h2>Harvest Id</h2>
                <h4>Sign in to a Harvest or Forecast account</h4>
              </td>
            </tr>
            <tr>
              <td>
                <h5> Login With Your Harvest Email </h5>
              </td>
            </tr>

            <tr>
              <td className={style.signin}>
                <input
                  placeholder="Work Mail"
                  name="wemail"
                  onChange={handleInp}
                />
              </td>
            </tr>
            <tr>
              <td className={style.signin}>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleInp}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Button onClick={submitSignIn}>Sign In</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
