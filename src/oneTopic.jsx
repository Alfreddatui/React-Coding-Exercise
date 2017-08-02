import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Style
const style = {
	box: {
		width: '96%',
		height:120,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 10,
		marginBottom: 10,
		display:'flex',
	},
	votes: {
		width: '12%',
		height: '100%',
		backgroundColor: '#EEE',
		display:'block',
		textAlign: 'center',
		borderTopLeftRadius:5,
		borderBottomLeftRadius:5
	},
	detail: {
		width: '88%',
		height: '100%',
		backgroundColor: '#DDD',
		borderTopRightRadius:5,
		borderBottomRightRadius:5,
	},
	image: {
		height: '35%',
		width: '35%',
	},
}

//Component of one topic, contains all the button to upvote and downvote. 
export class OneTopic extends Component {
	constructor(props) {
		super(props);
		//bind all the function
		this.upvotes = this.upvotes.bind(this);
		this.downvotes = this.downvotes.bind(this);
	}
	
	//function to upvote, will call the function that passed by Topic table(but from App.jsx)
	upvotes() {
		this.props.upvote(this.props.title);
	}

	//funtion to downvote, will call the function that passed by Topic table(but from App.jsx)
	downvotes() {
		this.props.downvote(this.props.title);
	}

	render() {
		return(
			<div style={style.box}>
				<div style = {style.votes}>
					<img src="img/upvote.png" className="vote" style={style.image} alt="upvote" onClick = {this.upvotes}/>
						<div style={{backgroundColor:'#AAA',padding:3, width: 20, height:20, textAlign:'center', margin:'auto', fontSize:20, marginBottom:4}} >
							{this.props.vote}
						</div>
					<img src="img/downvote.png" className="vote" style={style.image} alt="downvote" onClick={this.downvotes}/>
				</div>
				<div style = {style.detail}>
					<h2 className="margin">{this.props.title} </h2><hr className="margin" />
					<p className="margin descrip">{this.props.desc} </p>
				</div>
			</div>
			);
	}
}

OneTopic.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
	vote: PropTypes.number,
	upvote: PropTypes.func,
	downvote: PropTypes.func,
}