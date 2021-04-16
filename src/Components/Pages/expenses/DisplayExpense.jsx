import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { EditExpense } from './EditExpense'

// const initvalue = {
//     date: new Date().toLocaleDateString(),
//     projectName: "",
//     category: "",
//     notes: "",
//     billable: "",
//     amount: "",
//   };
const DisplayExpense =()=>
{
    const [edit,showEdit]=useState(false);
    const handleEdit=()=>
    {
        showEdit(!edit)
    }
    
    const expenseList=useSelector((state)=>state.expense.expenseList)
    return(
        <>
             {
                 expenseList?.map((items)=>(
                    
                     <div style={{display:"flex",justifyContent:"space-around"}} key={items.id}>
                         {edit?<EditExpense handleEdit={handleEdit} edit={edit} items={items}/>:<div>
                         <div>{items.date}</div>
                         <div>{items.projectName}</div>
                         <div>{items.category}</div>
                         <div>{items.amount}</div>
                         <button onClick={handleEdit}>Edit</button>
                             </div>}
                        
                     </div>
                 ))
             } 
        </>
    )
}
export {DisplayExpense}