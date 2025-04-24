import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../utils/axios";
import MainLayout from "../components/MainLayout";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

const badgeColors = {
  priority: {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  },
  status: {
    Headline: "bg-indigo-100 text-indigo-700",
    Regular: "bg-gray-100 text-gray-700",
  },
  category: {
    Academic: "bg-blue-100 text-blue-700",
    Internship: "bg-purple-100 text-purple-700",
    Placement: "bg-pink-100 text-pink-700",
  },
};

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchEvent = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await axios.get(`/api/event/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvent(data.event);
    } catch (err) {
      console.error("Error loading event:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  if (loading) return <Loader />;

  if (!event)
    return (
        <div className="text-center text-red-600 mt-20 text-lg">
          Event not found.
        </div>
    );

  const {
    name,
    subheading,
    date,
    startTime,
    endTime,
    location,
    category,
    department,
    priority,
    status,
    classCode,
    description,
    contactPerson,
    contactPhone,
    contactEmail,
    emailMeta,
  } = event;

  return (
      <motion.section
        className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6 space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Title and Back Link */}
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            {subheading && <p className="text-sm text-gray-500">{subheading}</p>}
          </div>
          <Link to="/" className="text-sm text-blue-600 hover:underline font-medium">
            ← Back to Dashboard
          </Link>
        </div>

        {/* Meta Badges */}
        <div className="flex flex-wrap gap-2">
          <span className={`px-3 py-1 text-sm rounded-full ${badgeColors.category[category]}`}>
            {category}
          </span>
          <span className={`px-3 py-1 text-sm rounded-full ${badgeColors.priority[priority]}`}>
            Priority: {priority}
          </span>
          <span className={`px-3 py-1 text-sm rounded-full ${badgeColors.status[status]}`}>
            {status}
          </span>
          {classCode && (
            <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800">
              Class: {classCode}
            </span>
          )}
          {department && (
            <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800">
              Dept: {department}
            </span>
          )}
        </div>

        {/* Date and Time */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Date</p>
            <p className="text-base font-semibold text-gray-800">
              {new Date(date).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Time</p>
            <p className="text-base font-semibold text-gray-800">
              {startTime} – {endTime}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-base font-semibold text-gray-800">
              {location || "N/A"}
            </p>
          </div>
        </div>

        {/* Description */}
        {description && (
          <div>
            <p className="text-sm text-gray-500 mb-1">Description</p>
            <p className="whitespace-pre-line text-gray-700 bg-gray-50 p-4 rounded border text-sm">
              {description}
            </p>
          </div>
        )}

        {/* Contact Details */}
        {(contactPerson || contactEmail || contactPhone) && (
          <div className="grid sm:grid-cols-2 gap-6">
            {contactPerson && (
              <div>
                <p className="text-sm text-gray-500">Contact Person</p>
                <p className="text-base font-semibold text-gray-800">
                  {contactPerson}
                </p>
              </div>
            )}
            {contactEmail && (
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-base font-semibold text-gray-800">
                  {contactEmail}
                </p>
              </div>
            )}
            {contactPhone && (
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-base font-semibold text-gray-800">
                  {contactPhone}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Email Source Meta */}
        {emailMeta && (
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Source Email</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>
                <span className="font-medium">Sender:</span> {emailMeta.sender || "N/A"}
              </p>
              <p>
                <span className="font-medium">Subject:</span> {emailMeta.subject || "N/A"}
              </p>
              {emailMeta.body && (
                <>
                  <p className="font-medium mt-2">Email Body:</p>
                  <div className="whitespace-pre-line text-gray-700 text-sm mt-1 max-h-64 overflow-y-auto bg-gray-50 border p-3 rounded">
                    {emailMeta.body}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </motion.section>
  );
}
