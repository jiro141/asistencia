import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SingIn from './view/Auth/SingIn';
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<SingIn />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
