import React from 'react'

import "flatpickr/dist/themes/material_green.css";
import '../../assets/sass/allevents.scss'
import Select from 'react-select'

import Flatpickr from "react-flatpickr";



// import Flatpickr from "react-flatpickr";

// import {DatePicker} from 'react-dater'
// import { DatePicker } from  'react-dater'
// import {DatePicker} from 'reac'

const option = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]




function AllEvents() {

  // () => {
  //   const [date, setDate] = useState(new Date());

  //   const handleCalendarClose = () => console.log("Calendar closed");
  //   const handleCalendarOpen = () => console.log("Calendar opened");



  const options = {
    datetime: {
      maxDate: new Date(),
      mode: 'range',
      altInputClass: 'hide',
      dateFormat: 'M d Y',
      minDate: new Date('01-01-2018'),

      // THIS `wrap` option is required when using external elements!
      // https://flatpickr.js.org/examples/#flatpickr-external-elements
      wrap: true,
    },


  }



  // const { date } = this.state;

  return (
    <div className='container'>
      <div className='row'>
        <h3>Bütün Tədbirlər</h3>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='filter'>
            <Select options={option} />
          </div>

        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>

          <div className='filter'>
            <Flatpickr
              data-input
              options={options.datetime}
            >
              {/* Button and input should be the children of flatpickr * /}
      {/* as per the official flatpickr.js example above */}

              {/* toggle butotn should have `data-toggle` attribute */}
              <button data-toggle></button>

              {/* input field should have `data-input` attribute */}
              <input type="text" className='date-range flatpickr-input' placeholder="Tarix  Aralığı Seçin" data-input />
            </Flatpickr>
          </div>
          <div className='col-lg4 col-md-6 col-sm-12'>
            <div class="filter">
              <input type="number" name="price_range[]" className="price-range-input" />
              <input type="number" name="price_range[]" className="price-range-input" />
              <div className="price-range-view">Qiymət 0.00 ₼-dan 2500.00 ₼-dək</div>
              <div className="price-range noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                <div className="noUi-base">
                  <div className="noUi-connects">
                    <div className="noUi-connect" style={{ transform: 'translate(0%, 0px) scale(1, 1)' }}>
                    </div>
                  </div>
                  <div className="noUi-origin" style={{ transform: 'translate(-100%, 0px); z-index: 5' }}>
                    <div className="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="2500.0" aria-valuenow="0.0" aria-valuetext="0.00">
                      <div className="noUi-touch-area">
                      </div>
                    </div>
                  </div>
                  <div className="noUi-origin" style={{ transform: 'translate(0%, 0px); z-index: 4' }}>
                    <div className="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="2500.0" aria-valuenow="2500.0" aria-valuetext="2500.00">
                      <div className="noUi-touch-area">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AllEvents