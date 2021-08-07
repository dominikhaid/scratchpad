import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Tailwind from '../pages/Tailwind';
import PropTypes, {InferProps} from 'prop-types';

export default function AppRouter({
  name,
  setName,
}: InferProps<typeof AppRouter.propTypes>): React.ReactElement {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tailwind">Tailwind</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Tailwind />
          </Route>
          <Route path="/tailwind">
            <Tailwind />
          </Route>
        </Switch>
        <button onClick={() => setName('new')}>{name}</button>
      </div>
    </Router>
  );
}

AppRouter.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.any,
};
