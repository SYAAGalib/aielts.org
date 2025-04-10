
import { motion } from "framer-motion";

const GDPRPage = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">GDPR Compliance</h1>
            <p className="text-gray-600">Last updated: April 1, 2023</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              At AIELTS.org, we are committed to ensuring the privacy and protection of your personal data in compliance with the General Data Protection Regulation (GDPR). This page explains how we adhere to GDPR principles and outlines your rights under this regulation.
            </p>

            <h2>What is GDPR?</h2>
            <p>
              The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy for all individuals within the European Union and the European Economic Area. It addresses the transfer of personal data outside the EU and EEA areas.
            </p>

            <h2>Our Commitment to GDPR Compliance</h2>
            <p>
              We have implemented appropriate technical and organizational measures to ensure that we process personal data in compliance with GDPR principles. Our commitment includes:
            </p>
            <ul>
              <li>Processing personal data lawfully, fairly, and transparently</li>
              <li>Collecting personal data for specified, explicit, and legitimate purposes</li>
              <li>Limiting data collection to what is necessary for the purposes for which it is processed</li>
              <li>Ensuring personal data is accurate and kept up to date</li>
              <li>Storing personal data for no longer than necessary</li>
              <li>Processing personal data securely, protecting against unauthorized or unlawful processing, accidental loss, destruction, or damage</li>
              <li>Being accountable for and demonstrating compliance with these principles</li>
            </ul>

            <h2>Your Rights Under GDPR</h2>
            <p>
              Under GDPR, you have enhanced rights regarding your personal data. These include:
            </p>

            <h3>1. The Right to Be Informed</h3>
            <p>
              You have the right to be informed about the collection and use of your personal data. We provide this information in our Privacy Policy, including details about what personal data we collect, why we collect it, and how we use it.
            </p>

            <h3>2. The Right of Access</h3>
            <p>
              You have the right to request a copy of the personal data we hold about you and confirmation that your data is being processed. We will provide this information in a clear, concise, transparent, intelligible, and easily accessible form.
            </p>

            <h3>3. The Right to Rectification</h3>
            <p>
              You have the right to have inaccurate personal data corrected or completed if it is incomplete. You can update most of your personal information directly through your account settings, or you can contact us to request corrections.
            </p>

            <h3>4. The Right to Erasure</h3>
            <p>
              Also known as 'the right to be forgotten,' you have the right to request the deletion or removal of your personal data where there is no compelling reason for its continued processing. This right applies in specific circumstances outlined in the GDPR.
            </p>

            <h3>5. The Right to Restrict Processing</h3>
            <p>
              You have the right to request the restriction or suppression of your personal data in certain circumstances. When processing is restricted, we may store your personal data but not use it.
            </p>

            <h3>6. The Right to Data Portability</h3>
            <p>
              You have the right to obtain and reuse your personal data for your own purposes across different services. You can request to receive your personal data in a structured, commonly used, and machine-readable format, and to have it transmitted to another data controller.
            </p>

            <h3>7. The Right to Object</h3>
            <p>
              You have the right to object to the processing of your personal data in certain circumstances, including processing for direct marketing, processing based on legitimate interests, and processing for scientific or historical research and statistics.
            </p>

            <h3>8. Rights Related to Automated Decision Making and Profiling</h3>
            <p>
              You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you.
            </p>

            <h2>Data Protection Officer</h2>
            <p>
              We have appointed a Data Protection Officer (DPO) who is responsible for overseeing questions in relation to this GDPR compliance statement and our Privacy Policy. If you have any questions about this GDPR compliance statement or how we handle your personal information, please contact our DPO:
            </p>
            <p>
              Email: dpo@aielts.org<br />
              Address: 123 Education Street, Cambridge, MA 02142
            </p>

            <h2>Data Breaches</h2>
            <p>
              In the event of a data breach that may compromise your personal data, we will notify you and the relevant supervisory authority without undue delay, and not later than 72 hours after having become aware of the breach, where feasible.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              When we transfer your personal data outside the EU/EEA, we ensure that appropriate safeguards are in place to protect your data, such as Standard Contractual Clauses approved by the European Commission, or transferring to countries deemed to have adequate data protection by the European Commission.
            </p>

            <h2>Data Protection Impact Assessments</h2>
            <p>
              We conduct Data Protection Impact Assessments (DPIAs) when processing personal data involves high risks to the rights and freedoms of individuals, especially when using new technologies.
            </p>

            <h2>Records of Processing Activities</h2>
            <p>
              We maintain records of our data processing activities, including the purposes of processing, categories of data subjects and personal data, recipients of personal data, time limits for erasure, and a general description of technical and organizational security measures.
            </p>

            <h2>How to Exercise Your Rights</h2>
            <p>
              To exercise any of your rights under GDPR, please submit your request to our DPO using the contact information provided above. We will respond to all requests within 30 days.
            </p>
            <p>
              If you are not satisfied with our response or believe that we are not processing your personal data in accordance with the law, you have the right to lodge a complaint with the relevant supervisory authority in your jurisdiction.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GDPRPage;
