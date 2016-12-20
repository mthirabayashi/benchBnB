import React from 'react';
import GreetingContainer from './greeting_container';

const App = ({ children, route }) => {

  return (
    <div>
      <h1>Bench BnB</h1>
      <GreetingContainer />
      {children}
    </div>
  );
};

export default App;
