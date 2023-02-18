import React, { Component } from "react";
import Slider from "react-slick";
import slide1 from '../../image/slide1.svg'
import slide2 from '../../image/slide2.svg'
import slide3 from '../../image/slide3.svg'
import slide4 from '../../image/slide4.svg'
import slide5 from '../../image/slide5.svg'

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2
        };
        return (
            <div className="">
                <h2 className="font-bold text-4xl text-center" >BoloForms Is Used By </h2>
                <div className="mx-32 mt-10">
                    <Slider {...settings}>
                        <div>
                            <img className="border-2 w-72 rounded mx-6" src={slide1} alt="" />
                        </div>
                        <div>
                            <img className="border-2 w-72 rounded mx-6" src={slide2} alt="" />

                        </div>
                        <div>
                            <img className="border-2 w-72 rounded mx-6" src={slide3} alt="" />

                        </div>
                        <div>
                            <img className="border-2 w-72 rounded mx-6" src={slide4} alt="" />

                        </div>
                        <div>
                            <img className="border-2 w-72 rounded mx-6" src={slide5} alt="" />

                        </div>

                    </Slider>
                </div>
            </div>
        );
    }
}