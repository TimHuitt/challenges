import React, { useState, useEffect } from 'react'

import Header from '../Header'
import Challenges from '../Challenges'
import Buttons from '../Buttons'
import Code from '../Code'
import Settings from '../Settings'
import { StateProvider } from '../../StateContext'
import "./App.css"

function App() {
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
    <StateProvider>
    <>
      <div>
        <Header />
        <Settings />
        <Challenges challengeResponse={challengeResponse} />
        <Code />
        <Buttons setChallengeResponse={setChallengeResponse} />
      </div>
    </>
    </StateProvider>
  )
}

export default App


