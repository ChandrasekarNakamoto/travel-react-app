import React from 'react'
import { TfiLocationPin } from "react-icons/tfi"

export default function Card(props){
    const style = { color: "red"}
    return (<section className='cardsection'>
        <div className='firstcard'>
        <img src={props.imageUrl}/>
        </div>
        <div>
        <div className='seccard'>
            <i><TfiLocationPin style={style}/></i>
            <h4 className='loc'>{props.location}</h4>
            <a className='map' href={props.googleMapsUrl} target="_blank">View on google maps</a>
            </div>
            <h2>{props.title}</h2>
        <h4>{props.startDate}-{props.endDate}</h4>
        <p>{props.description}</p>
        </div>
        
    </section>
    )
}