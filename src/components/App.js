
import React from "react";

import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <div className="header">
        <h1>Welcome to My Website</h1>
      </div>
      <div className="content">
        <h2>Page Content</h2>
        <p>This is the main content of the page.</p>
      </div>
      <div className="footer">
        <p>© 2024 My Website</p>
      </div>
    </div>
  )
}

export default App