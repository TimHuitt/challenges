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
      `'General Hints' for topic related hints`,
      `'Code Hints' for code specific hints`,
      `'Give Up' to view the suggested solution`
    ],
    codeHints: [],
    testCases: [
      'Test cases and examples of expected input/output'
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


