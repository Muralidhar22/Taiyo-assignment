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
      <div className="md:w-1/5 relative">
        <Navigation />
      </div>
      <div className="w-full py-2">
        <Routes>
          <Route path="/" element={<>Hello world</>} />
          <Route path="/contact">
            <Route index element={<Contact />} />
            <Route path="create-contact" element={<CreateContact />} />
            <Route path="edit/:id" element={<EditContact />} />
          </Route>
          <Route path="charts-maps" element={<ChartsMaps />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
