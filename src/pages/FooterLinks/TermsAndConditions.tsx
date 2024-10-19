import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

const TermsAndConditions: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection: string | null = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 100) {
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
            <a href="#BookingServices">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#5A3F2C] font-medium">Booking Services</p>
                <FaChevronRight
                  className={`${
                    activeSection === "BookingServices"
                      ? "bg-[#5A3F2C] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#5A3F2C]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#PaymentServices">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#5A3F2C] font-medium">Payment Services</p>
                <FaChevronRight
                  className={`${
                    activeSection === "PaymentServices"
                      ? "bg-[#5A3F2C] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#5A3F2C]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Cancellation">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#5A3F2C] font-medium">
                  Cancellation and Rescheduling
                </p>
                <FaChevronRight
                  className={`${
                    activeSection === "Cancellation"
                      ? "bg-[#5A3F2C] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#5A3F2C]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Return">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#5A3F2C] font-medium">
                  Return and Refund Policy
                </p>
                <FaChevronRight
                  className={`${
                    activeSection === "Return"
                      ? "bg-[#5A3F2C] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#5A3F2C]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Responsibilities">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#5A3F2C] font-medium">Your Rights</p>
                <FaChevronRight
                  className={`${
                    activeSection === "Responsibilities"
                      ? "bg-[#5A3F2C] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#5A3F2C]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Limitations">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#5A3F2C] font-medium">
                  Service Limitations
                </p>
                <FaChevronRight
                  className={`${
                    activeSection === "Limitations"
                      ? "bg-[#5A3F2C] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#5A3F2C]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Liability">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#5A3F2C] font-medium">
                  Liability and Dispute Reputation
                </p>
                <FaChevronRight
                  className={`${
                    activeSection === "Liability"
                      ? "bg-[#5A3F2C] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#5A3F2C]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#Contact">
              <div className="flex bg-white rounded-full px-4 py-3 items-center justify-between">
                <p className="text-[#5A3F2C] font-medium">Contact Our Team</p>
                <FaChevronRight
                  className={`${
                    activeSection === "Contact"
                      ? "bg-[#5A3F2C] text-[#F3F1F0]"
                      : "bg-[#F3F1F0] text-[#5A3F2C]"
                  } p-1 rounded-full w-5 h-5`}
                />
              </div>
            </a>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className=" font-inter">
        <h2 className="text-5xl mb-10 text-[#531A02] font-Gloock">
          Terms and Conditions
        </h2>

        <section>
          <h2 className=" font-semibold text-3xl mb-4">Styler </h2>
          <p className="text-[#727272]">
            Styler is your go-to site for personalized tailoring. We provide
            custom sewing, adjustments, and garment repairs. Our service
            offerings enable experienced stylists to you, allowing you to get
            bespoke stitching, fitting, Pico, and more. Through your use of
            Styler, you agree to the Terms & Conditions, that regulate when you
            interact with our website and services. Please examine them
            carefully before commencing.
          </p>
        </section>

        <section id="BookingServices">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            Booking Services
          </h2>
          <p className="text-[#727272]">
            We may collect the following types of information:
            <ul className="list-disc pl-5 mt-2">
              <li>
                Personal Information: Name, email address, shipping address,
                phone number, and payment details when you create an account,
                place an order, or contact us.
              </li>
              <li>
                Usage Data: Information about how you interact with our
                platform, including pages visited, links clicked, and actions
                taken within the app or website.
              </li>
              <li>
                Cookies and Tracking Technologies: We use cookies to collect
                information about your browsing behavior to improve user
                experience and provide personalized services.
              </li>
            </ul>
          </p>
        </section>

        <section id="PaymentServices">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            Payment Services{" "}
          </h2>
          <p className="text-[#727272]">
            In-app purchases via credit/debit cards, UPI, or mobile wallets, as
            well as Cash on Delivery (COD), which is paid for after the service
            is rendered, are among the several payment methods that Styler
            offers. You will receive a confirmation once your online payment is
            finalized, and full payment is expected upfront unless you opt for
            COD. The final price will include additional charges for urgent or
            special requests. All prices include GST, and any additional charges
            will be clearly stated before payment.
          </p>
        </section>

        <section id="Cancellation">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            Cancellation and Rescheduling
          </h2>
          <p className="text-[#727272]">
            <ul className="list-disc pl-5 mt-2">
              <li>
                Cancellation Policy: Appointments can be canceled without
                penalty up to 24 hours in advance; thereafter, a fee of INR 700
                will apply.
              </li>
              <li>
                Rescheduling Policy: You can reschedule for free up to 12 hours
                before your appointment, but multiple requests may result in
                additional fees depending on availability.
              </li>
              <li>
                No-show Policy: If you are unavailable at the appointed time and
                have not rescheduled, you will be charged INR 500.
              </li>
            </ul>
          </p>
        </section>

        <section id="Return">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            Return and Refund Policy
          </h2>
          <p className="text-[#727272]">
            <ul className="list-disc pl-5 mt-2">
              <li>
                Custom clothing is not returnable. Reimbursement may be issued
                for major design differences, defects, or improper fit.
              </li>
              <li>
                Refunds must be requested within 7 days after delivery and will
                be granted in 10-15 working days to the corresponding payment
                method or as application credit.
              </li>
              <li>
                Minor adjustments are free for 15 days. Larger problems may
                necessitate a new fitting session.
              </li>
              <li>
                Pico embroidery and minor adjustments, which are non-refundable
                once finished.
              </li>
            </ul>
          </p>
        </section>

        <section id="Responsibilities">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            User Responsibilities
          </h2>
          <p className="text-[#727272]">
            Customers must be available for the tailor's visit, provide accurate
            design details, and inspect the garment within 7 days to report any
            flaws. Styler cannot be held accountable for any delays or issues
            caused by the customer's incorrect data.
          </p>
        </section>

        <section id="Limitations">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            Service Limitations
          </h2>
          <p className="text-[#727272]">
            Styler endeavors to offer high-quality, timely service. However, we
            do not guarantee the availability of specific tailors at all times.
            Tailoring quality depends on the accuracy of the measurements
            provided during the initial fitting session. Styler is not
            responsible for delays caused by external factors such as fabric
            sourcing, customer indecisiveness, or miscommunications regarding
            design preferences.
          </p>
        </section>

        <section id="Liability">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            Liability and Dispute Reputation
          </h2>
          <p className="text-[#727272]">
            Styler's liability in disputes is limited to the amount paid for
            services rendered. Customers should initially contact customer
            service with their grievances. Unresolved matters would be handled
            in Delhi courts under Indian law. If the problem is not handled
            satisfactorily, you may contact Styler management at
          </p>
        </section>

        <section id="Contact">
          <h2 className=" font-semibold text-3xl mb-4 mt-7">
            Contact Our Team
          </h2>
          <p className="text-[#727272]">
            If any problem is not handled satisfactorily, you may contact Styler
            management at the client query by mailing us at{" "}
            <a
              href="mailto:info@stylerapp.in"
              className="text-[#531A02] font-medium underline"
            >
              info@stylerapp.in
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
