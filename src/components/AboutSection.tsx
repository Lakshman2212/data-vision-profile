
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
            <Avatar className="w-80 h-80 shadow-lg border-4 border-blue-100">
              <AvatarImage 
                src="/lovable-uploads/4b672d93-7d67-4dc7-9ba5-fe237d494301.png" 
                alt="G. Venkata Lakshman Kumar"
                className="object-cover"
                loading="lazy"
              />
              <AvatarFallback className="text-4xl font-bold text-gray-800 bg-gradient-to-br from-blue-400 to-purple-500 text-white">
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
