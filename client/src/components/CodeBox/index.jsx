import './Codebox.css'
import React from 'react'
import 'prismjs'
import Editor from 'react-simple-code-editor';
import './prismjs/components/prism.css';

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
          border: '2px solid grey',
          borderRadius: '10px'
        }}
      />
    </div>
  )
}

export default CodeBox