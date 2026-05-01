import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import AddWord from './components/add_word'
import Notification from './components/notification'
import WordList from './components/word_list'
import { Word } from './lib/NewSubmittedWord'
import { wordService } from './services/wordService';



function App() {
  const [submittedWord, setsubmittedWord] = useState(new Word)
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const submitWord = (newWord : Word) => {
    if(words.map(w => w.word.toLowerCase().trim() == newWord.word.toLowerCase().trim())){
      alert("Error: Word already exists in list")
      return
    }
    setsubmittedWord(newWord)
    create(newWord)
  }

  const updateWord = (newWord : Word) => {
    update
    if(words.map(w => w.word.toLowerCase().trim() == newWord.word.toLowerCase().trim())){
      alert("Error: Word already exists in list")
      return
    }
    setsubmittedWord(newWord)
    create(newWord)
  }
  const deleteWord = (newWord : Word) => {
    if(words.map(w => w.word.toLowerCase().trim() == newWord.word.toLowerCase().trim())){
      alert("Error: Word already exists in list")
      return
    }
    setsubmittedWord(newWord)
    create(newWord)
  }

   useEffect(() => {
      const fetchWords = async () => {
        try {
          setLoading(true);
          const data = await wordService.getAll();
          setWords(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to fetch words');
        } finally {
          setLoading(false);
        }
      };
  
      fetchWords();
    }, []);
  
    const refetch = async () => {
      try {
        console.log("refetch")
        setError("");
        setLoading(true);
        const data = await wordService.getAll();
        setWords(data);
        console.log(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch words');
      } finally {
        setLoading(false);
      }
    };
  
    const create = async (word:Word) => {
      try {
        setError("");
        setLoading(true);
        await wordService.create(word);
        await refetch();
        console.log(words)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch words');
      } finally {
        setLoading(false);
      }
    }
    
    const update = async (word:Word) => {
      try {
        setError("");
        setLoading(true);
        await wordService.update(word);
        await refetch();
        console.log(words)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch words');
      } finally {
        setLoading(false);
      }
    }
  
  return (
    <>
    {/* rafce */}
      <Header />
     
      <AddWord submitWord = {submitWord} />

      <Notification newSubmittedWord = {submittedWord} /> 

      <WordList words = {words} loading = {loading} error = {error} updateWord = {updateWord} deleteWord = {deleteWord}  />
    </>
  )
}

export default App
