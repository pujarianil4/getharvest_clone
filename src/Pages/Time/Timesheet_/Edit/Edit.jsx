import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";


import { TimeRing } from "../Tab/Ring";
import style from "./Edit.module.css";
import { edittask, deletetask } from "../../../../Redux/Timer/timeAction";

export function Edit({ id, date, setOpenedit }) {
  //removed timer argument
  const userID = useSelector((state) => state.auth.uid);

  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const payload = {
    timer: input,
  };
  const taskloading = useSelector((state) => state.time.taskloading);
  //eslint-disable-next-line
  const TaskEntries = useSelector((state) => state.time.TaskEntries);
  const handleUpdate = () => {
    dispatch(edittask(id, payload, userID));
  };
  const handleDelete = () => {
    dispatch(deletetask(id, userID));
  };

  //eslint-disable-next-line
  const d = new Date();
  return (
    <div className={style.maindiv}>
      <div className={style.edit}>
        <div className={style.nav}>
          <h5>Edit Your Working Hours</h5>
          <p>{date}</p>
          <button className={style.close} onClick={() => setOpenedit(false)}>
            <CloseIcon />
          </button>
        </div>
        <div className={style.input}>
          <input
            type="text"
            placeholder="00:00"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className={style.btn}>
          <button onClick={handleUpdate} style={{ backgroundColor: "green" }}>
            Update
          </button>
          <button onClick={handleDelete} style={{ backgroundColor: "red" }}>
            Delete
          </button>
          {taskloading && <TimeRing color="blue" size="10px" />}
        </div>
      </div>
    </div>
  );
}
