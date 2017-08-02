import React, { Component } from 'react';
import {SubmitComponent} from './submitComponent'; //Component for sumbit a new topic
import {TopicTable} from './topicTable'; //component of all the topics

const dashboardStyle = {
  border: '2px solid black',
  width: '70%',
  height: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '100px',
};

//Create Parents Component = AppDashBoard
class AppDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [] // datas is array of Object
    }
  //bind all the functions (I tried to use arrow function, but Jest assume thats an error as well as the css file)
  this.submitTopic = this.submitTopic.bind(this);
  this.upvote = this.upvote.bind(this);
  this.downvote = this.downvote.bind(this);
  this.sortingformula = this.sortingformula.bind(this);
  this.sorting = this.sorting.bind(this);

  };

  //Function to add topic in our datas state
  submitTopic(data) {
    this.setState({
      datas: this.state.datas.concat(data)
    }, this.sorting);
  };

  //Function to increase the vote by 1
  upvote(title) {
    this.setState({
      datas : this.state.datas.map((topic) => {
        if(topic.title === title) {
          return Object.assign({}, topic, {
            vote: topic.vote +1,
          });
        } else {
          return topic;
        }
      })
    }, this.sorting)
  }

  //Function to decrease the vote by 1
  downvote(title) {
    this.setState({
      datas : this.state.datas.map((topic) => {
        if(topic.title === title) {
          return Object.assign({}, topic, {
            vote: topic.vote - 1,
          });
        } else {
          return topic;
        }
      })
    }, this.sorting)
  }

  //Sorting function. Will be used as the parameter for sorting in .sort()
  sortingformula(a,b) {
    if(a.vote < b.vote){
      return 1;
    }
    if(a.vote > b.vote){
      return -1;
    }
    else {
      return 0;
    }
  }

  //Function to sort objects in datas base on the number or vote
  sorting() {
    const dataSorted = this.state.datas;
    dataSorted.sort(this.sortingformula);
    
    this.setState({
      datas: dataSorted
    });
  }

  render() {
    return (
      <div style={dashboardStyle}>
        <h1 style={{textAlign:'center'}}> <img src="img/carouselllogo.png" width="3%" alt="carouselllogo"/>Carousell Coding Exercise - Alfred Datui</h1>
        <hr /> 
        <SubmitComponent submitTopic={this.submitTopic} />
        <TopicTable topics={this.state.datas} upvote={this.upvote} downvote={this.downvote} />
      </div>
    );
  }
}
export default AppDashBoard