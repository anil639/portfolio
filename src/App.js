
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar/navigationbar';
import Home from './components/home/Home';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/ContactMe/Contact';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/education' element={<Education />}></Route>
        <Route path='/education' element={<Education />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/project' element={<Projects />}></Route>
        <Route path='/contactMe' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
