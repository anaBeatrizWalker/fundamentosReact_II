import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
 
ReactDOM.render(
    <Primeiro 
        title="Primeiro Componente (com propriedade)"   value={8**2}/>
    , document.getElementById('root')
)