import './Container.css'

const Container = ({ header, body }) => {
  

  const formatBody = (data) => {
    if (typeof data !== 'object' || data === null) {
      return data;
    }
  
    return Object.entries(data)
      .map(([key, value]) => `${key}:\n${formatBody(value)}\n`)
      .join('\n');
  };
  
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