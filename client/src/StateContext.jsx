import React, { createContext, useContext, useState } from 'react';

  const StateContext = createContext();

  export const StateProvider = ({ children }) => {

    const [ requestData, setRequestData ] = useState({
      'ID': [],
      'language': 'Python',
      'difficulty': 'beginner',
      'length': 'short',
      'request': ''
    })

    const [ showSettings, setShowSettings ] = useState(false)

    const [ challengeResponse, setChallengeResponse ] = useState({
      ID: 'py_beg_short_find_max_number',
      challenge: `
Click the cog to adjust challenge settings\n
Click "New Challenge"\n
Add your code to the code editor\n
Click run to execute your code
      `,
      textHints: [
        `"General Hints" for topic related hints`,
        `"Code Hints" for code specific hints`,
        `"Give Up" to view the suggested solution`
      ],
      codeHints: [],
      testCases: [
        "Test cases and examples of expected input/output"
      ],
      solution: ""
    })

    const value = {
      requestData,
      setRequestData,
      showSettings,
      setShowSettings,
      challengeResponse,
      setChallengeResponse
    }

    return (
      <StateContext.Provider value={value}>
        {children}
      </StateContext.Provider>
    );
  };

  export const useStateContext = () => {
    return useContext(StateContext);
  };