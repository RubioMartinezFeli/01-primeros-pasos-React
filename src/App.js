import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponentes } from './EventosComponentes';

{/*Componente pricipal App
Un componente es una parte de la aplicación puede ser una función o una clase 
Los componentes nos sirven para poder dividir la web en partes lógicas
La estructura es:
     1. imports de recursos y dependencias de React
     2. función que codifica el componente 
     3. exportar el componente pa tener acceso a él
En la función podemos observar JSX que es una mezcla de html y js
Con el return renderizamos el codigo jsx*/}    

function App() {
  
  let ficha_medica = {
    altura: "180cm",
    peso: "90",
    grupo: "A+",
    alergias: "ninguna"
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Bienvenido al master en React
        </p>

         {/*Cargar mi primer componente*/}
        <div className='componentes'>

          <hr/>
          <EventosComponentes/>

          <hr/>{/*Escribimos las props como atributos*/}
          <TercerComponente 
            nombre= "Feli"
            apellidos = "Rubio Martinez"
            ficha = {ficha_medica}
          />

          <hr/>
          <SegundoComponente />
           <hr/>
           <MiComponente />

        </div>
         
      </header>
       
     
    </div>
  );
}

export default App;

