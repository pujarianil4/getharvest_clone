import React, { useState } from "react";
import style from "./Carousel.module.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
export function Carousel(){
   const arr=["slider1.png","slider2.png","slider3.png"]
  
   const [current,setCurrent]=useState(0)
   
   const sliderNext=()=>{
   
     if(current<arr.length-1){
   
      setCurrent(current+1)
 
      }else{
        setCurrent(0)
      }
      
     }
     const sliderPrev=()=>{
   
      if(current>0){
    
       setCurrent(current-1)
  
       }else{
         setCurrent(arr.length-1)
       }
       
      }
      
   
  return(
    <div className={style.maindiv}>
        <div className={style.btn}>
          <button onClick={sliderPrev}><ArrowBackIosIcon/></button>
        </div>
        <div className={style.img}>
          <img src={arr[current]} alt="slider"/>
        </div>
        <div className={style.btn}>
       <button onClick={sliderNext}><ArrowForwardIosIcon/></button>
        </div>
    </div>
  )
}
