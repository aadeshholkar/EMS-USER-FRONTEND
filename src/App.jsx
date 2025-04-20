import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EventDetails from "./pages/EventDetails";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Layout Route */}
        <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route index element={<Dashboard />} /> {/* <== FIXED */}
          <Route path="/event-details/:id" element={<EventDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Catch-all Route */}
        <Route
          path="*"
          element={
            localStorage.getItem("authToken") ? (
              <Navigate to="/" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>

      <ToastContainer position="top-center" autoClose={3000} />
    </Router>
  );
}
