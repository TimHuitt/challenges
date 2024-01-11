import { useState, useEffect } from 'react'
import Container from '../Container'
import './Challenges.css'

const Challenges = ({ challengeResponse, setShowSettings }) => {

  // retrieve static data
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
  const openSettings = () => {
    setShowSettings(true)
  }

  return (
    <div id="Challenges">
      <div className="settings-button" onClick={openSettings}>
        <img src="/cog.svg" />
      </div>
      <Container header={'Challenge'} body={challengeResponse.challenge} />
      <Container header={'Examples'} body={challengeResponse.testCases} />
      <Container header={'Hints'} body={[challengeResponse.textHints, challengeResponse.codeHints, challengeResponse.solution]} />
    </div>
  )
}

export default Challenges
