import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Assets/Styles/App.css';
import {RouterProvider} from 'react-router-dom'

import router from './Setup/roues-manage/routes';

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
