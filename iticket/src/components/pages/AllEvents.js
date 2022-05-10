import React from 'react'

import "flatpickr/dist/themes/material_green.css";
import '../../assets/sass/allevents.scss'
// import Select from 'react-select'

import Flatpickr from "react-flatpickr";



// import Flatpickr from "react-flatpickr";

// import {DatePicker} from 'react-dater'
// import { DatePicker } from  'react-dater'
// import {DatePicker} from 'reac'

// const option = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]




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
            {/* <Select options={option} /> */}
            <div class="filter">
              <select placeholder="Məkan seçin" autocomplete="off" class="venue-filter hidden" id="tomselect-1" tabindex="-1">
                <option value="">
                </option>
                <option value="6">
                  Heydər Əliyev Sarayı
                </option>
                <option value="12">
                  Elektra Events Hall
                </option>
                <option value="52">
                  Yaşıl Teatr
                </option>
                <option value="63">
                  Bakı Konqres Mərkəzi
                </option>
                <option value="116">
                  Sea Breeze Resort
                </option>
                <option value="242">
                  "İçərişəhər Dövlət" Tarix-Memarlıq Qoruğu
                </option>
              </select>
              <div class="ts-wrapper venue-filter single">
                <div class="ts-control">
                  <input type="select-one" autocomplete="off" size="1" tabindex="0" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="tomselect-1-ts-dropdown" id="tomselect-1-ts-control" placeholder="Məkan seçin" aria-activedescendant="tomselect-1-opt-211" />
                </div><div class="ts-dropdown single" style={{display: "none; visibility: visible;"}}>
                  <div role="listbox" tabindex="-1" class="ts-dropdown-content" id="tomselect-1-ts-dropdown">
                    <div data-selectable="" data-value="6" class="option active" role="option" id="tomselect-1-opt-211" aria-selected="true">Heydər Əliyev Sarayı</div>
                    <div data-selectable="" data-value="12" class="option"  id="tomselect-1-opt-212">Elektra Events Hall</div>
                    <div data-selectable="" data-value="52" class="option" id="tomselect-1-opt-213">Yaşıl Teatr</div>
                    <div data-selectable="" data-value="63" class="option"  id="tomselect-1-opt-214">Bakı Konqres Mərkəzi</div>
                    <div data-selectable="" data-value="116" class="option"  id="tomselect-1-opt-215">Sea Breeze Resort</div>
                    <div data-selectable="" data-value="242" class="option"  id="tomselect-1-opt-216">"İçərişəhər Dövlət" Tarix-Memarlıq Qoruğu</div>
                  </div>
                </div>
              </div>
            </div>
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


        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
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
  )
}

export default AllEvents