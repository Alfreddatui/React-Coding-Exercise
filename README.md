# React-Coding-Exercise-Carousell

---------------------------------

Introduction
------------
This app is created by using Javascript by using ReactJS framework, and tested by using Jest. With this app, we can create topic based web and we can create a topic with upvote downvote functionality. All the topics will be sorted according to their vote number.

Assumptions
-----------

1) User can upvote and downvote a topic multiple times within a same topic
2) The vote number can be negative (can be settled with a small change in the code)
3) The topic did not contain any images (but can be developed to contain an image)
4) Node_modules folder is not uploaded since it is not a good practice to upload node_modules
5) You have installed npm on your computer

#HOW TO
-------
Open the app
------------

Step 1 : Clone the github by using command line, go to your desired directory, and run "git clone https://github.com/Alfreddatui/React-Coding-Exercise.git" (or you may download the Zip file)

Step 2 : Open the file by typing "cd React-Coding-Exercise"

Step 3 : Run your npm by typing "npm install" to install all the necessary node_modules

Step 4 : To run the local server, type "npm start", and you will be directed to your browser opening the localhost:3000

Step 5 : Congratulations, your app is working now

Do the testing
--------------

Step 1 : After opening the app, you can type "npm test" in your directory that will execute the jest command

Step 2 : The testing will be shown in the terminal, and if the app correct, all the testing will have a green tick

Step 3(additional) : To see the coverage details, you may change your package.json file, at this part :

		"scripts": {
		    "start": "react-scripts start",
		    "build": "react-scripts build",
		    "test": "jest",
		    "eject": "react-scripts eject"
		  },

and change the test part to :

		"scripts": {
		    "start": "react-scripts start",
		    "build": "react-scripts build",
		    "test": "jest --coverage",
		    "eject": "react-scripts eject"
		  },
		  
After changes the package.json, you may type "npm test" in your directory, and the coverage report will be shown in the terminal.

Step 4(additional) : There will be a new directory called "coverage" and you may open coverage -> Icov-report -> index.html