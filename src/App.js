import React from 'react';
import './App.css';

function App() {
  var find = require('list-files');


  find(function(result) {
      console.log(result);
  }, {
      dir: 'dir',
      name: 'pdf'
  });

  return (
    <div className="app">
      Hello World
    </div>
  );
}

export default App;

