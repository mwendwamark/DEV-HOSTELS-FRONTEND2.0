import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import WelcomePage from "./Pages/WelcomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
