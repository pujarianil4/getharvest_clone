import React, { useState } from 'react'
import { DisplayExpense } from './DisplayExpense';
import { SaveExpense } from './SaveExpense';

const Expenses =()=>
{
    const [show ,setShow]=useState(false);
    const handleButton =()=>
    {
        setShow(!show)
    }
    return(
        <>
          <div style={{display:"flex"}}>
          <div> <button disabled={show} onClick={handleButton}>+ New Expense</button> </div>
           {show?<SaveExpense handleButton={handleButton}/>:<select><option value="Ram">Ram</option></select>}
          </div>
        
           <DisplayExpense/>
        </>
    )
}
export {Expenses}