import Nav from './components/navigation';
import Missions from './components/missions';

function App() {
  return (
    <div>
      <div className="App">
        <Nav />
        <Missions />
      </div>
      {/* <Router>
         <Route path="/Missions" component={Missions} />
       </Router> */}
    </div>
  );
}

export default App;
