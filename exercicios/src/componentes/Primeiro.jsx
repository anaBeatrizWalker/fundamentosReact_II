import React from "react"

export default props => 
    <div>
        <h1>{props.title}</h1>
        <h2>{`Potência de 8 por 2 = ${props.value}`}</h2>
        <p>{Math.random()}</p>
    </div>