import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import AddWord from './components/add_word'
import Notification from './components/notification'
import WordList from './components/word_list'
import { NewWord } from './lib/NewSubmittedWord'



function App() {
  const [submittedWord, setsubmittedWord] = useState(new NewWord) //{word:"", gameTypeAndDifficulty:[], category: []}
  const submitWord = (value : NewWord) => {
    setsubmittedWord(value)
  }
  return (
    <>
    {/* rafce */}
      <Header />
     
      <AddWord submitWord = {submitWord} />

      <Notification newSubmittedWord = {submittedWord} /> 
      {/* newSubmittedWord = {submittedWord} */}

      <WordList newSubmittedWord = {submittedWord} />
    </>
  )
}

export default App
