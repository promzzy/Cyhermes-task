import React from 'react'
import PageLayout from './components/layout/PageLayout'
import HomePage from './pages/index'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
  <div>
    <PageLayout>
      <Router>
        <Switch>
          <Route path="/">
           <HomePage />
         </Route>

        </Switch>
        </Router>
    </PageLayout>
  </div>
  );
}

export default App;
