import React from "react"
import { Start_trial_button } from "../../../Library/Custom_UI"
import style from "./Home.module.css"
export function Home(){

    return(
        <section className={style.front_section} >
           
        <div className={style.front_div} >
        <hr/>
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
    )
}