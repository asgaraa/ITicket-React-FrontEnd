import React from 'react'
import Slider from '../Slider'
import '../../assets/sass/home.scss'
import Header from '../Header'
import InnovationsSlider from '../InnovationsSlider'
import ConcertsSlider from '../ConcertsSlider'
import TourismSlider from '../TourismSlider'
import KidsSlider from '../KidsSlider'
import TheatreSlider from '../TheatreSlider'
import FilmsSlider from '../FilmsSlider'





function Home() {
    return (
        <div >

            <Header />
            <Slider />

            <InnovationsSlider />
            <ConcertsSlider />
            <TourismSlider />
            <KidsSlider />
            <TheatreSlider />
            <FilmsSlider />


        </div>

    )
}

export default Home