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
import Poster from '../Poster'
import Footer from '../Footer'
import Films from '../Films'






function Home() {
    return (
        <div >

            <Header />
            <Slider />

            <InnovationsSlider />
            <ConcertsSlider />
            <TourismSlider />
            <KidsSlider />

            <Films></Films>
            <TheatreSlider />
            <FilmsSlider />
            <Poster/>
            <Footer/>
            


        </div>

    )
}

export default Home