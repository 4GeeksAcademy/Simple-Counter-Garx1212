import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import react from "react";

//render your react application
let counter = 0;

setInterval(() => {
    counter += 1;
    ReactDOM.render(<Home seconds={counter}  />, document.querySelector("#app"));
},1000)