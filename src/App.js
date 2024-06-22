import { useState } from 'react';
import './App.css';
import Board from './components/Board';

  function App() {
    const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    const calculateWinner = (squares) => {
      const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
      for (let index = 0; index < lines.length; index++) {
        const [a, b, c] = lines[index];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
    return null
    }
    
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if(winner){
    status = `Winner: ${winner}`
  }else{
    status = `Next Player: ${xIsNext? 'X' : 'O'}`
  }

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = newCurrent.squares.slice();
    if(calculateWinner(newSquares) || newSquares[i]){
      return;
    }

    newSquares[i] =  xIsNext ? 'X' : 'O';
    setHistory([...newHistory, {squares: newSquares}]);
    setXIsNext(prev => !prev);

    setStepNumber(newHistory.length);
  }

  const moves = history.map((step, move) => {
    const desc = move? `Go to move #` + move : 'Go to game start';
    return (
      <li key={move}>
        <button className='move-button' onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }
  
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info">
        <div className='status'>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;


// 전개연산자
// [...arr]
// 특정 객체 또는 배열의 값을 다른 객체 배열로 복제하거나 옮길 때 사용함.


// JSX key 속성이란?
// 요소의 리스트를 나열할 때는 Key를 넣어줘야함.
// 키는 리액트가 변경, 추가 또는 제거된 항목을 식별하는 데 도움이 됨.
// 요소에 안정적인 ID를 부여하려면 배열 내부의 요소에 키를 제공해야 함.

// 리액트는 가상 돔을 이용해서 바뀐 부분만 실제 돔에 적용됨
// key를 이용해서 이전 가상 돔과 이번에 바뀐 가상 돔의 바뀐 부분을 인식함
// 따라서 key에는 유니크한 값을 넣어줌
