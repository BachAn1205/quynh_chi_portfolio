import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 sm:pt-36 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-[#d6d6d6]">
            <div className="w-12 h-12 rounded-2xl bg-[#e74723] flex items-center justify-center shrink-0 shadow-sm text-white">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="font-anton text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black break-words">
              PRIVACY POLICY
            </h1>
          </div>

          {/* Policy Content Card */}
          <div className="rounded-3xl border border-[#d6d6d6] bg-[#f5f2eb] blueprint-grid p-5 sm:p-8 lg:p-14 shadow-sm space-y-8 sm:space-y-10 text-[#333333] leading-relaxed">
            <p className="text-lg">
              Welcome to Phan Hoàng Quỳnh Chi’s Portfolio Website. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit or interact with this website.
            </p>

            <section className="space-y-4">
              <h2 className="font-anton text-2xl uppercase text-black">
                1. Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-black">Personal Information:</strong> such as your name and email address when you contact us via forms or subscribe to updates.
                </li>
                <li>
                  <strong className="text-black">Usage Data:</strong> including your IP address, browser type, device information, pages visited, and time spent on the site.
                </li>
                <li>
                  <strong className="text-black">Cookies:</strong> small data files used to enhance your browsing experience and analyze site performance.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-anton text-2xl uppercase text-black">
                2. How We Use Your Information
              </h2>
              <p>Your information may be used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries or project messages.</li>
                <li>Improve the design, functionality, and user experience of the website.</li>
                <li>Send occasional updates or design articles (only if you opt in).</li>
                <li>Analyze website traffic and performance using analytics tools.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-anton text-2xl uppercase text-black">
                3. How We Protect Your Information
              </h2>
              <p>
                We take reasonable administrative and technical measures to secure your personal information from unauthorized access, alteration, or disclosure. However, please note that no method of data transmission over the Internet is completely secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-anton text-2xl uppercase text-black">
                4. Sharing of Information
              </h2>
              <p>
                We do not sell, trade, or rent users’ personal information. We may use reputable third-party services solely to assist in running the website and responding to inquiries.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-anton text-2xl uppercase text-black">
                5. Your Rights &amp; Contact
              </h2>
              <p>
                You have the right to request access to, correction, or deletion of any personal data you have shared with us. If you have any questions, please contact: <span className="text-[#183e2b] font-semibold">liliesmyllerz2k9@gmail.com</span>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
