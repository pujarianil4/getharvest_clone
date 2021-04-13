import React, { useState } from 'react'
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
           <button disabled={show} onClick={handleButton}>+ New Expense</button> 
           {show?<SaveExpense handleButton={handleButton}/>:<select><option value="Ram">Ram</option></select>}
        </>
    )
}
export {Expenses}