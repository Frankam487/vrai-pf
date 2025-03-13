import "./projet.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    image: "/laptop.jpg",
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
    image: "../../assets/01.jpg",
  },
];

const ProjectsCarousel = () => {
  return (
    <div className="carousel-container" id="projet">
      <h2 className="carousel-title-section">💡 Mes Projets</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="carousel"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <div className="carousel-card">
              <img
                src={project.image}
                alt={project.title}
                className="carousel-image"
              />
              <div className="carousel-content">
                <h3 className="carousel-project-title">{project.title}</h3>
                <p className="carousel-description">{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsCarousel;
