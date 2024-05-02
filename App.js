import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FormComponent from './formComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FormComponent />
      </div>
    </Provider>
  );
}

export default App;
