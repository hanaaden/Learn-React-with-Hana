# react state 

an object that holds information 
about a component's current situation.

Whenever state changes, 
React re-renders the component to reflect 
the updated data. This enables you to build 
dynamic UIs that respond to user interactions.

const [state, setState] = useState(initialState);
In this syntax

state: The current state value.
setState: A function that is used to update the state.
initialState: The initial value that the state will hold when the component is first rendered.

State: Managed within the component, mutable, and used to store dynamic data that changes over time.
Props: Passed from a parent component to a child component, immutable, and used to share data between components.


This is a React Hook used inside a functional component to create state.
const [count, setCount] = useState(0);
	•	useState is a Hook provided by React.
	•	It lets you add state to functional components (before Hooks, only class components could have state).
	•	When the state changes, React automatically re-renders the component to reflect the new state.

const [count, setCount]
	•	This is called array destructuring in JavaScript.
	•	useState returns an array with exactly two items:

	1.	count → the current state value
	•	Right now, count = 0 (the initial value).
	•	You can read it anywhere inside your component to show the current value.
	2.	setCount → a function to update the state
	•	You call this function to change the state.

	•	useState = “I want this component to remember something and update the UI automatically.”
	•	count = the current value
	•	setCount = the function that changes the value





