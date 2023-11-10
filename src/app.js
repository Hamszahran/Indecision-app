import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
const Layout = (porps) => {
  return (
    <div>
      <p>Header</p>
      {porps.children}
      <p>footer</p>
    </div>
  );
};


  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

 