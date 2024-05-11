import './App.css'
import {Route, Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import NewChat from './pages/NewChat'
import ProfileCard from './components/ProfileCard'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={< NewChat />} />
      <Route path='/card' element={<ProfileCard />} />
    </Routes>
    </BrowserRouter>

    
  )
}

export default App
