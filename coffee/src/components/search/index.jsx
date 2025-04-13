import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAPIData } from '@/http/api';
import { QueryKeys } from '@/constants/query';
import { useNavigate } from 'react-router';

const SearchDrawer = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: [QueryKeys.SHOPCARDS],
    queryFn: async () => await getAPIData('shopcards?populate=*'),
  });

  useEffect(() => {
    if (data?.data && searchTerm.trim()) {
      const filtered = data.data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  }, [searchTerm, data]);

  const baseUrl = 'http://localhost:1337';

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 h-auto w-full bg-white z-[9999] px-6 pt-10 overflow-y-auto ">
      <div className="absolute right-6 top-6 text-3xl cursor-pointer" onClick={onClose}>
        &times;
      </div>

      <h2 className="text-center text-2xl md:text-[40px] py-[30px] px-[15px] font-sofia mb-8">Start typing and hit Enter</h2>

     
     <div className='max-w-[900px] mx-auto '>
     <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to search products..."
        className="w-full border-b-2 border-[#bbbaba] text-base font-sofia outline-none px-[10px] py-[8px] mb-6"
      />
     </div>
      <div className='max-w-[900px] mx-auto  h-[260px]
mt-[20px] overflow-y-auto overflow-x-hidden'>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {filteredResults.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer border-b border-[#f1f1f1] flex justify-start items-start py-[15px] mb-[16px]"
            onClick={() => {
              navigate(`/products/${item.id}`);
              onClose();
            }}
          >
           <div className='max-w-[80px] h-auto overflow-hidden mr-[15px]'>
           <img
              src={baseUrl + item.image.url}
              alt={item.title}
              className="w-full h-full object-cover "
            />
           </div>
            <div>
            <div className="text-sm font-sofia text-newstext hover:text-coffee ease-in-out transition-all duration-500">{item.title}</div>
            <div className="flex items-center gap-2">
              <span className="text-coffee font-sofia">${item.newprice.toFixed(2)} USD</span>
              {item.old && (
                <span className="line-through text-searchold text-[11px] font-sofiaRegular ">
                  ${item.old.toFixed(2)} USD
                </span>
              )}
            </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default SearchDrawer;
