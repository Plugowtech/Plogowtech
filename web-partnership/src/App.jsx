import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//screens
import { HomePage } from "./screens/HomePage";
import { LoginPage } from "./screens/LoginPage";	
 import { PersonRegistrationPage } from "./screens/PersonRegistrationPage";
import { CompanyRegistrationPage } from "./screens/CompanyRegistrationPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/person-registration" element={<PersonRegistrationPage />} />
         <Route path="/company-registration" element={<CompanyRegistrationPage />} /> 
      </Routes>
    </Router>
  );
}

export default App
