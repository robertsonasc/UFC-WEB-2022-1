import React, { Component } from "react"


export default class Casa extends Component{
    render(){
        return (
            <div>
                <h1>Casa: {this.props.titulo}</h1>
                {
                    React.Children.map(
                        this.props.children,
                        (person)=>{
                            return React.cloneElement(person, {casa:this.props.titulo})
                        }
                    )
                }
            </div>
            
        )
    }
}