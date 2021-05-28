## React Notes from udemy
- Complonent spliting is importanat. when there are much element or code in a single <br>
component just split it to other part
- To change the value of rendered element we need to use state
- To change the state-value depending apon previous state we need to use <br>
    function as an argument in state-changing-function <br> 
    i.e const [stateVariable, setStateVariable ] = useState('Inittial value') <br>
        setStateVariable( argue => {<br>
            ...argue,<br>
            extraArgu: some-more-data<br>
        })<br>
<br>
- To tranfer a values from one component to other component we use props
- To transfer a data to upword side means from child to parent we use props to pass <br>function pointer to children component and then we call the function in children <br> component and pass an data as an arguments. so that data/argument can be used in <br>parent component to do whatever we want.<br>
<br>

- To map a list of item we use {items.map( item => { create an element here })}
- When we map a list of item  we need to specify a unique-key to each item to identify <br> each item in a unique way. it is for react not for us..
<br>
- JSX code can be written out of return as in expense.js 






