import React, { useState, useEffect } from 'react';
import axios from 'axios'

const App: React.SFC<Props> = props => {

  const [ message, setMessage ] = useState<string>('');

  // const getMessage = async () => {
  //   let r = await fetch('http://localhost/api/greeting');
  //   let message = await r.json();
  //   setMessage(message.message);
  // }

  // useEffect(() => {
  //   getMessage();
  // }, [])
 
  useEffect(() => {
    axios
      .get('http://localhost/api/greeting')
      .then(res => {
        setMessage(res.data.message);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <h1>{message}</h1>
  )
}

export default App;

interface Props { }
