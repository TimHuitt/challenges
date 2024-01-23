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

    // if (Array.isArray(data)){
    //   return data.map((item, index) => `${index + 1}: ${item}`).join('\n')
    // }
    if (header === 'Hints') {
      return textHints.map((item, index) => `${index + 1}: ${item}`).join('\n\n')
    } else {
      return Object.entries(data)
        .filter(([key, value]) => value && value.length > 2)
        .map(([key, value]) => `Example ${parseInt(key) + 1}: ${formatBody(value)}\n`)
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