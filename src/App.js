import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';
import {BrowserRouter, Routes, Route} from  'react-router-dom';

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Dashboard" element={<Dashboard/>}></Route>
      <Route path="/Onboarding" element={<Onboarding/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
