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
                  <li className="link-item"><a href="#">Home</a></li>
                  <li className="link-item"><a href="#">Features</a></li>
                  <li className="link-item"><a href="#">FAQS</a></li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
          {/* <ul>
            <li className="first-tab">
              <a className="tab-link" href="#">Home</a>
            </li>
            <li className="second-tab">
              <a className="tab-link" href="#">Subscribe Email for Updates</a>
            </li>
          </ul>
          <ul>
            <li className="phone-num">
              <span>Contact: 1-800-Product-Test</span>
            </li>
          </ul> */}
      {/* <h1>I am the head component</h1> */}
    </div>
  );
};
{/* <li class="tabs-tab tabs-tab--active"><span class="tab-link">Enterprise</span></li> */}
export default Head;