import React from 'react';
import { Link, Outlet } from 'react-router';

const Sidebar = () => {
  return (
    <div className="flex min-h-screen font-sofiaRegular">
      <div className="bg-coffee  text-white w-64 h-screen fixed top-0 left-0 border-r border-coffee z-10 p-6">
        <h2 className="text-[17px] font-bold mb-8 tracking-widest uppercase">Admin Panel</h2>

        <nav className="flex flex-col space-y-4 text-sm uppercase">
          <Link to="/admin" className="hover:bg-amber-950 py-2 px-4 rounded transition-all duration-200">
            Dashboard
          </Link>
          <Link to="*" className="hover:bg-amber-950 py-2 px-4 rounded transition-all duration-200">
            Products
          </Link>
          <Link to="*" className="hover:bg-amber-950 py-2 px-4 rounded transition-all duration-200">
            Orders
          </Link>
          <Link to="*" className="hover:bg-amber-950 py-2 px-4 rounded transition-all duration-200">
            Users
          </Link>
          <Link to="*" className="hover:bg-amber-950 py-2 px-4 rounded transition-all duration-200">
            Settings
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8 bg-gray-50 min-h-screen">
<Outlet/>
      </div>
    </div>
  );
};

export default Sidebar;
