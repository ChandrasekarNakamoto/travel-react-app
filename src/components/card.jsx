import React from 'react'
import { TfiLocationPin } from "react-icons/tfi"

export default function Card(props){
    const style = { color: "red"}
    return (<section className='cardsec'>
        <div className='firstcard'>
        <img src={props.img}/>
        </div>
        <div className='seccard'>
            <h4>japan</h4>
            <div>
                <i><TfiLocationPin style={style}/></i>
            </div>
        </div>
    </section>
    )
}