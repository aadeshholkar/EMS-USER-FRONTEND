import React from 'react';

const Registration = () => {
  return (
    <section id="registration" className="bg-gray-100 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div>
                <a href="#dashboard" className="text-gray-500 hover:text-gray-700">Dashboard</a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <a href="#eventDetails" className="ml-4 text-gray-500 hover:text-gray-700">Annual Tech Symposium 2023</a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-4 text-gray-900 font-medium">Registration</span>
              </div>
            </li>
          </ol>
        </nav>
        
        {/* Registration Header */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-2xl font-bold text-gray-900">Register for Annual Tech Symposium 2023</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Please fill out the form below to register for this event.</p>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  High Priority
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Academic
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Headline
                </span>
              </div>
              
              <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <p>May 15, 2023 • 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <p>Main Auditorium, Engineering Block</p>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex items-center text-sm text-red-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <p>Registration Deadline: May 10, 2023 (5 days remaining)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Registration Form */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Registration Form</h2>
            <p className="mt-1 text-sm text-gray-500">Fields marked with * are required.</p>
          </div>
          
          <div className="px-4 py-5 sm:p-6">
            <form className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-md font-medium text-gray-900">Personal Information</h3>
                <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name *</label>
                    <div className="mt-1">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" required className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name *</label>
                    <div className="mt-1">
                      <input type="text" name="last-name" id="last-name" autoComplete="family-name" required className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address *</label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" autoComplete="email" required className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                    <div className="mt-1">
                      <input type="text" name="phone" id="phone" autoComplete="tel" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                  
                  <div className="sm:col-span-3">
                    <label htmlFor="student-id" className="block text-sm font-medium text-gray-700">Student ID *</label>
                    <div className="mt-1">
                      <input type="text" name="student-id" id="student-id" required className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                  
                  <div className="sm:col-span-3">
                    <label htmlFor="class" className="block text-sm font-medium text-gray-700">Class *</label>
                    <div className="mt-1">
                      <select id="class" name="class" required className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        <option selected disabled value="">Select your class</option>
                        <option>CS-2023</option>
                        <option>CS-2024</option>
                        <option>CS-2025</option>
                        <option>CS-2026</option>
                        <option>IT-2023</option>
                        <option>IT-2024</option>
                        <option>ECE-2023</option>
                        <option>ECE-2024</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Event-specific Information */}
              <div className="pt-6">
                <h3 className="text-md font-medium text-gray-900">Event-specific Information</h3>
                <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label htmlFor="workshop" className="block text-sm font-medium text-gray-700">Workshop Selection *</label>
                    <p className="text-xs text-gray-500 mt-1">Please select one workshop you would like to attend in the afternoon session (2:00 PM - 3:30 PM)</p>
                    <div className="mt-2">
                      <select id="workshop" name="workshop" required className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        <option selected disabled value="">Select a workshop</option>
                        <option>Machine Learning for Beginners</option>
                        <option>Cloud Computing with AWS</option>
                        <option>Building Your First Blockchain Application</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="dietary" className="block text-sm font-medium text-gray-700">Dietary Restrictions</label>
                    <div className="mt-1">
                      <input type="text" name="dietary" id="dietary" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Vegetarian, vegan, gluten-free, allergies, etc." />
                    </div>
                  </div>
                  
                  <div className="sm:col-span-6">
                    <label htmlFor="participation" className="block text-sm font-medium text-gray-700">Participation in Student Project Showcase</label>
                    <div className="mt-2">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="participation" name="participation" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="participation" className="font-medium text-gray-700">I would like to participate in the student project showcase</label>
                          <p className="text-gray-500">If selected, you will be contacted with additional information about project submission.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="sm:col-span-6">
                    <label htmlFor="questions" className="block text-sm font-medium text-gray-700">Questions for Speakers</label>
                    <div className="mt-1">
                      <textarea id="questions" name="questions" rows="3" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Do you have any questions for our speakers? We'll try to address them during the Q&A sessions."></textarea>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Terms and Privacy */}
              <div className="pt-6">
                <div className="mt-4">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" name="terms" type="checkbox" required className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-medium text-gray-700">I agree to the terms and conditions *</label>
                        <p className="text-gray-500">By registering, you agree to abide by the event rules and code of conduct.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="communications" name="communications" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="communications" className="font-medium text-gray-700">I would like to receive communications about future events</label>
                        <p className="text-gray-500">We'll send you emails about upcoming events, workshops, and opportunities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-5">
                <div className="flex justify-end">
                  <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Cancel
                  </button>
                  <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Complete Registration
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="mt-8 bg-blue-50 rounded-lg shadow-sm overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-blue-900">Important Information</h3>
            <div className="mt-2 text-sm text-blue-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>Registration confirmation will be sent to your email.</li>
                <li>Please bring your student ID for check-in on the event day.</li>
                <li>Participants will receive a certificate of attendance.</li>
                <li>Lunch and refreshments will be provided.</li>
                <li>If you need to cancel your registration, please do so at least 48 hours before the event.</li>
              </ul>
            </div>
            <div className="mt-4">
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                View Event Details <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;