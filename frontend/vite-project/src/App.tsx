import Dashboard from "./pages/Dashboard";
import { Signin } from "./pages/Sigin";
import { Signup } from "./pages/Signup";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/youtube"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
