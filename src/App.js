import './App.css';
import Home from './pages/Home.jsx';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                    <Route index element={<Home/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
