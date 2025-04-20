import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchEvent = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const { data } = await axios.get(`/events/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEvent(data);
    } catch (error) {
      console.error("Failed to fetch event details", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading event details...</div>;
  if (!event) return <div className="text-center py-10 text-red-500">Event not found</div>;

  return (
    <section className="bg-gray-100 min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Banner */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="h-64 bg-gradient-to-r from-gray-700 to-gray-900 flex items-end p-6 text-white">
            <div>
              <div className="space-x-2 mb-2">
                <span className="bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded-full">{event.priority} Priority</span>
                <span className="bg-purple-600 text-white px-3 py-1 text-xs font-semibold rounded-full">{event.category}</span>
                <span className="bg-indigo-600 text-white px-3 py-1 text-xs font-semibold rounded-full">{event.status}</span>
              </div>
              <h1 className="text-3xl font-bold">{event.name}</h1>
              <div className="mt-2 text-sm flex flex-col sm:flex-row sm:space-x-4 text-gray-200">
                <span>📅 {new Date(event.date).toLocaleDateString()} • {event.startTime} - {event.endTime}</span>
                <span>📍 {event.location}</span>
                <span>⭐ Registration Deadline: {event.deadline || "TBD"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">About the Event</h2>
              <p className="text-gray-700">{event.description}</p>
            </div>

            {/* Placeholder for Key Highlights */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Key Highlights</h2>
              <p className="text-gray-500 italic text-sm">To be announced...</p>
            </div>

            {/* Placeholder Schedule */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Schedule</h2>
              <p className="text-gray-500 italic text-sm">Schedule will be shared soon.</p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Registration */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Registration</h2>
              <p className="text-sm text-gray-600 mb-1">Spots Available</p>
              <p className="font-semibold text-gray-800 mb-2">-- / --</p>
              <p className="text-xs text-red-500 mb-4">Registration closes soon</p>
              <button className="w-full py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">Register Now</button>
            </div>

            {/* Organizer Info */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Contact</h2>
              <p className="text-sm text-gray-800">{event.contactPerson}</p>
              <p className="text-sm text-gray-600">{event.contactEmail}</p>
              {event.contactPhone && <p className="text-sm text-gray-600">{event.contactPhone}</p>}
            </div>

            {/* Event Stats */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Event Stats</h2>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>🎓 Status: {event.status}</li>
                <li>🔥 Priority: {event.priority}</li>
                <li>📅 Date: {new Date(event.date).toLocaleDateString()}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
