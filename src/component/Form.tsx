import { useState }  from 'react'
import Button from "./Button"
import  Display from './Display';



const Form = () => {



const [player, setPlayer] = useState<"O" | "X">("O");

const [board, setBoard] = useState<(null | "X" | "O")[]>(Array(9).fill(null));
const [startedGame, setStartedGame] = useState<boolean>(false);
const [clicked, setClicked] = useState<boolean>(false);
const [startStatus,setStartStatus ] = useState<"Start"|"Restart">("Start");
const [winner, setWinner] = useState<"O" | "X" | null>(null);


function calculateWinner(board: (null | "O" | "X")[]): "O" | "X" | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; 
    }
  }
  return null; 
}


const onClick =(index: number)=>{
    
  if (winner) return;

    const newBoard = [...board];
   if ( newBoard[index] !== null){

        return 
     }

    newBoard[index]= player;
    setBoard(newBoard);
    setPlayer(player === "O" ? "X" : "O");
    setStartedGame(true);


    const result: "O" | "X" | null = calculateWinner(newBoard);
    if (result) {
      setWinner(result); 
    }

    if(clicked===false){
    setClicked(true); 
    setStartStatus("Restart");
    }




  }

 const onClick2 = () => {
  if (!startedGame) {
    return; 
  }

  if (clicked) {
   
    setStartStatus("Restart");
    setBoard(Array(9).fill(null));
    setClicked(false);
    setStartedGame(false);
    setStartStatus("Start");
    setWinner(null);
  } else {
 
    setStartStatus("Start");
  }
};



    return (
    <>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 80px) " , justifyContent: "center",
        alignItems: "center"}}>
      {board.map((cell, index) => (
        <Button key={index} value={cell} onClick={() => onClick(index)} parts="form_button" />
      ))}
    </div>
      

   <div style ={{    display: "flex", justifyContent: "center",  alignItems: "center", marginTop: "20px",}}>
         <Button value={startStatus} onClick={onClick2} parts="start_button" />

   </div>

      {winner && <Display winner={winner} />}
    </>
  )
}

export default Form