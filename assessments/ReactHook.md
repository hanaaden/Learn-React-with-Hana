# Hook
Hook in React is simply a special JavaScript function that lets you “hook into” React’s features — like state, lifecycle, and context — inside functional components.

Think of Hooks as tools that give your function components the powers that class components used to have

# types of hook
### 1: useState: 
The useState hook is used to declare state variables in functional components. It allows us to read and update the state within the component.
Syntax

const [state, setState] = useState(initialState);

### 2. useReducer: 
The useReducer hook is a more advanced state management hook used for handling more complex state logic, often involving multiple sub-values or more intricate state transitions.
const [state, dispatch] = useReducer(reducer, initialState);

state: The current state value.
dispatch: A function used to dispatch actions that will update the state.
reducer: A function that defines how the state should change based on the dispatched action.
initialState: The initial state value

### 3. Context Hooks

The useContext hook in React is a powerful and convenient way to consume values from the React Context API in functional components. It allows functional components to access context values directly, without the need to manually pass props down through the component tree
const contextValue = useContext(MyContext);

const contextValue = useContext(MyContext);
The useContext hook takes a context object (MyContext) as an argument and returns the current value of that context.
The contextValue will hold the value provided by the nearest <MyContext.Provider> in the component tre

### 4. Effect Hooks
Effect hooks, specifically useEffect,useLayoutEffect, and useInsertionEffect, enable functional components to handle side effects in a more efficient and modular way.

useEffect: The useEffect hook in React is used to handle side effects in functional components. It allows you to perform actions such as data fetching, DOM manipulation, and setting up subscriptions, which are typically handled in lifecycle methods like componentDidMount or componentDidUpdate in class components.






