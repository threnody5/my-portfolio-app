/** @format */

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header/Header';

// #858585 - light grey

function App() {
  return (
    <div
      style={{ backgroundColor: '#4d4d4d', height: '100vh', width: '100vw' }}
    >
      <Header />
    </div>
  );
}

export default App;
