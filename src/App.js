import React from 'react';
import UserList from './components/UserList';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UserList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
