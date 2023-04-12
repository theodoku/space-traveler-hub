import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navigation';
import Missions from './components/missions';
import Rockets from './Pages/Rockets';

function App() {
  return (
    <BrowserRouter>
      <header className="App">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
