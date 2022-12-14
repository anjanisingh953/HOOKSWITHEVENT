const questions = [

    {   
        id:1,
        key:1,
        question: 'What is react?',
        answer: 'React is a front-end JavaScript library developed by Facebook in 2011. It follows the component based approach which helps in building reusable UI components. It is used for developing complex and interactive web and mobile UI. Even though it was open-sourced only in 2015, it has one of the largest communities supporting it. React is all about Components.'
    },
    {
        id:2,
        key:2,
        question: ' What is JSX?',
        answer: 'JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.'
    },
    {
        id:3,
        key:3,
        question: 'What is Props?',
        answer: 'Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.'
    },
    {
        id:4,
        key:4,
        question: 'What is Hooks?',
        answer: '1.Hooks are the new feature introduced in the React 16.8 version. 2. It allows you to use state and React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. 3. It does not work inside classes. Hooks should always be used at the top level of the React functions.'
    },
    {
        id:5,
        key:5,
        question: 'What is useState Hooks?',
        answer: 'useState is a function which returns an array with two items i.e stateObject and updatedFunction. useState is a Hook that lets you add React state to function components.'
    },
    {
        id:6,
        key:6,
        question: 'What is Context Api?',
        answer: 'React hooks provides a concept is known as "Context or Context Api" which allows you to easily access data at different levels of the component tree, without passing prop to everyl level.'
    }                

];
export default questions;