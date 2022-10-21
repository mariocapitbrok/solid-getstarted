import logo from './logo.svg'
import styles from './App.module.css'
import MyComponent from './components/MyComponent'

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.App}>
        <img src={logo} class={styles.logo} alt="logo" />
        <h2>App</h2>
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <MyComponent name="Solid Component" />
      </header>
    </div>
  )
}

export default App
