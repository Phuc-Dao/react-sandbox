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
//More practice using properties and componants and using images
var imageURL ={ url1: 'http://www.candlemaking.com/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/f/r/fruit_2.jpg',
                url2: 'http://krokodili.al/wp-content/uploads/2015/06/watermelon.jpg'
               }

function display(){
  let ranval = 2; // random number between 0 and 100
  if(ranval%2 == 0){
      ReactDOM.render(<img src = {imageURL.url1} height = "500" width = '500' /> , target);
  }
  ReactDOM.render(<img src = {imageURL.url2} height = "500" width = '500' /> , target);

}

//Renders an image

setInterval(display() , 500);
