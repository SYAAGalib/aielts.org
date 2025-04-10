
import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: April 1, 2023</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              At AIELTS.org, we are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register for an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Fill out a form</li>
              <li>Participate in interactive features of our platform</li>
              <li>Contact customer support</li>
              <li>Engage with us via social media</li>
            </ul>

            <p>The personal information we may collect includes:</p>
            <ul>
              <li>Name, email address, and contact details</li>
              <li>Payment information</li>
              <li>Educational background and goals</li>
              <li>Profile information and preferences</li>
              <li>Content you submit for feedback (e.g., writing samples, speaking recordings)</li>
              <li>User-generated content you post on our forums or community features</li>
            </ul>

            <h2>Automatically Collected Information</h2>
            <p>
              When you visit our website or use our platform, we may automatically collect certain information about your device and usage patterns. This includes:
            </p>
            <ul>
              <li>Device information (type of device, operating system, browser type)</li>
              <li>IP address and geographical location</li>
              <li>Pages visited and features used</li>
              <li>Time spent on pages and overall session information</li>
              <li>Referral sources</li>
              <li>Diagnostic data such as crash reports and performance logs</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information for various purposes, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our services</li>
              <li>Develop new products, features, and functionality</li>
              <li>Process payments and prevent fraudulent transactions</li>
              <li>Communicate with you about updates, security alerts, and support</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Comply with legal obligations</li>
              <li>Enforce our terms, conditions, and policies</li>
            </ul>

            <h2>Sharing Your Information</h2>
            <p>We may share your information with third parties in the following situations:</p>
            <ul>
              <li>With service providers who perform services on our behalf</li>
              <li>With business partners for joint marketing efforts or promotions</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transaction such as a merger or acquisition</li>
              <li>With your consent or at your direction</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul>
              <li>Right to access and receive a copy of your personal information</li>
              <li>Right to rectify or update inaccurate or incomplete information</li>
              <li>Right to erasure (the "right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Rights related to automated decision-making and profiling</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we discover that a child has provided us with personal information, we will delete such information from our systems.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website and services may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to read the privacy policies of each website you visit.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: privacy@aielts.org<br />
              Address: 123 Education Street, Cambridge, MA 02142
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
