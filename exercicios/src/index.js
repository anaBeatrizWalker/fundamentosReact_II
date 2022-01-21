import React from 'react'
import ReactDOM from 'react-dom'
import FamiliaWalker from './componentes/FamiliaWalker'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'
 
ReactDOM.render(
    <div>
        <FamiliaWalker/>

        <Familia sobrenome='Conceição'>
            <Membro nome='Cláudia'/>
            <Membro nome='Severina'/>
            <Membro nome='Júlia'/>
        </Familia>
    </div>
    , document.getElementById('root')
)