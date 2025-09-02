import React from 'react'

interface Props{
  winner?:  "O" | "X" ;

}



const Display = (props:Props) => {
  return (
    <div>"winner is {props.winner}</div>
  )
}

export default Display