import React, { Component } from "react"

export default class Contador extends Component{

    state = {
        numero: this.props.numeroInicial
    }

    alterarNumero = diferenca => {
        this.setState({
            numero: this.state.numero + diferenca})
    }

    render(){
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={() => this.alterarNumero(10)}>+ 10</button>
                <button onClick={() => this.alterarNumero(- 10)}>- 10</button>
            </div>
        )
    }
}