import './App.css'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Landing from './pages/Landing'
import NotFound from './pages/Notfound';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>   
  );
};

export default App
