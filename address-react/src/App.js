import React, {Component} from 'react';
import AddressContainer from './address/AddressContainer';
import {createStore} from 'redux';
import addressReducer from './address/addressReducer'
// Import Bootstrap, make it available to all sub-components
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

const store = createStore(addressReducer);
class App extends Component {

render()  {
  return (
   <div className="App">
   <AddressContainer />

   </div>
  );
}
}

export default App;
