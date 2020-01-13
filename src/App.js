import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

//import of the components

import TodoList from './components/todo-list.component'
import EditTodo from './components/edit-todo.component'
import CreateTodo from './components/create-todo.component'

function App() {
  return (
    <Router>
      <div className="container">
        <h1>DevNozes APP</h1>
      </div>
      <Route path="/" exact component={TodoList}/>
      <Route path="/edit/:id" component={EditTodo}/>
      <Route path="/create" component={CreateTodo}/>
    </Router>
  );
}

export default App;
