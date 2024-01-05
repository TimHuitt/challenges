import { useState, useEffect } from 'react'
import Container from '../Container'
import './Challenges.css'

const Challenges = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data.json')
        const jsonData = await res.json()
        setData(jsonData)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return (
    <div id="Challenges">
      <Container header={'Challenge 1'} body={data.challenge} />
      <Container header={'Examples'} body={data.testCases} />
      <Container header={'Hints'} body={[data.textHints, data.codeHints, data.solution]} />
    </div>
  )
}

export default Challenges
