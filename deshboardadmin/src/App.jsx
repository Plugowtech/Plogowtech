import { useState } from 'react';

// Css Geral
import './index.css';

// Import do SIDEBAR a
import Sidebar from './components/sidebar/Sidebar';


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
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;
