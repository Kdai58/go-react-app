import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

// import Tasks from './components/Tasks';
// import Details from './components/Details';

export interface TasksProps { }

const App: React.FC<TasksProps> = props => {

  return (

      // <BrowserRouter>
      //     <main className="container">
      //       <Switch>
      //           <Route exact path="/" component={Tasks}></Route>
      //           <Route exact path="/:id" component={Details}></Route>
      //       </Switch>
      //     </main>
      // </BrowserRouter>

    <div>
      <Header />
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;

interface Props { }
