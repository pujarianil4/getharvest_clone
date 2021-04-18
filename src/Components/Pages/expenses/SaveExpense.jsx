import { SatelliteSharp } from "@material-ui/icons";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addExpense, savedExpense } from "../../../Redux/Expenses/action";
import { DisplayExpense } from "./DisplayExpense";
import styles from "./Expense.module.css";

const initvalue = {
  date: new Date().toLocaleDateString(),
  projectName: "",
  category: "",
  notes: "",
  billable: true,
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

  const expenseList = useSelector((state) => state.expense.expenseList);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.expense.isLoading);
  const isError = useSelector((state) => state.expense.isError);
  //const userID = useSelector(state => state.auth.uid)
  const userID = useSelector((state) => state.auth.uid);
  
  const ProjectDet = () => {
    let obj=[]
    let status=true
    let newar=[];
    axios.get(`https://c2ec8.sse.codesandbox.io/harvest?userId=${userID}`)
      .then((res) => { status=false; 
        obj=res.data;
        // newar = obj?.filter((items)=>items.userID===userID);
        console.log(res.data);
        // console.log(obj);
        // console.log(newar);
      })
      .catch((er) => console.log(er));
   
   
  };
  ProjectDet();

  console.log(userID);
  if (isError) {
    alert("Error in Uploading");
  }
  const date1 = new Date().toLocaleDateString();
  const [dat, setDat] = useState(date1);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let val = type === "checkbox" ? checked : value;
    setFormState({ ...formState, [name]: val });
  };
  const handleSubmit = () => {
    setFormState({ ...formState, id: uuid(), status: false });
    const addexpenseaction = addExpense(formState);
    dispatch(addexpenseaction);
    console.log(expenseList);
    const upLoad = savedExpense(formState, userID);
    dispatch(upLoad);
    //console.log(formState);
  };
  // console.log(date);
  return (
    <>
      {/* <button onClick={handleButton}>Change</button> */}
      <div className={styles.ExpenssForm}>
        <div className={styles.DateClass}>
          <p style={{ color: "#626262", background: "#f4f4f4" }}>Date</p>
          <input
            type="date"
            value={date}
            onChange={handleChange}
            name="date"
            className={(styles.dateInput, styles.input)}
          />
        </div>
        <div style={{ background: "#f4f4f4", width: "400px", margin: "10px" }}>
          <p style={{ color: "#626262", background: "#f4f4f4" }}>
            Project/Category
          </p>
          {/* <option value=""></option> */}
          <select
            name=""
            id=""
            placeholder="Choose a project..."
            name="projectName"
            onChange={handleChange}
            className={styles.ProjectSelection}
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
            className={styles.ProjectSelection}
          >
            {categories?.map((items) => (
              <option key={items} value={items}>
                {items}
              </option>
            ))}
          </select>

          <div style={{ marginTop: "10px", height: "60px" }}>
            <textarea
              type="text"
              placeholder="Notes(optional)"
              value={notes}
              name="notes"
              onChange={handleChange}
              className={styles.NotesInputbox}
            ></textarea>
          </div>
          {/* style={{ background: "#f4f4f4", width: "400px", margin: "10px" }} */}
          <p>
            <input
              type="checkbox"
              value={billable}
              name="billable"
              onChange={handleChange}
            />{" "}
            <span>This Expense is Billable</span>
          </p>
          <button onClick={handleSubmit} className={styles.Expensebtn}>
            Save Expense
          </button>
          <button onClick={handleButton} className={styles.cancelBtn}>
            Cancel
          </button>
          <span>{isLoading ? "...Loading" : ""}</span>
        </div>
        <div style={{ background: "#f4f4f4" }}>
          <p style={{ color: "#626262", background: "#f4f4f4" }}>Amount</p>
          <div className={styles.amountbox}>
            $
            <input
              type="text"
              value={amount}
              name="amount"
              onChange={handleChange}
              className={(styles.input, styles.inputamount)}
            />
          </div>
        </div>
      </div>

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
