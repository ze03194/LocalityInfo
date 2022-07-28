import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingComponent/LandingPage";
import LoginPage from "./components/LoginComponent/LoginPage";
import RegisterPage from "./components/RegisterComponent/RegisterPage";

function App() {
    return (
        <BrowserRouter>
            <Routes id="root">
                <Route exact path="/" element={<LandingPage/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/register" element={<RegisterPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
