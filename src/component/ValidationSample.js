import { Component } from "react";
import '../css/validationSample.css'

class ValidationSample extends Component{
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });

        this.input.focus();
    }

    handleKedown = (e) => {
        if(e.key === "Enter"){
            this.handleButtonClick();
        }
    }

    render(){
        return(
            <div>
                <input 
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKedown}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                    ref={(ref) => this.input=ref}
                />   
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;