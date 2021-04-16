import { SatelliteSharp } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {v4 as uuid} from 'uuid';
import { addExpense } from "../../../Redux/Expenses/action";
import { DisplayExpense } from "./DisplayExpense";

const initvalue = {
  date: new Date().toLocaleDateString(),
  projectName: "",
  category: "",
  notes: "",
  billable: "",
  amount: "",
};
const SaveExpense = ({ handleButton }) => {
  const projectNames = ["Cloning", "Harvest", "Masai"];
  const categories = [
    "Entertainment",
    "Lodging",
    "Meals",
    "Mileage",
    "Other",
    "Transportation",
  ];
  const [formState, setFormState] = useState(initvalue);
  const { date, projectName, category, notes, billable, amount } = formState;


  const expenseList =useSelector((state)=>state.expense.expenseList);
  const dispatch=useDispatch();


  const date1 = new Date().toLocaleDateString();
  const [dat, setDat] = useState(date1);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let val = type === "checkbox" ? checked : value;
    setFormState({ ...formState, [name]: val });
  };
  const handleSubmit = () => {
      setFormState({...formState,id:uuid()})
      const addexpenseaction=addExpense(formState);
      dispatch(addexpenseaction);
      console.log(expenseList);
    //console.log(formState);
  };
 // console.log(date);
  return (
    <>
      {/* <button onClick={handleButton}>Change</button> */}
      <div style={{ display: "flex" }}>
        <div>
          <p>Date</p>
          <input type="date" value={date} onChange={handleChange} />
        </div>
        <div>
          <p>Project/Category</p>
          {/* <option value=""></option> */}
          <select
            name=""
            id=""
            placeholder="Choose a project..."
            name="projectName"
            onChange={handleChange}
          >
            <option value="" disabled={true}>
              Choose a project...
            </option>
            {projectNames?.map((items) => (
              <option key={items} value={items}>
                {items}
              </option>
            ))}
          </select>
          <br></br>
          <select
            placeholder="Choose a category..."
            name="category"
            onChange={handleChange}
          >
            <option>{<input type="text" />}</option>
            {categories?.map((items) => (
              <option key={items} value={items}>
                {items}
              </option>
            ))}
          </select>
          <br></br>
          <input
            type="text"
            placeholder="Notes(optional)"
            value={notes}
            name="notes"
            onChange={handleChange}
          />
          <br></br>
          <p>
            {" "}
            <input type="checkbox" value={billable} name="billable" /> This
            Expense is Billable
          </p>
        </div>
        <div>
          <p>Amount</p>
          <div>
            ${" "}
            <input
              type="text"
              value={amount}
              name="amount"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <button onClick={handleSubmit}>Save Expense</button>
      <button onClick={handleButton}>Cancel</button>
      {/* {
          expenseList?.map((item)=>(<div key={item.id}>
              {item.projectName}
          </div>))
      } */}
      {/* <DisplayExpense /> */}
    </>
  );
};
export { SaveExpense };
