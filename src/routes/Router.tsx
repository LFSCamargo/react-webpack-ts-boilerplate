
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from '../pages/App';

export default () => (
  <BrowserRouter>
    <Route exact component={App} />
  </BrowserRouter>
);