import React, { useEffect } from 'react'
import type { NewWord } from '../lib/NewSubmittedWord'
import { useState } from 'react'


interface ChildProps {
  newSubmittedWord: NewWord;
}

const notification: React.FC<ChildProps> = ({newSubmittedWord}) => { 
  const [hidden, setHidden] = useState<string>("hidden");

  const close = () => {
    setHidden("hidden")
  }

  useEffect(() => {
    
    if(newSubmittedWord.word === ""){
      setHidden("hidden")
    }
    else{
      setHidden("")
    }
  
  }, [newSubmittedWord])
  


  return (
    <div className={`notification-wrapper ${hidden}`}> 
      <h2>New words have been added to the list!</h2>
      <div>
        Word: {newSubmittedWord.word}
      </div>
      <div>
        Categories: {newSubmittedWord.category}
      </div>
      <div>
        GameType and Difficulty: {newSubmittedWord.gameTypeAndDifficulty.map((m, index) => <span>{m.gameType} - {m.difficulty}
        {index !== newSubmittedWord.gameTypeAndDifficulty.length - 1 && ', '}
      </span>)}
      </div>
      <div onClick={close} className='notification-close'>x</div>
    </div>
  )
}

export default notification