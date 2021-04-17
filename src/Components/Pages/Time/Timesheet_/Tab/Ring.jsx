import React from "react"
import { Ring } from "react-awesome-spinners"
export function TimeRing({size="5px",color="white"}){

    return(
        <div style={{width:"20px",height:"10px"}}>
          <Ring size={size} color={color} />
        </div>
    )
}