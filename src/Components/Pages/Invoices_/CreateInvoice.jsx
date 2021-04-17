import React from 'react';
import styled from 'styled-components';
import styles from './CreateInvoice.module.css'
import CloseIcon from '@material-ui/icons/Close';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useSelector,useDispatch} from 'react-redux'
import { getProjectData, getTaskTimer } from '../../../Redux/Timer/timeAction';

const InvoiceCont=styled.div`
    width:70%;
    margin:auto;
`
// const HeadingBox =styled.div``
const HeadingBox =styled.div`
    width:100%;
    height:37%;
    border-bottom:1px solid black;
`



const Notes =styled.div`
    margin-top:20px;
    width:100%;
`

const Buttons =styled.div`
margin-bottom:100px;
margin-top:10px;
    display:flex;
    gap:4px;
    input:nth-child(1){
        text-align:center;
        background-color:green;
        height:40px;
        color:white;
        width:150px;
        border:none;
        background: linear-gradient(#14a000,#1a8d08);
        font-weight: 500;
        border-radius: 3px;
    }
    input:nth-child(2){
        text-align:center;
        height:40px;
        width:100px;
        border:none;
        background: linear-gradient(#f0f0f0,#d3d3d3);
        font-weight: 500;
        border-radius: 3px;
    }
    input:focus{
        outline:none;
        
    }
    input:hover{
        background:#f37510;
        color:white;
        
    }
`

const TaskItem =styled.div``
const TaskItemHeading=styled.div``
const TaskItemBody=styled.div``


export const CreateInvoice = () => {
    const dispatch = useDispatch()
    React.useEffect(()=>{
        
        dispatch(getProjectData(userID))
        dispatch(getTaskTimer(userID))       
     
    },[])

// ______________________________________________________FETCHING DATA__________________________________//
    const userID = useSelector(state => state.auth.uid)
    // console.log(userID)
    const state = useSelector(state => state.time.projectData)
    const TaskEntries = useSelector(state=>state.time.TaskEntries)
    // console.log(state)
    // console.log(TaskEntries)
    state.map((item)=>{
        console.log(item)
    })
    TaskEntries.map((item)=>{
        console.log(item)
    })
//__________________________________________________________________________________________________________________________________//

    const [TaskItemCount,setTaskItemCount]=React.useState([])
    const handleAdd=()=>{
        setTaskItemCount([...TaskItemCount,`item${TaskItemCount.length+1}`])
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    const handleDelete=(id)=>{
        const updatedTaskItemCount=TaskItemCount.filter((item)=>item!==id)
        setTaskItemCount(updatedTaskItemCount)
    }

  
  
    return (
        <InvoiceCont>
            <HeadingBox>
            <h1>Invoice for KAMAL</h1>
            </HeadingBox>
          <form onSubmit={handleSubmit}>
            
            <div className={styles.FormBox}>
              {/* ===================================================================== */} 
                <div className={styles.InvidInput}>
                    <div>
                        <div>
                            <label htmlFor="">Invoice ID</label>
                        </div>
                        <input type="text"/>
                    </div> 

                    <div>
                        <div>
                            <label htmlFor="">Invoice For</label>
                        </div>
                        <input type="text" value="KAMAL"/>
                    </div>
                </div>

               <div className={styles.InvidInput}>
                    <div>
                        <div>
                            <label htmlFor="">PO Number</label>
                        </div>
                        <input type="text"/>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="">Discount</label>
                        </div>
                        <input type="text" value="KAMAL"/>
                    </div> 
                </div> 

                <div className={styles.InvidInput}> 
                   
                   <div>
                        <div>
                            <label htmlFor="">Issue Date</label>
                        </div>
                        <input type="text"/>
                   </div>
                   <div>
                       <div>
                             <label htmlFor="" style={{}}>Due Date</label>
                       </div>
                        <select name="" id="" >
                                <option value="">
                                    Upon Reciept
                                </option>
                                <option value="">
                                Net 15 
                                </option>
                                <option value="">
                                    Net 30 
                                </option>
                                <option value="">
                                    Net 45 
                                </option>
                                <option value="">
                                    Net 60 
                                </option>
                                <option value="">
                                    Custom
                                </option>
                        </select>

                    </div>  

                </div>            
                      
            
            
            <div className={styles.SubInvidInput}>
                 <div >
                        <label htmlFor="">Subject</label>
                 </div>
            
                    <input type="text" /> 
               


            </div>
            
            {/* _______________________________________________ */}
           

           

            </div>

            
           
            <TaskItem className={styles.taskitems}>
                <TaskItemHeading className={styles.TaskItemHeading}>
                    <div>
                        <div>Item Type</div>
                        <div>Description</div>
                        <div>Quantity</div>
                        <div>Unit Price</div>
                        <div>Amount</div>
                    </div>
                </TaskItemHeading>

              {
                  TaskItemCount.map((item)=>  <TaskItemBody className={styles.TaskItemBody}>
                  <div>
                      <div onClick={(e)=>handleDelete(item)}><CloseIcon style={{fontSize:'18px'}}/></div>
                  </div>
                  <div>
                      <select name="" id="">
                          <option value="">Product</option>
                          <option value="">Service</option>
                      </select>
                  </div>
                  <div>
                      <textarea name="" id="" rows="3" style={{width:'95%'}}></textarea>
                      <div>
                          <label htmlFor="">Linked project</label>
                      <select name="" id="">
                          <option value="">--None--</option>
                          <option value="">Project</option>
                      </select>
                      <HelpOutlineIcon style={{color:'#b3adad',fontSize:'20px',borderRadius:'5px'}}/>
                      </div>
                  </div>
                  <div>
                      <input type="text"/>
                  </div>
                  <div>
                      <input type="text"/>
                  </div>
                  <div>$0.00</div>
                  
              </TaskItemBody>  )
              }

               <div className={styles.totolsection}>
                    <div>
                            <button className={styles.AdditemButton} onClick={handleAdd}>+ Add Item</button>
                    </div>

                    <div >
                        <div><p>Subtotal</p></div>
                        <div><p>$0.00</p></div>
                    </div>
               </div>

             


               <div className={styles.totolsection}>

               <div >

               </div>
               <div>
                   <div><h3>Amount Due</h3></div>
                   <div><h3>$0.00</h3></div>
               </div>

               </div>

               
              
            </TaskItem>


            <Notes>
                <label htmlFor="">Notes (optional, displayed on invoice)</label>
                <textarea name="" id=""  rows="4" style={{width:'100%'}}></textarea> 
                <label htmlFor="">Formatting tips: *bold* _italics_</label> 
            </Notes>

            <Buttons>
            <input type="submit" value="Save Invoice"/>  
            <input type="Submit" value="Cancel"/>      
            </Buttons>     
          </form>
        </InvoiceCont>
    )
}
