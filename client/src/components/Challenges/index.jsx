import { useState, useEffect } from 'react'
import Container from '../Container'
import './Challenges.css'

const Challenges = ({ challengeResponse, setShowSettings }) => {

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
