import React from 'react';

const Head = () => {
  return (
    <div role="banner" className="nav-wrapper">
      <div className="nav-view-wrapper">
        <div className="nav-view-contentWrapper">
          <div className="nav-view-links-container">
            <nav>
              <ul className="nav-links">
                <div className="nav-link-items">
                  <li className="link-item"><a href="#landing">Home</a></li>
                  <li className="link-item"><a href="#features">Features</a></li>
                  <li className="link-item"><a href="#">FAQS</a></li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Head;