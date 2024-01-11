import './Settings.css'

const Settings = ({ showSettings }) => {
  const hidden = showSettings ? 'block' : 'none'
  
  return (
    <div class="Settings" style={{ display: hidden }}>
      <form class="settings-container">
        <h1>Challenge Settings</h1>
  
        <div class="settings-language">
          <label for="language">Language</label>
          <select id="language" name="language">
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="sql">SQL</option>
          </select>
        </div>
  
        <div class="settings-difficulty">
          <label for="difficulty">Difficulty</label>
          <select id="difficulty" name="difficulty">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
  
        <div class="settings-length">
          <label for="length">Length of Your Solution</label>
          <select id="length" name="length">
            <option value="one-liner">One-liner</option>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </div>
  
        <div class="settings-request">
          <label for="request">Request</label>
          <textarea id="request" name="request" rows="4" cols="50" placeholder="Optional details regarding the created challenge"></textarea>
        </div>
  
        <div class="settings-buttons">
          <button type="submit">Save Settings</button>
          <button type="submit">Cancel</button>
        </div>
      </form>
    </div>
  )  
}

export default Settings