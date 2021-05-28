## React Notes from udemy

- To change the value of rendered element we need to use state<br>
- to change the state value depending apon previous state we need to use <br>
    function as as argument in state changing function <br> 
    i.e const [stateVariable, setStateVariable ] = useState('Inittial value') <br>
        setStateVariable( argue => {
            ...argue,
            extraArgu: some-more-data
        })



