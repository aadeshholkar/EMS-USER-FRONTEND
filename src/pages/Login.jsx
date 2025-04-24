import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [PRN, setPRN] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setPRN("");
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password || (!isLogin && !PRN.trim())) {
      toast.error("Please fill in all required fields");
      return false;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const endpoint = isLogin ? "/api/student/login" : "/api/student/register";
      const payload = isLogin
        ? { email, password }
        : { email, password, PRN: PRN.toUpperCase() };
      
      console.log(payload);
      const { data } = await axios.post(endpoint, payload);

      if (isLogin) {
        localStorage.setItem("userToken", data.token);
        localStorage.setItem("student", JSON.stringify(data.student));
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.success("Registration successful. Please login.");
        setIsLogin(true);
        setPassword("");
        setPRN("");
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 w-full max-w-xl sm:mx-auto">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        ></motion.div>

        <motion.div
          className="relative px-6 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-8">
              <img
                src="https://placehold.co/100x100?text=EventHub"
                alt="EventHub Logo"
                className="h-16 w-auto"
              />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="pb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  {isLogin ? "Login" : "Register"} to EventHub
                </h2>
                <p className="text-sm text-gray-600">
                  {isLogin
                    ? "Access your event dashboard"
                    : "Create a new student account"}
                </p>
              </div>

              <form className="pt-6 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700">
                      PRN
                    </label>
                    <input
                      type="text"
                      required
                      value={PRN}
                      onChange={(e) => setPRN(e.target.value.toUpperCase())}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 uppercase"
                    />
                  </motion.div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition font-semibold flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                  ) : isLogin ? "Sign In" : "Register"}
                </button>

                <p className="text-sm text-center text-gray-600 mt-4">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already registered?"}{" "}
                  <button
                    type="button"
                    onClick={handleToggle}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {isLogin ? "Register" : "Login"}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
