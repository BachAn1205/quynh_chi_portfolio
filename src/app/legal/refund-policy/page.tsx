import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 sm:pt-36 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-[#d6d6d6]">
            <div className="w-12 h-12 rounded-2xl bg-[#e74723] flex items-center justify-center shrink-0 shadow-sm text-white">
              <FileText className="w-6 h-6" />
            </div>
            <h1 className="font-anton text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black break-words">
              TERMS OF SERVICE
            </h1>
          </div>

          {/* Terms Content Card */}
          <div className="rounded-3xl border border-[#d6d6d6] bg-[#f5f2eb] blueprint-grid p-5 sm:p-8 lg:p-14 shadow-sm space-y-8 sm:space-y-10 text-[#333333] leading-relaxed">
            <p className="text-lg">
              Welcome to Phan Hoàng Quỳnh Chi’s Portfolio Website (“we,” “our,” or “us”). By accessing or using this website, you agree to comply with and be bound by the following Terms of Service. Please read them carefully before using this site.
            </p>

            <section className="space-y-4">
              <h2 className="font-anton text-2xl uppercase text-black">
                1. Acceptance of Terms
              </h2>
              <p>
                By using this website, you confirm that you have read, understood, and agree to these Terms of Service. If you do not agree, please do not use this website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-anton text-2xl uppercase text-black">
                2. Use of the Website
              </h2>
              <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Infringe upon or violate the rights of others.</li>
                <li>Disrupt or interfere with the website’s functionality.</li>
                <li>Transmit harmful or malicious code, spam, or unauthorized content.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-anton text-2xl uppercase text-black">
                3. Intellectual Property Rights
              </h2>
              <p>
                All content on this website . including text, graphics, logos, images, and design layouts . is the property of Phan Hoàng Quỳnh Chi and is protected by copyright and intellectual property laws. You may not reproduce, redistribute, or exploit any material from this site without prior written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-anton text-2xl uppercase text-black">
                4. Portfolio and Project Content
              </h2>
              <p>
                Projects, case studies, and visuals displayed on this website are for showcasing academic research and venture initiatives. Such content is presented with verified institutional data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-anton text-2xl uppercase text-black">
                5. Limitation of Liability &amp; Changes
              </h2>
              <p>
                While we strive to keep the website accurate and up-to-date, we do not guarantee that all information is error-free. Phan Hoàng Quỳnh Chi shall not be held liable for any direct, indirect, or incidental damages arising from the use or inability to use this website.
              </p>
              <p>
                We reserve the right to update or modify these Terms of Service at any time without prior notice. If you have questions, please reach out via our contact page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
