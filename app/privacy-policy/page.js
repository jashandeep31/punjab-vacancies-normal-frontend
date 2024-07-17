import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-6 md:mt-12">
          <h1 className="text-lg font-bold">Privacy Policy</h1>
          <p className="text-sm font-bold text-slate-500">Date: 9-02-2023</p>
          <div className="grid gap-4 my-4 text-sm tracking-wide md:my-6 text-slate-600 ">
            <p>
              This Privacy Policy describes how Punjab Vacancies we collects,
              uses, and discloses personal information when you visit our
              website jobs.jashandeep.me. We are committed to protecting your
              privacy and ensuring the security of any information you provide
              to us. By using our Site, you consent to the practices described
              in this Privacy Policy.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We may collect personal information directly from you or
              automatically through your use of our Site. The types of personal
              information we may collect include:
            </p>
            <h3>1.1. Information You Provide:</h3>
            <ul>
              <li>
                Contact information (such as name, email address, and phone
                number) when you contact us through our Site.
              </li>
              <li>
                Account registration information if you create an account on our
                Site.
              </li>
              <li>
                Payment information, such as credit card details, for processing
                transactions.
              </li>
              <li>Any other information you voluntarily provide to us.</li>
            </ul>

            <h3>1.2. Information We Automatically Collect:</h3>
            <ul>
              <li>
                Log files and analytics data, including IP addresses, browser
                type, referring/exit pages, and operating system information.
              </li>
              <li>
                Information about your usage of our Site, such as pages visited,
                links clicked, and the time and date of your visits.
              </li>
              <li>
                Cookies and similar tracking technologies to enhance your
                experience and collect information about your preferences.
              </li>
            </ul>

            <h2>2. Use of Information</h2>
            <p>
              We may use the information we collect for various purposes,
              including:
            </p>
            <ul>
              <li>
                Providing and improving our Site&apos;s functionality and user
                experience.
              </li>
              <li>
                Communicating with you, responding to your inquiries, and
                providing customer support.
              </li>
              <li>Processing transactions and fulfilling orders.</li>
              <li>
                Sending you promotional materials, updates, and other
                information about our products and services (you may opt-out of
                these communications at any time).
              </li>
              <li>
                Conducting research and analysis to better understand our users
                and improve our services.
              </li>
              <li>
                Protecting the security and integrity of our Site and preventing
                fraud or other illegal activities.
              </li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We may share your personal information with third parties in the
              following circumstances:
            </p>
            <ul>
              <li>
                Service Providers: We may engage third-party service providers
                to perform functions on our behalf, such as payment processing,
                website hosting, data analysis, and marketing. These service
                providers have access to personal information needed to perform
                their functions but are prohibited from using it for other
                purposes.
              </li>
              <li>
                Legal Compliance: We may disclose your information if required
                by law, regulation, or legal process, or in response to a valid
                subpoena, court order, or government request.
              </li>
              <li>
                Business Transfers: In the event of a merger, acquisition, or
                sale of all or a portion of our assets, personal information may
                be transferred or disclosed as part of the transaction.
              </li>
              <li>
                Your Consent: We may share your information with your consent or
                as otherwise disclosed at the time of data collection.
              </li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We take reasonable measures to protect the security of your
              personal information and maintain its confidentiality. However,
              please be aware that no security measures are foolproof, and we
              cannot guarantee the absolute security of your data.
            </p>

            <h2>5. Your Rights and Choices</h2>
            <p>
              You have the right to access, update, correct, or delete your
              personal information. You can exercise these rights by contacting
              us at{" "}
              <a href="mailto:support@deepdevelopers.in">
                support@deepdevelopers.in
              </a>
              . You may also have the right to object to or restrict certain
              processing of your personal information.
            </p>

            <h2>6. Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites or services. We
              are not responsible for the privacy practices or content of those
              websites. We encourage you to review the privacy policies of any
              third-party websites you visit.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our privacy practices, please contact us at{" "}
              <a href="mailto:support@deepdevelopers.in">
                support@deepdevelopers.in
              </a>
              .
            </p>

            <p>
              Please note that this is a generic privacy policy and may need to
              be customized to fit the specific needs and practices of your
              website. It is important to consult with legal professionals to
              ensure compliance with applicable laws and regulations.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
