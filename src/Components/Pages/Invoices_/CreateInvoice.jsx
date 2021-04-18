import React from 'react';
import styled from 'styled-components';
import styles from './CreateInvoice.module.css'
import CloseIcon from '@material-ui/icons/Close';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useSelector,useDispatch} from 'react-redux'
import { getProjectData, getTaskTimer } from '../../../Redux/Timer/timeAction';
import axios from 'axios';
// import {useDispatch,useSelector} from 'react-redux';
import {Ring} from 'react-awesome-spinners';
import { grey } from '@material-ui/core/colors';

const InvoiceCont=styled.div`
    width:70%;
    margin:auto;
    label{
        font-size:14px;
    }
    input,select,textarea{
        border:1px solid silver;
        border-radius:3px;
    }
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

//_________________________________________________________________________INITIAL OBJECT_____________________________________________________________//


const initInvoice ={
    invId:"",
    issueDate:"",
    poNum:"",
    discount:"",
    invFor:"",
    dueDate:"",
    subject:"",
    subtotal:"",
    amountDue:"",
    clientname:"",
    pname:''


}












export const CreateInvoice = () => {

    // ______________________________________________________FETCHING DATA__________________________________//
    const userID = useSelector(state => state.auth.uid)
    // console.log(userID)
    const state = useSelector(state => state.time.projectData)
    const TaskEntries = useSelector(state=>state.time.TaskEntries)
    // console.log(state)
    // // console.log(TaskEntries)
    state.map((item)=>{
        // console.log(item)
    })
    TaskEntries.map((item)=>{
        // console.log(item)
    })

    //___________________________________________________________________________________________________________//
    const [formState,setFormstate]=React.useState(initInvoice)
    const {invId,issueDate,poNum,discount,invFor,dueDate,subject,subtotal,amountDue,clientname,pname}=formState

    const handleChange =(e)=>{
        const {name,value} =e.target;
        const val =value
        setFormstate({...formState,[name]:val})
        console.log(clientname)
        
        
    } 



    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    const dispatch = useDispatch()
    React.useEffect(()=>{
        
        dispatch(getProjectData(userID))
        dispatch(getTaskTimer(userID))       
     
    },[])




//____________________________________GETTING EXPENSE DATA FROM AXIOS__________________________________________//
// React.useEffect(()=>{
//     getExpenseData(userID,projName)
// },[])
const [expenseEntries,setExpenseEntries]=React.useState([])
const [isLoading,setIsLoading]=React.useState(false)
const [hoursData,setHoursData]=React.useState([])



// console.log(expenseEntries)
// console.log(state)
// console.log(TaskEntries)
const getExpenseData=(payload,projName)=>{
    setIsLoading(true)
    return axios.get(`https://gor1f.sse.codesandbox.io/expences?userId=${payload}&&projectName=${projName}`)
    .then((res)=>{setExpenseEntries(res.data)
        setIsLoading(false)
     
    })
}


const getHoursData=(payload,projName)=>{
    setIsLoading(true)
    return axios.get(`https://1u30f.sse.codesandbox.io/timer?userId=${payload}&&projectName=${projName}`)
    .then((res)=>{setHoursData(res.data)
        
        setIsLoading(false)
        
    })
}

React.useEffect(()=>{
    const projName = state?.filter((item)=>item.client===clientname).map((item)=>item.pname)
    console.log(clientname,projName)
    getExpenseData(userID,projName)
    getHoursData(userID,projName)
  
    return function cleanup() {
        
      };
  
    
  },[clientname])

  React.useEffect(()=>{
   console.log(expenseEntries)
   
  },[expenseEntries])

  React.useEffect(()=>{
    
    console.log(hoursData)
  },[hoursData])

  
//____________________________________GETTING EXPENSE DATA FROM AXIOS__________________________________________//







//__________________________________________________________________________________________________________________________________//
    const [amount,setAmount]=React.useState([])
    const [quantity,setQuantity]=React.useState(0.00)
    const [price,setprice]=React.useState(0.00)
    const [TaskItemCount,setTaskItemCount]=React.useState([])
    const [totalAmount,setTotalAmount]=React.useState(0)
    const [hours,setHours]=React.useState([])

   React.useEffect(()=>{

            
           setHours(hoursData.map((item)=>Number(item.timer)*Number(state?.filter((item)=>item.client===clientname).map((item)=>
           item.projectType[0].hourlyRates)) ))
        //    const expe =expenseEntries.map((item)=>
        
        //            Number(item.amount)
        //        )
               setAmount([...amount,...hours])
               
   },[clientname])

    React.useEffect(()=>{
        setTotalAmount(amount.reduce((accumulator, currentValue) => accumulator + currentValue,0))
    },[amount])


    const handleAdd=()=>{
        setTaskItemCount([...TaskItemCount,`item${TaskItemCount.length+1}`])
        setAmount([...amount,Number(quantity)*Number(price)])
        
    }
   
   
    const handleDelete=(id)=>{
        const updatedTaskItemCount=TaskItemCount.filter((item)=>item!==id)
        setTaskItemCount(updatedTaskItemCount)
    }

  
 

    return (
        
        <InvoiceCont>
            {/* <h1>
                {
                    hoursData.map((item)=>
                        <div>
                            {Number(item.timer)*Number(state?.filter((item)=>item.client===clientname).map((item)=>
                    item.projectType[0].hourlyRates))
                    
                    }
                    
                        </div>
                    )
                }
            </h1>
            <div>
                        {
                           expenseEntries.map((item)=>
                           <h1>
                               {
                                   item.amount
                               }
                           </h1> )
                        }
            </div> */}
         
            {
                     
            }


            <Ring color={'#9e9e9e'} />
            <HeadingBox>
            <h1>Invoice for {clientname}</h1>
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
                            <label htmlFor="">Issue Date</label>
                        </div>
                        <input type="text"/>
                        {/* <div>
                            <label htmlFor="">Invoice For</label>
                        </div>
                        <input type="text" value="KAMAL"/> */}
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
                        <input type="text" value=""/>
                    </div> 
                </div> 

                <div className={styles.InvidInput}> 
                   
                   <div>

                         <div>
                            <label htmlFor="">Invoice For</label>
                        </div>
                        <select name="clientname" id=""  value={clientname} onChange={handleChange}>
                            
                                <option value="none">--None</option>
                                {
                                    state?.map((item)=>
                                    <option value={item.client}>
                                    {item.client}
                                         </option>
                                    )
                                }
                               
                        </select>
                        {/* <div>
                            <label htmlFor="">Issue Date</label>
                        </div>
                        <input type="text"/> */}
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
                  hoursData.map((item,i)=>  <TaskItemBody className={styles.TaskItemBody}>
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
                      <select name="pname" id="" value={pname} onChange={handleChange}>
                          <option value="">--None--</option>
                          {
                                    state?.filter((item)=>item.client===clientname).map((item)=>
                                    <option value={item.pname}>
                                    {item.pname}</option>)
                                    }
                      </select>
                      <HelpOutlineIcon style={{color:'#b3adad',fontSize:'20px',borderRadius:'5px'}}/>
                      </div>
                  </div>
                  <div>
                      <input type="text" value={item.timer} onChange={(e)=>setQuantity(e.target.value)}/>
                  </div>
                  <div>
                      <input type="text" value={state?.filter((item)=>item.client===clientname).map((item)=>
                      item.projectType[0].hourlyRates)} onChange={(e)=>setprice(e.target.value)}/>
                  </div>
                  <div>${Number(item.timer)*Number(state?.filter((item)=>item.client===clientname).map((item)=>
                    item.projectType[0].hourlyRates))}</div>
                  
              </TaskItemBody>  )
              }






            {
                
                  expenseEntries.map((item,i)=>  <TaskItemBody className={styles.TaskItemBody}>
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
                      <select name="pname" id="" value={pname} onChange={handleChange}>
                          <option value="">--None--</option>
                          {
                                    state?.filter((item)=>item.client===clientname).map((item)=>
                                    <option value={item.pname}>
                                    {item.pname}</option>)
                                    }
                      </select>
                      <HelpOutlineIcon style={{color:'#b3adad',fontSize:'20px',borderRadius:'5px'}}/>
                      </div>
                  </div>
                  <div>
                      <input type="text" value={1} onChange={(e)=>setQuantity(e.target.value)}/>
                  </div>
                  <div>
                      <input type="text" value={item.amount}/>
                  </div>
                  <div>${item.amount}</div>
                  
              </TaskItemBody>  )
              }





























              {
                  TaskItemCount.map((item,i)=>  <TaskItemBody className={styles.TaskItemBody}>
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
                      <select name="pname" id="" value={pname} onChange={handleChange}>
                          <option value="">--None--</option>
                          {
                                    state?.filter((item)=>item.client===clientname).map((item)=>
                                    <option value={item.pname}>
                                    {item.pname}</option>)
                                    }
                      </select>
                      <HelpOutlineIcon style={{color:'#b3adad',fontSize:'20px',borderRadius:'5px'}}/>
                      </div>
                  </div>
                  <div>
                      <input type="text" onChange={(e)=>setQuantity(e.target.value)}/>
                  </div>
                  <div>
                      <input type="text" onChange={(e)=>setprice(e.target.value)}/>
                  </div>
                  <div>${amount[i+1]?amount[i+1]:"0.00"}</div>
                  
              </TaskItemBody>  )
              }







               <div className={styles.totolsection}>
                    <div>
                            <button className={styles.AdditemButton} onClick={handleAdd}>+ Add Item</button>
                    </div>

                    <div >
                        <div><p>Subtotal</p></div>
                        <div><p>${totalAmount}</p></div>
                    </div>
               </div>

             


               <div className={styles.totolsection}>

               <div >

               </div>
               <div>
                   <div><h3>Amount Due</h3></div>
                   <div><h3>${totalAmount}</h3></div>
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
