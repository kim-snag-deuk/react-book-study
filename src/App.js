//  import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Component } from 'react';
import EventPractice from './component/EventPractice';
import ValidationSample from './component/ValidationSample';
import ScrollBox from './component/ScrollBox';
import IterationSample from './component/IterationSample';
import LifeCycleSample from './component/LifeCycleSample';
import Counter from './component/Counter';
import InfoConfrim from './component/InfoConfrim';

const App = () =>{
  const [visible, setVisible] = useState(true);
  return( 
    <div>
      <button onClick={() =>{
        setVisible(!visible)
      }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <InfoConfrim /> }
    </div>
  )
}

export default App;
