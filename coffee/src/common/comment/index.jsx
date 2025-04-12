import React, { useState, useCallback } from 'react';
import useCartStore from '@/store/cartstore';

const Comment = ({ productId }) => {
  const { comments, setComment } = useCartStore();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setCommentText] = useState('');

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (comment.trim()) {
        setComment(productId, userName, email, comment);
        setUserName('');
        setEmail('');
        setCommentText('');
        console.log('Comment submitted:', { userName, email, comment });
      }
    },
    [comment, userName, email, productId, setComment]
  );

  return (
    <div>
      <div className='pt-[38px] grid grid-cols-2 font-sofiaRegular'>
        <div className='pre-next text-left'>previous post</div>
        <div className='pre-next text-right'>next post</div>
      </div>
      <h6 className="text-[22px] text-newstext capitalize font-medium font-sofia py-[40px]">
        Leave A Comment
      </h6>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='mb-[16px] pr-0 lg:pr-[10px]'>
              <input
                type="text"
                className='custominput outline-none'
                required
                placeholder='User Name*'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className='mb-[16px] pl-0 lg:pl-[10px]'>
              <input
                type="email"
                className='custominput outline-none'
                required
                placeholder='Email*'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='mb-[10px] mt-[16px]'>
            <textarea
              cols={30}
              rows={10}
              placeholder='Your Comment*'
              type="text"
              required
              value={comment}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full border outline-none border-[#d6d6d6] text-black rounded-none pl-[23px] pr-[10px] pb-[8px] pt-[18px] text-[14px] font-sofia"
            ></textarea>
          </div>
          <div className='mb-[16px]'>
            <button
              type="submit"
              className="w-full bg-black py-[15px] uppercase tracking-[0.2em] text-[14px] font-sofia text-white transition-all duration-300 hover:bg-coffee"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
