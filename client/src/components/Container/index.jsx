import './Container.css'

const Container = ({ header, body }) => {
  let textHints
  let codeHints
  let solution

  if (header === 'Hints') {
    textHints = body[0].concat(body[1])
    // codeHints = body[1]
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

  return (
    <div className={ContainerID}>
      <h1>{header}</h1>
      <p>{bodyContent}</p>
    </div>
  )
}

export default Container