import React from 'react';
import {HTMLProps, useState} from 'react';
import {Fa500Px, FaBoxOpen, FaChevronRight, FaOpencart} from 'react-icons/fa';
import styled from 'styled-components';
import {MenuItem} from './types';

interface RowProps {
  item: MenuItem;
  active?: boolean;
  onClick?: () => void;
}

const Row: React.FC<RowProps> = ({item, onClick, active}) => {
  return (
    <div
      className={`group h-min w-full p-4 flex items-center justify-between cursor-pointer  ${
        active ? 'text-primary-500 font-semibold bg-primary-50' : 'hover:bg-gray-100'
      }`}
      onClick={onClick}>
      <p>{item.label}</p>

      <FaChevronRight
        className={`group-hover:text-gray-400 group-hover:inline ${
          active ? 'group-hover:text-primary-500 text-primary-500' : 'hidden'
        }`}
      />
    </div>
  );
};

export default Row;
