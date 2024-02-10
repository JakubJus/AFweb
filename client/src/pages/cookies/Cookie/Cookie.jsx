import React from 'react';
import './Cookie.scss';

const CookiesPrivacyPage = () => {
  return (
    <div className="container">
      <h1>Cookies and Privacy Policy</h1>

      <h2>1. Introduction</h2>
      <p>This Cookies and Privacy Policy describes how we collect, use, and protect your personal information.</p>

      <h2>2. Types of Information Collected</h2>
      <p>
        We collect various types of information, including but not limited to:
        <ul>
          <li>Contact information (name, email, phone number)</li>
          <li>Log-in and account information</li>
          <li>Personal preferences</li>
          {/* ... add more as per your policy */}
        </ul>
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>
        We use your information for the following purposes:
        <ul>
          <li>To provide requested products or services</li>
          <li>For marketing and promotional purposes</li>
          {/* ... add more as per your policy */}
        </ul>
      </p>

      <h2>4. Cookies</h2>
      <p>
        We use cookies to improve your experience on our website. By using our website, you agree to the use of cookies
        in accordance with our <a href="/cookies-policy">Cookies Policy</a>.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You have the right to access, modify, or delete your personal information. If you have any questions or concerns
        about your privacy, please contact us.
      </p>

      <h2>6. Changes to the Policy</h2>
      <p>We reserve the right to modify this Cookies and Privacy Policy. Please check this page regularly for updates.</p>

      <h2>7. Contact Us</h2>
      <p>If you have any questions or concerns regarding this policy, please contact us at support@example.com.</p>
    </div>
  );
};

export default CookiesPrivacyPage;
