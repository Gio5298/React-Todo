import React from 'react';
import ReactDOM from "react-dom";
import App from './App';

const data = [
  {
    name: "Clean Room",
    id: 123,
    completed: false
  },
  {
    name: "Do Homework",
    id: 124,
    completed: false
  },
  {
    name: "Laundry",
    id: 1235,
    completed: false
  },
  {
    name: "Play Video Games",
    id: 1246,
    completed: false
  },
  {
    name: "Study",
    id: 1237,
    completed: false
  },
  {
    name: "Play Laser Tag",
    id: 1248,
    completed: false
  }
];
export default data;




const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);