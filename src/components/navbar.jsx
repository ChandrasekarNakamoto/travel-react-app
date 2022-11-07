import React from "react"
import { BiWorld } from "react-icons/bi"


export default function Navbar(){
    return(
        <div className="navclass">
            <i><BiWorld size={42}/></i>
            <h3 className="nav--top"> my travel journal</h3>
        </div>
    )
}