import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom';
import { BackgroundGrid } from './components/BackgroundGrid/BackgroundGrid'
import { Header } from './components/Header/Header'
import { Index } from './pages/Index/Index';
import { Wave } from './components/Wave/Wave';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Wave />
        <BackgroundGrid />
        <Index />
      </Router>
    </>
  )
}

export default App
