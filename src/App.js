import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";
import Home from './Components/Home';
import Footer from './Components/Includes/Footer';
import Menubar from './Components/Includes/Menubar';

function App() {
  return (
    <>
    <Router>
    <Menubar />
      <Routes>
      <Route path="/" index element={<Home />}></Route>
      </Routes>     
      <Footer />  
    </Router>
    </>
  );
}

export default App;
