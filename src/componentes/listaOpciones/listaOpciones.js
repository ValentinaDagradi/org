import "./listaOpciones.css"

const ListaOpciones = (props) => {

    //Método map --> arreglo.map( (equipo, index) => {
    //    return <option></option>
    // }) MAP SOLO FUNCIONA CON ARRAYS
    // cuando creas un elemento con map, tiene q tener una propiedad key q sea unica
    // Usamos el método .map()  ya que nos regresa un resultado, el método .forEach() no nos regresa nada como resultado.


    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)

    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option> )} 
        </select>
    </div>
}



export default ListaOpciones