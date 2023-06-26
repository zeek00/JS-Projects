import React, {useState} from 'react'
import { generateId, getNewExpirationTime } from '../utilities';


export function AddThought(props) {
  const [text, setText] = useState('');
  
  function handleTextChange({target}){
    setText(target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    if(text.length !== 0 && text.length > 10 ){
      const newThought ={
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime()
      }
      props.addThought(newThought)
      setText('')
  }
    


  }

  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
        <input 
            onChange={handleTextChange}
            type="text"
            value={text}
            aria-label="What's on your mind ?"  
            placeholder="What's on your mind ?"  
        />

        <input 
            type="submit"
            value="Add"

        />
        
    </form>
  );
}
