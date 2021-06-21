import React from "react";
import styles from "./FinalInvoice.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { Ring } from "react-awesome-spinners";
import ReactToPdf from "react-to-pdf";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const paramString = window.location.search;
let params = new URLSearchParams(paramString);
params = params.get("pname");
export const FinalInvoice = () => {
  const [invoiceData, setInvoiceData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  // eslint-disable-next-line
  const [isError, setisError] = React.useState(false);
  // console.log(params.toString())
  // console.log(invoiceData)
  const userID = useSelector((state) => state.auth.uid);
  // eslint-disable-next-line
  React.useEffect(() => {
    getInvoiceData(userID, params);
    setInvoiceData(JSON.parse(localStorage.getItem("ClientInvoice")));

    //eslint-disable-next-line
  }, []);

  const getInvoiceData = (payload, params) => {
    return axios
      .get(
        `https://oryjd.sse.codesandbox.io/Invoice?userId=${payload}&&invId=${params}`
      )
      .then((res) => {
        // setInvoiceData(res.data[0])
        // console.log(res.data[0])
      })
      .catch((err) => {
        setisError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const ref = React.createRef();
  const options = {
    unit: "in",
  };

  return isLoading ? (
    <Ring />
  ) : (
    invoiceData && (
      <div className={styles.cont}>
        {console.log(invoiceData)}
        <div className={styles.invoiceBox}>
          <div className={styles.headBox}>
            <ReactToPdf
              targetRef={ref}
              options={options}
              x={0.8}
              y={0.8}
              scale={0.8}
              filename="invoice.pdf"
            >
              {({ toPdf }) => (
                <button onClick={toPdf} className={styles.download_icon}>
                  <CloudDownloadIcon />
                </button>
              )}
            </ReactToPdf>
          </div>
          <div className={styles.invoiceBody} ref={ref}>
            <div className={styles.invoLines}>
              <div className={styles.invoLeft}>
                <div>
                  <h1>INVOICE</h1>
                </div>
              </div>
              <div className={styles.invoRight}>
                <div>
                  <p>From</p>
                </div>
                <div></div>
                <div>
                  <p>Masai</p>
                </div>
              </div>
            </div>
            <div className={styles.invoLines}>
              <div className={styles.invoLeftO}>
                <div>
                  <p> Invoice ID </p>
                  <p>Issue Date</p>
                  <p>Due Date</p>
                </div>
                <div></div>
                <div>
                  <p>{invoiceData.invId}</p>
                  <p>{invoiceData && invoiceData.issueDate}</p>
                  <p>{invoiceData && invoiceData.dueDate}</p>
                </div>
              </div>
              <div className={styles.invoRightO}>
                <div>
                  <p>Invoice For</p>
                </div>
                <div></div>
                <div>
                  <p>{invoiceData && invoiceData.clientname}</p>
                  <p>EditInfo</p>
                </div>
              </div>
            </div>
            <div className={styles.invoLinesT}>
              <div className={styles.table}>
                <div>
                  <p>Item Type</p>
                </div>
                <div>
                  <p>Description</p>
                </div>
                <div>
                  <p>Quantity</p>
                </div>
                <div>
                  <p>Unit Price</p>
                </div>
                <div>
                  <p>Amount</p>
                </div>
              </div>
              {invoiceData &&
                invoiceData.incoice_deatls.map((item, i) => (
                  <div className={styles.table}>
                    <div>
                      <p>{i}</p>
                    </div>
                    <div>
                      <p>{`[${invoiceData && invoiceData.pname}] PO-${
                        invoiceData && invoiceData.poNum
                      }`}</p>
                    </div>
                    <div>
                      <p>{item / invoiceData.hourlyRates}</p>
                      {console.log(item)}
                    </div>
                    <div>
                      <p>{invoiceData && invoiceData.hourlyRates}</p>
                    </div>
                    <div>
                      <p>{item}</p>
                      {/* <p>{Number(item)*Number(invoiceData && invoiceData.hourlyRates)}</p> */}
                    </div>
                  </div>
                ))}
              <div className={styles.amountBox}>
                <div></div>
                <div>
                  <h3>Amount Due</h3>
                  <h3>${invoiceData.subtotal}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
