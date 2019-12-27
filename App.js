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


