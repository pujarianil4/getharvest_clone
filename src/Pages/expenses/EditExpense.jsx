import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editExpense } from '../../Redux/Expenses/action';
// const initvalue = {
//     date: new Date().toLocaleDateString(),
//     projectName: "",
//     category: "",
//     notes: "",
//     billable: "",
//     amount: "",
//   };
const EditExpense = ({handleEdit,edit,items})=>
{
    console.log(items);
    const {id,projectName}=items
    const [projecterName,setProject]=useState(projectName)
    const dispatch =useDispatch();
    const handleChange =()=>
    {
        
        const actionedit=editExpense({...items,projectName:projecterName})
        dispatch(actionedit)
    }
    return(
        <>
          <input type="text" value={projecterName} onChange={(e)=>setProject(e.target.value)}/>
          <button onClick={handleChange}>Change</button>
          <button onClick={()=>handleEdit(id)}>Cancel</button>
        </>
    )
}
export {EditExpense}