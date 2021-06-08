import React, { Component } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';

import './App.css';
class App extends Component {
  render() {
    return <div className="App">
        <Header resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Skills resumeData={resumeData} />
        <Education resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>;
  }
}

export default App;