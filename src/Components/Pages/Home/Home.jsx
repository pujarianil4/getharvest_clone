import React from "react"
import { Feature_card, Start_trial_button } from "../../../Library/Custom_UI"
import style from "./Home.module.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
export function Home(){

    return(
        <>
        <section className={style.front_section} >
           
        <div className={style.front_div} >
     
          <div className={style.title}>
              <br/>
              <h1>Unlock the potential of time tracking</h1>
               <h2>Harvest is modern time tracking software – for less effort, more joy, and improved profitability.</h2>
          </div>
          <div className={style.title}>
             <Start_trial_button color="#3E3A63">Start Your Free Trial</Start_trial_button>
             <h3>Fully functional 30-day trial. No credit card required.</h3>
          </div>
    
          <div className={style.title_img}>
              <img src="https://www.getharvest.com/assets/home/homepage-hero-f5fa037e2f7a8ecb0622213e2646f37a098a484073e9a0faa9d6fb748089ba9b.png" alt="title img"/>
          </div>
        
        </div>
    
    
        </section>
        <div className={style.companies}>
            <h3><span>70,000+</span> COMPANIES TRACK TIME WITH HARVEST</h3>
         <img src="https://www.getharvest.com/assets/customers/featured/featured-vw-51c3fc513c16fde99676892d424629144585ff6db226254ed6a05fbfcd48101d.png" alt=""/>
         <img src="https://www.getharvest.com/assets/customers/featured/featured-columbia-38af9030213b155efc3e5616622b4310a9dbfc47143e6685722ee415c9957575.png" alt=""/>
        <img src="https://www.getharvest.com/assets/customers/featured/featured-dell-49d4876c86dfd952d55873444da37c8767157374774d8400fda1fa595aa8a3c6.png" alt=""/>
        <img src="https://www.getharvest.com/assets/customers/featured/featured-conde-nast-19b4e7f7ce02a74c95960198f4d5583ace00a1a4e35579587b04ae3b77dd3caf.png" alt=""/>
        <img src="https://www.getharvest.com/assets/customers/featured/featured-mcdonalds-f8c38ab6c098b8e65db859c61a0d47b8eeaa6d3a18a9ed04296ec4d3e3c8d64a.png" alt=""/>
        <img src="https://www.getharvest.com/assets/customers/featured/featured-aclu-f3278dfb0882477eb54bbf625a53b2eac26aa47aa637764ebed9ebea5be148e2.png" alt=""/>
        <img src="https://www.getharvest.com/assets/customers/featured/featured-lululemon-48638d7ea9a223b3b59cc478f0451b8be4b324d0cb2e239c8e10c1125c77f52e.png" alt=""/>
       <img src="https://www.getharvest.com/assets/customers/featured/featured-amnesty-international-003ebcd35e65d07cd034709ff329a213f08ef8194e54585f60ae6aa32896e84a.png" alt=""/>
        </div>
        <div className={style.feature}>
              <h2>FEATURE</h2>
              <h1>Everything to keep your team ticking</h1>
              <h3>Harvest is so much more than just a simple time tracking software. We help you take the pulse of your business and achieve your goals.

</h3>
        </div>
        <div className={style.feature_card}>
           <div className={style.card}>
           <div className={style.feature_icon}> 
           <i class='fas fa-stopwatch' style={{fontSize:"36px"}}></i>
           </div>
           <h3>Track Time</h3>
           <h4>Intuitive,lightweight time tracking that's easy to learn and use</h4>
           <div className={style.learn}>
             <span>Learn More</span><ArrowForwardIcon/>
           </div>
           </div>

           <div className={style.card} style={{backgroundColor:"#F18D2A"}}>
           <div className={style.feature_icon}style={{backgroundColor:"#C07022"}}> 
           <i class='fa fa-pie-chart' style={{fontSize:"36px"}}></i>
           </div>
           <h3>Track Time</h3>
           <h4>Intuitive,lightweight time tracking that's easy to learn and use</h4>
           <div className={style.learn} style={{border:"1px solid #C07022"}}>
             <span>Learn More</span><ArrowForwardIcon/>
           </div>
           </div>

           <div className={style.card} style={{backgroundColor:"#21A5A0"}}>
           <div className={style.feature_icon}style={{backgroundColor:"#197F7B"}}> 
           <i class='fa fa-credit-card' style={{fontSize:"36px"}}></i>
           </div>
           <h3>Track Time</h3>
           <h4>Intuitive,lightweight time tracking that's easy to learn and use</h4>
           <div className={style.learn} style={{border:"1px solid #197F7B"}}>
             <span>Learn More</span><ArrowForwardIcon/>
           </div>
           </div>

           <div className={style.card} style={{backgroundColor:"#CB5C5B"}}>
           <div className={style.feature_icon}style={{backgroundColor:"#A24A49"}}> 
           <i class='fa fa-share-alt' style={{fontSize:"36px"}}></i>
           </div>
           <h3>Track Time</h3>
           <h4>Intuitive,lightweight time tracking that's easy to learn and use</h4>
           <div className={style.learn} style={{border:"1px solid #A24A49"}}>
             <span>Learn More</span><ArrowForwardIcon/>
           </div>
           </div>
        </div>
     </>   
    )
}