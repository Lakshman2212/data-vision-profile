
const LeadershipSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Leadership & Extracurricular</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-3xl">📌</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Treasurer – Photon Club
                </h3>
                <p className="text-blue-600 font-medium">2023–24</p>
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Managed budget & finances for 6+ tech events</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Ensured event success with high engagement</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-3xl">🏏</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sports
                </h3>
                <p className="text-green-600 font-medium">Active Player</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span className="text-gray-700">Cricket</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span className="text-gray-700">Volleyball</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
