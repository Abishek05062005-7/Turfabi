import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const turfs = [
    {
      id: '1',
      name: 'Premier Turf',
      description: 'Professional grade synthetic turf with floodlights',
      pricePerHour: 100,
      image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=800',
      available: true,
    },
    {
      id: '2',
      name: 'Community Field',
      description: 'Perfect for casual games and practice sessions',
      pricePerHour: 80,
      image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80&w=800',
      available: true,
    },
    {
      id: '3',
      name: 'society Field',
      description: 'casual games and practice sessions',
      pricePerHour: 600,
      image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80&w=800',
      available: true,
    },
  ];

  return (
    <div>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Book Your Perfect Turf
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find and book the best football turfs in your area. Whether you're
          planning a casual game or a tournament, we've got you covered.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {turfs.map((turf) => (
          <div
            key={turf.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={turf.image}
              alt={turf.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {turf.name}
              </h3>
              <p className="text-gray-600 mb-4">{turf.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>₹{turf.pricePerHour}/hour</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Available Now</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                chat & book it
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;