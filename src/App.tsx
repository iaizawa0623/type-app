import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Timeline } from './componentes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/timeline' element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
