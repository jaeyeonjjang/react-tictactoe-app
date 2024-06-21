import React from "react"
import "./Square.css"

export default class Square extends React.Component {
    // constructor(props){ // State 생성 및 초기화. 넘겨받은 인수와 함께 constructor가 먼저 실행됨
    //     super(props); // 자식 클래스 내에서 부모 클래스의 생성자 혹은 매소드를 호출할 때 사용됨
    //     // 생성자는 super 키워드 하나만 생성되거나 this 키워드가 사용되기 전에 호출되어야함

    //     // -super에 props를 인자로 전달하는이유
    //     // React.Component객체가 생성될 때 props 속성을 초기화하기 위해 부모 컴포넌트에게 props를 전달
    //     // 생성자 내부에서도 this props를 정상적으로 사용할 수 있도록 보장하기 위해서

    //     this.state = {
    //         value:null,
    //     }
    //     // -super 이후에 this 키워드가 나와야 하는 이유
    //     // 부모클래스의 생성자를 호출하기 전에 this.name을 사용하려고 하면 문제가 되기 때문
    //     // 리액트에서 this.state를 생성자에서 정의할때 super가 먼저 와야하는 이유도 같다.
    // }// this 쓰기전에는 super먼저 써주고 super 안에는 props를 담아줘라~~

    //리액트에서 데이터가 변할 때 화면을 다시 렌더링 해주기 위해서는 React State를 사용해야 함
    render(){
        return (
            <button className="square"
                onClick={() => {this.props.onClick() }} 
            >
                {this.props.value} 
            </button> 
        )
    }  }

//  - Props (부모에서자녀로)
//  Props는 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터등을 전달하는 방법
//  Props는 읽기전용으로 자녀 컴포넌트에서는 변하지 않는다. 변하게 하려면 부모 컴포넌트에서 state를 변경해야한다.

//  - State (컴포넌트 내에서)
// 해당 컴포넌트 내부에서 데이터를 전달할때 쓰인다 (부모컴포넌트에서 자녀 컴포넌트로 데이터 내보내는거 아님)
// 예를 들어 검색 창에 글을 입력할때 글이 변하는것은 state를 바꿈
// State는 변경 가능. 변하면 re-render
 
