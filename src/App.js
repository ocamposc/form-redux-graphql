import React from 'react'
import Header from './components/Header'
import Personas from './components/Personas'
import NewPersona from './components/NewPersona'
import UpdatePersona from './components/UpdatePersona'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className='container mt-5'>
          <Switch>
            <Route exact path='/' component={Personas} />
            <Route exact path='/personas/new' component={NewPersona} />
            <Route exact path='/personas/edit/:id' component={UpdatePersona} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
