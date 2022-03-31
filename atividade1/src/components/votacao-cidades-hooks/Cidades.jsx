import React, { useEffect, useState } from "react"

const Cidades = () => {
    const [votosCapistrano, setVotosCapistrano] = useState(0)
    const [votosQuixada, setVotosQuixada] = useState(0)
    const [votosFortaleza, setVotosFortaleza] = useState(0)
    const [maisVotada, setMaisVotada] = useState("")
    const [menosVotada, setMenosVotada] = useState("")

    useEffect(
        () => {
            let vetor = [votosCapistrano, votosQuixada, votosFortaleza]
            let vetAux = [votosCapistrano, votosQuixada, votosFortaleza]

            for (let i = 0; i < vetor.length - 1; i++) {
                for (let j = i + 1; j < vetor.length; j++) {
                    if (vetor[i] > vetor[j]) {
                        let aux = vetor[i]
                        vetor[i] = vetor[j]
                        vetor[j] = aux
                    }
                }
            }
            let cidades = ""
            let cidades2 = ""
            for (let i = 0; i < 3; i++) {
                if (vetAux[i] === vetor[vetor.length - 1]) {
                    if (i === 0)
                        cidades += "| Capistrano |"
                    if (i === 1)
                        cidades += "| Quixadá |"
                    if (i === 2)
                        cidades += "| Fortaleza |"
                }
                if (vetAux[i] === vetor[0]) {
                    if (i === 0)
                        cidades2 += "| Capistrano |"
                    if (i === 1)
                        cidades2 += "| Quixadá |"
                    if (i === 2)
                        cidades2 += "| Fortaleza |"
                }
            }
            setMaisVotada(cidades)
            setMenosVotada(cidades2)
        }
    )

    return (
        <div style={{ textAlign: "center" }}>
            <h3>Capistrano: {votosCapistrano}</h3>
            <h3>Quixadá: {votosQuixada}</h3>
            <h3>Fortaleza: {votosFortaleza}</h3>
            <h3>Cidade mais votada: {maisVotada}</h3>
            <h3>Cidade menos votada: {menosVotada}</h3>
            <button onClick={() => setVotosCapistrano(votosCapistrano + 1)}>Votar em Capistrano</button>
            <button onClick={() => setVotosQuixada(votosQuixada + 1)}>Votar em Quixadá</button>
            <button onClick={() => setVotosFortaleza(votosFortaleza + 1)}>Votar em Fortaleza</button>
        </div>
    )
}

export default Cidades