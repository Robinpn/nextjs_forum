'use client';
import React from 'react';

interface btn {
  title: string;
  onClick: () => void;
}
const Button = (props: btn) => {
  return <button onClick={props.onClick}>{props.title}</button>;
};

export default Button;
