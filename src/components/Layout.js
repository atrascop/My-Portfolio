import React from "react";

function Layout({ children, className = "" }) {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark dark:text-light xl:p-24 lg-p-16 md:p-14 sm:p-8 p-20 ${className}`}
    >
      {children}
    </div>
  );
}

export default Layout;
