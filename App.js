import TodoItem from "./components/TodoItem"

// import React from "react";
// // import ReactDOM from "react-dom";
// // import Header from "./components/Header";
// // import List from "./components/List";
// // import Checkbox from "./components/Checkbox";

// // ReactDOM.render(<App />, document.getElementById("root"));

class App extends React.Component {

    render () {


   const date = new Date()
   const hour = date.getHours()
   let currentDate 
   const styles = {
       fontSize:"24px"
   }

   if (hour < 12){
       currentDate = "Good Morning"
       styles.color = "red"
   }
   else if (hour >=12 && hour <=16){
       currentDate = "Good Afternoon"
       styles.color= "blue"
   }
   else (){
       currentDate = "Good Night"
       styles.color= "yellow"
   }


   return (
       <h1 style = {styles} > Hello ${currentDate}</h1>!
   )
}
}
}

export default App

// import React from "react"
// import TodoItem from "./components/TodoItem"

// function App (){
//     return (
//         <div className = "whattodo">
//             <TodoItem
//             contact = {{name:"cat",age:"2"}}
//              />

//             <TodoItem 
//             contact = {{name :"dog",age:"3"}} 
//             />

//             <TodoItem 
//             contact = {{name ="monkey",age="4"}}
//             />

//             <TodoItem 
//             contact ={{name="bunny",age="1"}}
//             />

//         </div>
//     )
// }


// 


// function App() {
//     const productComponent = productList.map(item=><Product key = {item.id} product={item} />)
//     return (
//         {productComponent}
//     )
// }

class App extends React.Component{
    constructor(){
        super()
        this.state={
            answer:"yes!"
        }
    }

render () {
    return (
     <div>
       <header {this.state.awswer} />
       <greeting />
     </div>
    
    )
}
}
export default App 


class Header extends React.Component{

render (){
    return (
    <header> 
     <p>{this.props.name}!</p>
    </header>
    )
}}


// class Greeting extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             name:"Bully",
//             age:30
        
//     }
// }

//      render() {
//          return(
//          <div>
//              <h1>{this.state.name}</h1>
//              <h4>{this.state.age}</h4>

//          </div>

//          )
//      }
//     }


// class App extends React.Component {
//     constructor () {
//         super()
//         this.state = {
//             todo: toDoData
//         }
//     }

//     render () {
//         const toDoList = this.state.todo.map (item=> <App key = {item.id} item={item} />)
//         return(
//             <h1>
//              {toDoList}
//             </h1>
//         )
//     }
// }

    class App extends React.Component {
        constructor() {
            super() 
            this.state = {
                count =0 
            }
            this.handleClick = this.handleClick.bind(this)
        }

        handleClick (){
          this.setState (prevState=>{ 
              return {
                count:prevState.count + 1
              }
            })
        }        
        
        render() {
            return (
                <div>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.handleClick}>Click!</button>
                </div>
            )
        }
    }






    class App extends React.Component {
        constructor () {
            super()
            this.state ={
                todos:todosData
            }
            this.handleClick = this.handleClick.bind(this)
        }

    handleClick (id) {
        this.setState(prevState=>{
            const updatedTodos = prevState.todos.map(todo=>{
                if (todo.id===id){
                    todo.completed = !todo.completed
                }
                return todo

        })
                return {
                    todos:updatedTodos
                }

    }

        render () {
            const todoitem = this.state.todos.map(item=><TodoItem key={item.id} item={item} handleClick={this.handleClick} />)
            return{
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click</button>
            }
        }
    }


// componentDidMount 

import React from "react" 
import Conditional from "./conditional"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            unreadmessages:["a","b"]
        }
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({
                isloading:false
            })
        }, 1500);
    }

    render(){
        return(
        <div>
            {this.state.unreadmessages.length>0 ? <h1>you have {this.state.unreadmessages.length} unread messages</h1> : null}
        </div>
        )
    }
}

export default App





class App React.Component {
    constructor () {
        super()
        this.state = {
            isLoggedIn : false
        }
    this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
    this.setState(prevState=>{
        return {
            isLoggedIn: !prevState.isLoggedIn
        }
    })

    }

    render () {
        const buttonText = this.state.isLoggedIn ? "log out" : "log in"
        const displayText = this.state.isLoggedIn ? "logged in" : "logged out"
      return (
          <div>
              <button onclick={this.handleClick}>{buttonText}</button>
              <h1>{displayText}</h1>
          </div>
      )
    }
}




class App extends React.Component {
    constructor(){
        super()
        this.state = {
        loading:false
        character: {}
        }
    }

    componentDidMount() {
        this.setState({loading:true})
        fetch("http://swai/api/people/1")
        .then(repsonse=>repsonse.json())
        .then(data=>{
            this.setState({
                loading:false,
                character:data
            })
        })

    }
    render() {
        const text = this.state.loading ? "loading...":this.state.character.name
        return (
            <div>
            <p>{text}</p>
            </div>
        )
    }
}


import React from "react"

class App extends React Component{
constructor(){
  super()
  this.state={
    firstName:"",
    lastName:"",
    isFriendly:false
  }
  this.handleChange = this.handleChange.bind(this)
}
  handleChange(event){
    this.setState() {
      [event.target.name] : event.target.value
    }
  }
  
  render(){
    return(
      <form>
      <input type="text" onChange={this.handleChange} placeholder="first name" value ={this.state.firstName} />
      <br />
      <input type="text" onChange={this.handleChange} placeholder="last name" value={this.state.lastName} />
      <h1>{this.state.firstName}</h1> <h1>{this.state.lastName}</h1>
      <textarea value={"some text shows here"} />
      <input type="checkbox" checked={this.state.isFriendly}
      </form>
    )
  }
}
ReactDOM.render(<App />, document.getElementById ("root" ))



import React from "react"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName:"",
      lastName:"",
      age:"",
      gender:"",
      destination:"",
      isVegan:false, 
      isKosher:false, 
      inLactoseFree:false
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
     handleChange(event){
       const {name,value,type,checked} = event.target

       type === "checked" ?
       this.setState({
       [name]:checked
     })
     : 
       this.setState({
           [name]:value
       })
     }
     
  
  render(){
    return(
    <form >
      <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} /> </br>
      <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} /> </br>
      <input type="text" name="age" placeholder="age" value={this.state.age} onChange={this.handleChange} /> </br>

      <label>
       <input type="radio" name="gender" value="male" checked={this.state.gender ==== "male"} onChange={this.handleChange} /> Male
      </label>
</br>

      <label>
       <input type="radio" name="gender" value="female" checked={this.state.gender ==== "female"} onChange={this.handleChange} /> Female
      </label>

      <select value={this.state.destination} name="destination" onChange={this.handleChange}>
         <option value=""> --please choose a destination-- </option>
         <option value="germany">Germany</option>
         <option value="norway">Norway</option>
         <option value="the north pole">The north pole</option>
         <option value="the south pole">The south pole</option>
      </select>

      <label>
           <input type="checkbox" name="isVegan" onChange={this.handleChange} checked={this.state.isVegan} /> 
       Vegan? 
                                                                                      
           <input type="checkbox" name="isKosher" onChange={this.handleChange} checked={this.state.isKorsher}  /> Korsher?
             
           <input type="checkbox" name="isLacostFree" onChange={this.handleChange} checked={this.state.isLacostFree} /> Lacost?
      </label>


      <button>Submit</button> 

      <h1> Entered information </h1>
      <h3> Your name:{this.state.firstName}  {this.state.lastName} </h3>
      <h3> Your age: {this.state.age}</h3>
      <h3> Your gender:{this.state.gender}</h3>
      <h3> Your destination:{this.state.destination}</h3?
      <h3> Your dietary restriction:
           vegan:{this.state.isVegan} ? "yes" : "no"
           kohser:{this.state.isKosher} ? "yes" :"no"
           lactose:{this.state.isLactoseFree}? "yes" :"no"

    </h3>
       
     </form>
    )
  }
}
