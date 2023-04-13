import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navigation';
import Missions from './components/missions';
import Rockets from './Pages/Rockets';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="App">
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
