import React from "react";
import styles from "./ProjectR.module.css";
const TaskR = () => {
  return (
    <div className={styles.TaskRBox}>
      <div className={styles.AlltimeBox}>
        <h1>All Time</h1>
        <div>
          <select name="" id="">
            <option value="week">Week</option>
            <option value="semimonth">Semimonth</option>
            <option value="month">Month</option>
            <option value="Quarter">Quarter</option>
            <option value="Year">Year</option>
            <option value="AllTime">All Time</option>
            <option value="">Custom</option>
          </select>
          <select disabled={true}>
            <option value="export">Export</option>
          </select>
        </div>
      </div>
      <div className={styles.TaskTablehead}>
        <div className={styles.BillBox}>
          <p style={{ color: "grey " }}>Billable Tasks</p> <p>Total</p>
        </div>
        <div className={styles.amount}>
          <p style={{ color: "grey " }}>Billable Amount</p>{" "}
          <p style={{ color: "grey " }}>Costs</p>
        </div>
      </div>
      <div className={styles.TaskTableBody}>
        <div className={styles.TaskTableBodyleft}>
          <div className={styles.TableData}>
            <p>Design</p>
            <p style={{ color: "grey " }}>0.00</p>
          </div>
          <div className={styles.TableData}>
            <p>Marketing</p>
            <p style={{ color: "grey " }}>0.00</p>
          </div>
          <div className={styles.TableData}>
            <p>Programming</p>
            <p style={{ color: "grey " }}>0.00</p>
          </div>
          <div className={styles.TableData}>
            <p>Project Management</p>
            <p style={{ color: "grey " }}>0.00</p>
          </div>
          <div className={styles.TableData}>
            <p>Total</p>
            <p>0.00</p>
          </div>
        </div>
        <div className={styles.TaskTableBodyright}>
          <div className={styles.TableDataR}>
            <p style={{ color: "grey " }}>$0.00</p>
            <p style={{ color: "grey " }}>$0.00</p>
          </div>
          <div className={styles.TableDataR}>
            <p style={{ color: "grey " }}>$0.00</p>
            <p style={{ color: "grey " }}>$0.00</p>
          </div>
          <div className={styles.TableDataR}>
            <p style={{ color: "grey " }}>$0.00</p>
            <p style={{ color: "grey " }}>$0.00</p>
          </div>
          <div className={styles.TableDataR}>
            <p style={{ color: "grey " }}>$0.00</p>
            <p style={{ color: "grey " }}>$0.00</p>
          </div>
          <div className={styles.TableDataR}>
            <p>$0.00</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
      <div className={styles.TaskTablehead}>
        <div className={styles.BillBox}>
          <p style={{ color: "grey " }}>Non-Billable Tasks</p> <p>Total</p>
        </div>
        <div className={styles.amount}>
          <p style={{ color: "grey " }}>Billable Amount</p>{" "}
          <p style={{ color: "grey " }}>Costs</p>
        </div>
      </div>
      <div className={styles.TaskTableBody}>
        <div className={styles.TaskTableBodyleft}>
          <div className={styles.TableData}>
            <p>Business Development</p>
            <p style={{ color: "grey " }}>0.00</p>
          </div>
          <div className={styles.TableData}>
            <p>Total</p>
            <p>0.00</p>
          </div>
        </div>
        <div className={styles.TaskTableBodyright}>
          <div className={styles.TableDataR}>
            <p style={{ color: "grey " }}>$0.00</p>
            <p style={{ color: "grey " }}>$0.00</p>
          </div>
          <div className={styles.TableDataR}>
            <p>$0.00</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { TaskR };
