import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

export default function Dashboard() {
  const navigate = useNavigate();
  const [events, setEvents] = useState({ Academic: [], Internship: [], Placement: [] });
  const [analytics, setAnalytics] = useState(null);
  const [trendData, setTrendData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDashboardSummary = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await axios.get("/api/analytics/dashboard-summary", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);

      setEvents(data.categoryWiseEvents);
      setAnalytics({
        total: data.totalEvents,
        upcoming: data.upcomingEvents,
        past: data.pastEvents,
        category: data.eventsByCategory,
        priority: data.eventsByPriority,
        status: data.eventsByStatus,
      });

      setTrendData(data.weeklyTrends || []);
    } catch (err) {
      console.error("Failed to fetch dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardSummary();
  }, []);

  const renderEventCard = (event) => (
    <motion.div
      key={event._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white overflow-hidden shadow rounded-lg"
    >
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              src={`https://placehold.co/40x40?text=${event.name?.split(" ")[0]}`}
              alt="icon"
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">{event.name}</h3>
            <div className="flex mt-1 space-x-1">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                event.priority === "High"
                  ? "bg-red-100 text-red-800"
                  : event.priority === "Medium"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              }`}>
                {event.priority} Priority
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {event.category}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-500 truncate">{event.description}</div>
        <div className="mt-4 space-y-2 text-sm text-gray-500">
          <div>Date: {new Date(event.date).toLocaleDateString()}</div>
          <div>Time: {event.startTime} - {event.endTime}</div>
          <div>Location: {event.location}</div>
        </div>
        <div className="mt-5 flex justify-end">
          <Link to={`/event-details/${event._id}`} className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );

  const renderPieChart = (data, title) => (
    <motion.div
      className="w-full md:w-1/3 p-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-md font-semibold text-gray-800 mb-3">{title}</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="_id"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );

  const renderTrendChart = () => (
    <motion.div
      className="w-full p-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-md font-semibold text-gray-800 mb-3">Weekly Event Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={trendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="week" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="events" stroke="#3b82f6" fillOpacity={1} fill="url(#colorTotal)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );

  return (
    <motion.section
      id="dashboard"
      className="bg-gray-100 pt-8 pb-8 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">Welcome back, John Doe! Here's your event summary.</p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <button
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate("/event-details")}
            >
              View All Events
            </button>
          </div>
        </div>

        {!loading && analytics && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <motion.div className="bg-white p-6 rounded-lg shadow text-center" whileHover={{ scale: 1.05 }}>
              <p className="text-gray-600">Total Events</p>
              <h2 className="text-3xl font-bold text-blue-600">{analytics.total}</h2>
            </motion.div>
            <motion.div className="bg-white p-6 rounded-lg shadow text-center" whileHover={{ scale: 1.05 }}>
              <p className="text-gray-600">Upcoming Events</p>
              <h2 className="text-3xl font-bold text-green-600">{analytics.upcoming}</h2>
            </motion.div>
            <motion.div className="bg-white p-6 rounded-lg shadow text-center" whileHover={{ scale: 1.05 }}>
              <p className="text-gray-600">Past Events</p>
              <h2 className="text-3xl font-bold text-red-600">{analytics.past}</h2>
            </motion.div>
          </div>
        )}

        {!loading && analytics && renderTrendChart()}

        {!loading && analytics && (
          <div className="flex flex-wrap -mx-4 mb-12">
            {renderPieChart(analytics.category, "Events by Category")}
            {renderPieChart(analytics.priority, "Events by Priority")}
            {renderPieChart(analytics.status, "Events by Status")}
          </div>
        )}

        {loading ? (
          <p className="text-center text-gray-500">Loading events...</p>
        ) : (
          ["Academic", "Internship", "Placement"].map((category) => (
            <motion.div key={category} className="mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <h2 className="text-lg font-medium text-gray-900 mb-4">{category} Events</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {events[category].length > 0 ? (
                  events[category].map(renderEventCard)
                ) : (
                  <p className="text-sm text-gray-500 col-span-full">No upcoming {category.toLowerCase()} events.</p>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </motion.section>
  );
}
