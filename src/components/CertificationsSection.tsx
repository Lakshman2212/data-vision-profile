
const CertificationsSection = () => {
  const certifications = [
    {
      title: "Data Analytics with IBM Cognos",
      organization: "SmartBridge",
      date: "Nov 2023",
      icon: "🎓"
    },
    {
      title: "ITT Summer Internship",
      organization: "VIT-AP University",
      date: "Jan 2024",
      icon: "🏫"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Certifications & Participation</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{cert.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">
                    {cert.organization}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {cert.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
