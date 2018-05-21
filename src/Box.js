import React, {Component} from 'react';
import posed from "react-pose";
import styled from "styled-components";

const StyledBox = styled(posed.div({
	top: {y: 50, scale: 1, backgroundColor: '#f9415d', opacity: 1},
	bottom: {y: 300, scale: 1.5, backgroundColor: '#fcab10', opacity: 0.5}
}))`
	background-color: #f9415d;
	position: absolute;

	${props => `
		height: ${props.size}px;
		width: ${props.size}px;
		left: ${props.x}px;
	`}
`;

class Box extends Component {
	state = {pose: 'top'}

	handleMouseEnter = () => this.setState({
		pose: this.state.pose === 'top' ? 'bottom' : 'top'
	})

	render() {
		return <StyledBox
			size={this.props.size}
			x={this.props.x}
			pose={this.state.pose}
			onMouseEnter={this.handleMouseEnter}
		/>
	}
}

export default Box;
