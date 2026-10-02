"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Mail, Send, CheckCircle2, MapPin, FileText, ArrowUpRight } from "lucide-react";
import { ResumeModal } from "@/components/ui/resume-modal";
import { PageNav } from "@/components/ui/page-nav";
import { ProjectImageUpload } from "@/components/ui/project-image-upload";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 sm:pt-36 pb-24 min-h-screen bg-[#FAF7F2] blueprint-grid">
        <div className="max-w-6xl mx-auto px-4">
          {/* Page Header */}
          <div className="flex items-center gap-4 mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-[#1B3B2B]/15">
            <div className="w-12 h-12 rounded-2xl bg-[#1B3B2B] flex items-center justify-center shrink-0 shadow-sm text-white">
              <Mail className="w-6 h-6 text-[#E2ECE5]" />
            </div>
            <div>
              <h1 className="font-anton text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-[#242220] break-words">
                GET IN <span className="text-[#7B0323]">TOUCH</span>
              </h1>
            </div>
          </div>

          {/* Split Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 sm:mb-20">
            {/* Left Card: Dark Pine Info Card */}
            <div className="lg:col-span-5 rounded-3xl bg-[#1B3B2B] text-white p-5 sm:p-7 flex flex-col justify-between overflow-hidden relative shadow-xl blueprint-grid-dark border border-[#1B3B2B]/30 gap-6">
              {/* Top: Personal Portrait Upload */}
              <div className="relative z-10 w-full flex flex-col">
                <ProjectImageUpload
                  slotId="contact-portrait"
                  guideline={{
                    vi: "Ảnh chân dung cá nhân của Quỳnh Chi (ảnh nửa người, trang trọng hoặc đời thường).",
                    en: "Personal portrait photo of Quynh Chi (half-body or professional portrait)."
                  }}
                  buttonText={{
                    vi: "Tải ảnh cá nhân lên",
                    en: "Upload personal photo"
                  }}
                  dark
                  aspectRatio="aspect-[4/3] sm:aspect-[16/10]"
                  heightClass="min-h-[220px] sm:min-h-[260px]"
                  roundedClass="rounded-2xl"
                />
              </div>

              {/* Direct Info Box */}
              <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-[#142C20] border border-white/10 space-y-3 text-xs font-mono">
                <div className="flex items-center gap-2.5 text-white/90">
                  <Mail className="w-4 h-4 text-[#7B0323]" />
                  <a
                    href="mailto:liliesmyllerz2k9@gmail.com"
                    className="hover:text-[#FAF7F2] transition-colors break-all"
                  >
                    liliesmyllerz2k9@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-white/90">
                  <MapPin className="w-4 h-4 text-[#E2ECE5]" />
                  <span>Dak Lak &amp; Ho Chi Minh City, Vietnam</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setResumeOpen(true)}
                    className="text-[#FAF7F2] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#7B0323]" />
                    <span>View Dossier (PDF)</span>
                  </button>
                  <a
                    href="https://www.linkedin.com/in/phanhoangquynhchi/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 hover:text-white flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Card: Interactive Form */}
            <div className="lg:col-span-7 rounded-3xl border border-[#1B3B2B]/15 bg-[#FFFFFF] blueprint-grid p-5 sm:p-8 lg:p-12 shadow-sm flex flex-col justify-center">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#1B3B2B]/10 text-[#1B3B2B] flex items-center justify-center mx-auto mb-4 border border-[#1B3B2B]/20">
                    <CheckCircle2 className="w-8 h-8 text-[#1B3B2B]" />
                  </div>
                  <h3 className="font-anton text-3xl uppercase text-[#242220]">
                    Message Received!
                  </h3>
                  <p className="text-sm text-[#242220]/70 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, {formData.name || "friend"}. Phan Hoàng Quỳnh Chi will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#7B0323] text-white hover:bg-[#5E021A] transition-colors mt-4 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label className="font-anton text-xs uppercase tracking-wider text-[#242220] block mb-2">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Nguyen / Admissions Committee / Partner"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3 rounded-2xl bg-[#FAF7F2] border border-[#1B3B2B]/20 text-[#242220] text-sm placeholder:text-[#242220]/40 focus:outline-none focus:border-[#7B0323] transition-colors shadow-xs"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="font-anton text-xs uppercase tracking-wider text-[#242220] block mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3 rounded-2xl bg-[#FAF7F2] border border-[#1B3B2B]/20 text-[#242220] text-sm placeholder:text-[#242220]/40 focus:outline-none focus:border-[#7B0323] transition-colors shadow-xs"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="font-anton text-xs uppercase tracking-wider text-[#242220] block mb-2">
                      MESSAGE DETAILS
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Share your proposal, research questions, or collaboration vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-3 rounded-2xl bg-[#FAF7F2] border border-[#1B3B2B]/20 text-[#242220] text-sm placeholder:text-[#242220]/40 focus:outline-none focus:border-[#7B0323] transition-colors shadow-xs resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-sm font-semibold bg-[#7B0323] text-white hover:bg-[#5E021A] transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
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

      <PageNav
        prevHref="/the-competitor"
        prevLabel="The Competitor"
        nextHref="/"
        nextLabel="Back to Home"
      />
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
