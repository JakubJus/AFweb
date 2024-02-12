import React from 'react';
import './policyPage.scss'
const Policy = () => {
  return (
    <div className="cent">
    <div className='comp'>
      <h1>Cookies Policy</h1>

      <p>
        This website uses cookies to improve your experience. By using our website, you agree to our use of cookies as
        described in this policy.
      </p>

      <h2>What are Cookies?</h2>
      <p>
        Cookies are small text files that are stored on your device when you visit a website. They are widely used to
        make websites work more efficiently and to provide information to the website owners.
      </p>

      <h2>How We Use Cookies</h2>
      <p>
        We use cookies for the following purposes:
        <ul>
          <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website,
            allowing us to improve its performance.
          </li>
          <li>
            <strong>Functionality Cookies:</strong> These cookies enable certain additional functionalities on our website,
            such as remembering your preferences.
          </li>
          {/* Add more categories based on your specific use of cookies */}
        </ul>
      </p>

      <h2>Managing Cookies</h2>
      <p>
        You can control and/or delete cookies as you wish. For details, see <a href="https://www.aboutcookies.org/">aboutcookies.org</a>.
      </p>

      <h2>Consent</h2>
      <p>
        By using our website, you consent to the use of cookies as described in this policy. If you do not agree with the
        use of cookies, you may disable or delete them through your browser settings. However, certain features of the
        website may not function properly without the aid of cookies.
      </p>

      <h2>Changes to the Cookies Policy</h2>
      <p>We reserve the right to modify this Cookies Policy. Please check this page regularly for updates.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions or concerns regarding this policy, please contact us at support@example.com.</p>
    </div>
    </div>
  );
};

export default Policy;
