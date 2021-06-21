import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./CreateInvoice.module.css";
import CloseIcon from "@material-ui/icons/Close";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useSelector, useDispatch } from "react-redux";
import { getProjectData, getTaskTimer } from "../../Redux/Timer/timeAction";
import axios from "axios";
import { useHistory } from "react-router";


const InvoiceCont = styled.div`
  width: 70%;
  margin: auto;
  label {
    font-size: 14px;
  }
  input,
  select,
  textarea {
    border: 1px solid silver;
    border-radius: 3px;
  }
`;
// const HeadingBox =styled.div``
const HeadingBox = styled.div`
  width: 100%;
  height: 37%;
  border-bottom: 1px solid black;
`;

const Notes = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const Buttons = styled.div`
  margin-bottom: 100px;
  margin-top: 10px;
  display: flex;
  gap: 4px;
  input:nth-child(1) {
    text-align: center;
    background-color: green;
    height: 40px;
    color: white;
    width: 150px;
    border: none;
    background: linear-gradient(#14a000, #1a8d08);
    font-weight: 500;
    border-radius: 3px;
  }
  input:nth-child(2) {
    text-align: center;
    height: 40px;
    width: 100px;
    border: none;
    background: linear-gradient(#f0f0f0, #d3d3d3);
    font-weight: 500;
    border-radius: 3px;
  }
  input:focus {
    outline: none;
  }
  input:hover {
    background: #f37510;
    color: white;
  }
`;

const TaskItem = styled.div``;
const TaskItemHeading = styled.div``;
const TaskItemBody = styled.div``;

//_________________________________________________________________________INITIAL OBJECT_____________________________________________________________//

export const CreateInvoice = () => {
  // ______________________________________________________FETCHING DATA__________________________________//
  const userID = useSelector((state) => state.auth.uid);
  // console.log(userID)
  const state = useSelector((state) => state.time.projectData);
  const TaskEntries = useSelector((state) => state.time.TaskEntries);
  // console.log(state)
  // // console.log(TaskEntries)
  //eslint-disable-next-line
  state.map((item) => {
    // console.log(item)
  });
  //eslint-disable-next-line
  TaskEntries.map((item) => {
    // console.log(item)
  });

  //____________  _______________________________________________________________________________________________//

  const initInvoice = {
    invId: "",
    issueDate: "",
    poNum: "",
    discount: "",
    invFor: "",
    dueDate: "",
    subject: "",
    subtotal: [],
    amountDue: "",
    clientname: "",
    pname: "",
    userId: "",
    incoice_deatls: [],
    hourlyRates: "",
  };

  //-------------------------------------------------------------------------------------------------------//
  const [formState, setFormstate] = React.useState(initInvoice);
  const {
    invId,
    issueDate,
    poNum,
    discount,
    dueDate,
    subject,
    clientname,
    pname,
  } = formState;

  const fixed = state
    ?.filter((item) => item.client === clientname)
    .map((item) => item.projectType[0].hourlyRates);
  console.log(fixed);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value;
    setFormstate({ ...formState, [name]: val });
    console.log(clientname);
  };

  const dispatch = useDispatch();
  //eslint-disable-next-line
  React.useEffect(() => {
    dispatch(getProjectData(userID));
    dispatch(getTaskTimer(userID));
    //eslint-disable-next-line
  }, []);

  //___________________________________________Sending Invoice form to server_________________________________________//
  const saveinvoiceInfo = (payload) => {
    axios
      .post("https://oryjd.sse.codesandbox.io/Invoice/", payload)
      .then((res) => {
        console.log(res.data);
      });
  };

  //____________________________________GETTING EXPENSE DATA FROM AXIOS__________________________________________//
  // React.useEffect(()=>{
  //     getExpenseData(userID,projName)
  // },[])
  const [expenseEntries, setExpenseEntries] = React.useState([]);
  //eslint-disable-next-line
  const [isLoading, setIsLoading] = React.useState(false);
  const [hoursData, setHoursData] = React.useState([]);

  // console.log(expenseEntries)
  // console.log(state)
  // console.log(TaskEntries)
  const getExpenseData = (payload, projName) => {
    setIsLoading(true);
    return axios
      .get(
        `https://gor1f.sse.codesandbox.io/expences?userId=${payload}&&projectName=${projName}`
      )
      .then((res) => {
        setExpenseEntries(res.data);
        console.log(res.data);
        setIsLoading(false);
      });
  };

  const getHoursData = (payload, projName) => {
    setIsLoading(true);
    return axios
      .get(
        `https://1u30f.sse.codesandbox.io/timer?userId=${payload}&&projectName=${projName}`
      )
      .then((res) => {
        setHoursData(res.data);

        setIsLoading(false);
      });
  };
  //eslint-disable-next-line
  React.useEffect(() => {
    const projName = state
      ?.filter((item) => item.client === clientname)
      .map((item) => item.pname);
    setFormstate({ ...formState, pname: projName[0], userId: userID });
    console.log(clientname, projName);
    getExpenseData(userID, projName);
    getHoursData(userID, projName);

    return function cleanup() {};

    //eslint-disable-next-line
  }, [clientname]);

  //____________________________________GETTING EXPENSE DATA FROM AXIOS__________________________________________//

  //__________________________________________________________________________________________________________________________________//
  const [amount, setAmount] = React.useState([]);
  const [quantity, setQuantity] = React.useState(0.0);
  const [price, setprice] = React.useState(0.0);
  const [TaskItemCount, setTaskItemCount] = React.useState([]);

  const [totalAmount, setTotalAmount] = React.useState(0);
  const [hours, setHours] = React.useState([]);
  const [subtotals, setSubtotal] = useState([]);
  useEffect(() => {
    let data1 = hoursData.map(
      (item) =>
        Number(item.timer) *
        Number(
          state
            ?.filter((item) => item.client === clientname)
            .map((item) => item.projectType[0].hourlyRates)
        )
    );
    setHours(data1);
    //eslint-disable-next-line
  }, [hoursData]);

  useEffect(() => {
    let data2 = expenseEntries.map((item) => Number(item.amount));
    console.log(data2);
    setAmount(data2);
  }, [expenseEntries]);

  useEffect(() => {
    setSubtotal([...TaskItemCount, ...hours, ...amount]);
    //eslint-disable-next-line
  }, [hours]);

  useEffect(() => {
    setSubtotal([...TaskItemCount, ...amount, ...hours]);
    //eslint-disable-next-line
  }, [amount]);

  useEffect(() => {
    if (subtotals.length > 0) {
      let total = subtotals.reduce((acu, item) => Number(acu) + Number(item));
      setTotalAmount(total);
    }
    //eslint-disable-next-line
  }, [subtotals]);

  useEffect(() => {
    setFormstate({
      ...formState,
      hourlyRates: fixed[0],
      subtotal: totalAmount,
      incoice_deatls: [...subtotals],
    });
    //eslint-disable-next-line
  }, [totalAmount]);

  const handleAdd = (e) => {
    e.preventDefault();
    setTaskItemCount([...TaskItemCount, `item${TaskItemCount.length + 1}`]);
    quantity && setAmount([...amount, Number(quantity) * Number(price)]);
  };

  const handleDelete = (id) => {
    const updatedTaskItemCount = TaskItemCount.filter((item) => item !== id);
    setTaskItemCount(updatedTaskItemCount);
  };

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("ClientInvoice");
    localStorage.setItem("ClientInvoice", JSON.stringify(formState));
    saveinvoiceInfo(formState);

    history.replace(`/finalinvoice?pname=${invId}`);
  };

  // const ref = React.createRef();
  // const options = {

  //     unit: 'in',

  // };

  return (
    <InvoiceCont>
      <HeadingBox>
        <h1>Invoice for {clientname}</h1>
      </HeadingBox>
      <form onSubmit={handleSubmit} autocomplete="off">
        <div className={styles.FormBox}>
          {/* ===================================================================== */}
          <div className={styles.InvidInput}>
            <div>
              <div>
                <label htmlFor="">Invoice ID</label>
              </div>
              <input
                type="text"
                value={invId}
                name="invId"
                onChange={handleChange}
              />
            </div>

            <div>
              <div>
                <label htmlFor="">Issue Date</label>
              </div>
              <input
                type="Date"
                name="issueDate"
                value={issueDate}
                onChange={handleChange}
              />
              {/* <div>
                            <label htmlFor="">Invoice For</label>
                        </div>
                        <input type="text" value="KAMAL"/> */}
            </div>
          </div>

          <div className={styles.InvidInput}>
            <div>
              <div>
                <label htmlFor="">PO Number</label>
              </div>
              <input
                type="text"
                name="poNum"
                value={poNum}
                onChange={handleChange}
              />
            </div>

            <div>
              <div>
                <label htmlFor="">Invoice For</label>
              </div>
              <select
                name="clientname"
                id=""
                value={clientname}
                onChange={handleChange}
              >
                <option value="none">--None</option>
                {state?.map((item) => (
                  <option value={item.client}>{item.client}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.InvidInput}>
            <div>
              <div>
                <label htmlFor="">Discount</label>
              </div>
              <input
                type="text"
                value={discount}
                name="discount"
                onChange={handleChange}
              />

              {/* <div>
                            <label htmlFor="">Issue Date</label>
                        </div>
                        <input type="text"/> */}
            </div>
            <div>
              <div>
                <label htmlFor="">Due Date</label>
              </div>
              <select
                id=""
                value={dueDate}
                name="dueDate"
                onChange={handleChange}
              >
                <option value="Upon Reciept">Upon Reciept</option>
                <option value="Net 15">Net 15</option>
                <option value="Net 30 ">Net 30</option>
                <option value="Net 45">Net 45</option>
                <option value="Net 60">Net 60</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
          </div>

          <div className={styles.SubInvidInput}>
            <div>
              <label htmlFor="">Subject</label>
            </div>

            <input
              type="text"
              value={subject}
              name="subject"
              onChange={handleChange}
            />
          </div>

          {/* _______________________________________________ */}
        </div>

        <TaskItem className={styles.taskitems}>
          <TaskItemHeading className={styles.TaskItemHeading}>
            <div>
              <div>Item Type</div>
              <div>Description</div>
              <div>Quantity</div>
              <div>Unit Price</div>
              <div>Amount</div>
            </div>
          </TaskItemHeading>

          {hoursData.map((item, i) => (
            <TaskItemBody className={styles.TaskItemBody}>
              <div>
                <div onClick={(e) => handleDelete(item)}>
                  <CloseIcon className={styles.close_icon} />
                </div>
              </div>
              <div>
                <select name="" id="">
                  <option value="">Product</option>
                  <option value="">Service</option>
                </select>
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  rows="3"
                  className={styles.text_area}
                ></textarea>
                <div>
                  <label htmlFor="">Linked project</label>
                  <select
                    name="pname"
                    id=""
                    value={state
                      ?.filter((item) => item.client === clientname)
                      .map((item) => item.pname)}
                    onChange={handleChange}
                  >
                    <option value="">--None--</option>
                    {state
                      ?.filter((item) => item.client === clientname)
                      .map((item) => (
                        <option value={item.pname}>{item.pname}</option>
                      ))}
                  </select>
                  <HelpOutlineIcon className={styles.help_outline} />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  value={item.timer}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={state
                    ?.filter((item) => item.client === clientname)
                    .map((item) => item.projectType[0].hourlyRates)}
                  onChange={(e) => setprice(e.target.value)}
                />
              </div>
              <div>
                $
                {Number(item.timer) *
                  Number(
                    state
                      ?.filter((item) => item.client === clientname)
                      .map((item) => item.projectType[0].hourlyRates)
                  )}
              </div>
            </TaskItemBody>
          ))}

          {expenseEntries.map((item, i) => (
            <TaskItemBody className={styles.TaskItemBody}>
              <div>
                <div onClick={(e) => handleDelete(item)}>
                  <CloseIcon className={styles.close_icon} />
                </div>
              </div>
              <div>
                <select name="" id="">
                  <option value="">Product</option>
                  <option value="">Service</option>
                </select>
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  rows="3"
                  className={styles.text_area}
                ></textarea>
                <div>
                  <label htmlFor="">Linked project</label>
                  <select
                    name="pname"
                    id=""
                    value={pname}
                    onChange={handleChange}
                  >
                    <option value="">--None--</option>
                    {state
                      ?.filter((item) => item.client === clientname)
                      .map((item) => (
                        <option value={item.pname}>{item.pname}</option>
                      ))}
                  </select>
                  <HelpOutlineIcon className={styles.help_outline} />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  value={1}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div>
                <input type="text" value={item.amount} />
              </div>
              <div>${item.amount}</div>
            </TaskItemBody>
          ))}

          {TaskItemCount.map((item, i) => (
            <TaskItemBody className={styles.TaskItemBody}>
              <div>
                <div onClick={(e) => handleDelete(item)}>
                  <CloseIcon className={styles.close_icon} />
                </div>
              </div>
              <div>
                <select name="" id="">
                  <option value="">Product</option>
                  <option value="">Service</option>
                </select>
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  rows="3"
                  className={styles.text_area}
                ></textarea>
                <div>
                  <label htmlFor="">Linked project</label>
                  <select
                    name="pname"
                    id=""
                    value={pname}
                    onChange={handleChange}
                  >
                    <option value="">--None--</option>
                    {state
                      ?.filter((item) => item.client === clientname)
                      .map((item) => (
                        <option value={item.pname}>{item.pname}</option>
                      ))}
                  </select>
                  <HelpOutlineIcon className={styles.help_outline} />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div>
                <input type="text" onChange={(e) => setprice(e.target.value)} />
              </div>
              <div>${amount[i + 1] ? amount[i + 1] : 0.0}</div>
            </TaskItemBody>
          ))}

          <div className={styles.totolsection}>
            <div>
              <button className={styles.AdditemButton} onClick={handleAdd}>
                + Add Item
              </button>
            </div>

            <div>
              <div>
                <p>Subtotal</p>
              </div>
              <div>
                <p>${totalAmount}</p>
              </div>
            </div>
          </div>

          <div className={styles.totolsection}>
            <div></div>
            <div>
              <div>
                <h3>Amount Due</h3>
              </div>
              <div>
                <h3>${totalAmount}</h3>
              </div>
            </div>
          </div>
        </TaskItem>

        <Notes>
          <label htmlFor="">Notes (optional, displayed on invoice)</label>
          <textarea
            name=""
            id=""
            rows="4"
            className={styles.fullwidth}
          ></textarea>
          <label htmlFor="">Formatting tips: *bold* _italics_</label>
        </Notes>

        <Buttons>
          <input type="submit" value="Save Invoice" />
          <input type="Submit" value="Cancel" />
        </Buttons>
      </form>
    </InvoiceCont>
  );
};
