import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Navbar from './components/Navbar';
import AIToolsShowcase from './components/AIToolsShowcase';
import AddToolPage from './pages/AddToolPage';
import ToolDetailPage from './pages/ToolDetailPage';
import AuthPage from './pages/AuthPage';

function App() {
  const { token } = useSelector((state: RootState) => state.auth);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/auth" element={token ? <Navigate to="/" /> : <AuthPage />} />
        <Route path="/" element={token ? <AIToolsShowcase /> : <Navigate to="/auth" />} />
        <Route path="/add-tool" element={token ? <AddToolPage /> : <Navigate to="/auth" />} />
        <Route path="/tool/:id" element={token ? <ToolDetailPage /> : <Navigate to="/auth" />} />
      </Routes>
    </Router>
  );
}

export default App;