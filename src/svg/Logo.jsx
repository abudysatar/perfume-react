import * as React from "react";

function Logo(props) {
  return (
    <svg
      width={46}
      height={46}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25 17s2-4 2-8-4-8-4-8-4 4-4 8 2 8 2 8m2 12a6 6 0 100-12 6 6 0 000 12z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 21s-4-2-8-2-8 4-8 4 4 4 8 4 8-2 8-2m8 4s2 4 2 8-4 8-4 8-4-4-4-8 2-8 2-8m8-8s4-2 8-2 8 4 8 4-4 4-8 4-8-2-8-2m-8.828-7.656s-1.414-4.244-4.244-7.072C13.1 7.444 7.444 7.444 7.444 7.444s0 5.656 2.828 8.486c2.828 2.828 7.072 4.242 7.072 4.242m0 5.656s-4.244 1.414-7.072 4.244c-2.828 2.828-2.828 8.484-2.828 8.484s5.656 0 8.484-2.828c2.828-2.828 4.244-7.072 4.244-7.072m8.486-2.828s4.24 1.414 7.07 4.244c2.828 2.828 2.828 8.484 2.828 8.484s-5.656 0-8.484-2.828c-2.828-2.828-4.244-7.072-4.244-7.072m0-11.312s1.414-4.244 4.244-7.072c2.828-2.828 8.484-2.828 8.484-2.828s0 5.656-2.828 8.486c-2.828 2.828-7.072 4.242-7.072 4.242"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Logo;
