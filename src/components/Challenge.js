import React from 'react';

function Challenge() {
  return (
    <div className='lg:flex'>
      <div className='lg:p-10 hidden'>
        <ul className='flex text-white'>
          <li className='p-5'>
            <span className='font-extrabold text-2xl'>24,859,684+</span>
            <br />
            <span className='font-bold'>
              LEADS DRIVEN
              <br />
              FOR CLIENTS
            </span>
          </li>
          <li className='p-5'>
            <span className='font-extrabold text-2xl'>$6,021,182,299+</span>
            <br />
            <span className='font-bold'>
              REVENUE DRIVEN
              <br />
              FOR CLIENTS
            </span>
          </li>
          <li className='p-5'>
            <span className='font-extrabold text-2xl'>3,212,407</span>
            <br />
            <span className='font-bold'>
              HOURS OF
              <br />
              EXPERTISE
            </span>
          </li>
          <li className='p-5'>
            <span className='font-extrabold text-2xl'>500</span>
            <br />
            <span className='font-bold'>
              EXPERTS
              <br />
              ON STAFF
            </span>
          </li>
        </ul>
      </div>

      <div class='p-14'>
        <div class='bg-blue-800 rounded-lg'>
          <form class='rounded-md'>
            <h4 class='p-5 text-xl font-bold text-white text-md'>
              Discover how we can help your business grow
            </h4>
            <div class='px-10 bg-blue-300 py-3 rounded-lg'>
              <input
                placeholder='Enter your website'
                type='text'
                class='p-1 rounded-l-md border-2'
              />
              <input type='hidden' class='p-1 rounded' />
              <button
                type='submit'
                class='hover:bg-green-500 p-1 border-2 rounded-r-md bg-blue-700'
              >
                Send Me a Proposal!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
