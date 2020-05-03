This is created as part of Hackathon Challenge for Embibe- 

Requirements - 

STUDENT LOGIN (Mandatory)
Create a login screen for first time login users.
STUDENT DASHBOARD
● Load the student's data from this API - https://api.myjson.com/bins/1dlper and show loading screen
when data is being loaded
● After the data is loaded, show the Dashboard using the data.
● Dashboard Schematics
a. It will be a grid of cards with each card representing one individual student.
b. Each card will show the name, total marks and id of the student it represents.
c. Each row of the grid will have 3 cards if device is desktop, 2 cards if device is tablet and 1
card if it is mobile. (Responsive)
d. Enable Infinite Scrolling for the same.
e. There will be a fixed header on the top of the page which will have a search bar and 2 buttons
in the same row.
f. When user types into the search bar, only students whose name starts with the input string
are shown in the grid, the rest are hidden.
g. The first Button will toggle the order of the students between alphabetical and
reverse-alphabetical order of name.
h. The second Button will toggle the order of the students between increasing and decreasing
order of total marks.
i. Clicking on a card will take the user to the details page where all the details of the student will
be shown. The url should reflect the id of the student. Eg. http://localhost:5050/55 (student
with id 55)

● Show the graph for the marks obtained in each subject after routing to a new page.

For Client cd to client folder and run yarn install and then yarn start to start client
Then in the outer package run yarn install and yarn run dev

Go to localhost:3000 to see the app working

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
