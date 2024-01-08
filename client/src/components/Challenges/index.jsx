import { useState, useEffect } from 'react'
import Container from '../Container'
import './Challenges.css'

const Challenges = ({ challengeResponse }) => {
//   const [data, setData] = useState({})
// 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('/data.json')
//         const jsonData = await res.json()
//         setData(jsonData)
//       } catch (err) {
//         console.error(err)
//       }
//     }
// 
//     fetchData()
//   }, [])
  console.log(challengeResponse)
  return (
    <div id="Challenges">
      <Container header={'Challenge 1'} body={challengeResponse.challenge} />
      <Container header={'Examples'} body={challengeResponse.testCases} />
      <Container header={'Hints'} body={[challengeResponse.textHints, challengeResponse.codeHints, challengeResponse.solution]} />
    </div>
  )
}

export default Challenges
