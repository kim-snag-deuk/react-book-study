import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    static defaultProps = {
        name: '기본이름'
    };
    
    static propTypes = {
        name:PropTypes.string,
        FavoriteNumber: PropTypes.number.isRequired
    };

    render(){
        const {name, FavoriteNumber, children} = this.props;//비구조 할당화
        return(
            <div>
                안녕하세요, 제이름은 {name} 입니다.<br />
                children 값은 {children} 입니다.  <br />
                제가 좋아하는 숫자는 {FavoriteNumber} 입니다.
            </div>
        )
    };
};


export default MyComponent;