import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './components/screens/Home';
import Signin from './components/screens/Signin';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';
import CreatePost from './components/screens/Createpost';
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/createPost" element={<CreatePost />} />
    </Routes>
    </Router>
  );
}
 
export default App;
 