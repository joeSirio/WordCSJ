import type { NewWord } from '@/lib/NewSubmittedWord';
import React, {useEffect} from 'react'

const words = [
      {
          "word": "Angel Island",
          "game": [{"type": "Pictionary", "diff": "Easy"}, {"type": "Claymation", "diff": "Hard"}],
          "cat": ["Places"]
      },
      {
          "word": "Bat Cave",
          "game": [{"type": "Pictionary", "diff": "Easy"}, {"type": "Claymation", "diff": "Impossible"}],
          "cat": ["Places"]
      },
      {
          "word": "Beer",
          "game": [{"type": "Charades", "diff": "Medium"}, {"type": "Pictionary", "diff": "Impossible"}, {"type": "Claymation", "diff": "Hard"}],
          "cat": ["Thing", "Food"]
      },
      {
          "word": "Beetle Juice",
          "game": [{"type": "Charades", "diff": "Easy"}, {"type": "Pictionary", "diff": "Medium"}, {"type": "Claymation", "diff": "Hard"}],
          "cat": ["Person", "Movie"]
      },
      {
          "word": "Cat",
          "game": [{"type": "Pictionary", "diff": "Easy"}, {"type": "Claymation", "diff": "Hard"}],
          "cat": ["Animal"]
      }
]
words.map((rank, i, {length}) => {
    if (length - 1 === i) {
        // last one
    } else {
        // not last one
    }
});

interface ChildProps {
  newSubmittedWord: NewWord;
}

const word_list: React.FC<ChildProps> = ({newSubmittedWord}) => {
  const word_items = words.map(word => 
    <div className='wl-body'>
      <div className='wl-words br'>
          {word.word}
        </div>
        <div className='wl-type-diff br'>
          
          {word.game.map((game, index) => 
            <span className={game.diff}>{game.type} - {game.diff}{index !== word.game.length - 1 && ', '}</span>
          )}
        </div>
        <div className='wl-categories'>
          {word.cat.map((cat, index) => 
            <span>{cat}{index !== word.cat.length - 1 && ', '}</span>
          )}
        </div>
    </div>
  );

  useEffect(() => {
    
    words.push({
      "word": newSubmittedWord.word,
      "cat": newSubmittedWord.category,
      "game": newSubmittedWord.gameTypeAndDifficulty.map(m => {
        return ({"type": m.gameType, "diff": m.difficulty})
      
      })
    })
  
  }, [newSubmittedWord])

  return (
    <div className='wl-wrapper'>
      <div className='wl-header'>
        <div className='wl-h-words br'>
          All Words
        </div>
        <div className='wl-h-type-diff br'>
          Game Type - Difficulty
        </div>
        <div className='wl-h-categories'>
          Categories
        </div>
      </div>
        {word_items}
    </div>
  )
}

export default word_list