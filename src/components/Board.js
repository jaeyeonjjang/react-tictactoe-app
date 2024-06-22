import React from 'react'
import Square from './Square'
import "./Board.css"

const Board = ({squares, onClick}) => {
    const renderSquare = (i) => {
        return <Square value={squares[i]} 
            onClick={() => onClick(i)}/>
    }

    return (
      <div className='board-wrapper'>
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
      </div>
    )
}

export default Board

// 원시타입 - Boolean, String, Number, null, undefined, Symbol
// 불변성을 가지고 있음.
// 고정된 크기로 Call Stack 메모리에 저장, 실제 데이터가 변수에 할당
// 한 변수에 값을 두 번 할당하면 둘다 다른 메모리에 값이 저장됨 (새롭게 할당)

// 참조타입 : Object, Array
// 가변성을 가지고 있음. 데이터 크기가 정해지지 않음
// Call Stack 메모리에는 주소값이 저장되며 데이터의 값은 Heap메모리에 저장됨.
// 데이터 값이 변하면 Call Stack 에서는 그대로지만 Heap 메모리의 값만 바뀌는거임
// 배열은 그냥 아예 새로운 배열을 반환하는 메소드를 사용하자 ..
// splice, push 는 원본 데이터를 변경함


// HOC란?
// Higher Order Component 의 약자로
// 컴포넌트를 인자로 받아서 새로운 리액트 컴포넌트를 리턴하는 함수
// 너무 많은 HOC를 사용하게 되면 Wrapper가 너무 많아짐
// 그래서 HOC 대신에 따로 Custom Hooks를 이용해서 컴포넌트를 만들어서 처리해줌
// Hooks 에서 State를 업데이트 해주려면 const [name, setName ] = useState("");

// Class 컴포넌트와 비교했을 때 함수형 컴포넌트의 장점
// 1. 더 짧고 간결한 코드
// 2. 더 빠른 성능
// 3. 더 나은 가독성