import React from 'react';
import HomePage from './pages/HomePage';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';

function App() {
    return (
        <div className='App'>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage  />}/>   
            </Routes>
          
        </div>
    );
}

export default App;