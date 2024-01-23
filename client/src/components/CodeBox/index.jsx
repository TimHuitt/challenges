import './prism.css';
import './CodeBox.css'
import React, { useRef } from 'react'
import Prism from 'prismjs'
import Editor from 'react-simple-code-editor';

const CodeBox = ({ logData, setLogData }) => {
  const textRef = useRef(null)

  const [code, setCode] = React.useState(
    `console.log('Welcome!')
  console.log('write some code here')
    console.log('write some MORE code here')`
  );

  const sendRequest = async () => {
    const url = "http://localhost:4000/console";

    const textareaElement = textRef.current;
    const lines = textareaElement.props.value.split('\n');
    let formattedCode = lines.map(line => line.trimEnd()).join('\n');
    
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({content: `Language: javascript, Challenge: 'print "hello" to console', Code: ${formattedCode}`}),
      });

      if (res.ok) {
        const jsonData = await res.json();
        return jsonData;
      } else {
        throw new Error("Invalid request!");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleRun = async () => {

    try {
      const resData = await sendRequest();
      if (resData) {
        if (typeof resData.response === 'string') {
          
          console.log(logData)
          console.log(logData.concat(JSON.parse(resData.response).output))

          setLogData(logData.concat(JSON.parse(resData.response).output))
        } else {
          setLogData(logData.concat(resData.response.output))
        }
      } else {
        console.log('no data')
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div id="CodeBox">
      <Editor
        ref={textRef}
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => Prism.highlight(code, Prism.languages.js)}
        padding={10}
        style={{
          height: '100%',
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
          boxShadow: 'inset 0 0 5px #444d7c',
          borderBottom: '2px',
          borderRadius: '10px 10px 0 0',
        }}
      />
      <div id="run-button">
        <span onClick={handleRun}>Run!</span>
      </div>
    </div>
  )
}

export default CodeBox