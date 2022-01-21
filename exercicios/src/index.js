import React from 'react'
import ReactDOM from 'react-dom'
import { CompA, CompB as B } from './componentes/DoisComponentes'
 
ReactDOM.render(
    <div>
        <CompA value='Olá eu sou A!'/>
        <B value='E eu sou o B'/>
    </div>
    , document.getElementById('root')
)