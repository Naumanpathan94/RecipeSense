import Home from './components/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Recpie from './components/Recipe';
import Loading from './components/Loading';
import Footer from './components/Footer';
import './components/WarningHeader';
import WarningHeader from './components/WarningHeader';
function App() {
  
  return (
    <div className="App">
      <WarningHeader />
    <Router>
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/recpie" element={<Recpie />}></Route>
      <Route path="/loading" element={<Loading />}></Route> 
    </Routes>
    <Footer />
    </Router>
    </div>
  )
}

export default App
