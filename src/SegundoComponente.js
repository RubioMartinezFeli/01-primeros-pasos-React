import React from 'react'

export const SegundoComponente = () => {

    const libros = ["Harry Poter", "Juego de tronos", "Clean code"];
    //const libros = [];

  return (
    <div className='SegundoComponente'>
        <h1>Listado de libros</h1>
         
        {libros.length >= 1 ?
            (<ul>
                {
                    libros.map((libro,indice) => {
                        return <li key={indice}>{libro}</li>;
                    }) 
                }
            </ul>)
            : (<p>No hay libros</p>)
        }
    </div>
  )
}
