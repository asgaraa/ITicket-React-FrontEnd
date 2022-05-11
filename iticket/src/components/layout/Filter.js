import React, { } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import '../../assets/sass/layout/filter.scss';
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';






function Filter() {


    const options = {
        datetime: {
            // maxDate:new Date('01-07-2022') ,
            mode: 'range',
            altInputClass: 'hide',
            dateFormat: 'M d Y',
            // minDate: new  Date('11-05-2022'),
            disable: [
                {
                    from: "2022-05-09",
                    to: "2022-07-22"
                },
                // {
                //     from: "2025-09-01",
                //     to: "2025-12-01"
                // }
            ],

            // THIS `wrap` option is required when using external elements!
            // https://flatpickr.js.org/examples/#flatpickr-external-elements
            wrap: true,
        },


    }
    function valuetext(value) {
        return `${value}°C`;
    }

    const minDistance = 10;

    const [value1, setValue1] = React.useState([20, 37]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };


    return (
        <div>
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center placearea">
                    <div className='filter'>
                        <div className='price-range-view'>
                            {/* <Autocomplete
                            className='placeinput'
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300, border: 'none' }}
                            style={{ border: 'none', outline: 'none' }}
                            renderInput={(params) => <TextField {...params} label="Mekan" />}
                        /> */}
                            <select placeholder="Məkan seçin" autocomplete="off" className="select">
                                <option value="">
                                </option>
                                <option>
                                    Heydər Əliyev Sarayı
                                </option>
                                <option>
                                    Akademik Milli Dram Teatrı
                                </option>
                                <option>
                                    Beynəlxalq Muğam Mərkəzi
                                </option>
                                <option>
                                    Azərbaycan Dövlət Akademik Filarmoniyası
                                </option>
                                <option>
                                    Elektra Events Hall
                                </option>
                                <option>
                                    Kamera və orqan musiqisi zalı
                                </option>
                                <option>
                                    Akademik Rus Dram Teatrı
                                </option>
                                <option>
                                    Bakı Musiqi Akademiyası nəzdində Opera Studiyasının Konsert salonu
                                </option>
                                <option>
                                    Azərbaycan Dövlət Akademik Opera və Balet Teatrı
                                </option>
                                <option>
                                    Rəşid Behbudov adına Dövlət Mahnı Teatrı
                                </option>
                                <option>
                                    Passage 1901
                                </option>
                                <option>
                                    Azərbaycan Dövlət Akademik Musiqili Teatrı
                                </option>
                                <option>
                                    Gənc Tamaşaçılar kiçik səhnə
                                </option>
                                <option>
                                    Yaşıl Teatr
                                </option>
                                <option>
                                    Nizami Kino Mərkəzi
                                </option>
                                <option>
                                    Bakı Konqres Mərkəzi
                                </option>
                                <option>
                                    Hotel Fairmont Baku
                                </option>
                                <option>
                                    Marionet Teatrı
                                </option>
                                <option>
                                    Sea Breeze Resort
                                </option>
                                <option>
                                    Albion Pub
                                </option>
                                <option>
                                    Park Cinema Metro Park
                                </option>
                                <option>
                                    Azərbaycan İstiqlal Muzeyi
                                </option>
                                <option>
                                    Azərbaycan Musiqi Mədəniyyəti Dövlət Muzeyi
                                </option>
                                <option>
                                    Üzeyir Hacıbəylinin ev-muzeyi
                                </option>
                                <option>
                                    Atəşgah məbədi
                                </option>
                                <option>
                                    Dreamland Golf Club
                                </option>
                                <option>
                                    “Yanardağ” Təbiət Qoruğu
                                </option>
                                <option>
                                    Pizza Hut
                                </option>
                                <option>
                                    Dalğa Arena
                                </option>
                                <option>
                                    Yanardağ &amp; Atəşgah
                                </option>
                                <option>
                                    Şəkixanovlar evi
                                </option>
                                <option>
                                    Kiş Alban Məbədi
                                </option>
                                <option>
                                    Şəki Xan Sarayı
                                </option>
                                <option>
                                    Free Children
                                </option>
                                <option>
                                    Azərbaycan Teatr Xadimləri İttifaqı
                                </option>
                                <option>
                                    Şuşa Dövlət Musiqili Dram Teatrı
                                </option>
                                <option>
                                    “Qala” Dövlət Tarix Etnoqrafiya Qoruğu
                                </option>
                                <option>
                                    Bakı Fotoqrafiya Evi
                                </option>
                                <option>
                                    "İçərişəhər Dövlət" Tarix-Memarlıq Qoruğu
                                </option>
                                <option>
                                    Bakı Zooloji Parkı
                                </option>
                                <option>
                                    "Suraxanı" Gəmi-Muzey
                                </option>
                                <option>
                                    Hərbi Qənimətlər Parkı
                                </option>
                                <option>
                                    Göygöl
                                </option>
                                <option>
                                    Pizza Hut Megafun
                                </option>
                                <option>
                                    Flora Hostel
                                </option>
                                <option>
                                    27qm-Tarana's small gallery and cafe
                                </option>
                                <option>
                                    The Orange Grove
                                </option>
                                <option>
                                    Bakı Kristal Zalı və Dənizkənarı Bulvar
                                </option>
                            </select>
                        </div>

                    </div>

                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
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
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className='filter'>
                        <div className='price-range-view'> Qiymət {value1[0]} ₼-dan {value1[1]} ₼-dək</div>

                        <Box sx={{ width: '100%' }}>
                            <Slider
                                getAriaLabel={() => 'Minimum distance'}
                                value={value1}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                            />
                        </Box>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Filter


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//     { label: 'The Shawshank Redemption', year: 1994 },
//     { label: 'The Godfather', year: 1972 },
//     { label: 'The Godfather: Part II', year: 1974 },
//     { label: 'The Dark Knight', year: 2008 },
//     { label: '12 Angry Men', year: 1957 },
//     { label: "Schindler's List", year: 1993 },
//     { label: 'Pulp Fiction', year: 1994 },
//     {
//         label: 'The Lord of the Rings: The Return of the King',
//         year: 2003,
//     },
//     { label: 'The Good, the Bad and the Ugly', year: 1966 },
//     { label: 'Fight Club', year: 1999 },
//     {
//         label: 'The Lord of the Rings: The Fellowship of the Ring',
//         year: 2001,
//     },
//     {
//         label: 'Star Wars: Episode V - The Empire Strikes Back',
//         year: 1980,
//     },
//     { label: 'Forrest Gump', year: 1994 },
//     { label: 'Inception', year: 2010 },
//     {
//         label: 'The Lord of the Rings: The Two Towers',
//         year: 2002,
//     },
//     { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
//     { label: 'Goodfellas', year: 1990 },
//     { label: 'The Matrix', year: 1999 },
//     { label: 'Seven Samurai', year: 1954 },
//     {
//         label: 'Star Wars: Episode IV - A New Hope',
//         year: 1977,
//     },
//     { label: 'City of God', year: 2002 },
//     { label: 'Se7en', year: 1995 },
//     { label: 'The Silence of the Lambs', year: 1991 },
//     { label: "It's a Wonderful Life", year: 1946 },
//     { label: 'Life Is Beautiful', year: 1997 },
//     { label: 'The Usual Suspects', year: 1995 },
//     { label: 'Léon: The Professional', year: 1994 },
//     { label: 'Spirited Away', year: 2001 },
//     { label: 'Saving Private Ryan', year: 1998 },
//     { label: 'Once Upon a Time in the West', year: 1968 },
//     { label: 'American History X', year: 1998 },
//     { label: 'Interstellar', year: 2014 },
//     { label: 'Casablanca', year: 1942 },
//     { label: 'City Lights', year: 1931 },
//     { label: 'Psycho', year: 1960 },
//     { label: 'The Green Mile', year: 1999 },
//     { label: 'The Intouchables', year: 2011 },
//     { label: 'Modern Times', year: 1936 },
//     { label: 'Raiders of the Lost Ark', year: 1981 },
//     { label: 'Rear Window', year: 1954 },
//     { label: 'The Pianist', year: 2002 },
//     { label: 'The Departed', year: 2006 },
//     { label: 'Terminator 2: Judgment Day', year: 1991 },
//     { label: 'Back to the Future', year: 1985 },
//     { label: 'Whiplash', year: 2014 },
//     { label: 'Gladiator', year: 2000 },
//     { label: 'Memento', year: 2000 },
//     { label: 'The Prestige', year: 2006 },
//     { label: 'The Lion King', year: 1994 },
//     { label: 'Apocalypse Now', year: 1979 },
//     { label: 'Alien', year: 1979 },
//     { label: 'Sunset Boulevard', year: 1950 },
//     {
//         label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
//         year: 1964,
//     },
//     { label: 'The Great Dictator', year: 1940 },
//     { label: 'Cinema Paradiso', year: 1988 },
//     { label: 'The Lives of Others', year: 2006 },
//     { label: 'Grave of the Fireflies', year: 1988 },
//     { label: 'Paths of Glory', year: 1957 },
//     { label: 'Django Unchained', year: 2012 },
//     { label: 'The Shining', year: 1980 },
//     { label: 'WALL·E', year: 2008 },
//     { label: 'American Beauty', year: 1999 },
//     { label: 'The Dark Knight Rises', year: 2012 },
//     { label: 'Princess Mononoke', year: 1997 },
//     { label: 'Aliens', year: 1986 },
//     { label: 'Oldboy', year: 2003 },
//     { label: 'Once Upon a Time in America', year: 1984 },
//     { label: 'Witness for the Prosecution', year: 1957 },
//     { label: 'Das Boot', year: 1981 },
//     { label: 'Citizen Kane', year: 1941 },
//     { label: 'North by Northwest', year: 1959 },
//     { label: 'Vertigo', year: 1958 },
//     {
//         label: 'Star Wars: Episode VI - Return of the Jedi',
//         year: 1983,
//     },
//     { label: 'Reservoir Dogs', year: 1992 },
//     { label: 'Braveheart', year: 1995 },
//     { label: 'M', year: 1931 },
//     { label: 'Requiem for a Dream', year: 2000 },
//     { label: 'Amélie', year: 2001 },
//     { label: 'A Clockwork Orange', year: 1971 },
//     { label: 'Like Stars on Earth', year: 2007 },
//     { label: 'Taxi Driver', year: 1976 },
//     { label: 'Lawrence of Arabia', year: 1962 },
//     { label: 'Double Indemnity', year: 1944 },
//     {
//         label: 'Eternal Sunshine of the Spotless Mind',
//         year: 2004,
//     },
//     { label: 'Amadeus', year: 1984 },
//     { label: 'To Kill a Mockingbird', year: 1962 },
//     { label: 'Toy Story 3', year: 2010 },
//     { label: 'Logan', year: 2017 },
//     { label: 'Full Metal Jacket', year: 1987 },
//     { label: 'Dangal', year: 2016 },
//     { label: 'The Sting', year: 1973 },
//     { label: '2001: A Space Odyssey', year: 1968 },
//     { label: "Singin' in the Rain", year: 1952 },
//     { label: 'Toy Story', year: 1995 },
//     { label: 'Bicycle Thieves', year: 1948 },
//     { label: 'The Kid', year: 1921 },
//     { label: 'Inglourious Basterds', year: 2009 },
//     { label: 'Snatch', year: 2000 },
//     { label: '3 Idiots', year: 2009 },
//     { label: 'Monty Python and the Holy Grail', year: 1975 },
// ];