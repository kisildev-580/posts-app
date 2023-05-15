# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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



# Lets render some posts!!! 📦

This exercise is meant to give **you** the opportunity to display **your** skill.

The bullets below hopefully will provide you with a mental model for how you choose to proceed.

- If you're more comfortable with React/JS,
  - you can quickly code to step 5 and show your defer loading skills in step 6!
- If CSS and/or HTML is your jam, you can stop after step 3 and
  - focus on displaying posts beautifully and semantically
- If TypeScript and/or Architecture is important to you
  - focus of types and project structure
- Is Test Driven Development important to you
  - maybe you can pivot after step 3 and write tests
- You can/should be assisted to show more of **your** skill, so ask for help!
- Your favorite tools can be loaded via this CodeSandbox package.json, etc!
- No react?
  - Okay! Lets see you make these steps happen with your tools of choice, or w/o tools!

---

## Directions 🗺

It is not expected that you'll finish this during this quick chat!

- You can finish this later if you would like.

Setup:

1. Fork this project
2. Share the link with the interviewer and click the live link
3. Talk through the tasks with the interviewer
4. If you don't have a CodeSandbox login, we can try and have you live code using the interviewer's shared link

Task:

1. HTML/CSS: change the posts html structure and css
2. JSX/JS: map the static posts from the postsData variable
3. CSS: display the lists in a column with even width and including the {title} and {body}
4. ASYNC: fetch the posts from jsonplaceholder
   - https://jsonplaceholder.typicode.com/posts
5. ASYNC: fetch author data by the {userId} with the post from jsonplaceholder
   - https://jsonplaceholder.typicode.com/users/{post.userid}
6. HTML: display the author's name and email
7. ASYNC/DOM: somehow defer fetching author data
   - one option https://github.com/bitmap/react-hook-inview

---

## Feedback 👂

These sorts of problems provide opportunities for everyone involved to learn! Feedback of the interviewer's communication and this task **are** appreciated!

