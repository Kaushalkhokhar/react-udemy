## React Notes from udemy

### React Basics
- Complonent spliting is importanat. when there are much element or code in a single <br>
component just split it to other part
- To change the value of rendered element we need to use state <br>
i.e ExpenseForm.js, App.js
- To change the state-value depending apon previous state we need to use <br>
    function as an argument in state-changing-function <br> 
    i.e App.js <br>
    i.e const [stateVariable, setStateVariable ] = useState('Inittial value') <br>
        setStateVariable( argue => {<br>
            ...argue,<br>
            extraArgu: some-more-data<br>
        })<br>
<br>
- To tranfer a values from one component to other component we use props to pass <br>function pointer to children component and then we call the function in children <br> component and pass an data as an arguments. so that data/argument can be used in <br>parent component to do whatever we want.<br>
i.e NewExpense.js -> saveExpenseFormHandler
<br>

- To map a list of item we use {items.map( item => { create an element here })} <br>
- When we map a list of item  we need to specify a unique-key to each item to identify <br> each item in a unique way. it is for react not for us..<br>
i.e ExpenseList.js 
<br>

- JSX code can be written out of return as in Expense.js <br>
- When we need to load components data on condition use conditional loading method<br>
i.e NewExpense.js, Expense.js <br>
- JSX can also do dynamic style<br>
i.e CharBar.js <br>
- when code does not give expected output then first see the terminal to see fix <br>the errors.

### CSS dynamic styling
- CSS: if no space between two classes in css then it means both is applied to same <br>element i.e CourseInput.css <br>
- template literals also works in same as javaScipt i.e CourseInput.js <br>
- Styled Componenet is package to style perticular component, insted of styling to all the <br>components. To install it in project file  -> npm install --save sytyled-components <br>
- special javaScirpt method is used as styled.button``. It is javaScript method not <br>styled-component method. i.e Button.js<br>
- There can be two component in one file, one for jsx and second for styled component <br> i.e CourseInput.js <br>
- Media Query can be added directly to styled components. i.e Button.js <br>
- CSS module is used to give unique classname to elements and separate our JSX component <br>and CSS files. These is preferd way to do it. <br>
- We can call CSS selector in two different way in CSS modules <br>
    - styles.<name-of-selector> <br>
    - styles['<name-of-selector>'] <br>
- Media Query in CSS module is same as normal CSS. i.e Button.module.css <br>


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
    - They allow to access dom elements.
    - With Refs we set up a connection between a HTML elements(JSX) and other <br>javaScript code
    - ref can be pass to any html element
    - it gives object which hold the current properties of element connected<br> with
    - So ref is dom object, we can manipulate as per need. but do this <br>**rarely, very rarely** if needed
    - i.e MyForm.js in PracticeProject








