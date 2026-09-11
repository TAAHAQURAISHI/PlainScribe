import './App.css'
import SettingsForm from './components/settingsForm.jsx'

function App() {
  return (
    <main className="app-shell">
      <div className="app-shell__wash" aria-hidden="true" />
      <SettingsForm />
      <p className="app-shell__footer">A clearer first read of the fine print.</p>
    </main>
  )
}

export default App
