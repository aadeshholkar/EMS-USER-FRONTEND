const EventCard = ({ event }) => (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img src={`https://placehold.co/40x40?text=${event.name.split(" ")[0]}`} alt="icon" className="h-10 w-10 rounded-full" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">{event.name}</h3>
            <div className="flex mt-1 space-x-1">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                event.priority === 'High' ? 'bg-red-100 text-red-800' :
                event.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {event.priority} Priority
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {event.category}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-500">{event.description}</div>
        <div className="mt-3 space-y-1 text-sm text-gray-500">
          <div><strong>Location:</strong> {event.location}</div>
          <div><strong>Time:</strong> {event.date?.substring(0, 10)} • {event.startTime} - {event.endTime}</div>
          <div><strong>Deadline:</strong> {event.deadline || 'N/A'}</div>
        </div>
        <div className="mt-5 flex justify-end">
          <button className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            Register
          </button>
          <button className="ml-3 inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
  