# useState , useRef and useEffect

  

React hooks have rules 

-   All hooks must be inside the react function
    

Means you cant use hooks inside class components 

-   Hooks must be called at the top of components 
    

Means call them before any other code 

-   Hooks cant be used inside a condition statement
    

You can do that when you are inside function components 

  

# useState

  

It has two variables current normal variables and setter variables

Current variables can't be changed manually because react will ignore the change while rendering so react needs setter

For example 
``` jsx
Count [text , setText ] = useState(“example”)
```
text = “need to change the text”

-   React will ignore the change that happened manually
    
```jsx
Const [count , setCount ] = useState(0)
```
Count - current variables stored 0 and being changed only by setCount

setCount - setter it changes dynamically 

  
  

Using the hooks you need to import them 

Import {useState} from “react”

## How to Use the useEffect Hook

useEffect is react using a way of side effect what I mean in side effect is any thing that is happening outside of react components like 

-   Fetching data
    
-   Changing docs titles 
    
-   Console logging 
    

The syntax:
```jsx
useEffect(()=>{

// code goes here

})
```
  

Think of useEffect as a way to tell React: “Hey React, after you’ve painted this component on the screen, please do something extra — like run some side effect.”

  

So by default whatever inside that function will run every time render happens 
```jsx
useEffect (()=>{

console.log(“rendor happened” count)

return ( )=>{

// clean up code
}
} , [count])
```

Because of the array [ ] this will run one time [count] runs every time count changes 

In return you will gonna add any clean up code because the function you return called cleanUp

 ```jsx 

import React, { useEffect, useState } from 'react'

type Post ={
    userId : number;
    id : number;
    title : string;
    body : string;

}
function Fetcher() {
   
const [data , setData] = useState<Post[]>([])

useEffect(()=>{
    const FetchData = async()=>{
   const response = await fetch("https://jsonplaceholder.typicode.com/posts")
   const res = await response.json()
   setData(res)
    }

    FetchData()
} , [])
  return (
    <div>
        {data && (
        <ul>
            {data.map(item =>(
                <li key={item.id}> {item.title}</li>
            ))}
        </ul>
        )
        }
    </div>
  )
}

export default Fetcher
```
  

So now if we only focus the useEffect first you see 

useEffect - runs after react complete rendering 

Inside it we have a fetch function that is arrow function using asynchronous JS because fetching data API needs async JS

fetch( ) - this one calls the API and gets response 

But we need to change this from JSON data  into javaScript objects so you need to use 

response.json 

-   setData(res) : will change the state into the fetched data
    
-   Catch : handles the error working with try
    
-   [ ] : will allow us this function runs once after rendering
    

  

Now if we go to the render the div you see I used map( )

{data && (...) } : this one ensures that data exists before rendering 

Although it is optional I just used it 

data.map(item =>(.....) ) loops over each post in the array and return  the < li >

key={[item.id](http://item.id)} : react needs unique key for each list item to truck changes 

{item.title } displays the title of each post 

  

And lastly let we talk about the useState 

[data , setData ] : this is destructing array  

-   <Post[ ]> : this tells TypeScript what data we are storing and ([ ]) this contains the initial value of state 
    
-   Empty array first cuz there is no data before fetching 
    

# useRef

This hook return mutable reference of object but unless the useState this hook will not make react to render when the hook make changes 

Const refCon = useRef(0)

  

So react creates mutable object under the hook 
```jsx
{

Current : 0

}
```
So refCon itself is an object and the actual value is stored in refCon.current 

  

Why .current ?

useRef always returns same object value every time react renders to store or to read react will give you .current 

  

Do everytime useRef updates the current value it doesn't cause re-render like useState

useState = holds value  that changes the UI

useRef = holds value the silent without updating the UI 

  

So in the below code so will see first time that you click the button the count will be 1 the previous count will be 0 and the component rendered will be 2 that is why StrickMode in your main.tsx or index.tsx uses to render the web twice to check errors  

  

The main goal of useRef:

-   Persists across renders means it remembered the value even when the component renders 
    
-   In real life example imagine you wanna do quiz app the students clicked buttons the count re-rendered the components and you wanna truck how many question the student answered or the answers of the student you need to store it in useRef
    

  
``` jsx
import React, { useEffect, useRef, useState } from 'react'

function Refresher() {
    const [count , setCount] = useState(0)
    const rendors = useRef(0)
    const PrevousCount = useRef(0)

    useEffect(()=>{
        rendors.current = rendors.current + 1;
        PrevousCount.current = count
    })
  return (
    <div>
        <h1>count : {count}</h1>
        <h2>component rendered : {rendors.current} times</h2>
        <h3>prevous counts : {PrevousCount.current}</h3>
        <button onClick={()=>{setCount(count+1)}}>Counter</button>
    </div>
  )
}

export default Refresher
```

to read the document you can get here [document](https://docs.google.com/document/d/1AvABajiq3z_oPgAkZOs_cf8fXlWaHlZ7rnf98iejfT4/edit?usp=sharing)
