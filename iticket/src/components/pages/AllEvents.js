import React from 'react';
import "flatpickr/dist/themes/material_green.css";
import '../../assets/sass/allevents.scss';
import Filter from '../layout/Filter'

function AllEvents() {
  return (
    <div className='container'>
        <Filter/>
    </div>
  )
}

export default AllEvents