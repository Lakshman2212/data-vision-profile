
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <span className="text-4xl mb-6 block">🚀</span>
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            I'm currently looking for roles in analytics, software engineering, and product development. 
            Let's collaborate and build something impactful together.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="mailto:venkatalakshman2212@gmail.com"
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
          </a>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Schedule a Call
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/lakshman-ghattamaneni-708497232" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/Lakshman2212" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="mailto:venkatalakshman2212@gmail.com"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-blue-100">
          <p>&copy; 2024 G. Venkata Lakshman Kumar. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
