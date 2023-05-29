import {useState} from "react"
import "./miOrg.css"

const MiOrg = (props) => {

    //Estado - hooks (funcionalidades q nos ayudan a trabajar con el comportamiento de react)
    // Un tipo de hook es - useState -
    // useState()
    //const [nombreVariable,funcionQueActualiza] = useState(valorInicial)

    console.log(props)

   /*const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar) //si es true pasa a false, y si es false pasa a true
    }*/


    return <section className="org-section">
        <h3 className="titulo">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg