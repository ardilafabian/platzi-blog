import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './menu';
import Usuarios from './Usuarios';

const Tareas = () => <div>Tareas</div>;

const App = () => (
  <BrowserRouter>
    <Menu></Menu>
    <div className='margen'>
      <Route exact path='/' component={ Usuarios } />
      <Route exact path='/tareas' component={ Tareas } />
    </div>
  </BrowserRouter>
);

export default App;