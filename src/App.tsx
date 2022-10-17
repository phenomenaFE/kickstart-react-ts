import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Assets/Styles/App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      
    </div>
  );
}

export default App;
