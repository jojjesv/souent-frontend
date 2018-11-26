import * as React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import BMCScreen from './bmc/screen';
import EnterprisesScreen from './enterprises/screen';

/**
 * Main/default router component.
 * @author Johan Svensson
 */
export default () => (
  <BrowserRouter basename="">
    <Switch>
      <Route exact path="" component={EnterprisesScreen} />
      <Route exact path="bmc/:enterpriseId" component={BMCScreen} />
    </Switch>
  </BrowserRouter>
)