import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbComponent = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Define background colors for different paths
  const backgroundColors = {
    "/news": "#f8f6f2",
    "/shop": "#e6f7ff",
  };

  // Get the background color based on the current path or default to white
  const currentBg = backgroundColors[location.pathname] || "#ffffff";

  return (
    <div className="py-[40px] text-center" style={{ backgroundColor: currentBg }}>
      {/* Dynamic Page Title */}
      <h1 className="text-[28px] font-semibold text-black mb-2">
        {pathnames.length > 0 ? pathnames[pathnames.length - 1].charAt(0).toUpperCase() + pathnames[pathnames.length - 1].slice(1) : "Home"}
      </h1>

      {/* Ant Design Breadcrumb */}
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to="/" className="text-black hover:text-gray-800">Home</Link>
        </Breadcrumb.Item>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <Breadcrumb.Item key={name}>
              <Link to={routeTo} className="text-black hover:text-gray-800">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Link>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;
