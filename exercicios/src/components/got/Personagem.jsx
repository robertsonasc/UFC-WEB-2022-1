import React, { Component } from "react"

export default class Personagem extends Component{
    render(){
        return(
            <div>
                Personagem {this.props.nome} da casa {this.props.casa}.
            </div>
        )
    }
}