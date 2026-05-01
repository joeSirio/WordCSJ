import type { Word } from '@/lib/NewSubmittedWord';

let word_items

interface ChildProps {
  words: Word[];
  loading: boolean;
  error: string;
  updateWord: (message: Word) => void; 
  deleteWord: (message: Word) => void; 
}

const word_list = ({words, loading, error, updateWord, deleteWord} : ChildProps) => {
  const handleEdit = (e:any) => {
    e.preventDefault();
    console.log(e);
  }

  const handleDelete = (e:any) => {
    e.preventDefault();
    console.log(e);
  }


    if (loading) return <div>Loading list...</div>;
    if (error) return <div>Error: {error}</div>;

    word_items = words.map(word => 
      <div className='wl-body'key={word.word}>
        <div className='wl-words br'>
            {word.word}
          </div>
          <div className='wl-type-diff br'>
            
            {word.gameTypeAndDifficulty.map((game, index) => 
              <span key={game.gameType} className={game.difficulty}>{game.gameType} - {game.difficulty}{index !== word.gameTypeAndDifficulty.length - 1 && ', '}</span>
            )}
          </div>
          <div className='wl-categories'>
            {word.category.map((cat, index) => 
              <span key={cat}>{cat}{index !== word.category.length - 1 && ', '} &nbsp; 
                <div className='edit' onClick={handleEdit}>&#9998;</div> &nbsp; 
                <div className='delete' onClick={handleDelete}>&#128465;</div>
              </span>
              
            )}
          </div>
      </div>
    );
    

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