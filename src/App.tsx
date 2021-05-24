import React from "react";
import { store } from "Redux/store";
import { Provider } from 'react-redux';
import Main from 'Components/Main/';

const App: React.FC = () => (
  <Provider store={store}>
    <Main/>
  </Provider>
);

export default App;
