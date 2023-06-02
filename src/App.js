
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar/navigationbar';
import Home from './components/home/Home';
import Skill from './components/Skills/Skill';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/ContactMe/Contact';
import Error from './components/ErrorPage/Error';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/portfolio' element={<Home />}></Route>
        <Route path='/skill' element={<Skill />}></Route>
        <Route path='/project' element={<Projects />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contactMe' element={<Contact />}></Route>
        <Route path='*' element={<Error />}></Route >
      </Routes>
    </div>
  );
}

export default App;
