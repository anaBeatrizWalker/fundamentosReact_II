import React, { Component } from "react"

export default class Contador extends Component{

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
    }

    menosUm(){
        this.setState({numero: this.state.numero - 1})
    }

    render(){
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>+ 1</button>
                <button onClick={() => this.menosUm()}>- 1</button>
            </div>
        )
    }
}