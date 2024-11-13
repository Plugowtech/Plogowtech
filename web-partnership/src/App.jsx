import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//screens
import { HomePage } from "./screens/HomePage";
import { LoginPage } from "./screens/LoginPage";	
 import { PersonRegistrationPage } from "./screens/PersonRegistrationPage";
import { CompanyRegistrationPage } from "./screens/CompanyRegistrationPage";
import { ChoosingAccountTypePage } from "./screens/ChoosingAccountTypePage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/choosing-account" element={<ChoosingAccountTypePage />} />
        <Route
          path="/person-registration"
          element={<PersonRegistrationPage />}
        />
        <Route
          path="/company-registration"
          element={<CompanyRegistrationPage />}
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App
