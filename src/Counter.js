import { Component } from "react";

class Counter extends Component{
    state = {
        number: 0,
        fixedNumber: 0
    }

    render() {
        const {number, fixedNumber} = this.state; // state를 조회할때는 this.sate로 조회 합니다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    //onClick를 통해 버튼이 클릭되었을때 호출할 함수를 저장합니다.
                    onClick = { () => {    
                        this.setState(
                            {
                                number: number+1
                            },
                            () => {
                                console.log('방금 setstate가 호출 되었습니다.');
                                console.log(this.state);
                            }
                        );
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;