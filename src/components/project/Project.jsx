import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import "./projet.scss";

const projects = [
  {
    title: "Projet 1",
    description:
      "Une application web innovante qui simplifie la gestion des tâches.",
    image: "https://source.unsplash.com/600x400/?technology",
  },
  {
    title: "Projet 2",
    description:
      "Un site e-commerce moderne avec une interface utilisateur dynamique.",
    image: "https://source.unsplash.com/600x400/?ecommerce",
  },
  {
    title: "Projet 3",
    description:
      "Un portfolio interactif mettant en avant des compétences techniques.",
    image: "https://source.unsplash.com/600x400/?portfolio",
  },
  {
    title: "Projet 4",
    description:
      "Un blog avec un design épuré et une gestion optimisée du contenu.",
    image: "https://source.unsplash.com/600x400/?blog",
  },
  {
    title: "Projet 5",
    description:
      "Une plateforme de gestion de rendez-vous avec notifications automatiques.",
    image: "https://source.unsplash.com/600x400/?appointment",
  },
];

const ProjectsCarousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="carousel"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <img
              src={project.image}
              alt={project.title}
              className="carousel-image"
            />
            <div className="carousel-content">
              <h3 className="carousel-title">{project.title}</h3>
              <p className="carousel-description">{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsCarousel;
