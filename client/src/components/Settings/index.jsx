
import { useStateContext } from '../../StateContext';
import './Settings.css'

const Settings = () => {
  const { requestData, setRequestData } = useStateContext();
  const { showSettings, setShowSettings } = useStateContext();
  const hidden = showSettings ? 'block' : 'none'
  

  const handleCancel = () => {
    setShowSettings(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const language = e.target[0].value
    const difficulty = e.target[1].value
    const length = e.target[2].value
    const request = e.target[3].value
    
    setRequestData({
      'ID': [],
      'Language': {language},
      'Difficulty': {difficulty},
      'Length': {length},
      'Request': {request}
    })
  }

  return (
    <div className="Settings" style={{ display: hidden }}>
      <form className="settings-container" onSubmit={handleSubmit}>
        <h1>Challenge Settings</h1>
  
        <div className="settings-language">
          <label htmlFor="language">Language</label>
          <select id="language" name="language">
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="sql">SQL</option>
          </select>
        </div>
  
        <div className="settings-difficulty">
          <label htmlFor="difficulty">Difficulty</label>
          <select id="difficulty" name="difficulty">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
  
        <div className="settings-length">
          <label htmlFor="length">Length of Your Solution</label>
          <select id="length" name="length">
            <option value="one-liner">One-liner</option>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </div>
  
        <div className="settings-request">
          <label htmlFor="request">Request</label>
          <textarea id="request" name="request" rows="4" cols="50" placeholder="Optional details regarding the created challenge"></textarea>
        </div>
  
        <div className="settings-buttons">
          <button type="submit">Save Settings</button>
          <button onClick={ handleCancel }>Cancel</button>
        </div>
      </form>
    </div>
  )  
}

export default Settings