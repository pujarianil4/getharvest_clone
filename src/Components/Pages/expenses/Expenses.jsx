import React, { useState } from 'react'
import { DisplayExpense } from './DisplayExpense';
import { SaveExpense } from './SaveExpense';
import styles from './Expense.module.css'
const Expenses =()=>
{
    const [show ,setShow]=useState(false);
    const handleButton =()=>
    {
        setShow(!show)
    }
    return(
        <>
          <div style={{display:"flex"}} >
          <div className={styles.NewExpensebtn}> <button disabled={show} onClick={handleButton}>+ New Expense</button> </div>
           {show?<SaveExpense handleButton={handleButton}/>:<div></div>}
          </div>
        
           <DisplayExpense/>
        </>
    )
}
export {Expenses}