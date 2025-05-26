
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-up">
          <p className="text-lg text-gray-600 mb-4">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">G. Venkata</span>
            <span className="block text-blue-600">Lakshman Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            A Data-Driven Developer with a Passion for Insight & Innovation
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Guntur, AP</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>venkatalakshman2212@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/lakshman-ghattamaneni-708497232" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-50"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a 
              href="https://github.com/Lakshman2212" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-50"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a 
              href="mailto:venkatalakshman2212@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-red-50"
            >
              <Mail className="w-6 h-6 text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
