import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import styles from './FinalInvoice.module.css';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';

export const FinalInvoice = () => {
    const userID = useSelector(state => state.auth.uid)
    React.useEffect(()=>{
        getInvoiceData(userID)
    },[])


    const getInvoiceData=(payload)=>{
        axios.get(`https://oryjd.sse.codesandbox.io/Invoice?userId=`)
    }
    return (
        <div className={styles.cont}>
            

            <div className ={styles.invoiceBox}>
                <div className={styles.headBox}>

                </div>


                <div className={styles.invoiceBody}>
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
                                    <p>XYZ</p>
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
                                  <p>16/04/2021</p>
                                  <p>16/04/2021 (upon receipt)</p>
                            </div>

                        </div>
                        <div className={styles.invoRightO}> 

                            <div>
                                <p>Invoice For</p>
                            </div>
                            <div></div>
                            <div>
                                <p>AMAR</p>
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
                            <div className={styles.amountBox}>
                                <div>

                                </div>
                                <div>
                                    <h3>Amount Due</h3>
                                    <h3>$0.00</h3>
                                </div>

                            </div>
                        

                    </div>
                </div>


            </div>
        </div>
    )
}
