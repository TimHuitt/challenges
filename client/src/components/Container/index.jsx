import './Container.css'
import { useState, useEffect } from 'react'

const Container = ({ header, body }) => {
  let [hintVisibility, setHintVisibility] = useState([])
  let textHints
  let codeHints
  let solution
  let firstRun = true

  if (header === 'Hints') {
    textHints = body[0]
    codeHints = body[1]
    solution = body[2]
  }

  const formatBody = (data) => {
    if (typeof data === 'string') {
      return data;
    }

    if (header === 'Hints') {
      if (Array.isArray(data)){
        return textHints.map((item, index) => `${item}`).join('\n\n')
      } else {
        return Object.entries(data)
        .filter(([key, value]) => value && value.length > 2)
        .map(([key, value]) => `${formatBody(value)}\n`)
        .join('\n');
      }
    } else {
      return Object.entries(data)
        .filter(([key, value]) => value && value.length > 2)
        .map(([key, value]) => `${formatBody(value)}\n`)
        .join('\n');
    }
  }

  const toggleVis = index => {
    let updatedVis = [...hintVisibility]
    updatedVis[index] = !updatedVis[index]
    setHintVisibility(updatedVis)
  }

  useEffect(() => {
    if (header === 'Hints' && firstRun) {
      const hintLength = ((body[0] && body[0].length) || 0) + ((body[1] && body[1].length) || 0)
      setHintVisibility(Array(hintLength).fill(false))

      textHints = body[0]
      codeHints = body[1]
      solution = body[2]

      firstRun = false
    }
  }, [])

  useEffect(() => {
    console.log(hintVisibility)
  }, [hintVisibility])
  
  const bodyContent = formatBody(body);

  const ContainerID = (header === 'Hints')
    ? 'Container hints'
    : 'Container'
    
  return (
    <div className={ContainerID}>
      {ContainerID === 'Container'
      ? (
        <>
          <h1>{header}</h1>
          <p>{bodyContent}</p>
        </>
      ) : (
        <>
          {textHints.map((line, index) => (
            <div className="hint-container">
              <div className="hint-header" onClick={ () => toggleVis(index) }>
                General Hint {index + 1}
              </div>
              <p className={hintVisibility[index] 
                ? "hint-content" 
                : "hint-content hidden"
              }>
                {line}</p>
            </div>
          ))}
          {codeHints.map((line, index) => (
            <div className="hint-container">
              <div className="hint-header">
                Code Hint {index + 1}
              </div>
              <p>{line}</p>
            </div>
          ))}
        </>
      )}
      
    </div>
  )
}

export default Container