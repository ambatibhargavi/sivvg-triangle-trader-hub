
import { Shield, Users, ChartLine } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About SIVVG</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SIVVG is a premier trading and investment firm dedicated to providing secure, 
            profitable investment solutions for individuals and businesses alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At SIVVG, our mission is to empower our clients with reliable trading solutions 
              that prioritize security while maximizing returns. We believe in transparent 
              operations and building lasting relationships based on trust and performance.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              We aim to become the most trusted name in the trading industry by consistently 
              delivering exceptional service and investment returns that exceed expectations.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium">Secure Investments</p>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium">Expert Team</p>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-3">
                  <ChartLine className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium">Consistent Growth</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Trading professionals at SIVVG" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <p className="text-white text-xl font-semibold">Trusted by over 1,000+ clients worldwide</p>
                <p className="text-white/80">Founded in 2015, SIVVG has been delivering excellence for over 8 years</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full z-[-1]"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/10 rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
