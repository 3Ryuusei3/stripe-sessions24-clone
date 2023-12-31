import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom';
import { BackgroundGrid } from './components/BackgroundGrid/BackgroundGrid'
import { Header } from './components/Header/Header'
import { Index } from './pages/Index/Index';

function App() {

  return (
    <>
      <Router>
        <Header />
        <BackgroundGrid />
        <Index />
      </Router>
    </>
  )
}

export default App
