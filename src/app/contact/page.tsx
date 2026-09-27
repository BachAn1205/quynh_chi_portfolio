"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Mail, Send, CheckCircle2, MapPin, FileText, ArrowUpRight } from "lucide-react";
import { ResumeModal } from "@/components/ui/resume-modal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Academic Research & Data Science",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 sm:pt-36 pb-24 min-h-screen bg-[#ebe6dd]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Page Header */}
          <div className="flex items-center gap-4 mb-16 pb-8 border-b border-[#d8d2c7]">
            <div className="w-12 h-12 rounded-2xl bg-[#183e2b] flex items-center justify-center shrink-0 shadow-sm text-white">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs font-semibold text-[#d9531e] uppercase tracking-wider block">
                {"// Section 06 • Connect"}
              </span>
              <h1 className="font-anton text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#1c1510]">
                GET IN TOUCH
              </h1>
            </div>
          </div>

          {/* Split Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            {/* Left Card: Dark Card with High-Impact Bio */}
            <div className="lg:col-span-5 rounded-3xl bg-[#0b1710] text-white p-8 sm:p-12 flex flex-col justify-between overflow-hidden relative shadow-xl blueprint-grid-dark min-h-[560px] border border-[#233529]">
              <div className="relative z-10 space-y-4">
                <span className="font-mono text-xs font-semibold text-[#22c55e] uppercase tracking-wider block">
                  {"// Collaboration & Dialogue"}
                </span>
                <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#22c55e] leading-tight">
                  BUILDING TRANSPARENT ECOSYSTEMS.
                </h2>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal pt-2">
                  Whether you are a university admissions committee seeking a data-driven innovator, a professor looking for a dedicated quantitative researcher, or a partner passionate about circular economies—I would love to connect.
                </p>
              </div>

              {/* Direct Info Box */}
              <div className="relative z-10 p-5 rounded-2xl bg-[#121f16] border border-[#233529] space-y-3 mt-8 text-xs font-mono">
                <div className="flex items-center gap-2.5 text-white/90">
                  <Mail className="w-4 h-4 text-[#d9531e]" />
                  <span>quynhchi.phanhoang@gmail.com</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/90">
                  <MapPin className="w-4 h-4 text-[#22c55e]" />
                  <span>Dak Lak &amp; Ho Chi Minh City, Vietnam</span>
                </div>
                <div className="pt-2 border-t border-[#233529] flex items-center justify-between">
                  <button
                    onClick={() => setResumeOpen(true)}
                    className="text-[#d97706] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Dossier (PDF)</span>
                  </button>
                  <a
                    href="https://linkedin.com/in/quynhchi-phanhoang"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/60 hover:text-white flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Card: Interactive Form */}
            <div className="lg:col-span-7 rounded-3xl border border-[#d8d2c7] bg-[#f6f3eb] blueprint-grid p-8 sm:p-12 shadow-sm flex flex-col justify-center">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#183e2b]/10 text-[#183e2b] flex items-center justify-center mx-auto mb-4 border border-[#183e2b]/20">
                    <CheckCircle2 className="w-8 h-8 text-[#183e2b]" />
                  </div>
                  <h3 className="font-anton text-3xl uppercase text-[#1c1510]">
                    Message Received!
                  </h3>
                  <p className="text-sm text-[#5e544a] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, {formData.name || "friend"}. Phan Hoàng Quỳnh Chi will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "Academic Research & Data Science",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#183e2b] text-white hover:bg-[#122e20] transition-colors mt-4 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label className="font-anton text-xs uppercase tracking-wider text-[#1c1510] block mb-2">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Nguyen / Admissions Committee / Partner"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3 rounded-2xl bg-white border border-[#d8d2c7] text-[#1c1510] text-sm placeholder:text-[#999999] focus:outline-none focus:border-[#183e2b] transition-colors shadow-xs"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="font-anton text-xs uppercase tracking-wider text-[#1c1510] block mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3 rounded-2xl bg-white border border-[#d8d2c7] text-[#1c1510] text-sm placeholder:text-[#999999] focus:outline-none focus:border-[#183e2b] transition-colors shadow-xs"
                    />
                  </div>

                  {/* Subject field */}
                  <div>
                    <label className="font-anton text-xs uppercase tracking-wider text-[#1c1510] block mb-2">
                      INQUIRY FOCUS
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-5 py-3 rounded-2xl bg-white border border-[#d8d2c7] text-[#1c1510] text-sm focus:outline-none focus:border-[#183e2b] transition-colors shadow-xs cursor-pointer"
                    >
                      <option value="Academic Research & Data Science">Academic Research &amp; Quantitative Data Science</option>
                      <option value="University Admissions & Scholarships">University Admissions &amp; Scholarship Evaluation</option>
                      <option value="Circular Economy & CAFLOOP Partnership">Circular Economy &amp; CAFLOOP Partnership</option>
                      <option value="T'rưng Cultural Heritage & Performance">T&apos;rưng Cultural Heritage &amp; Performance</option>
                      <option value="Mentorship & Economic Education">Mentorship &amp; Economic Education (Dakonomics)</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="font-anton text-xs uppercase tracking-wider text-[#1c1510] block mb-2">
                      MESSAGE DETAILS
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Share your proposal, research questions, or collaboration vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-3 rounded-2xl bg-white border border-[#d8d2c7] text-[#1c1510] text-sm placeholder:text-[#999999] focus:outline-none focus:border-[#183e2b] transition-colors shadow-xs resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-sm font-semibold bg-[#183e2b] text-white hover:bg-[#122e20] transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Quỳnh Chi</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
