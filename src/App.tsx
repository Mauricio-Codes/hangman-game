import { useEffect, useState } from 'react';
import HangImage from './components/HangImage';
import { letters } from './helpers/letters';
import  getRamdonLetter  from './helpers/getRamdonLetter';

import './App.css';


function App() {
  
  const [ Word, setWord ] = useState( getRamdonLetter() );
  const [ hiddenWord, setHiddenWord ] = useState('_ '.repeat(Word.length));
  const [ attempts, setAttempts ] = useState(0);
  const [ lose, setLose] = useState(false);
  const [ won, setWon] = useState(false);

  // Determinar si la persona perdió
  useEffect(() => {
    if(attempts >= 9){
      setLose(true);
    }
  }, [attempts]);

  // Determinar si la persona ganó
  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('')
    if( currentHiddenWord === Word){
      setWon(true);
    }
    
  }, [hiddenWord])

  // Detener la interacción si la persona ganó o perdió
  const checkLetter = ( letter: string) => {
    if( lose ) return;
    if( won ) return;

    // Incrementa intentos fallidos cuando la letra no coincide
    if( !Word.includes( letter)){
      setAttempts( Math.min( attempts + 1, 9 ) );
      return;
    } 

    // Revelar las letras existentes en la pantalla
    const hiddenWordArray = hiddenWord.split(' ');    
    
    for( let i = 0; i < Word.length; i++){
      if( Word[i] === letter){
        hiddenWordArray[i] = letter;
      }
    }
    setHiddenWord(hiddenWordArray.join(' '));
  }

  // Reiniciar los valores y estados para el nuevo juego
  const newGame = () => {
    const newWord = getRamdonLetter();
      setWord( newWord);
      setHiddenWord( '_ '.repeat(newWord.length) );
      setAttempts(0);
      setLose(false);
      setWon(false);
    }

  return (
    <div className="App">

      {/* Imágenes */}
      <HangImage imageNumber={attempts}/>

      {/* Palabra oculta */}
      <h3>{hiddenWord}</h3>

      {/* Contador de intentos */}
      <h3>Intentos fallidos: {attempts}</h3>

      {/* Mensaje si perdió*/}
      {
        ( lose ) 
        ? <h2>Perdió, la palabra era: {Word} </h2> 
        : ' '
      }

      {/* Mensaje si ganó*/}
      {
        ( won ) 
        ? <h2>Felicidades, usted ganó</h2> 
        : ' '
      }

      {/* Botones de letras */}
      {
        letters.map( (letter) => (
          <button
          onClick={() => checkLetter(letter)}
          key={ letter }>
            { letter }
          </button>
        ))
      }

      <br/><br/>
      {/* Botón para iniciar otra partida */}
      <button onClick={ newGame }
      >Nuevo Juego
      </button>
      
    </div>
  )
}

export default App