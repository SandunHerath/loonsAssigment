import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Home from "./screens/Home";
import Welcome from "./screens/Welcome";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <div style={{ marginTop: "8em" }}>
          <Routes>
            <Route exact path="/" element={<Welcome />}></Route>
            <Route exact path="/login" element={<LoginScreen />}></Route>
            <Route exact path="/register" element={<RegisterScreen />}></Route>
            <Route exact path="/main" element={<Home />}></Route>
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
