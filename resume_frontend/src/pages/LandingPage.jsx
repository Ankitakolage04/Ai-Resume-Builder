import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaMagic, FaFileAlt, FaCheckCircle, FaUserTie } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="bg-base-100 font-sans selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <section className="hero min-h-screen relative overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-primary/10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[100px] animate-pulse"></div>
          <div className="absolute top-[60%] -left-[10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] animate-pulse duration-700"></div>
        </div>

        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/50 backdrop-blur-md rounded-full text-sm font-semibold text-primary mb-6 border border-white/20 shadow-sm animate-fade-in-down">
              ✨ AI-Powered Resume Builder
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-fade-in-up">
              Craft Your Career <br />
              <span className="text-base-content">In Seconds</span>
            </h1>
            <p className="py-6 text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Stop struggling with formatting. Describe your experience, and let our advanced AI build a professional, ATS-friendly resume for you instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <Link to={"/generate-resume"} className="btn btn-primary btn-lg rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all gap-3 border-4 border-white/20">
                <FaRocket /> Get Started for Free
              </Link>
              <Link to={"#features"} className="btn btn-outline btn-lg rounded-full hover:bg-base-200 transition-all">
                Learn More
              </Link>
            </div>

            <div className="mt-16 flex justify-center gap-8 opacity-70 animate-fade-in-up delay-300">
              <div className="flex items-center gap-2"><FaCheckCircle className="text-success" /> ATS Friendly</div>
              <div className="flex items-center gap-2"><FaCheckCircle className="text-success" /> AI Optimized</div>
              <div className="flex items-center gap-2"><FaCheckCircle className="text-success" /> PDF Download</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-base-100 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We combine cutting-edge AI with professional design principles to give you the best chance of landing your dream job.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FaMagic className="text-3xl text-primary" />
                </div>
                <h3 className="card-title text-xl mb-3">AI-Powered Magic</h3>
                <p className="text-gray-600">
                  Our Intelligent AI analyzes your input text and structures it into a compelling narrative that highlights your strengths.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FaFileAlt className="text-3xl text-secondary" />
                </div>
                <h3 className="card-title text-xl mb-3">Professional Templates</h3>
                <p className="text-gray-600">
                  Clean, modern, and professional designs that are proven to pass ATS systems and catch recruiters' eyes.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FaUserTie className="text-3xl text-accent" />
                </div>
                <h3 className="card-title text-xl mb-3">Tailored to You</h3>
                <p className="text-gray-600">
                  Whether you're a developer, designer, or marketer, our builder adapts to showcase your specific skillset effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-base-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">
            Loved by Job Seekers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="card bg-base-100 shadow-lg border border-base-200">
              <div className="card-body">
                <div className="flex gap-1 mb-4 text-warning text-sm">
                  ★★★★★
                </div>
                <p className="text-lg italic text-gray-700 mb-6">
                  "This AI resume maker saved me so much time! I just pasted my rough notes, and it generated a perfect resume. I got interviews at top tech companies within a week."
                </p>
                <div className="flex items-center">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Alex Johnson</h4>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="card bg-base-100 shadow-lg border border-base-200">
              <div className="card-body">
                <div className="flex gap-1 mb-4 text-warning text-sm">
                  ★★★★★
                </div>
                <p className="text-lg italic text-gray-700 mb-6">
                  "I was struggling to organize my freelance experience. This tool structured it perfectly. The design is clean and looks very premium. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Sarah Williams</h4>
                    <p className="text-sm text-gray-500">Digital Marketer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-primary text-primary-content relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="mb-10 text-xl max-w-2xl mx-auto opacity-90">
            Join thousands of professionals who have accelerated their careers with our AI tools. No credit card required.
          </p>
          <Link to={"/generate-resume"} className="btn btn-warning btn-lg rounded-full px-10 shadow-2xl hover:shadow-white/20 border-4 border-transparent hover:border-white/30 transition-all">
            Build My Resume Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-2xl font-bold mb-4 flex items-center gap-2"><FaRocket /> ResumeAI</h4>
            <p className="max-w-xs text-gray-400">
              Empowering job seekers with state-of-the-art AI technology to create professional, impactful resumes in minutes.
            </p>
          </div>
          <div>
            <h4 className="footer-title text-white opacity-100">Quick Links</h4>
            <a href="#" className="link link-hover text-gray-400 hover:text-white transition-colors">About Us</a>
            <a href="#" className="link link-hover text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#" className="link link-hover text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="link link-hover text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          <div>
            <h4 className="footer-title text-white opacity-100">Legal</h4>
            <a href="#" className="link link-hover text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="link link-hover text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="link link-hover text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
        <div className="text-center mt-10 pt-10 border-t border-white/10 text-gray-500">
          <p>&copy; {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;