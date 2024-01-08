import { useState, useEffect } from 'react'

import Header from '../Header'
import Challenges from '../Challenges'
import Buttons from '../Buttons'
import Code from '../Code'

import "./App.css"

function App() {
  const [ challengeResponse, setChallengeResponse ] = useState({
    ID: 'py_beg_short_find_max_number',
    challenge: 'Write a function that takes a list of numbers and returns the maximum number in the list.',
    textHints: [
      'Consider looping through the list and keeping track of the maximum value seen so far.',
      'You can initialize the maximum value as the first element in the list and then compare it with the rest of the elements in the list.'
    ],
    codeHints: [
      'You can use the built-in max() function to find the maximum number in a list.'
    ],
    testCases: [
      'Test the function with an empty list, a list with only one element, and a list with multiple elements to ensure the function works correctly in all cases.'
    ],
    Solution: 'def find_max_number(numbers):\n' +
      '    if not numbers:\n' +
      '        return None\n' +
      '    max_num = numbers[0]\n' +
      '    for num in numbers:\n' +
      '        if num > max_num:\n' +
      '            max_num = num\n' +
      '    return max_num'
  })

  
  return (
    <>
      <div>
        <Header />
        <Challenges challengeResponse={challengeResponse} />
        <Code />
        <Buttons setChallengeResponse={setChallengeResponse} />
      </div>
    </>
  )
}

export default App


