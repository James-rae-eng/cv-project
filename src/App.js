import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

class App extends Component {
  constructor(props) {
    super();
  }
   
      render() {
        return (
          <div className="container">
            <General/>
            <Education/>
            <Experience/>
            <Skills/>
          </div>
        );
      }
}

export default App;