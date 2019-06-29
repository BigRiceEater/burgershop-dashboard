import React from 'react';

import boy1 from 'assets/icons/users/boy-1.png';
import boy2 from 'assets/icons/users/boy-2.png';
import girl1 from 'assets/icons/users/girl-1.png';
import girl2 from 'assets/icons/users/girl-2.png';
import man1 from 'assets/icons/users/man-1.png';
import man2 from 'assets/icons/users/man-2.png';
import man3 from 'assets/icons/users/man-3.png';
import man4 from 'assets/icons/users/man-4.png';

const male = [boy1, boy2, man1, man2, man3, man4];
const female = [girl1, girl2];

const RandomUserIcon = ({ gender = undefined }) => {
  let pool = [...male, ...female];
  if (gender === 'male') {
    pool = male;
  } else if (gender === 'female') {
    pool = female;
  }

  return (
    <img
      className='rounded'
      src={pool[Math.floor(Math.random() * Math.floor(pool.length))]}
      alt='user'
      height='50px'
    />
  );
};

export default RandomUserIcon;
