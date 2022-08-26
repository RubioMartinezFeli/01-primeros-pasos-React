import React from 'react'

export const EventosComponentes = () => {

    const hasDadoClick = (e, nombre) => {
       console.log("Has dado click al botón " + nombre)
    }

    const hasDadoDobleClick = (e, nombre) => {
      console.log("Has dado doble click al boton " + nombre)
    }

    const hasEntrado = (e, accion) => {
      console.log("Has " + accion + " la caja" );
    }

    const estasDentro = () => {
      console.log("Estas dentro del input, introduce tu nombre!!");
    }

    const estasFuera = () => {
      console.log("Estas fuera del input!!");
    }





  return (
    <div>
        <h1>Eventos en React</h1>
        {/*Evento click*/}
        <p><button onClick = { e => hasDadoClick(e, "Feli") }> Dame click! </button></p>

        {/*Evento doble click*/}
        <p><button onDoubleClick = { e => hasDadoDobleClick(e, "Feli") } >Dame doble click</button></p>

        <div 
          id="caja" 
          onMouseEnter = { e => hasEntrado (e, "entrado en") }
          onMouseLeave = { e => hasEntrado(e, "salido de")}
        >
          {/*Evento onMouseEnter onMouseLeave*/}
          Pasa por encima!!
        </div>

        <p>
          <input 
          type="text" 
          onFocus = { e => estasDentro() }  
          onBlur = { e => estasFuera() } 
          placeholder = "Introduce tu nombre">
          </input>
        </p>
        
    </div>
  )
}
