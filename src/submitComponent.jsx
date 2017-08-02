import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Style
const style ={
	outer : { //outer is the outer box, so we can border it
		border : '2px solid #AAA',
		width : '98%',
		height: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop:'35px',
		marginBottom:'50px',
	},
	inner : { //inner is the inner box, so we can give padding, margin, etc.
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '10px',
		width: '98%',
	}
};

//Component for submitting a new topic
export class SubmitComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { //this state is for one Object(topic)
			title:'',
			desc: '',
			vote: 0,
		}

		//bind all the functions
		this.readTitle = this.readTitle.bind(this);
		this.readDesc = this.readDesc.bind(this);
		this.submitTopic = this.submitTopic.bind(this);
	}

	//function to set title state equal to the input at textarea
	readTitle(e) {
		this.setState ({
			title: e.target.value
		})
	}

	//function to set desc state equal to the input at textarea
	readDesc(e) {
		this.setState ({
			desc: e.target.value
		})

	}

	//submit the object by using function which sent by the parent and then change the state to empty
	//set state to initial in order to make the textarea empty everytime we submit
	submitTopic() {	
		this.props.submitTopic(this.state);
		this.setState({
			title:'',
			desc: '',
			vote: 0
		});
	}

	render() {
		return (
			<div style={style.outer}>
				<div style={style.inner}>
					<p><strong>Title:</strong></p>
					<textarea style={{width:'100%', height:20, fontSize:'17px'}} onChange={this.readTitle} maxLength='150' placeholder="Enter your topic's title(max length 150 characters)" value={this.state.title}></textarea>
					<p>Description:</p>
					<textarea className="descriptionx" style={{width:'100%', height:70, fontSize:'17px'}} onChange={this.readDesc} maxLength='255'placeholder="Enter your topic's description(max length 255 characters)" value={this.state.desc}></textarea>
					<button type='submit' className="submitbutton" style={{padding: '10px', marginBottom:'10px'}} onClick={this.state.title === '' ? 0:this.submitTopic}>Submit</button>
				</div>
			</div>
		);
	}
}

SubmitComponent.propTypes = {
	submitTopic : PropTypes.func
}