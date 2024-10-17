import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Counter.jsx";
import react from "react";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

