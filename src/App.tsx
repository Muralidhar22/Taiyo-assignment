import './App.css';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import CreateContact from './pages/CreateContact';
import EditContact from './pages/EditContact';
import ChartsMaps from './pages/ChartsMaps';

function App() {
  return (
    <div className="md:flex md:gap-5">
      <div className="md:w-44 relative">
        <Navigation />
      </div>
      <div className="w-full pl-2 md:pl-0 py-2 pr-2">
        <Routes>
          <Route path="/" element={<Contact />} />
            <Route path="create-contact" element={<CreateContact />} />
            <Route path="edit/:id" element={<EditContact />} />
          
          <Route path="charts-maps" element={<ChartsMaps />} />
        </Routes>
      </div>
      <div className="md:hidden h-20 w-full">
        
      </div>
    </div>
  );
}

export default App;
