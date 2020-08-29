import React from 'react';
import './App.css';

import Navbar from './main/Navbar'
import Content from './main/Content'
import MenuButton from './main/MenuButton'

function App() {
    return (
        <div className="App">

            <Navbar /> 

            <Content />       

            <MenuButton />

        </div>
    );
}

export default App;
