import React from "react";

import styles from "./ProjectR.module.css";

const InvoicesR = () => {
  return (
    <div className={styles.TaskRBox}>
      <div className={styles.Invoicebtn}>
        <button>+ New Invoice</button>
        <button disabled={true}>Link Invoice</button>
      </div>

      <div className={styles.InvoiceBox}>
        <h3 style={{ marginTop: "100px", color: "grey" }}>
          Invoices aren’t linked to this project yet.
        </h3>
      </div>
    </div>
  );
};
export { InvoicesR };
