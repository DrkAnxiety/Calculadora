import '../styleSheets/App.css';
import Logo from './Logo';
import Boton from './Boton';
import Pantalla from './Pantalla';
import BotonClear from './BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [value, setValue] = useState('');

  const clickController = (input) => {
    setValue(value + input);
  };

  const result = () => {
    if(value.length > 0) {
      setValue(evaluate(value));
    } else {
      alert('please enter a valid value');
    }
  };

  return (
    <div className="App">
      <Logo />
      <div className='contenedor-calculadora'>
        <Pantalla input={value}/>
        <div className='fila'>
          <Boton clickFunction={clickController}>7</Boton>
          <Boton clickFunction={clickController}>8</Boton>
          <Boton clickFunction={clickController}>9</Boton>
          <Boton clickFunction={clickController}>+</Boton>
        </div>
        <div className='fila'>
          <Boton clickFunction={clickController}>4</Boton>
          <Boton clickFunction={clickController}>5</Boton>
          <Boton clickFunction={clickController}>6</Boton>
          <Boton clickFunction={clickController}>-</Boton>
        </div>
        <div className='fila'>
          <Boton clickFunction={clickController}>1</Boton>
          <Boton clickFunction={clickController}>2</Boton>
          <Boton clickFunction={clickController}>3</Boton>
          <Boton clickFunction={clickController}>*</Boton>
        </div>
        <div className='fila'>
          <Boton clickFunction={result}>=</Boton>
          <Boton clickFunction={clickController}>0</Boton>
          <Boton clickFunction={clickController}>.</Boton>
          <Boton clickFunction={clickController}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear 
          manejarClear={() => setValue('')}>
            Clear
            </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
