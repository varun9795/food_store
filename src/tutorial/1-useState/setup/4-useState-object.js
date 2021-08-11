import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: "anja", age: 24, msg: "hello" });
  const changeMesage = () => {
    setPerson({...person,msg:"Good Morning"})
  };
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.msg}</h2>
      <button className='btn' onClick={changeMesage}>Change</button>
    </>
  );
};

export default UseStateObject;
