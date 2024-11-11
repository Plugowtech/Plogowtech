import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//screens
import { HomePage } from "./screens/HomePage";
import { LoginPage } from "./screens/LoginPage";	
import { PersonRegistration } from "./screens/PersonRegistration";
import { CompanyRegistration } from "./screens/CompanyRegistratioPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/person-registration" element={<PersonRegistration />} />
        <Route path="/company-registration" element={<CompanyRegistration />} />
      </Routes>
    </Router>
  );
}

export default App
