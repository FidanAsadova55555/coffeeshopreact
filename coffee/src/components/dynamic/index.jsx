import React, { useEffect } from "react";
import { useLocation } from "react-router";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pageMeta = {
      "/": { title: "Monfee - Coffee Shops and Cafés Responsive Shopify Theme" },
      "/shop": { title: "Products – Monfee - Coffee Shops and Cafés Responsive Shopify Theme" },
      "/blog": { title: "News – Monfee - Coffee Shops and Cafés Responsive Shopify Theme " },
      "/cart": { title: "Your Cart " },
      "/checkout": { title: "Checkout " },
    };

    let currentPath = location.pathname;
    if (currentPath.startsWith("/shop/")) currentPath = "/shop";
    if (currentPath.startsWith("/blog/")) currentPath = "/blog";

    const { title } = pageMeta[currentPath] || { title: "Monfee" };

    document.title = title;
  }, [location.pathname]);

  return null; 
};

export default DynamicTitle;
