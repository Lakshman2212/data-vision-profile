
const ProjectsSection = () => {
  const projects = [
    {
      title: "Olympic Sports Dashboard",
      icon: "🏅",
      description: "Comprehensive analytics dashboard for Olympic sports data visualization and performance tracking",
      details: [
        "3 IBM Cognos dashboards for 1,000+ records",
        "Visualized medal & participation trends",
        "Reduced reporting time by 6+ hours/month"
      ],
      tags: ["IBM Cognos", "Data Visualization", "Analytics"]
    },
    {
      title: "Bank Investment Predictor",
      icon: "💰",
      description: "Machine learning model to predict optimal investment strategies using comprehensive data analysis",
      details: [
        "Used PyCaret on 10K+ rows, 16 features",
        "Compared multiple ML models",
        "Helped improve investment decision-making"
      ],
      tags: ["Python", "PyCaret", "Machine Learning", "Predictive Analytics"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
