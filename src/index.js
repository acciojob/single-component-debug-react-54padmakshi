import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";


function App() {
    return (
     
      <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
     
    )
  }
  export default App



ReactDOM.render(App, document.getElementById("root"))

