import React from 'react';
import './App.css';
import Navbar from './Navbar';

class App extends React.Component {
  render() {
    return (

      <div className="container">
        <h1>My First React App</h1>
        <Navbar tech="Web Developer" />
        <select>
          <option>mahantesh</option>
          <option>yatish</option>
          <option>suhas</option>
          <option>manoj</option>
          <option>vamshi</option>
        </select>
      </div>
    )
  }
}

export default App;
