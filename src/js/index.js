import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import react from "react";

//render your react application
let counter = 0;

setInterval(() => {
    counter += 1;
    
    const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<Home seconds={counter} />);
},1000)


