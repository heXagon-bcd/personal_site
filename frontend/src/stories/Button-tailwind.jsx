import React from "react";
import PropTypes from 'prop-types';
import '../../src/output.css';

export const tailwindButton = ({}) => {
  return (
    <div>
      <button type="button" class="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Button text</button>
    </div>
  )
}