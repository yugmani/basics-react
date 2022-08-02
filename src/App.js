import React, { Component } from 'react';
import './style.css';
//importing named export
// import { Greet } from './components/Greet';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

export default function App() {
  return (
    <div className="App">
      <Greet name="Yoog" location="Los Angeles">
        <p>I love traveling</p>
      </Greet>
      <Greet name="Noor Fateh" location="Canada" />
      <Welcome person="friends" />
      <Hello greet="Namaste" />
    </div>
  );
}
