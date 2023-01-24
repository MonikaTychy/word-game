import {useState, useEffect, useRef} from 'react'

function useWordGame(startOfTimer = 10) {

    const [text, setText] = useState("")
    const [timer, setTimer] = useState(startOfTimer)
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
       setTimer(startOfTimer)
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

    return {text, timer, isTimeRemaning, wordsCount, textareaRef, startGame, handleChange}
}

export default useWordGame