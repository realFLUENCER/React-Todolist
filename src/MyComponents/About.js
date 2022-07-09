import React from 'react'
import '../App.css';

export const About = () => {
    let cool = {
            textAlign: 'center', 
            fontWeight: 'bold',
            fontSize: 22,
            marginTop: 100,
            width: 2000,  
            height: 750,   
            color: '#F98181'         
    }
    return (
            <div className="container" style={cool} >
             <style>{'body { background-image: linear-gradient(to bottom, #4dffdc, #20f2f3, #39e4ff, #65d3fe, #89c2f3); }'}</style>     
           <p>  This area here is to demonstrate how this application is a <b>single-page application</b> </p>
            <p>  which in simple terms means it wont reload if you press home  </p>
        </div>
    )
}
