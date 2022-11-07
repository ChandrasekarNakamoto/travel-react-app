import React from 'react'
import {GrLocation} from 'react-icons/gr'



export default function Card(props){
    const style = { color: "red"}
    return (<section className='cardsection'>
        <div className='firstcard'>
        <img src={props.imageUrl}/>
        </div>
        <div className='cardright'>
        <div className='seccard'>
            <i><GrLocation style={style}/></i>
            <h4 className='loc'>{props.location.toUpperCase()}</h4>
            <a className='map' href={props.googleMapsUrl} target="_blank">View on google maps</a>
            </div>
            <h2 className='title'>{props.title}</h2>
        <h4 className='date'>{props.startDate}-{props.endDate}</h4>
        <p className='data'>{props.description}</p>
        </div>
        
    </section>
    )
}