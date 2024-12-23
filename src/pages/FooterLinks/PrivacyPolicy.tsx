import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection: string | null = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 50) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex mt-20 lg:mx-32 md:mx-28 mx-5 gap-10">
      {/* Sidebar */}
      <div className="w-fit whitespace-nowrap p-4 bg-[#F3F1F0] sticky top-0 h-fit lg:flex flex-col hidden ">
        <ul className="space-y-2">
          <li>
            <a href="#Information">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#025195] font-medium">
                  Information We Glean
                </p>
                <FaChevronRight
                  className={`${
                    activeSection === "Information"
                      ? "bg-[#025195] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#025195]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Use">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#025195] font-medium">
                  Our Data Utilization Practices
                </p>
                <FaChevronRight
                  className={`${
                    activeSection === "Use"
                      ? "bg-[#025195] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#025195]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Sharing">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#025195] font-medium">
                  Disclosure of your data
                </p>
                <FaChevronRight
                  className={`${
                    activeSection === "Sharing"
                      ? "bg-[#025195] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#025195]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Protection">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#025195] font-medium">Security </p>
                <FaChevronRight
                  className={`${
                    activeSection === "Protection"
                      ? "bg-[#025195] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#025195]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Rights">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#025195] font-medium">Your Legal Rights</p>
                <FaChevronRight
                  className={`${
                    activeSection === "Rights"
                      ? "bg-[#025195] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#025195]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Security">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#025195] font-medium">Security</p>
                <FaChevronRight
                  className={`${
                    activeSection === "Security"
                      ? "bg-[#025195] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#025195]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Cookies">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#025195] font-medium">Cookies Policy</p>
                <FaChevronRight
                  className={`${
                    activeSection === "Cookies"
                      ? "bg-[#025195] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#025195]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Reach">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#025195] font-medium">Reach Out to Us</p>
                <FaChevronRight
                  className={`${
                    activeSection === "Reach"
                      ? "bg-[#025195] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#025195]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className=" font-inter mb-20">
        <h2 className="text-5xl mb-16 font-bold text-[#025195]">
          Privacy Policy
        </h2>
        <p className="text-[#546879] mb-7 ">
          Styler has prioritized protecting your privacy. Our privacy policy
          outlines how we collect, use, and disclose information from our online
          presence [Styler Website URL]. Your use of our website indicates your
          agreement to the rules outlined here.
        </p>

        <section id="Information">
          <h2 className=" font-semibold text-3xl mb-4">Information We Glean</h2>
          <p className="text-[#546879]">
            Styler accumulates private necessary data to provide you with a
            fully integrated service experience, which includes:
            <ul className="list-disc pl-5 mt-2">
              <li>
                For booking and communication, provide contact information,
                including name, phone number, email, and postal address.
              </li>
              <li>
                Location data can help tailors arrive on time for in-person
                appointments.
              </li>
              <li>
                Payment Information: Credit card and UPI information will be
                collected for transaction processing.
              </li>
              <li>
                Tailor-specific data, such as metrics, fitting priorities, and
                design choices, are preserved to ensure customized service. Your
                info is used primarily for reservations and consultations with
                stylists, handling fees and creating invoices, ensuring that
                custom clothes are delivered accurately as per your choices, and
                enhancing our forum based on user reviews and data processing.
                This approach ensures a unified platform while honoring your
                confidentiality and choices in our businesses.
              </li>
            </ul>
          </p>
        </section>

        <section id="Use">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            Our Data Utilization Practices
          </h2>
          <p className="text-[#546879]">
            Your data is utilized exclusively for making bookings and
            appointments with tailors, handling payments and creating invoices,
            ensuring that custom garments are delivered accurately according to
            your preferences, and enhancing our platform based on user feedback
            and data analytics. This approach guarantees a smooth experience
            while prioritizing your privacy and preferences in our services.
          </p>
        </section>

        <section id="Sharing">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            Disclosure of your data
          </h2>
          <p className="text-[#546879]">
            We may share your data with:
            <ul className="list-disc pl-5 mt-2">
              <li>
                Only when required, such as for safe payment processing and
                clothing delivery, does Styler disclose your information to
                dependable third parties.
              </li>
              <li>
                Without your express consent, your data won't be distributed to
                outside parties for marketing purposes.
              </li>
              <li>
                Per legal requirements, Styler may share your information with
                affiliates providing related services, law enforcement, and
                third-party suppliers for business operations.
              </li>
            </ul>
          </p>
        </section>

        <section id="Protection">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">Security</h2>
          <p className="text-[#546879]">
            To safeguard your personally identifiable information, we use
            cryptography and security protocols that are industry standard. You
            are also in charge of protecting your account credentials, even
            though we take every preventive action to protect your data.
          </p>
        </section>

        <section id="Rights">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            Your Legal Rights
          </h2>
          <p className="text-[#546879]">
            You have the right to:
            <ul className="list-disc pl-5 mt-2">
              <li>
                You can obtain, alter, and remove your personal information from
                our directory at any time.
              </li>
              <li>
                Suspend permission for data usage may impact service delivery.
              </li>
              <li>
                Request information regarding third-party companies with whom
                your data has been shared.
              </li>
            </ul>
            If you wish to assert these rights, kindly inform us at{" "}
            <a href="" className=" underline text-[#025195]">
              care@stylerapp.in.
            </a>
          </p>
        </section>

        <section id="Security">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">Security</h2>
          <p className="text-[#546879]">
            <ul className="list-disc pl-5 mt-2">
              <li>
                We hold necessary precautions to protect information from
                malicious use, full transparency, deformation, and deletion of
                data.
              </li>
              <li>
                However, neither Online transfer nor portable hard drives are
                secure.
              </li>
            </ul>
          </p>
        </section>
        <section id="Cookies">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">Cookies Policy</h2>
          <p className="text-[#546879]">
            Cookies are used by Styler to improve your experience in two ways:
            <ul className="list-disc pl-5 mt-2">
              <li>
                By analyzing user activity to improve the performance of the
                website and by highly personalized content according to user
                preferences.
              </li>
              <li>
                In your browser's settings, you can turn off cookies, but doing
                so might make some platform features less functional.
              </li>
            </ul>
          </p>
        </section>
        <section id="Reach">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">Reach Out to Us</h2>
          <p className="text-[#546879]">
            For any questions concerning our information privacy policy, kindly
            inform us here at{" "}
            <a href="" className=" underline text-[#025195]">
              care@stylerapp.in.
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
