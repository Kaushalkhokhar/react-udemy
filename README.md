## React Notes from udemy

### 01-starting-setup
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
- For good deveoper we need to **find and debug** errors by own. <br>
- Don't Panic <br>
    - Read the error mesaage <br>
    - See the file from which it comes <br> 
    - And go to that file and line <br>









