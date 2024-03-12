// import Swiper core and required modules
import { Scrollbar, A11y, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


// import images from public
import image1 from '../../public/lord_of_the_ring.jpg'
import image2 from '../../public/avertar.png'
import image3 from '../../public/inception.png'


// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "../App.css";

export default function SwiperPage() {
  return (
    <div className="bg-[#000] h-[100vh]">
      <Swiper
        // install Swiper modules
        modules={[Scrollbar, A11y, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="slide">
          <div className="relative">
            <img src={image1} alt="" />
            <div className="absolute bottom-0 px-[1em] py-[10em] md:px-[5em] md:py-[5em] font-inter flex flex-col md:gap-9 gap-3">
              <h1 className="text-[#fff] text-3xl md:text-4xl font-bold px-0">
              The Lord of the Rings: The Two Towers <br /> 
              </h1>
              <p>While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.</p>
              <div className="heroBtns">
                <button className="trailerBtn">Watch Trailer</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div>
            <img src={image2} alt="" />
            <div className="absolute bottom-0 px-[1em] py-[10em] md:px-[5em] md:py-[5em] font-inter flex flex-col md:gap-9 gap-3">
              <h1 className="text-[#fff] text-3xl md:text-4xl font-bold px-0">
                Black Panther: Wakanda Forever
              </h1>
              <p className="w-[700px]">Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including Florence Kasumba), fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia (Lupita Nyong’o) and Everett Ross (Martin Freeman) and forge a new path for the kingdom of Wakanda.</p>
              <div className="heroBtns">
                <button className="trailerBtn">Watch Trailer</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div>
            <img src={image3} alt="" />
            <div className="absolute bottom-0 px-[1em] py-[10em] md:px-[5em] md:py-[5em] font-inter flex flex-col md:gap-9 gap-3">
              <h1 className="text-[#fff] text-3xl md:text-4xl font-bold px-0">
                Inception
              </h1>
              <p>A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.</p>
              <div className="heroBtns">
                <button className="trailerBtn">Watch Trailer</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}