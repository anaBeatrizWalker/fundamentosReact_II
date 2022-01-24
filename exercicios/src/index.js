import React from 'react'
import ReactDOM from 'react-dom'
import Contador from './componentes/Contador'

 
ReactDOM.render(
    <div>
        <Contador numeroInicial={0}/>
    </div>
    , document.getElementById('root')
)