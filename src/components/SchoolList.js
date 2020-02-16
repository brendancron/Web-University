import React from 'react';
import School from './School.js'
import './List.css';

function SchoolList() {
  return (
    <div>
      <ul class="side-by-side">
        <School />
        <School />
        <School />
        <School />
        <School />
      </ul>
    </div>
  );
}

export default SchoolList;
