import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios'

import Tasks from './components/Tasks';
import Details from './components/Details';

const App: React.FC<Props> = props => {

  // const [ message, setMessage ] = useState<string>('');

  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_API_ENDPOINT + 'greeting')
  //     .then(res => {
  //       setMessage(res.data.message);
  //       console.log(res.data);
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  return (

      <BrowserRouter>
          <main className="container">
            <Switch>
                <Route exact path="/" component={Tasks}></Route>
                <Route exact path="/:id" component={Details}></Route>
            </Switch>
          </main>
      </BrowserRouter>
  )
}

export default App;

interface Props { }
