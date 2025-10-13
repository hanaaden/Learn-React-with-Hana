
import {BrowserRouter as Router , Routes ,Route , Link } from "react-router-dom"
import Counter from "./Counter"
import Todo from "./Todo"
import Contact from "./Contact"
import CRUDContainer from "./components/CRUDPage"

import './App.css'


function App() {
  return(
    <>
   
    <Router>
      <nav>
         <Link to="/" className="home">Home</Link>
    <Link to = "/counter" className="counter">Counter</Link>
    <Link to = "/Todo" className="counter">To do app</Link>
    <Link to = "/contact" className="counter">Contact Us</Link>

    <Link to = "/crudcontainer" className="counter">Form</Link>
    
     </nav>
       <Routes>
         <Route path='/'   element={<h1 className="Welcome">Welcome to my practice projects! This website showcases small React applications I have built to improve my skills. You can explore a counter app, a to-do list app, and a contact page. Each project demonstrates key concepts of React such as state management, routing, and working with local storage. Feel free to navigate through the links above to try out the apps and see how they work.</h1>}/>
        <Route path='/counter' element={<Counter/>}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/crudcontainer' element={<CRUDContainer/>}></Route>
       
       
       </Routes>
     
    </Router>
    </>
  )
}

export default App
