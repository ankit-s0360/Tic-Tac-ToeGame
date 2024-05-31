import { useState } from "react"
import Card from "../Card/Card"
import "./grid.css"
import IsWinner from "./IsWinner";

function Grid({numberOfCard}){

    const [board, setBoard] = useState(Array(numberOfCard).fill(""));
    const [turn, setTurn] = useState(true) // turn => true=> O false => X
    const [winner, setWinner] = useState(null)

    function play(index){
        if(turn == true){
            board[index] = 'o'
        }
        else{
            board[index] = 'x'
        }

        const win = IsWinner(board, (turn) ? 'o' : 'x')
        if(win){
            setWinner(win)
        }
        setBoard([...board])
        setTurn(!turn)   
    }

    function reset(){
        setTurn(true)
        setWinner(null)
        setBoard(Array(numberOfCard).fill(""))
    } 

    return(
       <div className="grid-wrapper">
        {
            winner && (
                <>
                <h1 className="turn-highlighter">Winner is : {winner}</h1> 
                <button className="reset" onClick={reset}>Reset Game</button> 
                </>
            )
        }
        <h1 className="turn-highlighter">Current turn: {(turn) ? 'o': 'x'}</h1>
        <div className="grid">
          {board.map((el, idx) => <Card gameEnd={winner ? true : false} key={idx} onPlay={play} player={el} index={idx}/>)}
        </div>
       </div>
    )
}

export default Grid