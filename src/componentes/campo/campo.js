import { useState } from "react"
import "./campo.css"

const Campo = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion ..> en caso de q type no traiga un valr definido, podemos darle un valor predeterminado (en este caso "text")
    const { type = "text" } = props

    console.log(type)

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type= {type}
        />
    </div>
}

export default Campo