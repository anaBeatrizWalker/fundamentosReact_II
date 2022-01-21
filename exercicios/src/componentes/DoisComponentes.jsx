import React from "react"

const CompA = props => (
    <h1>Componente A: {props.value}</h1>
)

const CompB = props => (
    <h1>Componente B: {props.value}</h1>
)

export { CompA, CompB }