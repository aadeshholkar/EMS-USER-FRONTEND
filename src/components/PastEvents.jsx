import React from 'react';

const PastEvents = () => {
  const events = [
    {
      month: "April 2023",
      items: [
        {
          id: 1,
          icon: "Workshop",
          category: "Academic",
          title: "Web Development Workshop",
          description: "A hands-on workshop covering modern frontend frameworks and responsive design principles.",
          date: "April 18, 2023",
          time: "2:00 PM - 5:00 PM",
          attendees: "78 Attendees",
          location: "Computer Lab 102",
          resources: [
            { type: "pdf", name: "Presentation Slides" },
            { type: "zip", name: "Code Examples" },
            { type: "video", name: "Tutorial Video" }
          ]
        },
        {
          id: 2,
          icon: "LinkedIn",
          category: "Internship",
          title: "LinkedIn Profile Workshop",
          description: "Learn how to optimize your LinkedIn profile to stand out to recruiters.",
          date: "April 12, 2023",
          time: "3:00 PM - 4:30 PM",
          attendees: "65 Attendees",
          location: "Virtual Event",
          resources: [
            { type: "pdf", name: "LinkedIn Optimization Guide" },
            { type: "docx", name: "Profile Templates" },
            { type: "video", name: "Workshop Recording" }
          ]
        }
      ]
    },
    {
      month: "March 2023",
      items: [
        {
          id: 3,
          icon: "Meta",
          category: "Placement",
          title: "Meta Recruitment Drive",
          description: "Meta's recruitment team visited campus for software engineering roles.",
          date: "March 28, 2023",
          time: "9:00 AM - 5:00 PM",
          attendees: "85 Attendees",
          location: "Conference Hall",
          resources: [
            { type: "pdf", name: "Company Presentation" },
            { type: "pdf", name: "Job Descriptions" },
            { type: "pdf", name: "Interview Preparation Guide" }
          ]
        }
      ]
    }
  ];

  const getIcon = (type) => {
    switch(type) {
      case "pdf": return (
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
      );
      case "video": return (
        <>
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          <path d="M14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
        </>
      );
      default: return (
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
      );
    }
  };

  return (
    <section id="pastEvents" className="bg-gray-100 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Past Events Archive</h1>
          <p className="text-gray-600">Browse through our past events, access resources, and view event summaries.</p>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                {["All Years", "2023", "2022", "2021", "2020"].map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Month</label>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                {["All Months", ...Array.from({length: 12}, (_, i) => new Date(0, i).toLocaleString('default', {month: 'long'}))].map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                {["All Categories", "Academic", "Internship", "Placement"].map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-end">
              <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
        
        {events.map((group) => (
          <div key={group.month} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{group.month}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((event) => (
                <div key={event.id} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 mr-3">
                        <img src={`https://placehold.co/60x60?text=${event.icon}`} alt={event.title} className="h-12 w-12 rounded-full" />
                      </div>
                      <div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          event.category === "Academic" ? "bg-blue-100 text-blue-800" : 
                          event.category === "Internship" ? "bg-purple-100 text-purple-800" : 
                          "bg-pink-100 text-pink-800"
                        }`}>
                          {event.category}
                        </span>
                        <h3 className="text-lg font-medium text-gray-900 mt-1">{event.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                    
                    <div className="border-t border-b border-gray-200 py-4 mb-4">
                      <div className="flex justify-between text-sm">
                        <div className="text-gray-500">
                          <div className="flex items-center mb-1">
                            <svg className="mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <svg className="mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {event.time}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-900 font-medium">{event.attendees}</div>
                          <div className="text-gray-500">{event.location}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Resources</h4>
                      <ul className="space-y-2">
                        {event.resources.map((resource, i) => (
                          <li key={i}>
                            <a href="#" className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                              <svg className="mr-1.5 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                {getIcon(resource.type)}
                              </svg>
                              {resource.name} ({resource.type.toUpperCase()})
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-end">
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PastEvents;