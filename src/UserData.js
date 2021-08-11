import React, { useState } from 'react'

const UserData=()=>{
    const [FirstName,setFirstName]=useState("")
    const [Email,setEmail]=useState("")
    const [people,setPeople]=useState([])
    const handler=(e)=>{
        e.preventDefault();
        if(FirstName && Email){
            const person={FirstName,Email}
           setPeople((people)=>{
               return[...people,person];
           })
           setFirstName("");
           setEmail("");
        }
    }
    return <>
        <h1>Add Person To Bday List</h1>
        <form onSubmit={handler}>
          <div>
              <label htmlFor={FirstName}>Name: </label>
              <input type="text" name="firstName" value={FirstName} onChange={(e)=>setFirstName(e.target.value)}/><br/><br/>
              <label htmlFor={Email}>Email: </label>
              <input type="text" name="email" value={Email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
              <button type="submit">Add Person</button>
          </div>
        </form>
        <h1 className="blist">{people.length} Birthday List</h1>
        {people.map((person)=>{
            const {Email,FirstName}=person;
            return <>
                <div className="list"> 
                    <h1>{FirstName}</h1>
                    <h4>{Email}</h4>
                </div>
            </>
        })}
    </>
}

export default UserData;