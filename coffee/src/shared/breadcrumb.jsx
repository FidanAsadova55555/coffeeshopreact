import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router"; 

const JustBreadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const backgroundImages = {
    "/products": "https://monfee-store-demo.myshopify.com/cdn/shop/files/dark.jpg?v=1613541437",
    "/news": "https://monfee-store-demo.myshopify.com/cdn/shop/files/breacrumb.jpg?v=1613541437",
  };

  const currentBg = backgroundImages[location.pathname] || "";
  const isWhiteText = location.pathname === "/products"; 

  return (
    <div
      className={`font-sofia   text-center flex flex-col justify-center items-center w-full ${isWhiteText ? "py-[140px]" : "pt-[150px] pb-[130px]"}`}
      style={{
        backgroundImage: `url(${currentBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
    > 
         <h1 className={` mb-[8px] font-medium tracking-[2px] leading-[1.5em] ${isWhiteText ? "text-white text-[40px]" : "text-black text-[46px]"}`}>
        {pathnames.length > 0
          ? pathnames[pathnames.length - 1].charAt(0).toUpperCase() + pathnames[pathnames.length - 1].slice(1)
          : "Home"}
      </h1>

      <Breadcrumb
        separator={<span style={{ color: isWhiteText ? "white" : "black" }}>{">"}</span>} 
      >
        <Breadcrumb.Item>
          <Link
            to="/"
            className={isWhiteText ? "text-white " : "text-black"}
            style={{ 
              color: isWhiteText ? "white" : "black",
              fontFamily: "Sofia Pro Regular",
              backgroundColor:"transparent",
              hover:"none",
              fontSize:"14px",
              marginTop:"0px",
              paddingBottom:"40px"


            }} 
          >
            Home
          </Link>
        </Breadcrumb.Item>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <Breadcrumb.Item key={name}>
              <Link
                to={routeTo}
                className={isWhiteText ? "text-white " : "text-black "}
                style={{ 
                  color: isWhiteText ? "white" : "black",
                  fontFamily: "Sofia Pro Regular",
                  backgroundColor:"transparent",
                  hover:"none",
                  fontSize:"14px",
                  marginTop:"0px",
                  paddingBottom:"40px"



                }} 
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Link>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default JustBreadcrumb;
