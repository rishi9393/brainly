import Dashboard from "./pages/Dashboard";
import { Signin } from "./pages/Sigin";
import { Sigup } from "./pages/Signup";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sigup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Sigup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
