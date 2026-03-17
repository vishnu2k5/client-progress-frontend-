import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProgressPage from './pages/ProgressPage';
import ProfilePage from './pages/ProfilePage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import { isAuthed } from './lib/storage';

function ProtectedRoute({ children }) {
  return isAuthed() ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path="/progress/:clientId" element={<ProtectedRoute><ProgressPage /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      <Route path="/change-password" element={<ProtectedRoute><ChangePasswordPage /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to={isAuthed() ? '/' : '/login'} replace />} />
    </Routes>
  );
}
