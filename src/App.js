import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

class App extends React.Component {
  render() {
    return (

      <div className="container-fluid">
        <Navbar />

        <div className="container">
          <Carousel></Carousel>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
