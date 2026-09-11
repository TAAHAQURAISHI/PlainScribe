import SettingsForm from './components/settingsForm'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="settings-layout">
        <div className="settings-intro">
          <p className="eyebrow">PlainScribe / Document workflow</p>
          <h1>Document settings</h1>
          <p className="intro-copy">
            Tune the reading experience before turning dense legal language into a clearer summary.
          </p>
        </div>
        <div className="settings-panel">
          <SettingsForm />
        </div>
      </section>
    </main>
  )
}

export default App
