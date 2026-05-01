import React from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@/components/ui/combobox"
import { Input } from "@/components/ui/input"
import type { GameTypeAndDifficulty, Word } from "@/lib/NewSubmittedWord";

interface ChildProps {
  submitWord: (message: Word) => void; 
}

const add_word = ({submitWord} : ChildProps) => {
    const difficultyItems = ["Easy", "Medium", "Hard", "Impossible"]
    const gameTypeItems = ["Charades", "Claymation", "Pictionary", "Synced"]
    const categoryItems = ["Animal", "Food", "Movie", "Person", "Things"]
    const [word, setWord] = React.useState<string>("")
    const [gameTypes, setGameTypes] = React.useState<string[]>([])
    const [categories, setCategories] = React.useState<string[]>([])
    const [gtDiff, setGtDiff] = React.useState([
        {id:0, type: "Charades", diff: ""},
        {id:1, type: "Claymation", diff: ""},
        {id:2, type: "Pictionary", diff: ""},
        {id:3, type: "Synced", diff: ""},
    ])

    const handleGtDiff = (value: string|null, v: string) => {
        let index = gameTypeItems.indexOf(v);
        let temp = gtDiff
        temp[index].diff = value ? value : ""
        setGtDiff(temp);
    }
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value);
    };

    const handleSubmit = () => {
        
        let gtandD: GameTypeAndDifficulty[] = [];
        gtDiff.filter(v => v.diff !== "").map(m => {
            let newWord: GameTypeAndDifficulty= {
                gameType: m.type,
                difficulty: m.diff
            };
            gtandD.push(newWord);
        })

        if(word == ""|| categories.length < 1|| gtandD.length < 1)
            return;

        let submitted_word : Word= {
            word: word,
            category: categories,
            gameTypeAndDifficulty: gtandD
        }
        console.log(submitted_word)

        submitWord(submitted_word);
        reset();
    }

    const reset = () => {
        setWord("");
        setCategories([]);
        setGameTypes([]);
        initGtDiff();
    }

    const initGtDiff = () => {
        setGtDiff([
            {id:0, type: "Charades", diff: ""},
            {id:1, type: "Claymation", diff: ""},
            {id:2, type: "Pictionary", diff: ""},
            {id:3, type: "Synced", diff: ""},
        ]);
    }

  return (
    <div className="add-word-wrapper">
        <div className="add-word lb">
            <div className='word br'>
                <b>New Word</b>
                <br />
                <Input placeholder='Add a new word' value={word} onChange={handleChange} />
            </div>
            <div className='game-types'>
                <b>Game Types</b>
                <br />
                <Combobox
                    items={gameTypeItems}
                    multiple
                    value={gameTypes}
                    onValueChange={setGameTypes}
                    >
                    <ComboboxChips>
                        <ComboboxValue>
                        {gameTypes.map((item) => (
                            <ComboboxChip key={item}>{item}</ComboboxChip>
                        ))}
                        </ComboboxValue>
                        <ComboboxChipsInput placeholder={gameTypes.length > 0 ? "" : "Select game type tags"} />
                    </ComboboxChips>
                    <ComboboxContent>
                        <ComboboxEmpty>No items found.</ComboboxEmpty>
                        <ComboboxList>
                        {(item) => (
                            <ComboboxItem key={item} value={item}>
                            {item}
                            </ComboboxItem>
                        )}
                        </ComboboxList>
                    </ComboboxContent>
                    </Combobox>
            </div>
            <div className='categories'>
                <b>Categories</b>
                <br />
                <Combobox
                    items={categoryItems}
                    multiple
                    value={categories}
                    onValueChange={setCategories}
                    >
                    <ComboboxChips>
                        <ComboboxValue>
                        {categories.map((item) => (
                            <ComboboxChip key={item}>{item}</ComboboxChip>
                        ))}
                        </ComboboxValue>
                        <ComboboxChipsInput placeholder={categories.length > 0 ? "" : "Select category tags"} />
                    </ComboboxChips>
                    <ComboboxContent>
                        <ComboboxEmpty>No items found.</ComboboxEmpty>
                        <ComboboxList>
                        {(item) => (
                            <ComboboxItem key={item} value={item}>
                            {item}
                            </ComboboxItem>
                        )}
                        </ComboboxList>
                    </ComboboxContent>
                    </Combobox>
            </div>
            <div className='difficulty br'>
                <b>Difficulty</b>
                <br />
                
                {gameTypes.map(v =>

                    <div className={' difficulty-item'}>

                    {v}:
                    <Combobox items={difficultyItems} onValueChange={(value:string|null) => handleGtDiff(value, v)}>
                    <ComboboxInput placeholder="Select difficulty" />
                    <ComboboxContent>
                        <ComboboxEmpty>No items found.</ComboboxEmpty>
                        <ComboboxList>
                        {(item) => (
                            <ComboboxItem className={item} key={item} value={item}>
                            {item}
                            </ComboboxItem>
                        )}
                        </ComboboxList>
                    </ComboboxContent>
                    </Combobox>
                </div>
                )}
                
            </div>
        </div>
        <div className='submit'>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default add_word