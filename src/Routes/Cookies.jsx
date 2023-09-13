import React from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookies = () => {
  return (
    <div className="cookies-container">
      {/* Cookie consent banner */}
      <CookieConsent
        location="bottom"
        cookieName="myCookieConsent"
        style={{ background: '#333', color: '#fff' }}
        buttonStyle={{ background: '#fff', color: '#333' }}
        expires={365}
        buttonText="Accept"
        declineButtonText="Decline"
        onAccept={() => {
          // Perform actions when the user accepts the consent
          console.log('User accepted cookies');
          // Initialize analytics or other services here
        }}
        onDecline={() => {
          // Perform actions when the user declines the consent
          console.log('User declined cookies');
          // You can handle this case as needed, e.g., display a message
        }}
      >
        This website uses cookies to ensure you get the best experience on our website.
      </CookieConsent>
    </div>
  );
};

export default Cookies;
