import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import AppDashBoard from './App';
import {SubmitComponent} from './SubmitComponent';
import {TopicTable} from './topicTable';
import {OneTopic} from './oneTopic';


///////////All props transfer are not tested since I used proptypes which will give error message at console window if error happens./////////////////////
describe('Testing our React App :', () => {
	////////////////////////INITIALIZATION////////////////////////
	let Dashboard, submit, onetopic, inputtitle, inputdesc,button,upvotebutton,downvotebutton;
	const mockobj1 = {
		title: 'How to train your pet ?',
		desc: 'Feed the everyday and they will love u',
		vote: 0
	}
	const mockobj2 = {
		title: 'This is a mock object to test sortingformula',
		desc: 'We are going to use mockobj1 and mockobj2 and compare them',
		vote: 2,
	}
	const emptyobj = {
		title: '',
		desc: '',
		vote: 0
	}

	beforeEach(() => {
		Dashboard = shallow(<AppDashBoard />);
		submit = mount(<SubmitComponent submitTopic = {Dashboard.instance().submitTopic} />);
		onetopic = mount(<OneTopic title={mockobj1.title} desc={mockobj1.desc} vote={mockobj1.vote} upvote = {Dashboard.instance().upvote} downvote= {Dashboard.instance().downvote} />);

		inputtitle = submit.find('textarea').at(0);
		inputdesc = submit.find('textarea').at(1);
		button = submit.find('button').at(0);
		upvotebutton = onetopic.find('img').at(0);
		downvotebutton = onetopic.find('img').at(1);
	});

//////////////////////////////////TEST THE DASHBOARD////////////////////////////
	describe('Testing our AppDashBoard parent component', () => {
		beforeEach(() => {
			Dashboard.instance().submitTopic(mockobj1);
		});

		test('Testing component is not crashing', () => {
			mount(<AppDashBoard />);
		});
		test('Testing submitTopic function is not crashing and work as expected(append the mockobj)', () => {
			expect(Dashboard.state().datas[0]).toEqual(mockobj1);
		});

		describe('Testing upvote button :', () => {
			describe('Set the if statement equal to true :', () => {
				beforeEach( () => {
					Dashboard.instance().upvote(mockobj1.title);
				});

				test('Testing upvote button will increase the vote of mockobj1', () => {
					expect(Dashboard.state().datas[0].vote).toEqual(1);
				});
			});

			describe('Set the if statement equal to false :', () => {
				beforeEach( () => {
					Dashboard.instance().upvote('Not a title object in datas');
				});

				test('Testing upvote button will increase the vote of mockobj1', () => {
					expect(Dashboard.state().datas[0].vote).toEqual(0);
				});
			});
		});

		describe('Testing downvote button :', () => {
			describe('Set the if statement equal to true :', () => {
				beforeEach( () => {
					Dashboard.instance().downvote(mockobj1.title);
				});

				test('Testing upvote button will increase the vote of mockobj1', () => {
					expect(Dashboard.state().datas[0].vote).toEqual(-1);
				});
			});

			describe('Set the if statement equal to false :', () => {
				beforeEach( () => {
					Dashboard.instance().downvote('Not a title object in datas');
				});

				test('Testing upvote button will increase the vote of mockobj1', () => {
					expect(Dashboard.state().datas[0].vote).toEqual(0);
				});
			});
		});
		describe('Testing the sorting and sortingformula function :', () => {
			describe('Testing the sortingformula function :', () => { //If vote value of a and b are equal, it will not execute sorting
				test('If a.vote > b.vote', () => {
					expect(Dashboard.instance().sortingformula(mockobj2,mockobj1)).toEqual(-1);
				});
				test('If a.vote < b.vote', () => {
					expect(Dashboard.instance().sortingformula(mockobj1,mockobj2)).toEqual(1);
				});
				test('If a.vote == b.vote', () => {
					expect(Dashboard.instance().sortingformula(mockobj1, mockobj1)).toEqual(0);
				});
			});
			describe('Testing the sorting function', () => {
				beforeEach(() => {
					Dashboard.state().datas = [mockobj1,mockobj2];
					Dashboard.instance().sorting();
				});
				test('Testing the sorting function, whether the datas sorted', () => {
					expect(Dashboard.state().datas).toEqual([mockobj2,mockobj1]);
				});
			});
		});
	});

//////////////////////Test SubmitComponent Component/////////////////////////
	describe('Testing our SubmitComponent Component', () => {
		beforeEach( () => { //SIMULATE user fill the input from before submit
			inputtitle.simulate('change', {
				target: {value: mockobj1.title}
			})
			inputdesc.simulate('change', {
				target: {value: mockobj1.desc}
			})
		});

		test('Testing component is not crashing', () => {
			mount(<SubmitComponent />);
		});

		describe('Testing the eventHandler of input area :', () => {
			test('Testing the title textarea function (readTitle):', () => {
				expect(submit.state().title).toEqual(mockobj1.title);
			});
			test('Testing the desc textarea function (readDesc):', () => {
				expect(submit.state().desc).toEqual(mockobj1.desc);
			});
		});

		describe('Testing our submitTopic function', () => {
			beforeEach( () => {
				submit.instance().submitTopic();
			});

			test('Passing the state object to Dashboard', () => {
				expect(Dashboard.state().datas[0]).toEqual(mockobj1);
			});
			test('Testing that our textarea will be empty after submit :', () => {
				expect(submit.state()).toEqual(emptyobj);
			});
		});
	});

///////////////////Test TopicTable Component ////////////////////////////
	describe('Testing our TopicTable Component', () => {
		test('Testing the component is not crashing', () => {
			mount(<TopicTable topics={[mockobj1]} />);
		});
	});


//////////////////Test OneTopic Component//////////////////////
	describe('Testing our OneTopic Component', () => {
		test('Testing the component is not crashing', () => {
			mount(<OneTopic />)
		});

		describe('Testing the image button', () => {
			beforeEach(() => {
				Dashboard.state().datas = [mockobj1]
			});

			describe('testing the upvote button', () => {
				beforeEach( () => {
					upvotebutton.simulate('click');
				});

				test('testing the upvote button', () => {
					expect(Dashboard.state().datas[0].vote).toEqual(1);
				});
			});

			describe('testing the downvote button', () => {
				beforeEach( () => {
					downvotebutton.simulate('click');
				});

				test('testing the upvote button', () => {
					expect(Dashboard.state().datas[0].vote).toEqual(-1);
				})
			});
		});
	});
});

