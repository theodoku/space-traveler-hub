import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navigation';
import Missions from './components/missions';
import Profile from './components/Profile';


function App() {
  return (
    <BrowserRouter>
      <header className="App">
        <Nav />
      </header>
      <main>
        <Routes>
          {/* <Route path="/" element={<Rockets />} /> */}
          <Route path="/Profile" element={<Profile />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
