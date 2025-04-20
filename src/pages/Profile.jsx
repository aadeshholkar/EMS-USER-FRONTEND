import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Lock } from "lucide-react";
import axios from "../utils/axios";
import { toast } from "react-toastify";

export default function Profile() {
  const [student, setStudent] = useState(null);
  const [showPasswordPanel, setShowPasswordPanel] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get("/students/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStudent(data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
        toast.error("Failed to load profile");
      }
    };

    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = passwords;

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        "/students/change-password",
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data.message);
      setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Password change failed");
    } finally {
      setLoading(false);
    }
  };

  if (!student) return <p className="text-center py-10">Loading profile...</p>;

  return (
    <section className="bg-gray-100 min-h-screen px-4 py-10 sm:px-6 lg:px-8 pb-40 lg:pb-32">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Overview */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold">Profile Overview</h2>
              <p className="text-sm text-gray-600">Your personal and academic details</p>
            </div>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              {student.class}
            </span>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <div className="h-16 w-16 bg-indigo-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
              {student.name?.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <p className="text-lg font-medium text-gray-800">{student.name}</p>
              <p className="text-sm text-gray-500">{student.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div className="bg-gray-50 p-4 rounded shadow">
              <p className="font-medium text-gray-500">Roll Number</p>
              <p>{student.rollNo}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded shadow">
              <p className="font-medium text-gray-500">Register ID</p>
              <p>{student.regID}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded shadow">
              <p className="font-medium text-gray-500">Class</p>
              <p>{student.class}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded shadow">
              <p className="font-medium text-gray-500">Department</p>
              <p>{student.department}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded shadow col-span-1 md:col-span-2">
              <p className="font-medium text-gray-500">PRN Number</p>
              <p>{student.PRN}</p>
            </div>
          </div>
        </div>

        {/* Change Password Panel */}
        <div className="bg-white shadow rounded-lg p-6">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowPasswordPanel(!showPasswordPanel)}
          >
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">Change Password</h2>
            </div>
            {showPasswordPanel ? <ChevronUp /> : <ChevronDown />}
          </div>

          {showPasswordPanel && (
            <form onSubmit={handlePasswordSubmit} className="mt-6 space-y-4 transition-all duration-300 ease-in-out">
              <div>
                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwords.currentPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter current password"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Confirm new password"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 text-sm"
                >
                  {loading ? "Updating..." : "Update Password"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
