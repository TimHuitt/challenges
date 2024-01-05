import './Container.css'

const Container = ({ header, body }) => {
  
  const bodyContent = typeof body === 'object'
    ? body.map((item) => item + "\n\n")
    : body

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