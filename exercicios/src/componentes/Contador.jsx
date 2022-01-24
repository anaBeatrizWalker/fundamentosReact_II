import React, { Component } from "react"

export default class Contador extends Component{
    /*Solução 01 - Bind
    constructor(props){
        super(props)

        this.maisUm = this.maisUm.bind(this)
        this.menosUm = this.menosUm.bind(this)
    }*/

    maisUm(){
        this.props.numero++
    }

    menosUm(){

    }

    render(){
        return (
            <div>
                <div>Número: {this.props.numero}</div>
                <button onClick={() => this.maisUm}>+ 1</button>
                <button>- 1</button>
            </div>
        )
    }

    /*Solução 02 - Função Arrow no onClick
        <button onClick={() => this.maisUm}>+ 1</button>

    Solução 03 - Função Arrow no método
        maisUm = () => {
            this.props.numero++
            console.log(this)
        }
    */
}