import React, {useEffect} from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect(()=>{
    const timeLeft = thought.expiresAt - Date.now();
    let intervalID = setTimeout(()=>{
      removeThought(thought.id)
    },timeLeft)
    
    return () => { 
      clearTimeout(intervalID)
    };
  }, [thought, removeThought])

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
