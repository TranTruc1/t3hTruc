import React, { Component } from 'react';
import './App.css';
import { Header } from './component/Header';
import Contacts from './component/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
 

class App extends Component {
  constructor(props) {
    super(props);
  }
  //  state -- trang thai
  render() {
    return (
      <div className="App">
        <Header branding = {'Hello'} />
        <div className='container'>
          <Contacts />
        </div>
        </div>
    );
  }

}

export default App;
