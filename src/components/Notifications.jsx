import React from 'react';

const Notifications = () => {
  return (
    <section id="notifications" className="bg-gray-100 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Notification Settings</h1>
          <p className="text-gray-600">Manage how and when you receive notifications about events and updates.</p>
        </div>
        
        {/* Notification Settings Card */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Email Notification Preferences</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="new-events" name="new-events" type="checkbox" checked className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="new-events" className="font-medium text-gray-700">New Event Notifications</label>
                  <p className="text-gray-500">Receive an email when new events are assigned to your class.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="registration-confirmation" name="registration-confirmation" type="checkbox" checked className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="registration-confirmation" className="font-medium text-gray-700">Registration Confirmations</label>
                  <p className="text-gray-500">Receive confirmation emails when you register for an event.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="event-reminders" name="event-reminders" type="checkbox" checked className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="event-reminders" className="font-medium text-gray-700">Event Reminders</label>
                  <p className="text-gray-500">Receive reminder emails 24 hours before events you've registered for.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="deadline-alerts" name="deadline-alerts" type="checkbox" checked className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="deadline-alerts" className="font-medium text-gray-700">Registration Deadline Alerts</label>
                  <p className="text-gray-500">Receive alerts when registration deadlines for events are approaching.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="event-updates" name="event-updates" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="event-updates" className="font-medium text-gray-700">Event Updates</label>
                  <p className="text-gray-500">Receive emails when there are updates to events you've registered for.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="post-event" name="post-event" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="post-event" className="font-medium text-gray-700">Post-Event Communications</label>
                  <p className="text-gray-500">Receive emails about resources, feedback surveys, and follow-ups after events.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
        
        {/* Email Digest Settings */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Email Digest Settings</h2>
            <div className="max-w-xl">
              <p className="text-sm text-gray-500 mb-4">Choose how often you want to receive email digests summarizing new events and upcoming deadlines.</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <input id="digest-daily" name="digest-frequency" type="radio" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                  <label htmlFor="digest-daily" className="ml-3 block text-sm font-medium text-gray-700">
                    Daily Digest
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="digest-weekly" name="digest-frequency" type="radio" checked className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                  <label htmlFor="digest-weekly" className="ml-3 block text-sm font-medium text-gray-700">
                    Weekly Digest (Every Monday)
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="digest-biweekly" name="digest-frequency" type="radio" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                  <label htmlFor="digest-biweekly" className="ml-3 block text-sm font-medium text-gray-700">
                    Bi-weekly Digest
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="digest-monthly" name="digest-frequency" type="radio" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                  <label htmlFor="digest-monthly" className="ml-3 block text-sm font-medium text-gray-700">
                    Monthly Digest (1st of each month)
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="digest-none" name="digest-frequency" type="radio" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                  <label htmlFor="digest-none" className="ml-3 block text-sm font-medium text-gray-700">
                    No Digest Emails
                  </label>
                </div>
              </div>
              
              <div className="mt-8">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Save Digest Settings
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Notifications */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Recent Notifications</h2>
              <p className="mt-1 text-sm text-gray-500">View your recent notification history.</p>
            </div>
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            <li>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">Registration Confirmed: Annual Tech Symposium 2023</h3>
                      <p className="text-sm text-gray-500">Your registration for the Annual Tech Symposium on May 15, 2023 has been confirmed.</p>
                    </div>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      2 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </li>
            
            <li>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">New Event: Web Development Workshop</h3>
                      <p className="text-sm text-gray-500">A new event has been added for your class: Web Development Workshop on May 20, 2023.</p>
                    </div>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Yesterday
                    </p>
                  </div>
                </div>
              </div>
            </li>
            
            <li>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">Deadline Reminder: Google Summer Internship</h3>
                      <p className="text-sm text-gray-500">Registration deadline for Google Summer Internship is approaching (May 30, 2023).</p>
                    </div>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      3 days ago
                    </p>
                  </div>
                </div>
              </div>
            </li>
            
            <li>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">Event Update: Research Symposium</h3>
                      <p className="text-sm text-gray-500">The venue for Research Symposium on June 5, 2023 has been changed to Conference Hall.</p>
                    </div>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      1 week ago
                    </p>
                  </div>
                </div>
              </div>
            </li>
            
            <li>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">Resources Available: LinkedIn Profile Workshop</h3>
                      <p className="text-sm text-gray-500">Resources from LinkedIn Profile Workshop are now available for download.</p>
                    </div>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      2 weeks ago
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">View all notifications <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notifications;