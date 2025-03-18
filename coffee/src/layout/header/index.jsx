import React from 'react'
import { Link } from 'react-router';

const Header = () => {
    const menuItems = [
        { name: "home", path: "/" },
        { name: "shop", path: "/shop" },
        { name: "featured", path: "/featured" },
        { name: "pages", path: "/pages" },
        { name: "blogs", path: "/blog" },

      ];
    
  return (
    <>
<header className='py-[25px]'>
<div className='grid grid-cols-12'>
    <div className="col-span-5">
        <div className="flex justify-between items-center">
        {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
       
              >
                {item.name}
              </Link>
            ))}
        </div>
    </div>
    <div className="col-span-2"></div>
    <div className="col-span-5"></div>

</div>
</header>
    </>
  )
}

export default Header