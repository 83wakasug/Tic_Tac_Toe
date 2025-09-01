import React from 'react'

interface Props{
  value?: "Start"| "restart";
  onClick :()=>void;
}

const Startbutton = ({onClick,value}:Props) => {
  return (
      <>
      <button onClick={onClick}>
        {value}
      </button>
    </>
  )
}

export default Startbutton