import React from "react"
import { Link } from "react-router-dom"
import style from "./Footer.module.css"
export function Footer(){

    return(
        <div className={style.Footer}>
        <div className={style.footer} >
            <div className={style.sitemap}>
              <div className={style.harvest}>
                  <h4>Harvest</h4>
                  <Link></Link>
              </div>
            </div>
            <div className={style.copyright}>

            </div>
        </div>
        </div>
    )
}