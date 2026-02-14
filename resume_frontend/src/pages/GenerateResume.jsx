import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaBrain, FaTrash, FaPaperPlane, FaPlusCircle, FaRocket, FaMagic } from "react-icons/fa";
import { generateResume } from "../api/ResumeService";
import { BiBook, BiCustomize } from "react-icons/bi";
import { useForm, useFieldArray } from "react-hook-form";
import Resume from "../components/Resume";

const GenerateResume = () => {
  const [data, setData] = useState({
    personalInformation: {
      fullName: "",
      email: "",
      phoneNumber: "",
      location: "",
      linkedin: "",
      gitHub: "",
      portfolio: "",
    },
    summary: "",
    skills: [],
    experience: [],
    education: [],
    certifications: [],
    projects: [],
    languages: [],
    interests: [],
    references: [],
    achievements: [], // Added Achievements
  });

  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: data,
  });

  const [showFormUI, setShowFormUI] = useState(false);
  const [showResumeUI, setShowResumeUI] = useState(false);
  const [showPromptInput, setShowPromptInput] = useState(true);

  // Field Arrays for dynamic sections
  const experienceFields = useFieldArray({ control, name: "experience" });
  const educationFields = useFieldArray({ control, name: "education" });
  const certificationsFields = useFieldArray({ control, name: "certifications" });
  const projectsFields = useFieldArray({ control, name: "projects" });
  const languagesFields = useFieldArray({ control, name: "languages" });
  const interestsFields = useFieldArray({ control, name: "interests" });
  const skillsFields = useFieldArray({ control, name: "skills" });
  const referencesFields = useFieldArray({ control, name: "references" });
  const achievementsFields = useFieldArray({ control, name: "achievements" }); // Added Achievements Field Array

  const onSubmit = (formData) => {
    setData({ ...formData });
    setShowFormUI(false);
    setShowPromptInput(false);
    setShowResumeUI(true);
  };

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  React.useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleGenerate = async () => {
    if (!description.trim()) {
      toast.error("Please enter a description first.");
      return;
    }

    try {
      setLoading(true);
      setTimer(0);
      const id = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);

      const responseData = await generateResume(description);

      if (responseData.data) {
        reset(responseData.data);
        setData(responseData.data)
        toast.success("Resume Generated Successfully!", { duration: 4000 });
        setShowFormUI(true);
        setShowPromptInput(false);
        setShowResumeUI(false);
      } else {
        toast.error("Failed to parse resume data. Please try again.");
      }

    } catch (error) {
      console.error(error);
      const errorMessage = error.message === "timeout of 300000ms exceeded"
        ? "Only local AI is slow! It took too long."
        : "Error Generating Resume. Please check backend.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
      if (intervalId) clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const renderInput = (name, label, type = "text", placeholder = "") => (
    <div className="form-control w-full mb-3">
      <label className="label">
        <span className="label-text font-medium text-gray-700">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="input input-bordered w-full focus:input-primary focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
      />
    </div>
  );

  const renderFieldArray = (fields, label, name, keys) => (
    <div className="card bg-base-100 shadow-lg border border-base-200 mb-8 overflow-hidden">
      <div className="bg-base-200/50 p-4 border-b border-base-200 flex justify-between items-center">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <BiCustomize /> {label}
        </h3>
        <button
          type="button"
          onClick={() => fields.append(keys.reduce((acc, key) => ({ ...acc, [key]: "" }), {}))}
          className="btn btn-sm btn-primary gap-2 text-white"
        >
          <FaPlusCircle /> Add Item
        </button>
      </div>
      <div className="card-body p-4">
        {fields.fields.map((field, index) => (
          <div key={field.id} className="collapse collapse-arrow bg-white border border-base-200 mb-2 rounded-box shadow-sm hover:shadow-md transition-shadow">
            <input type="checkbox" defaultChecked />
            <div className="collapse-title font-medium flex justify-between items-center pr-12 text-gray-700">
              {label} Item {index + 1}
              <button
                type="button"
                onClick={() => fields.remove(index)}
                className="btn btn-xs btn-error btn-outline z-10 ml-4"
              >
                <FaTrash /> Remove
              </button>
            </div>
            <div className="collapse-content">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {keys.map((key) => (
                  <div key={key} className={key === 'description' || key === 'responsibility' || key === 'summary' || key === 'extraInformation' ? 'col-span-full' : ''}>
                    {key === 'description' || key === 'responsibility' || key === 'summary' || key === 'extraInformation' ? (
                      <div className="form-control">
                        <label className="label"><span className="label-text capitalize font-medium">{key}</span></label>
                        <textarea
                          {...register(`${name}.${index}.${key}`)}
                          className="textarea textarea-bordered w-full h-24 focus:textarea-primary"
                          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        ></textarea>
                      </div>
                    ) : (
                      renderInput(`${name}.${index}.${key}`, key.charAt(0).toUpperCase() + key.split(/(?=[A-Z])/).join(" "))
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        {fields.fields.length === 0 && <p className="text-center text-gray-400 py-4 italic">No {label.toLowerCase()} added yet. Click &quot;Add Item&quot; to start.</p>}
      </div>
    </div>
  );


  const InputPromptView = () => (
    <div className="min-h-screen flex items-center justify-center w-full px-4 bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <div className="card bg-base-100 shadow-2xl max-w-4xl w-full border border-base-200 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        <div className="card-body text-center py-16 px-8">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center animate-bounce-slow">
              <FaBrain className="text-6xl text-primary" />
            </div>
          </div>

          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            AI Resume Builder
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg">
            Transform your experience into a professional resume in seconds.
            Just describe your background, and let our AI handle the formatting and structure.
          </p>

          <div className="form-control w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <textarea
              disabled={loading}
              className="textarea textarea-bordered h-48 text-lg leading-relaxed shadow-inner w-full relative bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg p-6"
              placeholder="E.g., I am a Full Stack Developer with 3 years of experience in React and Spring Boot. I worked at XYZ Corp where I optimized API performance by 30%. I have a degree in CS from ABC University..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="card-actions justify-center mt-10 gap-6">
            <button
              disabled={loading}
              onClick={handleGenerate}
              className={`btn btn-primary btn-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all rounded-full px-12 text-lg ${loading ? 'loading' : ''}`}
            >
              {loading ? (
                <span className="flex items-center gap-2">Generating Magic...</span>
              ) : (
                <>
                  <FaRocket /> Generate My Resume
                </>
              )}
            </button>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); setDescription(""); }}
              className="btn btn-ghost btn-lg text-gray-500 hover:text-error hover:bg-error/10 rounded-full"
              disabled={loading}
            >
              <FaTrash /> Clear
            </button>
          </div>

          {loading && (
            <div className="mt-8">
              <progress className="progress progress-primary w-full max-w-md"></progress>
              <p className="text-sm text-gray-500 mt-2 animate-pulse">
                Analyzing your profile & crafting the perfect resume...
                <span className="font-bold text-primary ml-2">({Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')})</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">This might take 1-2 minutes depending on your system speed.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const ResumeFormView = () => (
    <div className="min-h-screen bg-base-200/50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h1 className="text-4xl font-bold flex items-center gap-3 text-gray-800">
            <BiBook className="text-primary" /> Edit Your Resume
          </h1>
          <button onClick={() => { setShowFormUI(false); setShowResumeUI(false); setShowPromptInput(true); }} className="btn btn-ghost text-gray-600 hover:text-primary">
            &larr; Start Over
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 animate-fade-in pb-24">
          {/* Personal Info */}
          <div className="card bg-base-100 shadow-xl border-t-4 border-primary">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-6 flex items-center gap-2"><div className="w-2 h-8 bg-primary rounded-full"></div> Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {renderInput("personalInformation.fullName", "Full Name")}
                {renderInput("personalInformation.email", "Email", "email")}
                {renderInput("personalInformation.phoneNumber", "Phone")}
                {renderInput("personalInformation.location", "Location")}
                {renderInput("personalInformation.portfolio", "Portfolio URL", "url")}
                {renderInput("personalInformation.linkedIn", "LinkedIn URL", "url")}
                {renderInput("personalInformation.gitHub", "GitHub URL", "url")}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="card bg-base-100 shadow-xl border-t-4 border-secondary">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-4 flex items-center gap-2"><div className="w-2 h-8 bg-secondary rounded-full"></div> Professional Summary</h3>
              <textarea {...register("summary")} className="textarea textarea-bordered h-40 text-lg shadow-inner focus:textarea-secondary" placeholder="Write a compelling professional summary..."></textarea>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {renderFieldArray(experienceFields, "Work Experience", "experience", ["jobTitle", "company", "location", "duration", "responsibility"])}
            {renderFieldArray(projectsFields, "Projects", "projects", ["title", "description", "technologiesUsed", "githubLink"])}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {renderFieldArray(educationFields, "Education", "education", ["degree", "university", "location", "graduationYear"])}
            {renderFieldArray(certificationsFields, "Certifications", "certifications", ["title", "issuingOrganization", "year"])}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {renderFieldArray(skillsFields, "Skills", "skills", ["title", "level"])}
            {renderFieldArray(languagesFields, "Languages", "languages", ["name"])}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {renderFieldArray(interestsFields, "Interests", "interests", ["name"])}
            {renderFieldArray(referencesFields, "References", "references", ["name", "designation", "company", "contact"])}
          </div>

          {/* Achievements Section - NEW */}
          {renderFieldArray(achievementsFields, "Achievements", "achievements", ["title", "year", "extraInformation"])}


          <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
            <button type="submit" className="btn btn-primary btn-lg shadow-2xl rounded-full px-8 gap-3 border-4 border-white/20 backdrop-blur-sm">
              <FaMagic /> Preview & Download
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const ResumePreviewView = () => (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4 mb-8 flex justify-between items-center max-w-5xl">
        <button onClick={() => { setShowResumeUI(false); setShowFormUI(true); }} className="btn btn-outline gap-2 bg-white"><FaBrain /> Back to Edit</button>
        <button onClick={() => { setShowResumeUI(false); setShowFormUI(false); setShowPromptInput(true); }} className="btn btn-secondary gap-2 text-white"><FaPlusCircle /> Create New</button>
      </div>
      <div className="flex justify-center">
        <Resume data={data} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-base-200 font-sans selection:bg-primary selection:text-white">
      {showPromptInput && <InputPromptView />}
      {showFormUI && <ResumeFormView />}
      {showResumeUI && <ResumePreviewView />}
    </div>
  );
};

export default GenerateResume;