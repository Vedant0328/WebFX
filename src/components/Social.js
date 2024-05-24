import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import React from 'react';

function Social() {
  return (
    <div>
      <div class='flex text-white px-20 py-5 md:px-4 float'>
        <div class='px-10 py-5 float-left'>
          <h1 class='font-bold'>PROUDLY BROUGHT TO YOU BY WEBFX</h1>
          <br />
          <ul class='flex'>
            <li>
              <img
                className='w-28 h-10 md:w-40 '
                src='https://www.webfx.com/wp-content/uploads/2023/11/seo-com-logo.png'
                alt='logo1'
              />
            </li>
            <li>
              <img
                className='w-32 h-10 p-2'
                src='https://www.webfx.com/wp-content/uploads/2023/11/TeamAI.png'
                alt='logo2'
              />
            </li>
            <li>
              <img
                className='w-40 h-10 p-2'
                src='https://www.webfx.com/wp-content/uploads/2023/11/nutshell-logo-white-1.png'
                alt='logo3'
              />
            </li>
          </ul>
        </div>
        {/* <div class='w-60'></div> */}
        <div class='px-10 py-5 ml-auto'>
          <p class='font-bold py-1'>WebFX 1995-2024</p>
          <p className='font-bold py-1'>SiteMap Privacy & Term of User</p>
          <ul class='flex'>
            <li class='p-2'>
              <BsFacebook size={35} />
            </li>
            <li class='p-2'>
              <AiOutlineTwitter size={35} />
            </li>
            <li class='p-2'>
              <AiFillLinkedin size={35} />
            </li>
            <li class='p-2'>
              <AiFillYoutube size={35} />
            </li>
            <li class='p-2'>
              <AiOutlineInstagram size={35} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Social;
