import React from 'react';
import './App.css';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-min-noconflict/ext-language_tools"

function onChange(newValue) {
  console.log(newValue);
}

function App() {
  return (
    <div className="App">
      <AceEditor
        mode="java"
        theme="chrome"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        enableBasicAutocompletion={true}
      />
    </div>
  );
}

export default App;
