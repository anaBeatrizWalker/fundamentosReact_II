import React from "react"

const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Júlia']

export default props => {
    //Funções
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        //JSX
        <div>
            <h2>Lista de Aprovados</h2>
            <ul>
                {gerarItens(aprovados)}
            </ul>
        </div>
    )
}