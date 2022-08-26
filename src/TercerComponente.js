import React from 'react'
import PropTypes  from 'prop-types'

{/**Para poder enviar información entre componentes se usan las props */}
{/*Para valida las props  usamos PropTypes*/}

export const TercerComponente = ({nombre, apellidos, ficha}) => {


  return (

    <div>
        <h1>Comunicación entre componentes</h1>
        <ul>
          <li>
            Nombre: {nombre}
          </li>
          <li>
            Apellidos: {apellidos}
          </li>
          <li>
             Alergias: {ficha.alergias}
          </li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellidos: PropTypes.string.isRequired, 
  ficha: PropTypes.object
}

TercerComponente.defaultPorps = {
  nombre: "Feli",
  apellidos: "Rubio Martinez"
}
