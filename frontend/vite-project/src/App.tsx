import Dashboard from "./pages/Dashboard";
import { Signin } from "./pages/Sigin";
import { Signup } from "./pages/Signup";
import { Youtube } from "./pages/Youtube";
import { Twitter } from "./pages/Twitter";
import { Links } from "./pages/Links";
import { Shared } from "./pages/Shared";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/twitter" element={<Twitter />} />
        <Route path="/links" element={<Links />} />
        <Route path="/share/:hash" element={<Shared />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
