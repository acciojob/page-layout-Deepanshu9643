import React from "react";

const PageLayout = ({ header, children, footer }) => {
  return (
    <div>
      {header && <div className="header">{header}</div>}
      {children && <div className="content">{children}</div>}
      {footer && <div className="footer">{footer}</div>}
    </div>
  );
};

export default PageLayout;
