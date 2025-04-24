import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EventDetails from "./pages/EventDetails";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";

function App() {
  // const isAuthenticated = !!localStorage.getItem("userToken");

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {
          <Route
            path="/"
            element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            }
          />
        }
        <Route
          path="/event-details/:id"
          element={
            <MainLayout>
              <EventDetails />
            </MainLayout>
          }
        />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
