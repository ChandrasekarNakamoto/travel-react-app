import React from 'react'
import './App.css'
import Card from './components/card'
import Navbar from './components/navbar'
import datas from './components/data'


export default function App(){
    const output=datas.map(function(data) {
        return(
       <Card img={data.imageUrl} />
    )} )

    return(
        <div>
            <Navbar />
           {output}
        </div>
    )
}