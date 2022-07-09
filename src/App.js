import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";
import Home from './Components/Home';
import Footer from './Components/Includes/Footer';
import Menubar from './Components/Includes/Menubar';
import PrivacyPolicy from './Components/Includes/PrivacyPolicy';

function App() {
  return (
    <>
    <Router>
    <Menubar />
      <Routes>
      <Route path="/" index element={<Home />}></Route>
      <Route path="/privacy-policy" index element={<PrivacyPolicy />}></Route>
      </Routes>     
      <Footer />  
    </Router>
    </>
  );
}

export default App;
