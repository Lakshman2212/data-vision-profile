
const LanguagesSection = () => {
  const languages = [
    { name: "English", proficiency: "Fluent", flag: "🇺🇸" },
    { name: "Telugu", proficiency: "Native", flag: "🏴" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Languages</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {languages.map((language, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <span className="text-4xl mb-3 block">{language.flag}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language.name}
              </h3>
              <p className="text-blue-600 font-medium">
                {language.proficiency}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
