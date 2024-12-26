import React from "react";
import PageLayout from "./PageLayout";
import './../styles/App.css';

const App = () => {
  return (
    <PageLayout
      header={<h1>Welcome to My Website</h1>}
      footer={<p>© 2024 My Website</p>}
    >
      <h2>Page Content</h2>
      <p>This is the main content of the page.</p>
    </PageLayout>
  );
}

export default App;
