import React from 'react'
import ReactDOM from 'react-dom'
import FamiliaWalker from './componentes/FamiliaWalker'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'
import CompComFuncao from './componentes/CompComFuncao'
 
ReactDOM.render(
    <div>
        <FamiliaWalker/>

        <Familia sobrenome='Conceição'>
            <Membro nome='Cláudia'/>
            <Membro nome='Severina'/>
            <Membro nome='Júlia'/>
        </Familia>

        <CompComFuncao/>
    </div>
    , document.getElementById('root')
)