import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/reset.scss';
import Context from './component/Context';
import Index from './component/Index';
import About from './component/About';
import Skill from './component/Skill';
import Project from './component/Project';

function App() {
  return (
    <Context>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skill" element={<Skill/>}/>
          <Route path="/project" element={<Project/>}/>
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
