import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Account from "./pages/Account.js";
import ProtectedRoute from "./components/ProtectedRoute.js";

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/account" element={<ProtectedRoute> <Account /></ProtectedRoute> }></Route>
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
