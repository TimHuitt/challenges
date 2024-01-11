import { useState, useEffect } from 'react'
import './Buttons.css'

const Buttons = ({ setChallengeResponse }) => {
  const [ requestData, setRequestData ] = useState({
    'ID': [],
    'Language': 'Python',
    'Difficulty': 'beginner',
    'Length': 'short',
    'Request': ''
  })
  
  
  const sendRequest = async () => {
    const url = "http://localhost:4000/challenges";
    
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({content: requestData}),
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
  
  const handleRequest = async () => {
    try {
      const resData = await sendRequest();
  
      if (resData) {
        if (typeof resData.response === 'string') {
          setChallengeResponse(JSON.parse(resData.response))
        } else {
          setChallengeResponse(resData.response)
        }
      } else {
        console.log('no data')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="Buttons">
      <div id="buttons-container">
        <div id="buttons-challenges">
          <button>General Hint</button>
          <button>Code Hint</button>
        </div>
        <div id="buttons-code">
          <button>Save Current Solution</button>
          <button onClick={handleRequest}>Next Challenge</button>
        </div>
      </div>
    </div>
  )
}

export default Buttons