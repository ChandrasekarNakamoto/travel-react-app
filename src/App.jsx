import React from 'react'
import './App.css'
import Card from './src/components/card'
import Navbar from './components/navbar'
import datas from './components/data'


export default function App(){
    const output=datas.map(function(data) {
        return(
       <Card key={data.id}
       {...data}/>
    )} )

    return(
        <div>
            <Navbar />
           {output}
        </div>
    )
}