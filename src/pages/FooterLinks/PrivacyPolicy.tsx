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
                  Information We Collect
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
                  How We Use Your Information
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
                  Sharing Your Information
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
            <a href="#Security">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#025195] font-medium">Data Security </p>
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
            <a href="#Rights">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#025195] font-medium">Your Rights</p>
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
            <a href="#Technologies">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#025195] font-medium">
                  Cookies and Tracking Technologies
                </p>
                <FaChevronRight
                  className={`${
                    activeSection === "Technologies"
                      ? "bg-[#025195] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#025195]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Links">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#025195] font-medium">Third-Party Links</p>
                <FaChevronRight
                  className={`${
                    activeSection === "Links"
                      ? "bg-[#025195] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#025195]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Changes">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#025195] font-medium">
                  Changes to This Privacy Policy
                </p>
                <FaChevronRight
                  className={`${
                    activeSection === "Changes"
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
      <div className=" font-inter">
        <h2 className="text-5xl mb-16 font-bold text-[#025195]">
          Privacy Policy
        </h2>
        <p className="text-[#546879] mb-7 ">
          Styler is committed to protecting your privacy and ensuring that your
          personal information is handled securely and responsibly. This Privacy
          Policy outlines how we collect, use, disclose, and safeguard your
          information when you use our platform.
        </p>

        <section id="Information">
          <h2 className=" font-semibold text-3xl mb-4">
            Information We Collect
          </h2>
          <p className="text-[#546879]">
            We may collect the following types of information:
            <ul className="list-disc pl-5 mt-2">
              <li>
                Personal Information: Name, email address, shipping address,
                phone number, and payment details when you create an account,
                place an order, or contact us.{" "}
              </li>
              <li>
                Usage Data: Information about how you interact with our
                platform, including pages visited, links clicked, and actions
                taken within the app or website.
              </li>
              <li>
                {" "}
                Cookies and Tracking Technologies: We use cookies to collect
                information about your browsing behavior to improve user
                experience and provide personalized services.
              </li>
            </ul>
          </p>
        </section>

        <section id="Use">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            How We Use Your Information
          </h2>
          <p className="text-[#546879]">
            We may use the information we collect for various purposes,
            including:
            <ul className="list-disc pl-5 mt-2">
              <li>
                Order Processing: To fulfill your orders, manage payments, and
                provide customer support.
              </li>
              <li>
                Personalization: To tailor recommendations and services based on
                your preferences.
              </li>
              <li>
                Communication: To send you updates, promotional offers, and
                other relevant information related to your use of the platform.
              </li>
              <li>
                Analytics: To monitor usage patterns, improve our platform, and
                develop new features.
              </li>
              <li>
                {" "}
                Security: To protect against fraud, unauthorized access, and
                other illegal activities.
              </li>
            </ul>
          </p>
        </section>

        <section id="Sharing">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            Sharing Your Information
          </h2>
          <p className="text-[#546879]">
            We do not sell your personal information. However, we may share your
            data with:
            <ul className="list-disc pl-5 mt-2">
              <li>
                Service Providers: Third-party companies that help us operate
                the platform, such as payment processors, delivery services, and
                analytics providers.
              </li>
              <li>
                Designers and Tailors: When you place an order, your relevant
                details may be shared with the designer or tailor to complete
                your custom garment or fabric order.
              </li>
              <li>
                Legal Requirements: We may disclose information if required by
                law, regulation, or legal process, or to protect the rights,
                property, or safety of Styler, our users, or others.
              </li>
            </ul>
          </p>
        </section>
        <section id="Security">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">Data Security</h2>
          <p className="text-[#546879]">
            We implement industry-standard security measures to protect your
            personal information. This includes encryption, secure servers, and
            regular audits of our systems to prevent unauthorized access, data
            breaches, or misuse of your information.
          </p>
        </section>
        <section id="Rights">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">Your Rights</h2>
          <p className="text-[#546879]">
            You have the right to:
            <ul className="list-disc pl-5 mt-2">
              <li>
                Access Your Data: Request a copy of the personal information we
                hold about you.
              </li>
              <li>
                A Update Your Information: Correct or update your personal
                information at any time.
              </li>
              <li>
                Delete Your Data: Request the deletion of your personal
                information, subject to certain legal obligations.
              </li>
              <li>
                Opt-Out of Marketing: Unsubscribe from our promotional emails or
                communications at any time.
              </li>
            </ul>
          </p>
        </section>
        <section id="Technologies">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            Cookies and Tracking Technologies
          </h2>
          <p className="text-[#546879]">
            We use cookies to enhance your experience on our platform. You can
            control the use of cookies by adjusting your browser settings, but
            please note that disabling cookies may limit certain features of our
            website.
          </p>
        </section>
        <section id="Links">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            Third-Party Links
          </h2>
          <p className="text-[#546879]">
            Our platform may contain links to third-party websites. This Privacy
            Policy does not apply to those external websites, and we encourage
            you to review the privacy policies of any third-party sites you
            visit.
          </p>
        </section>
        <section id="Changes">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            Changes to This Privacy Policy
          </h2>
          <p className="text-[#546879]">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and we will notify you of significant
            changes by email or through a notice on our platform. Please review
            this policy periodically to stay informed about how we protect your
            information.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
