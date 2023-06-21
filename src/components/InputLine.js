import React, { Component } from 'react';

class InputLine extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text,
            tag: props.tag,
            edit: false,
        };
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };


    handleClick = () => {
		this.setState({
			text: this.state.text,
			edit: true
		})
	}

	enter = (e) => {
		if(e.keyCode === 13) {this.save()}
	}

	save = () => {
		this.setState({
			text: this.state.text,
			edit: false
		})


		if(this.state.text === ''){
			this.setState({
				text: '-'
			})
		}
	}

    render() {
        return( 
            this.state.edit ?
			<input 
				type="text" 
				value={this.state.text}
				onChange={this.handleChange}
				onKeyDown={this.enter}
			/> 
			:
			<this.state.tag onClick={this.handleClick}>{this.state.text}</this.state.tag>
        )
    }
}

export default InputLine;