import React from 'react'

const EditExpense = ({handleEdit,edit,items})=>
{
    console.log(items)
    return(
        <>
          
          <button onClick={handleEdit}>Cancel</button>
        </>
    )
}
export {EditExpense}