import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Mantrapage from './pages/Mantrapage/Mantrapage';
import TopUsersPage from './pages/TopUsers/TopUsers';
import MyPerformance from './pages/MyPerformance/MyPerformance';
import Navbar from './components/Navbar/Navbar';
import FAQ from './pages/FAQ/FAQ';
import BhagwanSwaminarayan from './pages/BhagwanSwaminarayan/BhagwanSwaminarayan';
import Login from './components/Login/Login';
import Testimonials from './pages/Testimonials/Testimonials';
import EditProfile from './pages/EditProfile/EditProfile';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/topusers" element={<TopUsersPage />}></Route>
        <Route path="/mantrapage" element={<Mantrapage />}></Route>

        <Route path="/myperformance" element={<MyPerformance />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route
          path="/BhagwanSwaminarayan"
          element={<BhagwanSwaminarayan />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/testimonial" element={<Testimonials />}></Route>
        <Route path="/editprofile" element={<EditProfile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
