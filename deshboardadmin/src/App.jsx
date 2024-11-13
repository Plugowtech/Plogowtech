import { useState } from 'react';

// Css Geral
import './index.css';

// Import do SIDEBAR, navbar
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';


const App = () => {
  // Painel adm
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className='content'>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main  />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;
