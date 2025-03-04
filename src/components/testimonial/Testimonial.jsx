import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Data } from "./Data";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <section className="testi container section">
      <h2 className="section__title">
        Mes clients disent <strong>...</strong>
      </h2>
      <span className="section__subtitle">Témoignages 🤞</span>

      <Swiper
        className="testi__container"
        loop={true}
        grabCursor={true}
        spaceBetween={20}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true} 
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          576: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Pagination, Navigation]}
      >
        {Data.map(({ id, image, title, description }) => (
          <SwiperSlide className="testi__card" key={id}>
            <img src={image} alt={title} className="testi__img" />
            <h3 className="testi__name">{title}</h3>
            <p className="testi__description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
