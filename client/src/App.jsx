import "./App.css";
import RegisterForm from "./components/RegisterForm";
import { AuthContextProvider } from "./context/authContext";
import PrivateRoutes from "./auth/privateRoutes";
import PublicRoutes from "./auth/publicRoutes";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/LogOut";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
       
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PublicRoutes />}>
              <Route index element={<Login/>} />
              <Route path='/register' element={<RegisterForm/>}/>
            </Route>
            <Route path="/private" element={<PrivateRoutes />}>
              <Route path="/private/home" element={<Home />} />
              <Route path="/private/logout" element={<Logout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
