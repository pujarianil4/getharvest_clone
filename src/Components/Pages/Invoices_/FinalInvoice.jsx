import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import styles from './FinalInvoice.module.css';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router';
import {Ring} from 'react-awesome-spinners';
import ReactToPdf from "react-to-pdf"

const paramString =window.location.search
let params = new URLSearchParams(paramString)
params =params.get('pname')
export const FinalInvoice = () => {
    const [invoiceData,setInvoiceData]=React.useState()
    const [isLoading,setIsLoading]=React.useState(true)
    const [isError,setisError]=React.useState(false)
    // console.log(params.toString())
    console.log(invoiceData)
    const userID = useSelector(state => state.auth.uid)
    React.useEffect(()=>{
        getInvoiceData(userID,params)
    },[])
    const getInvoiceData=(payload,params)=>{
        setIsLoading(true)
        axios.get(`https://oryjd.sse.codesandbox.io/Invoice?userId=${userID}&&pname=${params}`).then((res)=>{
            setInvoiceData(res.data[0])
            console.log(`https://oryjd.sse.codesandbox.io/Invoice?userId=${userID}&&pname=${params}`)
        }).then((res)=>setIsLoading(false)
        )
        .then((err)=>
            setisError(true)
        )
    }
       const ref = React.createRef();
    const options = {
       
        unit: 'in',
        
    };
    return isLoading?(<Ring/>): (
        <div className={styles.cont}>
            <div className ={styles.invoiceBox}>
                <div className={styles.headBox}>
                      <ReactToPdf targetRef={ref} options={options} x={.8} y={.8} scale={0.8} filename="invoice.pdf">
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf>
                </div>
                <div className={styles.invoiceBody} ref={ref}>
                    <div className={styles.invoLines}>
                        <div className={styles.invoLeft}>
                            <div><h1>INVOICE</h1></div>
                        </div>
                        <div className={styles.invoRight}> 
                                <div>
                                    <p>From</p>
                                </div>  
                                <div>
                                </div> 
                                <div>
                                    <p>Kamal</p>
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
                            <div>
                            </div>
                            <div>
                                  <p>2</p>  
                                  <p>{invoiceData.issueDate}</p>
                                  <p>{invoiceData.dueDate}</p>
                            </div>
                        </div>
                        <div className={styles.invoRightO}> 
                            <div>
                                <p>Invoice For</p>
                            </div>
                            <div></div>
                            <div>
                                <p>{invoiceData.clientname}</p>
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
                            {invoiceData.incoice_deatls.map(((item,i)=>
                            <div className={styles.table}>
                            <div>
                                <p>{i}</p>
                            </div>
                            <div>
                                <p>{`[${invoiceData.pname}] PO-${invoiceData.poNum}`}</p>
                            </div>
                            <div>
                                 <p>{item}</p>
                            </div>
                            <div>
                                 <p>{invoiceData.hourlyRates}</p>
                            </div>
                            <div>
                                 <p>{Number(item)*Number(invoiceData.hourlyRates)}</p>
                            </div>
                        </div> 
                            ))}
                            <div className={styles.amountBox}>
                                <div>
                                </div>
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
}