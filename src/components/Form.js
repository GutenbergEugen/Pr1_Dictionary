import React from 'react'

export default function Form({add}) {
const formStyle = {
  backgroundColor: '#2f4f4f',
  padding: '30px'
}

  const inputStyle ={
    margin: '5px',
    padding: '10px',
    borderRadius: '3px',
    border: '1px solid white'
  } 
  
  const btnStyle = {
    cursor: 'pointer',
    padding: '10px',
    margin: '5px',
    backgroundColor: 'green',
    color: 'white',
    borderRadius: '7px',
    border: '3px solid white',
    width: '70px' 
  }

  const submit = (event) => {
    event.preventDefault();
    const { rus, eng } = event.target;
    console.log(rus.value, eng.value);
    add(eng.value, rus.value);
    rus.value = '';
    eng.value = '';
  }

  return (
    <div>
        <form onSubmit={submit} style={formStyle}>
            <input placeholder='Russian' type="text" name='rus' style={inputStyle}/> 
            <input placeholder='Deutsch' type="text" name='eng' style={inputStyle}/> 
            <button style={btnStyle}>Add</button>
        </form>
    </div>
  )
}
