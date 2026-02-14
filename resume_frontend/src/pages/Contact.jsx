import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-primary">Contact Us</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you. Get in touch with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="col-span-1 space-y-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary"><FaEnvelope /> Email</h3>
                <p className="text-gray-600">support@resumeai.com</p>
                <p className="text-gray-600">hello@resumeai.com</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-secondary"><FaPhone /> Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">Mon-Fri, 9am-6pm PST</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-accent"><FaMapMarkerAlt /> Office</h3>
                <p className="text-gray-600">123 AI Boulevard</p>
                <p className="text-gray-600">San Francisco, CA 94105</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-span-1 md:col-span-2">
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label"><span className="label-text">Name</span></label>
                      <input type="text" placeholder="John Doe" className="input input-bordered w-full focus:input-primary" />
                    </div>
                    <div className="form-control">
                      <label className="label"><span className="label-text">Email</span></label>
                      <input type="email" placeholder="john@example.com" className="input input-bordered w-full focus:input-primary" />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text">Subject</span></label>
                    <input type="text" placeholder="How can we help?" className="input input-bordered w-full focus:input-primary" />
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text">Message</span></label>
                    <textarea className="textarea textarea-bordered h-32 focus:textarea-primary" placeholder="Type your message here..."></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button type="button" className="btn btn-primary" onClick={() => alert("This is a demo contact form!")}>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;