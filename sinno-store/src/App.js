import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Apps } from './components/Products/Apps';
import { Iot } from './components/Products/Iot';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/apps" component={Apps} />
      <Route path="/iot" component={Iot} />
      <Route path="/contact" component={Contact} />
      
    
    
    </div>
  );
}

export default App;
