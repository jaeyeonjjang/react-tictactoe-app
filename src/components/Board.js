import React, { Component } from 'react'
import Square from './Square'
import "./Board.css"

export default class Board extends Component {

    constructor(props) {
        super(props);
        this.state ={
            squares: Array(9).fill(null)
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }


    renderSquare(i) {
        return <Square value={this.state.squares[i]} 
            onClick={()=> this.handleClick(i)}/>
    }

  render() {
    return (
      <div>
        <div className='status'>Next Player: X, O</div>
        <div className='board-row'>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>
        <div className='board-row'>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div>
        <div className='board-row'>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}


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