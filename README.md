## React Notes from udemy

### React Basics

- Component spliting is importanat. when there are much element or code in a single <br>
  component just split it to other part
- About State: - To change the value of rendered element we can use state <br>
  i.e ExpenseForm.js, App.js - To change the state-value depending apon previous state we need to use <br>
  function as an argument in state-changing-function <br>
  i.e App.js <br>
  i.e const [stateVariable, setStateVariable ] = useState('Inittial value') <br>
  setStateVariable( argue => {<br>
  ...argue,<br>
  extraArgu: some-more-data<br>
  })
  - **Note:** When state funciton runs it reloads componet(JSX) function
    
- To tranfer a values from one component to other component we use props to pass function pointer to children component and then we call the function in children  component and pass an data as an arguments. so that data/argument can be used in parent component to do whatever we want.<br>  i.e NewExpense.js -> saveExpenseFormHandler
- To map a list of item we use {items.map( item => { create an element here })} 
- When we map a list of item we need to specify a unique-key to each item to identify  each item in a unique way. it is for react not for us..
  i.e ExpenseList.js
  

- JSX code can be written out of return as in Expense.js 
- When we need to load components data on use conditional loading method i.e NewExpense.js, Expense.js 
- JSX can also do dynamic style i.e CharBar.js 
- when code does not give expected output then first see the terminal to see fix the errors.

### CSS dynamic styling

- CSS: if no space between two classes in css then it means both is applied to same element i.e CourseInput.css 
- template literals also works in same as javaScipt i.e CourseInput.js 
- Styled Componenet is package to style perticular component, insted of styling to all the components. To install it in project file -> npm install --save sytyled-components 
- special javaScirpt method is used as styled.button``. It is javaScript method not styled-component method. i.e Button.js
- There can be two component in one file, one for jsx and second for styled component  i.e CourseInput.js 
- Media Query can be added directly to styled components. i.e Button.js 
- CSS module is used to give unique classname to elements and separate our JSX component and CSS files. These is preferd way to do it. 
- We can call CSS selector in two different way in CSS modules 
  - styles.<name-of-selector> 
  - styles['<name-of-selector>'] 
- Media Query in CSS module is same as normal CSS. i.e Button.module.css 

### Error Understading and debugging

- For good deveoper we need to **find and debug** errors by own.
- Don't Panic
  - Read the error mesaage
  - See the file from which it comes
  - And go to that file and line
- Use consol to see the errors and waring.
- Use browser developer to bebug the code using tag/pointer to debug step buy step.
- React developement tool is really usefull to analysing and debugging the code.

### Fragments, Portal and wraps

- wrapper is used to avoid unwanted nested div. It does not render anthing <br>but only used to trick to follow a rule of only one main element in JSX <br>i.e MyForm.js in PracticeProject
- Fragments
  - Used to avoid unnecessry div elements.
  - Two method
    - <> ...</>
    - <React.Fragment>....</React.Fragment>
    - i.e App.js on practice project
- Portals
  - To allow Custom JSX to place where it shold be
  - To work with portals we need to add extra div to pulic > index.html
    - i.e public > index.html in PracticeProject
  - And to use that see ErrorModal.js
    - i.e {ReactDOM.createPortal( <br>
      <Backdrop onConfirm={props.onConfirm} />, <br>
      document.getElementById("backdrop-root") <br>
      )}
- Refs

  - They allow to access DOM elements.
  - With Refs we set up a connection between a HTML elements(JSX) and other <br>javaScript code
  - ref can be pass to any html element
  - it gives object which hold the current properties of element connected<br> with
  - So ref is dom object, we can manipulate as per need. but do this <br>**rarely, very rarely** if needed
  - i.e MyForm.js in PracticeProject

- Note: Form field like input is tagged with
  - Ref then it is **uncontrolled component**.
    - beacase we do not controll the input field by React
    - instead we just read the value
  - State then it is **controlled components** - becase we control the state of input by passing value

### Side Effect, Reducers, Context

- Effect/Side Effect

  - Side Effects can be like
    - Sending HTTP Request
    - Manage Timers
    - Send data to browser storage
  - So it is always placed outside of React functions
  - so we have useEffect() Hook
    - it runs when first time componenet loads then
    - it runs(executes firstargue) when dependecies(second argue) changes
  - It basically avoids infinite looping.
  - **Important Note:** Use Case of useEffect()
    - When we want to run a state-update-function without any event like  onchange, onclick, etc. Means we want to run state-update-function directly inside react component function, at that time we need to use useEffect() to avoid infinite looping. i.e App.js and Login.js in LoginAndLogout project
  - Dependencies can be defined by function parameters used in useEffect function. i.e Login.js in LoginAndLogout project
  - **About Debouncing:** Use case:
    - We want to run a useeffct function in email and password change but after waiting to 500ms from last key press.
    - This can increase performance of code by not requestin on every key press
    - i.e Login.js in LoginAndLogout
  - Dependencies:
    - What to add & Not to add as Dependencies
    - In the previous lecture, we explored useEffect() dependencies.

    - You learned, that you should add "everything" you use in the effect function as a dependency - i.e. all state variables and functions you use in there.

    - That is correct, but there are a few exceptions you should be aware of:

    - You DON'T need to add state updating functions (as we did in the last lecture with setFormIsValid): React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though)

    - You also DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change

    - You also DON'T need to add variables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components (components won't be re-evaluated if such variables or functions change and vice-versa)

    - So long story short: You must add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered. That's why variables or state defined in component functions, props or functions defined in component functions have to be added as dependencies!

    - Here's a made-up dummy example to further clarify the above-mentioned scenarios:

    - import { useEffect, useState } from 'react'; <br>
    
      let myTimer; <br>
      
      const MyComponent = (props) => { <br>
        const [timerIsActive, setTimerIsActive] = useState(false); <br>
        const { timerDuration } = props; // using destructuring to pull out specific props values <br>
        <br>
        useEffect(() => { <br>
          if (!timerIsActive) { <br>
            setTimerIsActive(true); <br>
            myTimer = setTimeout(() => { <br>
              setTimerIsActive(false); <br>
            }, timerDuration); <br>
          } <br>
        }, [timerIsActive, timerDuration]); <br>
      }; <br>
    - In this example:

    - timerIsActive is added as a dependency because it's component state that may change when the component changes (e.g. because the state was updated)

    - timerDuration is added as a dependency because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well)

    - setTimerIsActive is NOT added as a dependency because it's that exception: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change

    - myTimer is NOT added as a dependency because it's not a component-internal variable (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) wouldn't cause the component to be re-evaluated

    - setTimeout is NOT added as a dependency because it's a built-in API (built-into the browser) - it's independent from React and your components, it doesn't change

- Reducer/useReducer() for state management

  - used for more complex states managements
  - can be used as replacement of useState. But only if needed
  - used when state-updates depends on other states. But that should not be done directly using sate-update. Beacause it produces bug/error somtimes. even we can't use function in state-update because it is available only for preState of it self, not of other state. This is use case fo **useRecucer** where state-update depends on other states.
    
    
    
  - Reducer Example<br>
    const emailReducer = (state, action) => { <br>
    if (action.type === "USER_INPUT") { <br>
    return { value: action.val, isValid: action.val.includes("@") }; <br>
    } <br>
    if (action.type === "INPUT_BLUR") { <br>
    return { value: state.value, isValid: state.value.includes("@") }; <br>
    } <br>
    return { value: "", isValid: false }; <br>
    }; <br>
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
    <br>value: "",
    <br>isValid: null,<br>
    });

    - Diving to parameters

      - emailState -> holds the current state values/variables
      - dispathEmail -> executes a emailReducer funnction and argus
        are passed as 'action' in emailReducer
      - emailReducer -> returns the updated state/object to be stored
        in emailState. 'state' argue in emailReducer holds the previous-state snapshot

        Adding Nested Properties As Dependencies To useEffect

- when useState and useReducer

  - useState is used when
    - the main sate management "tools"
    - Great for independent pieace of state/data
    - Great if state updates are easy and limited to a few kinds of upates
  - UseReducer is used when
    - Great if you need "more power"
    - Should be considered if youo have related pieces fo state.data
      Can be helpful if you have more complex state upadtes
  - **Note:** There is no hardcore rule for this. it just a reference

- Context

  - In some cases to forward a props without needing it but just passed/forwarded to following compenents.
  - In above case we neeed **context** without using a prop chain
  - i.e navigation.js in LoginAndLogout project
  - Limtations:
    - "props" for cofiguration and "context" for state-managemant across <br>components
    - React "context" can not be used for high frequency changes!

- forwardRef
  - When ref assign to component forwardRef is used to pass that ref to one of children. This is specially needed for reusable component library like button, input, card etc..
  - Used w`hen we want to expose/forward a data, like function, value or anything that we want, to parent component and we can use that with ref and trigger some fucntionality
  - this is not preferable at any cost
  - avoid using this and find some alternative solution
  - Focusing and input is very realistic use case for forwardRef
  - i.e Input.js in LoginAndLogout project


### How React work behind the scene

- React.memo();
  - Used when we want to stop execution of specific children component at sate change on current component for **performance oprimization**
  - when component having a long chain of children and has frequent state change then we can use this.
  - Limitation
    - This works only for primitive values like number, string, boolens etc
    - but for reference values like arrays, function it does not work as per expectation **so what?**
  - Solution is **useCallback()**
    - wrap the function with useCallback() and also give dependencies like in the same way/rules as useEffect().
    - and then wrap a children with Reat.memo() to which it is passed.
    - **Note:** If wrapped function contains a variable which value depends on outside of funciton parameter then that varable must be as dependencies for useCallback()

### Custom Hooks

- Ahout:
  - It is basically a function which contains a states.
  - It is used to create a repeative states used for different components.
  - Custom hook function must start with 'use' string 
  - It can return anything, that is required in component funciton in which we call
  - When state specified in custom hooks will bind to the component in whick it is called. Means when state changes in custom hook then component function, in which custom hook is used, will re-render not custom hook it-self

  - **Learning from CustomHttphook**
    - While we refactor a code see what is common, which can be sepated in one file and used
    - The part which is specific to component should be kept as it is.
    - When we want to pass some data to other file then use function and pass data as arguments. And return a function pointer, means reference of that function. 
    - useEffect and useCallback dependencies
      - Include everything which comes from outside. 
      - javaSript API's, localstorage, fetch(), timer, state-functions etc..
      - For useCallback arguments passed to the wrapeed function is not dependency for it.
      - When we pass a function as a dependecies then wrapp that function with useCallback to avoid infinite looping.
  
  ### Forms and Input 
  - Form Validation check can be
    - when form is submitted/onSubmit
    - when input losing focus/onBlur
    - on every keystroke/onChange
  - **Important Note** 
    - Don't use state variable in the function in which state-change-function is runs. because state wan't change imidieatly. It will be upadated as schedule
  - **Formik** is popular third party library for more forms logics

  ### Practice Project

  - Problem Statment
    - form : name and adress on clicking order
    - validate form and send form data to backend -> post
    - fetchmeals data -> get

### Redux 

- Is for state-management of whole react app
- can be used where we want more complex context/useContext
- can be replacement of context where high frequency changes occurs

- Starting redux setup:
  - navigate to redux folder
  - make <redux-filename>.js
  - npm init -y
  - npm install redux
    - redux is general library which with any programming library we can use. so with this we need to install another package with is and that is 
      - npm install react-redux
  - for importing redux
    - const redux = require('redux')
      - this is default node.js syntax for importing third-party libraries

  - **Sidenote**
    - To run .js file we can run with -> node <name-of-file>.js

  - Redux toolkit is used to simplify redux more
    - To install it -> npm install @reduxjs/toolkit

