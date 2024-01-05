import './Container.css'

const Container = ({ header, body }) => {

  const bodyContent = typeof body === 'object'
    ? body.map((item) => item)
    : body
    
  return (
    <div id="Container">
      <h1>{header}</h1>
      <p>{bodyContent}</p>
    </div>
  )
}

export default Container