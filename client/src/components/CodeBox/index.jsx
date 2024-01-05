import './prism.css';
import './CodeBox.css'
import React from 'react'
import Prism from 'prismjs'
import Editor from 'react-simple-code-editor';

const CodeBox = () => {

  const [code, setCode] = React.useState(
    `console.log('Welcome!')
  console.log('write some code here')`
  );

  return (
    <div id="CodeBox">
      <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => Prism.highlight(code, Prism.languages.js)}
        padding={10}
        style={{
          height: '100%',
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
          border: '4px solid black',
          borderBottom: '2px',
          borderRadius: '10px 10px 0 0',
        }}
      />
    </div>
  )
}

export default CodeBox