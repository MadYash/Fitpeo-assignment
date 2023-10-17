import "./stylesheets/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import Profile from "./Components/Profile";
function App() {
  return (
    <Router>
      {/* <ProtectedRoute Component={Navbar}/> */}
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
