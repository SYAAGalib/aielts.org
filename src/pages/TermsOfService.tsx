
import { motion } from "framer-motion";

const TermsOfServicePage = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="text-gray-600">Last updated: April 1, 2023</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to AIELTS.org! These Terms of Service ("Terms") govern your access to and use of the AIELTS.org website, mobile applications, and services (collectively, the "Services"). Please read these Terms carefully before using our Services.
            </p>

            <p>
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
            </p>

            <h2>1. Account Registration</h2>
            <p>
              To access certain features of our Services, you may need to register for an account. When you register, you agree to provide accurate, current, and complete information and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2>2. Subscription and Payment</h2>
            <p>
              Certain aspects of our Services require payment of fees. By subscribing to a paid plan, you agree to pay all fees associated with your subscription. We may change our fees at any time with notice. If you do not agree to a fee change, you must cancel your subscription before the change takes effect.
            </p>
            <p>
              Unless otherwise stated, all fees are quoted in US dollars. You are responsible for paying all taxes associated with your purchase.
            </p>
            <p>
              Subscriptions automatically renew unless cancelled before the renewal date. You may cancel your subscription at any time through your account settings or by contacting customer support.
            </p>

            <h2>3. Refund Policy</h2>
            <p>
              We offer a 7-day money-back guarantee for new subscriptions. If you are not satisfied with our Services within the first 7 days, you may request a refund. After the 7-day period, subscriptions are non-refundable except as required by applicable law.
            </p>

            <h2>4. Free Trial</h2>
            <p>
              We may offer a free trial period for new users. At the end of the trial period, your account will automatically convert to a paid subscription unless you cancel before the trial ends. You may be required to provide payment information to access the free trial.
            </p>

            <h2>5. User Content</h2>
            <p>
              Our Services may allow you to submit, upload, publish, or share content such as text, images, audio, and video ("User Content"). You retain ownership of your User Content, but you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your User Content for the purpose of providing and improving our Services.
            </p>
            <p>
              You represent and warrant that:
            </p>
            <ul>
              <li>You own or have the necessary rights to your User Content</li>
              <li>Your User Content does not violate the rights of any third party</li>
              <li>Your User Content complies with these Terms and applicable laws</li>
            </ul>

            <h2>6. Prohibited Conduct</h2>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Use our Services in any way that violates applicable laws or regulations</li>
              <li>Impersonate any person or entity or falsely state your affiliation</li>
              <li>Interfere with or disrupt our Services or servers</li>
              <li>Attempt to gain unauthorized access to our Services or systems</li>
              <li>Use automated methods to access or use our Services</li>
              <li>Share your account credentials with others or allow multiple users on a single account</li>
              <li>Circumvent any security measures we implement</li>
              <li>Post or transmit malicious code, spam, or any content that is unlawful, harmful, or offensive</li>
            </ul>

            <h2>7. Intellectual Property</h2>
            <p>
              Our Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio), are owned by AIELTS.org, its licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              These Terms do not grant you any right to use our trademarks, logos, domain names, or other distinctive brand features without our prior written consent.
            </p>

            <h2>8. Termination</h2>
            <p>
              We may terminate or suspend your account and access to our Services at our sole discretion, with or without notice, for any reason, including if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>

            <h2>9. Disclaimer of Warranties</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p>
              WE DO NOT GUARANTEE THAT OUR SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AIELTS.ORG SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless AIELTS.org and its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms or any activity related to your account.
            </p>

            <h2>12. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Massachusetts, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Boston, Massachusetts.
            </p>

            <h2>13. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. You are advised to review these Terms periodically for any changes. Your continued use of the Services after we post changes constitutes your acceptance of the revised Terms.
            </p>

            <h2>14. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: legal@aielts.org<br />
              Address: 123 Education Street, Cambridge, MA 02142
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
