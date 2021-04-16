import React from 'react'

const EditExpense = ({handleEdit,edit,items})=>
{
    console.log(items);
    const {id}=items
    return(
        <>
          
          <button onClick={()=>handleEdit(id)}>Cancel</button>
        </>
    )
}
export {EditExpense}