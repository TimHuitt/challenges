import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [ showMenu, setShowMenu ] = useState(false)

  const handleLogin = () => {
    setShowMenu(!!showMenu)  
  }

  return (
    <div id="Header">
      <div id="header-left">
        <p>CodeChallenger</p>
        <small>Where the AI tells <b><u>you</u></b> what to do</small>
      </div>
      <div id="header-right">
        <div id="user-icon">
          <p onClick={handleLogin}>User</p>
        </div>
      </div>
    </div>
  )
}

export default Header