import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom';
import { BackgroundGrid } from './components/BackgroundGrid/BackgroundGrid'
import { Header } from './components/Header/Header'

function App() {

  return (
    <>
      <Router>
        <Header />
        <BackgroundGrid />
      </Router>
    </>
  )
}

export default App
