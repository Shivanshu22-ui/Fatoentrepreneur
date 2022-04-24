import React from 'react'
import "./PlaceDetails.css"
import { Carousel } from '@trendyol-js/react-carousel';
import PlaceDetailsContent from './PlaceDetailsContent';


function PlaceDetails() {
  return (
    <div className='PlacesDetails' >
        <Carousel show={3} slide={1} swiping={true} className="d-flex justify-content-center align-items-center placesDetailsCarousel">
            <img src="https://wp.getgolo.com/city-guide/wp-content/uploads/2019/11/Guts-Glory_Muk-van-Lil_2018_CNTraveller-GutsGlory-8.jpg" alt=""/>
            <img src="https://wp.getgolo.com/city-guide/wp-content/uploads/2019/11/Guts-Glory_Muk-van-Lil_2018_CNTraveller-GutsGlory-6.jpg" alt="" />
            <img src="https://wp.getgolo.com/city-guide/wp-content/uploads/2019/11/Guts-Glory_Muk-van-Lil_2018_CNTraveller-GutsGlory-8.jpg" alt="" />
            <img src="https://wp.getgolo.com/city-guide/wp-content/uploads/2019/10/photo-1474898856510-884a2c0be546.jpeg" alt="" />
            <img src="https://wp.getgolo.com/city-guide/wp-content/uploads/2019/11/Bar-Fisk__2018_bar_fisk_31389-1.jpg" alt="" />
            <img src="https://wp.getgolo.com/city-guide/wp-content/uploads/2019/11/Guts-Glory_Muk-van-Lil_2018_CNTraveller-GutsGlory-8.jpg" alt="" />
        </Carousel>
<PlaceDetailsContent/>
    </div>
  )
}

export default PlaceDetails