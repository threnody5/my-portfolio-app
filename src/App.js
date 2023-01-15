/** @format */

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div
      style={{ backgroundColor: '#4d4d4d', height: '100vh', width: '100vw' }}
    >
      <div>
        <Header />
      </div>
      <div>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
