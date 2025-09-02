import React from 'react'

interface Props{
  winner?:  "O" | "X" ;

}



const Display = (props:Props) => {
  return (
        <div
        style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >Winner is {props.winner}</div>
  )
}

export default Display