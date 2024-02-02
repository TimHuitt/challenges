import './Container.css'

const Container = ({ header, body }) => {
  let textHints
  let codeHints
  let solution

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
  
  const bodyContent = formatBody(body);

  const ContainerID = (header === 'Hints')
    ? 'Container hints'
    : 'Container'
  console.log(textHints)
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
              <div className="hint-header">
                General Hint {index + 1}
              </div>
              <p>{line}</p>
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