import React from 'react';
import './App.css';
import Menu from '../src/components/Menu/index'
import './components/Menu/Menu.css'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Menu>
      
    </Menu>
/*     <router>
      <Switch>
        <Route path='/'></Route>
      </Switch>
    </router> */
  );
}

export default App;
