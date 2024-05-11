import './App.css'
import {Route, Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import NewChat from './pages/NewChat'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={< NewChat />} />
    </Routes>
    </BrowserRouter>

    
  )
}

export default App
