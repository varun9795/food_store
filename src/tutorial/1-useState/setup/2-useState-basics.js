import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('random title')

  const handleClick = () => {
    if (text === 'random title') {
      setText("hello world")
    }
    else {
      setText("random title")
    }

  };

  return (
    <React.Fragment>
    <h2>{text}</h2>
    <button type="button" className='btn'onClick={handleClick}>Change title</button>
  </React.Fragment>);
};

export default UseStateBasics;
