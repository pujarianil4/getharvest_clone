import React from "react"
import style from "./Footer.module.css"
export function Footer(){

    return(
        <div className={style.footer} >
            <div className={style.sitemap}>
              <div className={style.harvest}></div>
            </div>
            <div className={style.copyright}>

            </div>
        </div>
    )
}