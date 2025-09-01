import React from 'react'

interface Props{
  value?: null | 'O' | 'X' | "Start" |"Restart";
  parts:"form_button"|"start_button";
  onClick :()=>void;
}

const cssStyle = function style(parts: string) : React.CSSProperties {
  if (parts === "form_button") {
    return {
      width: "80px",
      height: "80px",
      fontSize: "2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid black",
      background: "white",
      cursor: "pointer",
    };
  } else if (parts === "start_button") {
    return {
      padding: "10px 20px",
      fontSize: "1rem",
      border: "1px solid black",
      background: "#007bff",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer",
    };
  }


  return {};
};


const Button: React.FC<Props>  = ({onClick,value,parts}:Props) => {
  return (
    <>
        <button
              onClick={onClick}
              style={
                cssStyle(parts)
              }
            >
              {value}
        </button>
    </>
  )
}

export default Button