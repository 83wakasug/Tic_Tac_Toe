import { useState }  from 'react'
import Button from "./Button"
import Startbutton from './Startbutton';



const Form = () => {



const [player, setPlayer] = useState<"O" | "X">("O");

const [board, setBoard] = useState<(null | "X" | "O")[]>(Array(9).fill(null));

const [clicked, setClicked] = useState<boolean>(false);
const [startStatus,setStartStatus ] = useState<"Start"|"Restart">("Start");


const onClick =(index: number)=>{
    const newBoard = [...board];
   if ( newBoard[index] !== null){
        return 
     }

    newBoard[index]= player;
    setBoard(newBoard);
    setPlayer(player === "O" ? "X" : "O");

    if(clicked===false){
    setClicked(true); 
    setStartStatus("Restart");
    }


  }

  const onClick2 =()=>{
    
  
  setStartStatus(startStatus === "Start" ? "Restart" : "Start");
  setBoard(Array(9).fill(null)); // 必要なら盤面リセットも

      if(clicked===true){
      setClicked(false); 
     }

}

    return (
    <>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 80px) " , justifyContent: "center",
        alignItems: "center"}}>
      {board.map((cell, index) => (
        <Button key={index} value={cell} onClick={() => onClick(index)} parts="form_button" />
      ))}
    </div>
      

   <div>
         <Button value={startStatus} onClick={onClick2} parts="start_button" />

   </div>

     
    </>
  )
}

export default Form