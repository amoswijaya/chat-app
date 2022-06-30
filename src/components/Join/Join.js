import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Join.css';

export default function SignIn() {
  let history = useHistory();
  const [name, setName] = useState('User' + Math.floor(Math.random() * 1000));
  const [room, setRoom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && room) {
      history.push(`/chat?name=${name}&room=${room}`);
    }
  };
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='card flex md:flex-row sm:flex-col    md:shadow-2xl  md:w-[90vw] w-full h-full md:h-[90vh]'>
        <div className='md:w-2/6  bg-neutral md:h-full '></div>
        <div className='md:w-4/6  md:h-full flex justify-center flex-col  m-3 items-center'>
          <div className='flex justify-center my-8'>
            <h1 class='card-title text-center'>LOGIN</h1>
          </div>

          <div class='form-control  m-2 items-center justify-center'>
            <label className='my-2'>
              <span class='label-text text-lg my-8'>Nickname</span>
            </label>
            <input
              type='text'
              placeholder='Type here your nickname'
              class=' p-2 flex text-center input-bordered w-full max-w-xs rounded-lg'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className='my-2'>
              <span class='label-text text-lg '>Room</span>
            </label>
            <input
              type='text'
              placeholder='room code'
              class=' flex text-center p-2 input-bordered w-full max-w-xs rounded-lg'
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              class='btn btn-primary mt-6 p-2 w-[320px]'
            >
              Join Chat!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
