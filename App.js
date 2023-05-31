import * as React from 'react';
import Screens from './screens';
import { Provider } from 'react-redux'
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
}

export default App;