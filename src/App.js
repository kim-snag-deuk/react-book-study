//  import logo from './logo.svg';
import './App.css';

import EventPractice from './component/EventPractice';
import ValidationSample from './component/ValidationSample';
import ScrollBox from './component/ScrollBox';
import IterationSample from './component/IterationSample';
import LifeCycleSample from './component/LifeCycleSample';
import { Component } from 'react';

//랜덤 색상을 생성 합니다. 주석처리22
function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component{
  state = {
    color: '#000000'
  }
  
  handleClick = () =>{
    this.setState({
      color: getRandomColor()
    });
  }

  render(){
    return(
      // <div>
      //   <IterationSample />
      // </div>
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  };
}

export default App;
