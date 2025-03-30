'use client';
import React from 'react';

interface btn {
  title: string;
  onClick: () => void;
}
const Button = (props: btn) => {
  return (
    <button
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
