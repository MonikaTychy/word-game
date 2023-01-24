import React, {useState, useEffect, useRef} from 'react'

function App() {
    const [text, setText] = useState("")
    const [timer, setTimer] = useState(5)
    const [isTimeRemaning, setIsTimeRemaning] = useState(false)
    const [wordsCount, setWordCounts] = useState(0)
    const textareaRef = useRef(null)

    useEffect(() => {
      if(timer > 0 && isTimeRemaning){
        setTimeout(() => {
          setTimer(prevTimer => prevTimer - 1)
        }, 1000)
      } else if (timer === 0) {
        setIsTimeRemaning(false)
        setWordCounts(countWords(text))
      }
    }, [timer, isTimeRemaning])

    function startGame() {
       setIsTimeRemaning(true)
       setTimer(5)
       setText("")
       setWordCounts(0)
       textareaRef.current.disabled = false
       textareaRef.current.focus()
    }

   function handleChange(e) {
       setText(e.target.value)
   }

   function countWords(str) {
    return str === "" ? 0 : str.trim().split(" ").length
    }

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
