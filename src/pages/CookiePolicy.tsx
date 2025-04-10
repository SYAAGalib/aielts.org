
import { motion } from "framer-motion";

const CookiePolicyPage = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-gray-600">Last updated: April 1, 2023</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              This Cookie Policy explains how AIELTS.org ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <h2>What are cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or work more efficiently, as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, AIELTS.org) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
            </p>

            <h2>Why do we use cookies?</h2>
            <p>We use first-party and third-party cookies for several reasons:</p>
            <ul>
              <li><strong>Essential cookies:</strong> These cookies are necessary for the website to function properly and cannot be switched off in our systems. They are usually set in response to actions made by you such as setting your privacy preferences, logging in, or filling in forms.</li>
              <li><strong>Performance cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.</li>
              <li><strong>Functionality cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
              <li><strong>Targeting cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</li>
            </ul>

            <h2>Types of cookies we use</h2>
            <p>The specific types of first and third-party cookies we use and the purposes they fulfill include:</p>
            
            <h3>Strictly Necessary Cookies</h3>
            <p>These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart, or make use of e-billing services.</p>
            <p>Examples of cookies we use:</p>
            <ul>
              <li><strong>Session cookies:</strong> To remember your login status and maintain your session.</li>
              <li><strong>Security cookies:</strong> To protect our users from fraud and abuse.</li>
            </ul>

            <h3>Analytics and Performance Cookies</h3>
            <p>These cookies allow us to recognize and count the number of visitors and see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users find what they are looking for easily.</p>
            <p>Examples of cookies we use:</p>
            <ul>
              <li><strong>Google Analytics:</strong> To track user behavior and measure site performance.</li>
              <li><strong>Hotjar:</strong> To understand how users interact with our website.</li>
            </ul>

            <h3>Functionality Cookies</h3>
            <p>These cookies are used to recognize you when you return to our website. They enable us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region).</p>
            <p>Examples of cookies we use:</p>
            <ul>
              <li><strong>Language preference:</strong> To remember your preferred language.</li>
              <li><strong>User interface customization:</strong> To remember your display preferences.</li>
            </ul>

            <h3>Targeting Cookies</h3>
            <p>These cookies record your visit to our website, the pages you have visited, and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.</p>
            <p>Examples of cookies we use:</p>
            <ul>
              <li><strong>Facebook Pixel:</strong> To measure conversion from Facebook ads.</li>
              <li><strong>Google Ads:</strong> To track conversions from Google ads.</li>
            </ul>

            <h2>How can I control cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager that we display when you first visit our website.
            </p>
            <p>
              You can also set or modify your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
            </p>
            <p>
              If you choose to reject cookies, you may still use our website, though your access to some functionality and areas may be restricted.
            </p>

            <h2>How often will we update this Cookie Policy?</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p>
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>

            <h2>Contact us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at:
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

export default CookiePolicyPage;
