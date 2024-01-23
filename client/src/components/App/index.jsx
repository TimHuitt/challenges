import { useState, useEffect } from 'react'

import Header from '../Header'
import Challenges from '../Challenges'
import Buttons from '../Buttons'
import Code from '../Code'
import Settings from '../Settings'

import "./App.css"

function App() {
  const [ showSettings, setShowSettings ] = useState(false)
  const [ challengeResponse, setChallengeResponse ] = useState({
    ID: 'py_beg_short_find_max_number',
    challenge: `
      Click the cog to adjust challenge settings\n
      Click "Generate New Challenge"\n
      Add your code to the code editor\n
      Click run to execute your code
    `,
    textHints: [
      'Hints will appear here',
      'Choose general hints for topic related hints',
      'Choose code hints for code specific hints'
    ],
    codeHints: [],
    testCases: [
      'Input/Output expectations with example test cases will appear here'
    ],
    Solution: ''
  })

  
  return (
    <>
      <div>
        <Header />
        <Settings showSettings={showSettings} />
        <Challenges challengeResponse={challengeResponse} setShowSettings={setShowSettings}/>
        <Code />
        <Buttons setChallengeResponse={setChallengeResponse} />
      </div>
    </>
  )
}

export default App


