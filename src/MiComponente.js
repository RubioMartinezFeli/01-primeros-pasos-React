import React, {Fragment} from "react"; 
{/*}Importar modulos de React*/}

{/*Fumción*/}
const MiComponente = () => {
    {/*Para poder renderizar mas de una etiqueta
 (mucho contenido) tenemos tres formas de hacerlo
 ponerlo todo entre parentesis y dentro de un div u otro contenedor
 o usando la sintaxis de los fragments:
         un franment es: <></>
         o importando el objeto Fragment: <Fragment></Fragment> */}

         {/*Variables*/}
         let nombre = "Feli";
         let web = "felirubio.es";

         {/* Objeto Json*/}
         let usuario = {
            nombre: "Feli",
            apellidos: "Rubio Martínez",
            web: "felirubio.com"
         };

        {/*console.log(usuario);*/}

    return (
        <div className="MiComponente">
           <h2>Componente creado</h2>
           <h3>Datos del usuario:</h3>
           <ul>
              {/*Concatenamos variables*/}
              <li>Nombre: <strong>{usuario.nombre}</strong></li>
              <li>Apellidos: <strong>{usuario.apellidos}</strong></li>
              <li>Web: <strong>{usuario.web}</strong></li>
           </ul>
           <p>Este es mi primer componente</p>
           <ul>
              <li>
                  React
              </li>
              <li>
                  Angular
              </li>
              <li>
                  Vue
              </li>
           </ul>
        </div>
           
    )
}

//Export
export default MiComponente;
