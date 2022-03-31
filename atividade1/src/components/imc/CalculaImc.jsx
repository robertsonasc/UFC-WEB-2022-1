import React, { Component } from "react"

export default class CalculaImc extends Component{
    constructor(props){
        super(props)
        this.state = {peso: '', altura: ''}

        this.setPeso = this.setPeso.bind(this)
        this.setAltura = this.setAltura.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    situacao(imc){
        if(imc < 17){
            alert("Muito abaixo do peso")
        }else if(imc >= 17 && imc <= 18.49){
            alert("Abaixo do peso")
        }else if(imc >= 18.50 && imc <= 24.99){
            alert("Peso normal")
        }
        else if(imc >= 25 && imc <= 24.99){
                alert("Acima do peso")
        }
        else if(imc >= 30 && imc <= 34.99){
            alert("Obesidade 1")
        }
        else if(imc >= 35 && imc <= 39.99){
            alert("Obesidade 2 (severa)")
        }
        else if(imc >= 40){
            alert("Obesidade 3 (mórbida)")
        }     
         
    }
    onSubmit(e){
        e.preventDefault()
        let peso1 = this.state.peso
        let altura1 = this.state.altura
        const res = peso1/(altura1*altura1)
        this.situacao(res)
        
    }
    setPeso(e){
        this.setState({peso:e.target.value})
    }
    setAltura(e){
        this.setState({altura:e.target.value})
    }
    render(){

        return (
            <div style={{marginTop:50}}>
                <h4>Calcular IMC</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Peso: </label>
                        <input type="number" className="form-control"
                            value={this.state.peso} onChange={this.setPeso}/>
                    </div>
                    <div className="form-group">
                        <label>Altura: </label>
                        <input type="float" className="form-control"
                            value={this.state.altura} onChange={this.setAltura}/>
                    </div>
                    <div className='form-group' style={{marginTop:10}}>
                        <input type='submit' className='btn btn-primary' />
                    </div>
                </form>

            </div>
        )
    }
}