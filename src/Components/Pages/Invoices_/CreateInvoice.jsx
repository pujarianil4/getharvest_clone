import React from 'react';
import styled from 'styled-components';


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

const FormBox =styled.div`
margin-top:20px;
width:100%;
display:flex;
gap:10%;
`
const RightBox =styled.div`
display:flex;
flex-direction:column;
gap:10px;
  
    width :50%;
    div>input,select{
        height:30px;
    }
    div{
        display:flex;
        justify-content:space-between;
    }
`
const LeftBox =styled.div`
display:flex;
flex-direction:column;
gap:10px;
    width:40%;
    
    div>input{
        height:30px;
    }
    div{
        display:flex;
        justify-content:space-between;
    }
`

const Notes =styled.div`
    margin-top:20px;
`

const Buttons =styled.div`
margin-top:10px;
    display:flex;
    gap:4px;
    input:nth-child(1){
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


export const CreateInvoice = () => {
    return (
        <InvoiceCont>
            <HeadingBox>
            <h1>Invoice for "KLKLLKLKLKLKLKLK"</h1>
            </HeadingBox>
          <form>
            
            <FormBox>
                <LeftBox>
            <div><label htmlFor="">Invoice ID</label>
            <input type="text" style={{width:'200px'}}/>
            </div>            
            <div><label htmlFor="">PO Number</label>
            <input type="text" style={{width:'200px'}}/>
                </div>
            <div><label htmlFor="">Issue Date</label>
            <input type="text" style={{width:'200px'}}/>
            </div>            </LeftBox>

            <RightBox>

            <div><label htmlFor="">Invoice For</label>
            <input type="text" value="KLKLLKLKLKLKLKLK" style={{width:'200px'}}/>
                </div>
            <div><label htmlFor="">Discount</label>
            <input type="text" value="KLKLLKLKLKLKLKLK" style={{width:'200px'}}/>
            </div>            
            <div><label htmlFor="">Due Date</label>
            <select name="" id="" style={{width:'208px'}}>
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
            
            
            
            </RightBox>

           

            </FormBox>

            <label htmlFor="">Subject</label>
            <input type="text" style={{width:'78.5%',margin:'5px 0 0 170px',height:'30px'}}/>

            <Notes>
                <label htmlFor="">Notes (optional, displayed on invoice)</label>
                <textarea name="" id="" cols="146" rows="5"></textarea> 
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
