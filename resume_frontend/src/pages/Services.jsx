import React from "react";
import { FaFileAlt, FaPenFancy, FaSearchDollar, FaMagic } from "react-icons/fa";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: <FaMagic className="text-4xl text-primary" />,
      title: "AI Resume Generation",
      description: "Generate a full professional resume from just a few bullet points of raw text.",
      active: true,
      link: "/generate-resume"
    },
    {
      icon: <FaPenFancy className="text-4xl text-secondary" />,
      title: "Cover Letter Builder",
      description: "Create tailored cover letters that match your resume style and job description.",
      active: false,
      badge: "Coming Soon"
    },
    {
      icon: <FaSearchDollar className="text-4xl text-accent" />,
      title: "Salary Estimator",
      description: "Get insights into market rates for your skills and experience level.",
      active: false,
      badge: "Coming Soon"
    },
    {
      icon: <FaFileAlt className="text-4xl text-neutral" />,
      title: "Resume Review",
      description: "Get AI-powered feedback on your existing resume to improve its impact.",
      active: false,
      badge: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-primary">Our Services</h1>
          <p className="text-xl text-gray-600">Tools to help you succeed in your career journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all hover:-translate-y-1 ${!service.active && 'opacity-70'}`}>
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <div className="bg-base-200 p-4 rounded-xl mb-4">
                    {service.icon}
                  </div>
                  {service.badge && <span className="badge badge-accent badge-outline">{service.badge}</span>}
                </div>
                <h2 className="card-title text-2xl mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="card-actions justify-end">
                  {service.active ? (
                    <Link to={service.link} className="btn btn-primary">Try Now</Link>
                  ) : (
                    <button className="btn btn-disabled">Not Available</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;