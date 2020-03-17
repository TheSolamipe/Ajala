import React from 'react';
import Tourism from './Tourism/Tourism';
import Hotels from './Hotels/Hotels';
import Cars from './Cars/Cars';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){
  return(
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Hotels} />
          <Route path='/hotels' component={Hotels} />
          <Route path='/tourism' component={Tourism} />
          <Route path='/cars' component={Cars} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
