import React from 'react';
import style from './Loader.module.css'; // Make sure to adjust the path accordingly

const Loader = () => {
  return (
    <div className={style.loaderContainer}>
      <svg className={style.pl} viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${style.pl}-grad1`} x1="1" y1="0.5" x2="0" y2="0.5">
            <stop offset="0%" stopColor="hsl(313,90%,55%)" />
            <stop offset="100%" stopColor="hsl(223,90%,55%)" />
          </linearGradient>
          <linearGradient id={`${style.pl}-grad2`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(313,90%,55%)" />
            <stop offset="100%" stopColor="hsl(223,90%,55%)" />
          </linearGradient>
        </defs>
        <circle
          className={style.pl__ring}
          cx="100"
          cy="100"
          r="82"
          fill="none"
          stroke={`url(#${style.pl}-grad1)`}
          strokeWidth="36"
          strokeDasharray="0 257 1 257"
          strokeLinecap="round"
          transform="rotate(-90,100,100)"
        />
        <line
          className={style.pl__ball}
          stroke={`url(#${style.pl}-grad2)`}
          x1="100"
          y1="18"
          x2="100.01"
          y2="182"
          strokeWidth="36"
          strokeDasharray="1 165"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Loader;
