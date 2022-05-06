import React from 'react'
import ImageGallery from 'react-image-gallery';
import '../assets/sass/carousel.scss'

function Carousel() {
    const images = [
        {
          original: 'https://cdn.iticket.az/event/slide/xyRzBPqRtK3fjAs5obREskf3ZN9i22lnvkJMxGAE.jpg',
          thumbnail: 'https://cdn.iticket.az/event/slide/xyRzBPqRtK3fjAs5obREskf3ZN9i22lnvkJMxGAE.jpg',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
      
  return (
    <div><ImageGallery autoPlay={true} showThumbnails={false} showPlayButton={false} items={images} /></div>
  )
}

export default Carousel