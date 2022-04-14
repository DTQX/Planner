import { Switch, Route } from '@modern-js/runtime/router';

import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/test/select">
      <div className="container">3333</div>
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default App;
