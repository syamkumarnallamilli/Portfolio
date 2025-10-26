'use client';
import { ExternalLink, Mail, MapPin, Phone, Pin } from "lucide-react";
import React from "react";

const contactDetails = [
  {
    label: "Email",
    value: "syamkumarnallamilli0@gmail.com",
    icon: <Mail className="w-5 h-5 text-purple-500" />,
  },
  {
    label: "Phone",
    value: "Available upon request",
    icon: <Phone className="w-5 h-5 text-purple-500" />,
  },
  {
    label: "Location",
    value: "Hyderabad, Telangana, India",
    icon: <MapPin className="w-5 h-5 text-purple-500" />,
  },
];

const profiles = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/syam-kumar-nallamilli-b17809240/" },
  { label: "GitHub", url: "https://github.com/syamkumarnallamilli" },
  
];

const Contact = () => {
  const [formData, setFormData] = React.useState({
  name: "",
  email: "",
  subject: "",
  message: "",
  
});
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState("");
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});


  }
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  //Google form submission logic can be added here
  try {
    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(formData).toString(),
    });
    if (!res.ok) throw new Error("Failed to send message");

    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (err) {
    console.error(err);
    setError("Failed to send message. Please try again later.");
  } finally {
    setLoading(false);
  }
};

  

  return (
    <section className="w-full px-4 py-10 bg-gradient-to-r from-purple-100 via-white to-violet-100 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-purple-700">Get In Touch</h1>
        <p className="text-gray-600 mt-2 ">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </p>
      </div>

      {/* Card Grid */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 justify-center items-start">
        {/* Left Info Card */}
        <div className="bg-white shadow-md rounded-xl w-full md:w-1/3 p-8 space-y-6">
          {contactDetails.map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2 text-gray-700">
                {item.icon}
                <p className="text-sm font-semibold">{item.label}</p>
              </div>
              <p className="text-sm text-gray-600 ml-7 mt-1 tracking-wider">{item.value}</p>
            </div>
          ))}

          {/* Professional Profiles */}
          <div className="border-t pt-4 ">
  <p className="text-sm font-semibold mb-4">Professional Profiles</p>
  <div className="flex gap-4  flex-wrap">
    {profiles.map((profile, idx) => (
      <a
        key={idx}
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100 transition flex items-center gap-2"
      >
        <span>{profile.label}</span>
        <ExternalLink className="w-5 h-4  " />
      </a>
    ))}
  </div>
</div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-xl w-full md:w-2/3 p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                
                  className="input-field"
                  placeholder="Your name"
                  required
                />
               
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  
                  className="input-field"
                  placeholder="Your email"
                  required
                />
               
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                
                className="input-field"
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                
                className="input-field resize-none"
                placeholder="Your message"
              ></textarea>
            </div>
             {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.subject}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


export default Contact;
