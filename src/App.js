import React from 'react'
import useWordGame from './useWordGame'

function App() {
    const {
      text,
      timer,
      isTimeRemaning,
      wordsCount,
      textareaRef,
      startGame,
      handleChange} = useWordGame(15)

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea 
         onChange={handleChange}
         value={text}
         disabled={!isTimeRemaning}
         ref={textareaRef}
      />
      <h4>Time remaining: {timer}</h4>
      <button 
         onClick={startGame}
         disabled={isTimeRemaning}
      >
      {timer === 0 ? "play again" : "start"}</button>
      {timer === 0 ? <h4>Word count: {wordsCount}</h4> : null}
    </div>
  );
}

export default App;
