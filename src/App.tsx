import React from 'react';
import './App.css';
import RegistrationForm from './components/RegisterationForm';
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
      <Layout component={<RegistrationForm />} />
    </div>
  );
}

export default App;
