import { useState } from 'react'
import CodeBox from '../CodeBox'
import Console from '../Console'

import './Code.css'

const Code = () => {

  const [ logData, setLogData ] = useState(['console output will appear here'])

  return (
    <div id="Code">
      <CodeBox setLogData={setLogData} logData={logData} />
      <Console logData={logData} />
    </div>
  )
}

export default Code