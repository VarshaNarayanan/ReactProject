import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import AddressList from './AddressList';
import AddressDetail from './AddressDetail';
import AddressHome from './AddressHome';

export default class AddressContainer extends React.Component {
  render(){
    return (
     <Router>
        <div align="center">
        Address Container
        
         <Link to="/"> Home</Link>
         <Link to="/list"> List</Link>
         <Link to="/details"> Detail</Link>
         
         <Route path="/" exact component={AddressHome} />
         <Route path="/list" exact component={AddressList} />
         <Route path="/details" exact component={AddressDetail} /> 
         </div>
    </Router>

    )
  }
}
