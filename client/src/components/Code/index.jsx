import { useState } from 'react'
import CodeBox from '../CodeBox'
import Console from '../Console'

import './Code.css'

const Code = () => {

  const [ logData, setLogData ] = useState({output:['console data will appear here', 'testing']})

  return (
    <div id="Code">
      <CodeBox setLogData={setLogData} />
      <Console logData={logData} />
    </div>
  )
}

export default Code