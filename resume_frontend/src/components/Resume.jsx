import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

const Resume = ({ data }) => {
  const resumeRef = useRef(null);

  const handleDownloadPdf = async () => {
    if (!resumeRef.current) return;

    try {
      const dataUrl = await toPng(resumeRef.current, { quality: 1.0, pixelRatio: 2 });
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${data.personalInformation.fullName.replace(/\s+/g, '_')}_Resume.pdf`);
    } catch (err) {
      console.error("Error generating PDF", err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 animate-fade-in-up">
      <div
        ref={resumeRef}
        className="w-[210mm] min-h-[297mm] bg-white text-gray-800 shadow-2xl p-10 font-sans leading-relaxed"
      >
        {/* Header */}
        <header className="border-b-2 border-primary pb-6 mb-6">
          <h1 className="text-5xl font-extrabold text-primary tracking-tight uppercase">
            {data.personalInformation.fullName}
          </h1>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600 font-medium">
            {data.personalInformation.location && (
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-secondary" /> {data.personalInformation.location}
              </span>
            )}
            {data.personalInformation.email && (
              <a href={`mailto:${data.personalInformation.email}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                <FaEnvelope className="text-secondary" /> {data.personalInformation.email}
              </a>
            )}
            {data.personalInformation.phoneNumber && (
              <span className="flex items-center gap-1">
                <FaPhone className="text-secondary" /> {data.personalInformation.phoneNumber}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 font-medium">
            {data.personalInformation.portfolio && (
              <a href={data.personalInformation.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                <FaGlobe className="text-secondary" /> Portfolio
              </a>
            )}
            {data.personalInformation.linkedIn && (
              <a href={data.personalInformation.linkedIn} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                <FaLinkedin className="text-secondary" /> LinkedIn
              </a>
            )}
            {data.personalInformation.gitHub && (
              <a href={data.personalInformation.gitHub} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                <FaGithub className="text-secondary" /> GitHub
              </a>
            )}
          </div>
        </header>

        {/* Summary */}
        {data.summary && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-secondary pl-3 uppercase mb-3">Professional Summary</h2>
            <p className="text-gray-700 text-justify">{data.summary}</p>
          </section>
        )}

        {/* Skills */}
        {data.skills?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-secondary pl-3 uppercase mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold border border-gray-200">
                  {skill.title} <span className="text-gray-500 font-normal">| {skill.level}</span>
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-secondary pl-3 uppercase mb-3">Work Experience</h2>
            <div className="space-y-4">
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold text-gray-900">{exp.jobTitle}</h3>
                    <span className="text-sm font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{exp.duration}</span>
                  </div>
                  <div className="text-primary font-semibold text-sm mb-1">{exp.company} &bull; {exp.location}</div>
                  <p className="text-gray-700 text-sm whitespace-pre-line">{exp.responsibility}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-8">
          {/* Education */}
          {data.education?.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-secondary pl-3 uppercase mb-3">Education</h2>
              <div className="space-y-3">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <div className="text-gray-600 text-sm">{edu.university}, {edu.location}</div>
                    <div className="text-xs text-gray-500 mt-0.5">Graduated: {edu.graduationYear}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {data.certifications?.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-secondary pl-3 uppercase mb-3">Certifications</h2>
              <div className="space-y-2">
                {data.certifications.map((cert, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-gray-900 text-sm">{cert.title}</h3>
                    <div className="text-gray-600 text-xs">{cert.issuingOrganization} | {cert.year}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Projects */}
        {data.projects?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-secondary pl-3 uppercase mb-3">Key Projects</h2>
            <div className="space-y-4">
              {data.projects.map((proj, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900">{proj.title}</h3>
                    {proj.githubLink && (
                      <a href={proj.githubLink} target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                        <FaGithub /> View Code
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{proj.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {proj.technologiesUsed?.map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Achievements - NEW SECTION */}
        {data.achievements?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-secondary pl-3 uppercase mb-3">Achievements</h2>
            <div className="space-y-2">
              {data.achievements.map((ach, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900">{ach.title}</h3>
                    <span className="text-sm font-medium text-gray-500">{ach.year}</span>
                  </div>
                  <p className="text-sm text-gray-700">{ach.extraInformation}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* References */}
        {data.references?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-secondary pl-3 uppercase mb-3">References</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.references.map((ref, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded border border-gray-100">
                  <h3 className="font-bold text-gray-900">{ref.name}</h3>
                  <div className="text-sm text-primary">{ref.designation} at {ref.company}</div>
                  <div className="text-xs text-gray-500 mt-1">{ref.contact}</div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      <button onClick={handleDownloadPdf} className="btn btn-primary btn-wide shadow-lg mb-10">
        Download PDF
      </button>
    </div>
  );
};

export default Resume;