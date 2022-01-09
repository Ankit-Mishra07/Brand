import './App.css';
import HomeCard from './components/HomeCard';
import Navbar from './components/Navbar';
import Slides from './components/Slides';
import {Routes, Route} from "react-router-dom"
import Store from './Pages/Store';

function App() {
  return (
    <div className="App">
     <Navbar />

      <Routes>

      <Route path="/" element={  <HomeCard />}></Route>
      <Route path="/store" element={<Store/>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
