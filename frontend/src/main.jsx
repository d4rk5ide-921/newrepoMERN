import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "primereact/resources/themes/lara-dark-blue/theme.css";  // Theme
import "primereact/resources/primereact.min.css";              // Core CSS
import "primeicons/primeicons.css";                            // Icons
import AuthProvider from './Pages/Context/AuthContext.jsx';
import ToDoProvider from './Pages/Context/ToDoContext.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ToDoProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ToDoProvider>
  </BrowserRouter>

)
