
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              B.Tech Computer Science student at VIT-AP (CGPA 8.3) passionate about solving real-world problems through data and tech.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With experience in dashboarding, machine learning, and clean UI, I strive to turn messy data into meaningful insights that drive decision-making and innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-700 font-medium">VIT-AP University</span>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-full">
                <span className="text-green-700 font-medium">CGPA 8.3</span>
              </div>
              <div className="bg-purple-50 px-4 py-2 rounded-full">
                <span className="text-purple-700 font-medium">Data Analytics</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Avatar className="w-80 h-80 shadow-2xl">
              <AvatarImage 
                src="/lovable-uploads/2b329b93-480a-447a-ae41-180c0fef2bcf.png" 
                alt="G. Venkata Lakshman Kumar"
                className="object-cover"
              />
              <AvatarFallback className="text-6xl font-bold text-gray-800 bg-gradient-to-br from-blue-400 to-purple-500">
                LK
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
