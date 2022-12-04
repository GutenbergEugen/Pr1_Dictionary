import React from 'react'

export default function Triggers({change_to_eng, change_to_rus}) {

  const formStyle = {
    padding: '30px'
  }
    const btnStyle = {
        cursor: 'pointer',
        padding: '10px',
        margin: '5px',
        backgroundColor: 'green',
        color: 'white',
        border: '2px solid white',
        borderRadius: '7px', 
        width: '70px'
    }

  return (
    <div style={formStyle}>
      <button style={btnStyle} onClick={change_to_rus}>Rus</button>
      <button style={btnStyle} onClick={change_to_eng}>Deutsch</button>   
    </div>
  )
}
