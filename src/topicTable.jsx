import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {OneTopic} from './oneTopic.jsx'; //Component for a topic, every topic will be this component

export class TopicTable extends Component {

	render() {
		//set topicstable equal to number of objects in datas array which sent by props topics
		//every topics will be one topic and send every details by using props sent(key, title, desc,vote, and the functions)
		let topicstable = this.props.topics.map((topic,keys) => {
			return <OneTopic
				key = {keys} //uncomment this to make the topic unique
				title= {topic.title}
				desc = {topic.desc}
				vote = {topic.vote}
				upvote = {this.props.upvote}
				downvote = {this.props.downvote}
			/>
		});

		return (
			//slice(0,20) to take 20 topics after sorted
			<div id="topics">
				{topicstable.slice(0,20)}
			</div>
		);
	}
}

TopicTable.propTypes = {
	topics: PropTypes.array,
	upvote: PropTypes.func,
	downvote: PropTypes.func,
}