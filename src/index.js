import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//ReactDom.render(param1 , param2); param 1 is a jsx element and param2 is the target using the DOM

/* JSX allows you to create elements that are treated as objects. You can do anything with these
that you can do with regular objects.
*/
const target = document.getElementById('root');
const someString = "and add items inside using {}"; 
//You can create elements like this and insert variables by wrapping them around braces
const element = <h1> This creates an h1 element {someString} </h1> 

//You can have them be returned
function getElement(someBool){
    if(someBool){
        return (<h1>This is the returned element if true </h1>);
    }
    else{
        return (<h1 className = "theClass">This is the returned element if false</h1>);
    }
}
//ReactDOM.render(getElement(true) , document.getElementById('root'));

/* you can also render whole divs with headers and everything insde
*/ 

function tick() { 
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This is working with different componants in react

function Welcome(props) { //The componant name is Welcome and can be used like any regular elements
    return <h1>Hello, {props.name}</h1>;
  }

//This is a componant that can be rendered seperately. Componants get there own name that must be declared
//componants are just functions passed as elements
const item2 = <Welcome name = "phuc" />
//ReactDOM.render(<Welcome name = "johny boi"/> , target);

/*You can create elements within elements as long as you have one parent 
//Note that componants need to be capitalized
*/

function App(props){ //Always create new componant by declaring a function
  return (<div> <h1> This is a header within a div and the user is {props.user.name}</h1> 
          </div>);
} //will print out the value of name if included when initializing the componant

function InnerItem(props){
  return(<h3 user = "daHello">This is the third header</h3>)
}

function Test(props){
return(<div><h1> This is a header </h1>
            <h2>This is the second header</h2> <InnerItem /></div>); //You can use other componants
}

//Can set outside objects as props and then access that object 
const outsideObject = {
  name: "jorge"
}

ReactDOM.render(<App user = {outsideObject} /> , target); //This will print out everything inside the Test componany

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Practicing using props and extracting componants

function FirstName(props){
  return(<div> <h1> The persons first name is {props.firstname}</h1> </div>);
}

function LastName(props){
  return(<div> <h1> The users last name is {props.lastname} </h1> </div>);
}

function Profession(props){
  return(<div> <h1>The users profession is {props.prof} </h1></div>);
}

//This componant calls the other componants. This function takes the function from the first and takes each item from the object
function Main(props){
  return(<div>
    <FirstName firstname = {props.userInfo.name.firstName}/>
     <LastName lastname = {props.userInfo.name.lastName} />
     <Profession prof = {props.userInfo.profession} />
</div>);
}

//in order to use objects as prop your going to have to declare it outside of the componant
const userInfo = {
  name: {
    firstName: "johnjohn",
    lastName: "joeBOB"
  },
  
  profession: "skydiver"
}

//The main componant takes the userInfo object as a property // similarly it is like a function taking a parameter
ReactDOM.render(<Main userInfo = {userInfo}/> , target);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Learning about state

//This turns the componant into a state which means it can change
class Clock extends React.Component {
  //whenver the state gets rendered it runs the constructor
  constructor(props) {
    super(props);
    this.state = {date: new Date()}; //initializes the state object
  }

  //Whenever the state first loads in browser
  componentDidMount() {
      //initializes a variable called timerID its value is gonna be the value returned by timerID
     this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID); //Clear timerId when the clock element leaves the browser
  }

  //Function that gets called every second by the interval
  tick() {
    this.setState({ //setState re-initializes the state every second. Note state has to be an object
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2> 
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Practicing with using state
class Words extends React.Component {
  constructor(props){ //always pass props as a parameter to constructor
    super(props); //pass it as super
    this.state = {value: 5}; //Initial state object has value of 5
  }

  //This runs after the render function runs
  componentDidMount(){
    this.timerID = setInterval(() => this.setState({value: Math.random()}), 1000);
  }
  //This runs after the componant did mount to clean up what was unmounter
  componentWillUnmount() {
    clearInterval(this.timerID); 
  }
  //renders the elements
  render(){
    return(<h1> The current state of the componant is {this.state.value} </h1>);
  }

}

ReactDOM.render(<Words /> , target);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Practicing with using state

function Display(props){
  return(
    <div>
    <Words />
    <Words />
    <Words/>
    </div>
  );
}

//This will display all three
ReactDOM.render(<Display /> , target);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This is practicing event handeling

//Create a state
class ButtonEven extends React.Component {
  constructor(props){ 
    super(props);
    this.state = {isToggle: false }; //always initialize the state by passing it a object
    this.handleClickEvent = this.handleClickEvent.bind(this); //To use a method you need to bind it to the class first so that the this binding works
  }

//Create a function that will be called when the event listener works
handleClickEvent(){
  if(this.state.isToggle){ //if the state is true then it turns it false if the state is false then it turns it true
    this.setState({isToggle: false}); // On click if the isToggle state is true than it changes it to false
  }
  else{
    this.setState({isToggle: true});
  }
}  
//Sets the inital render of the 
render(){
  return(         //add event listener by passing it as a property.
      <div><button onClick = {this.handleClickEvent}> The button is {this.state.isToggle ? 'on' : 'off'} </button> </div>);
  }
}
//Render the button
ReactDOM.render(<ButtonEven /> , target);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This is practicing event handeling

class ChangeBackground extends React.Component {
  constructor(props){
    super(props);
    this.state = {number: 1 };
    this.handleEvent = this.handleEvent.bind(this);
    
  }

  handleEvent(){
    this.setState({number: Math.random() })
  }

  render(){
    return(
      <div onMouseEnter = {this.handleEvent}> <h1>  The current number is {this.state.number} </h1> </div>
    );
  }
  
}

ReactDOM.render(< ChangeBackground/> , target);

//You can pass a parameter into the event listener through either arrow functions or using elements

class NewPrint extends React.Component{
  constructor(props){
    super(props);
    this.state = {someString: 'whatever'}
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(){
    this.setState({someString : Math.random()});
    console.log(this.state.someString)
  }

render(){
  return(
    <button onClick = {this.buttonClick}> click on me </button>

  );
}

}

ReactDOM.render(<NewPrint /> , target);
