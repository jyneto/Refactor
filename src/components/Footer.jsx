// import React from 'react';
// import './Footer.css';

// export default function Footer() {
//   return (
//     <>
//         <div className="footer">
//         <p>© 2025 J.Toledo | All rights reserved</p>
//         </div>
     
//     </>
//   );
// }

/* utan icon */
import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2025 J.Toledo | All rights reserved</p>

      <div className="social-icons">
        <a
          href="https://github.com/jyneto"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://linkedin.com/in/jane-toledo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="icon" />
        </a>
      </div>
    </footer>
  );
}


